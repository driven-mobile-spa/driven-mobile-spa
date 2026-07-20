import { z } from "zod";
import { site } from "@/config/site";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Only digits, spaces, +, - and () allowed"),
  email: z.string().trim().email("Enter a valid email").max(120),
  vehicle: z.string().trim().min(2, "Vehicle make & model").max(80),
  size: z.enum(["Sedan", "SUV", "Bakkie", "Other"]),
  service: z.enum([
    "Exterior Wash",
    "Full Valet",
    "Interior Detail",
    "Paint Correction & Ceramic",
    "Fleet / Corporate",
    "Collect & Return",
  ]),
  date: z.string().trim().max(30).optional().or(z.literal("")),
  location: z.string().trim().min(3, "Suburb or address").max(160),
  notes: z.string().trim().max(600).optional().or(z.literal("")),
});

export type BookingValues = z.infer<typeof bookingSchema>;

/**
 * Build the WhatsApp deep link with a pre-filled booking message.
 */
export function whatsappUrl(values: Partial<BookingValues>): string {
  const lines = [
    `Hi Driven Mobilespa, I'd like to book:`,
    values.service && `Service: ${values.service}`,
    values.vehicle && `Vehicle: ${values.vehicle}${values.size ? ` (${values.size})` : ""}`,
    values.date && `Preferred date: ${values.date}`,
    values.location && `Location: ${values.location}`,
    values.name && `Name: ${values.name}`,
    values.phone && `Phone: ${values.phone}`,
    values.notes && `Notes: ${values.notes}`,
  ].filter(Boolean);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

/**
 * Build a mailto fallback so bookings still reach the inbox when the
 * Google Form endpoint isn't configured.
 */
export function mailtoUrl(values: BookingValues): string {
  const subject = `Booking request — ${values.service} — ${values.name}`;
  const body = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Vehicle: ${values.vehicle} (${values.size})`,
    `Service: ${values.service}`,
    values.date && `Preferred date: ${values.date}`,
    `Location: ${values.location}`,
    values.notes && ``,
    values.notes && `Notes:`,
    values.notes && values.notes,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Submit the booking to a Google Form via a hidden iframe POST.
 * Google Forms is CORS-locked, so we can't read the response — we assume
 * success once the fetch resolves (with `no-cors` it always does).
 */
export async function submitToGoogleForm(values: BookingValues): Promise<void> {
  const { googleFormAction, fields } = site.booking;
  if (!googleFormAction) throw new Error("Google Form action not configured");

  const body = new FormData();
  body.append(fields.name, values.name);
  body.append(fields.phone, values.phone);
  body.append(fields.email, values.email);
  body.append(fields.vehicle, values.vehicle);
  body.append(fields.size, values.size);
  body.append(fields.service, values.service);
  if (values.date) body.append(fields.date, values.date);
  body.append(fields.location, values.location);
  if (values.notes) body.append(fields.notes, values.notes);

  await fetch(googleFormAction, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}

export const hasGoogleFormConfigured = () => Boolean(site.booking.googleFormAction);
