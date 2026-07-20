import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Sparkles,
  Sofa,
  Shield,
  Briefcase,
  Truck,
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
    title: "Interior Detail",
    description:
      "Deep steam extraction on seats and mats, leather feed, anti-bacterial sanitisation, air freshen.",
    from: "R950",
    icon: Sofa,
  },
  {
    title: "Paint Correction & Ceramic",
    description:
      "Multi-stage machine polish removes swirls; ceramic coating locks in a mirror finish for 12+ months.",
    from: "R3,500",
    icon: Shield,
  },
  {
    title: "Corporate & Fleet",
    description:
      "Weekly or monthly plans for office parks and company vehicles. Custom pricing per fleet size.",
    from: "Custom",
    icon: Briefcase,
  },
  {
    title: "Collect & Return",
    description:
      "Too busy to be there? We fetch your vehicle, detail it at our base, and return it spotless.",
    from: "R150 + wash",
    icon: Truck,
  },
];
