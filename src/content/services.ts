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
    title: "Engine Bay Clean",
    description:
      "Safe degrease, brush and steam clean, plastics dressed to a factory-fresh matte finish.",
    from: "R120",
    icon: Wrench,
  },
  {
    title: "Hand Polish",
    description:
      "Gentle two-bucket hand wash, wheels degreased, tyres dressed, glass polished.",
    from: "R220",
    icon: Droplets,
  },
   {
    title: "Fabric & Carpet Shampoo",
    description:
      "Hot-water extraction lifts stains, spills and years of grime from seats, roof-linings and boot.",
    from: "R300",
    icon: Droplets,
  },  
  {
    title: "Seat Shampoo",
    description:
    "Deep clean and sanitise cloth or leather seats, including headrests and seatbelts.",
    from: "R400",
    icon: Sparkles,
  },
    {
    title: "Leather Treatment",
    description:
      "Cracks, stains and fading removed, leather feed and sealant applied for a soft, supple finish.",
    from: "R180",
    icon: Scissors,
  },

  {
    title: "Wax Protection",
    description:
      "Hand-applied wax sealant protects paintwork from UV, rain and grime. Deepens colour and shine.",
    from: "R250",
    icon: Wind,
  },
  {
    title: "Full Valet",
    description:
      "Complete interior and exterior — vacuum, dashboard, leather conditioner, wax finish. Showroom feel in 90 minutes.",
    from: "R400",
    icon: Sparkles,
  },
  {
    title: "Pet Hair Removal",
    description:
      "Thorough removal of pet hair from seats, carpets and interior surfaces.",
    from: "R200",
    icon: Sofa,
  },

  {
    title: "exterior wash only",
    description:
      "Hand wash, tyre shine, mag clean, and glass polish. Quick and convenient.",
    from: "enquire",
    icon: Shield,
  },
  {
    title: "interior clean only",
    description:
      "Vacuum, dashboard wipe, leather feed, and glass polish. Quick and convenient.",
    from: "enquire",
    icon: Shield,
  },
  {
    title: "Headlight Restoration",
    description:
      "Yellowed, foggy lenses machine-polished and UV-sealed back to factory clarity. Safer night driving.",
    from: "enquire",
    icon: Lightbulb,
  },

  {
    title: "Wheel & Alloy Refresh",
    description:
      "Deep iron-fallout decontamination, tyre gel, and optional alloy tidy-up for kerb rash.",
    from: "enquire",
    icon: CircleDot,
  },
  {
    title: "Trim & Plastic Restoration",
    description:
      "Faded black plastic trim brought back to deep OEM black with long-life polymer sealant.",
    from: "enquire",
    icon: SprayCan,
  },
 
  {
    title: "Winter Prep & Sealant",
    description:
      "Rain-repellent glass coating, rubber seal conditioning, undercarriage rinse. Cape winter ready.",
    from: "enquire",
    icon: Snowflake,
  },
  {
    title: "Bike, Boat & Jet-Ski",
    description:
      "Salt flush, hand wash and polish for motorcycles, ski-boats and jet-skis at your driveway or slipway.",
    from: "enquire",
    icon: Ship,
  },
  {
    title: "Motorcycle Detail",
    description:
      "Careful hand wash, chain clean and lube, leather seat feed and metal polish for your bike.",
    from: "enquire",
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
