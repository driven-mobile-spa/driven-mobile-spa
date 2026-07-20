import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Sparkles,
  Sofa,
  Shield,
  Briefcase,
  Truck,
  Lightbulb,
  Wind,
  Wrench,
  Scissors,
  Snowflake,
  SprayCan,
  Bike,
  Ship,
  CircleDot,
  Gem,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  from: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Exterior Hand Wash",
    description:
      "Foam pre-soak, gentle two-bucket hand wash, wheels degreased, tyres dressed, glass polished.",
    from: "R450",
    icon: Droplets,
  },
  {
    title: "Full Valet",
    description:
      "Complete interior and exterior — vacuum, dashboard, leather conditioner, wax finish. Showroom feel in 90 minutes.",
    from: "R850",
    icon: Sparkles,
  },
  {
    title: "Interior Deep Clean",
    description:
      "Steam extraction on seats, mats and carpets, leather feed, anti-bacterial sanitisation, air freshen.",
    from: "R950",
    icon: Sofa,
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage machine polish removes swirl marks, light scratches and oxidation. Mirror gloss restored.",
    from: "R2,200",
    icon: Sparkles,
  },
  {
    title: "Ceramic Coating",
    description:
      "Professional-grade 9H ceramic locks in the shine, repels water and grime for 12 to 60 months.",
    from: "R3,500",
    icon: Shield,
  },
  {
    title: "Paint Protection Film",
    description:
      "Self-healing clear film on bonnet, bumper and mirrors. Invisible armour against stone chips.",
    from: "POA",
    icon: Gem,
  },
  {
    title: "Headlight Restoration",
    description:
      "Yellowed, foggy lenses machine-polished and UV-sealed back to factory clarity. Safer night driving.",
    from: "R650",
    icon: Lightbulb,
  },
  {
    title: "Leather Repair & Recolour",
    description:
      "Cracks, tears, scuffs and colour fade on seats and steering wheels professionally restored on-site.",
    from: "R1,200",
    icon: Scissors,
  },
  {
    title: "Engine Bay Detail",
    description:
      "Safe degrease, brush and steam clean, plastics dressed to a factory-fresh matte finish.",
    from: "R550",
    icon: Wrench,
  },
  {
    title: "Odour Removal & Ozone",
    description:
      "Ozone treatment eliminates smoke, pet, damp and food odours at the molecular level. Cabin sanitised.",
    from: "R750",
    icon: Wind,
  },
  {
    title: "Wheel & Alloy Refresh",
    description:
      "Deep iron-fallout decontamination, tyre gel, and optional alloy tidy-up for kerb rash.",
    from: "R400",
    icon: CircleDot,
  },
  {
    title: "Trim & Plastic Restoration",
    description:
      "Faded black plastic trim brought back to deep OEM black with long-life polymer sealant.",
    from: "R450",
    icon: SprayCan,
  },
  {
    title: "Fabric & Carpet Shampoo",
    description:
      "Hot-water extraction lifts stains, spills and years of grime from seats, roof-linings and boot.",
    from: "R700",
    icon: Droplets,
  },
  {
    title: "Winter Prep & Sealant",
    description:
      "Rain-repellent glass coating, rubber seal conditioning, undercarriage rinse. Cape winter ready.",
    from: "R600",
    icon: Snowflake,
  },
  {
    title: "Bike, Boat & Jet-Ski",
    description:
      "Salt flush, hand wash and polish for motorcycles, ski-boats and jet-skis at your driveway or slipway.",
    from: "R500",
    icon: Ship,
  },
  {
    title: "Motorcycle Detail",
    description:
      "Careful hand wash, chain clean and lube, leather seat feed and metal polish for your bike.",
    from: "R450",
    icon: Bike,
  },
  {
    title: "Corporate & Fleet",
    description:
      "Weekly or monthly on-site plans for office parks, dealerships and rental fleets. Volume pricing.",
    from: "Custom",
    icon: Briefcase,
  },
  {
    title: "Collect & Return",
    description:
      "Too busy to be there? We fetch your vehicle, detail it, and return it spotless — anywhere in Cape Town.",
    from: "R150 + wash",
    icon: Truck,
  },
];
