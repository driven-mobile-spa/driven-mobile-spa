export interface PricingTier {
  name: string;
  vehicle: string;
  price: string;
  featured?: boolean;
  features: string[];
}

const priceSedan = import.meta.env.VITE_PRICE_SEDAN ?? "250";
const priceSuv = import.meta.env.VITE_PRICE_SUV ?? "280";
const priceLarge = import.meta.env.VITE_PRICE_LARGE ?? "300";

export const priceSedanDisplay = `R${priceSedan}`;
export const priceSuvDisplay = `R${priceSuv}`;
export const priceLargeDisplay = `R${priceLarge}`;

export const pricingTiers: PricingTier[] = [
  {
    
    name: "Essential Wash",
    vehicle: "Hand wash • Dry • Interior Vacuum • Tyre Shine • Mag Clean",
    price: `from ${priceSedanDisplay}`,
    features: [
      "Small- R150",
      "Medium- R180",
      "Large- R200",
    ],
  },
  {

    name: "Premium Wash",
    vehicle: "Essential Wash + Polish & Wax • Leather Treatment • Extra Attention",
    price: `from ${priceSuvDisplay}`,
    featured: true,
    features: [
      "Small- R250",
      "Medium- R280",
      "Large- R300"
    ],
  },
  {
  
    name: "Ultimate Detail",
    vehicle: "Complete Interior & Exterior Detail • Deep Clean • Premium Finish",
    price:  `from ${priceLargeDisplay}`,
    features: [
      "Small- R300",
      "Medium- R350",
      "Large- R400",
      
    ],
  },
];
