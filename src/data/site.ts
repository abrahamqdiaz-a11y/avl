import {
  ClipboardList,
  Droplets,
  House,
  Sparkles,
  Syringe,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

// Business details live here so copy can be updated without touching layout.
// Values marked TODO are placeholders to replace before launch.

export const site = {
  name: "Avida Luna Wellness",
  legalName: "Avida Luna LLC",
  phone: "+1 941-348-6972",
  phoneHref: "tel:+19413486972",
  email: "hello@avidaluna.com", // TODO: confirm address
  bookingUrl: "https://booking.example.com/avida-luna", // TODO: real booking engine link
  hours: [
    // TODO: confirm business hours
    { days: "Monday – Saturday", time: "By appointment" },
    { days: "Sunday", time: "Events & private bookings" },
  ],
  social: {
    instagram: "https://www.instagram.com/", // TODO: profile URL
    facebook: "https://www.facebook.com/", // TODO: page URL
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Booking", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  price: string; // TODO: replace placeholders with real pricing
};

export const services: Service[] = [
  {
    icon: Droplets,
    title: "IV Drip Hydration",
    description: "Customized intravenous nutrient therapy to rehydrate, restore and recover.",
    items: [
      "Lactated Ringer's hydration",
      "Athlete Recovery with amino acids & B12",
      "Detox & hangover support",
    ],
    price: "From $—",
  },
  {
    icon: Syringe,
    title: "Vitamin & Wellness Injections",
    description: "Quick, targeted injections designed to support energy and metabolism.",
    items: ["B12 energy injections", "Metabolism boosts", "In and out in minutes"],
    price: "From $—",
  },
  {
    icon: Sparkles,
    title: "Advanced Therapies",
    description: "Cellular and recovery support to help balance the nervous system and ease fatigue.",
    items: ["Peptide support", "Red light therapy", "Personalized recovery plans"],
    price: "Consultation required",
  },
  {
    icon: Users,
    title: "Private Wellness Experiences",
    description: "Tailored wellness workshops and group packages, brought to your venue.",
    items: ["Special events & celebrations", "Community gatherings", "Corporate wellness days"],
    price: "Custom quote",
  },
];

export const steps: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ClipboardList,
    title: "Choose Your Therapy",
    body: "Pick an IV, injection or experience, then choose a time and location that suits you.",
  },
  {
    icon: Video,
    title: "Telehealth Clearance",
    body: "A brief virtual consultation reviews your health history and confirms treatment is right for you.",
  },
  {
    icon: House,
    title: "RN Arrives at Your Door",
    body: "A registered nurse arrives with everything needed and stays with you through your treatment.",
  },
];

// x/y are positions on the stylized map (viewBox 400 × 480), roughly to scale.
export const cities = [
  { name: "Parrish", x: 280, y: 82 },
  { name: "Bradenton", x: 120, y: 141 },
  { name: "Lakewood Ranch", x: 275, y: 193, home: true },
  { name: "Sarasota", x: 167, y: 249 },
  { name: "Venice", x: 249, y: 407 },
] as const;
