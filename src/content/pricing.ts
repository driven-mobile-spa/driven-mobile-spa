export interface PricingTier {
  name: string;
  vehicle: string;
  price: string;
  featured?: boolean;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Sedan / Compact",
    vehicle: "Hatch, sedan, small coupé",
    price: "R450",
    features: [
      "Foam pre-soak & hand wash",
      "Wheels & tyres dressed",
      "Interior vacuum & dust",
      "Windows polished inside & out",
    ],
  },
  {
    name: "SUV / 4×4",
    vehicle: "SUV, crossover, MPV",
    price: "R650",
    featured: true,
    features: [
      "Everything in Sedan",
      "Underbody rinse",
      "Trim & plastics restored",
      "Iron decontamination",
      "Hand wax finish",
    ],
  },
  {
    name: "Bakkie / Large",
    vehicle: "Double cab, van, 7-seater",
    price: "R850",
    features: [
      "Heavy-duty degrease",
      "Load bed cleaned & dressed",
      "Interior sanitisation",
      "High-gloss wax finish",
    ],
  },
];
