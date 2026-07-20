export interface Review {
  name: string;
  suburb: string;
  quote: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    name: "Jared M.",
    suburb: "Bloubergstrand",
    rating: 5,
    quote:
      "Booked online, they arrived on time, and my X5 came out looking better than the day I bought it. Absolute pros.",
  },
  {
    name: "Nadia K.",
    suburb: "Century City",
    rating: 5,
    quote:
      "The collect-and-return service is a game changer. Car was fetched from my office and back before lunch. Immaculate finish.",
  },
  {
    name: "Sipho D.",
    suburb: "Table View",
    rating: 5,
    quote:
      "Had the full valet + ceramic done on the Ranger. Water beads like a fresh showroom car three months later.",
  },
  {
    name: "Chantelle P.",
    suburb: "Melkbosstrand",
    rating: 5,
    quote:
      "Professional team, quiet equipment (my neighbours didn't even notice), and the interior detail was unreal.",
  },
  {
    name: "Marius V.",
    suburb: "Atlantic Seaboard",
    rating: 5,
    quote:
      "We use Driven for our whole fleet. Consistent quality, invoicing is clean, and the guys are always presentable.",
  },
  {
    name: "Ayesha R.",
    suburb: "Southern Suburbs",
    rating: 5,
    quote:
      "Best mobile detailing in Cape Town — I've tried three others. These guys actually care about the paint.",
  },
];
