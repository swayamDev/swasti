export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechStart Inc.",
    image: "/testimonials/person1.webp",
    quote:
      "Outstanding work on our AI platform. The models delivered were accurate, scalable, and production-ready.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Digital Innovations",
    image: "/testimonials/person2.webp",
    quote:
      "The data pipeline project was a game-changer. Faster, reliable, and handles massive datasets effortlessly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "AI Solutions Co.",
    image: "/testimonials/person3.webp",
    quote:
      "The ML solution improved customer insights significantly. Professional and detail-oriented work.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Head of Data",
    company: "NextGen Analytics",
    image: "/testimonials/person4.webp",
    quote:
      "Exceptional expertise in data engineering and MLOps. Smooth and scalable deployment pipeline.",
    rating: 5,
  },
];

export const testimonialStats = [
  { value: "3x", label: "Faster Delivery" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "5★", label: "Average Rating" },
];
