import sid from "../TeamPic/siddarth.png";
import bj from "../TeamPic/bj.png";
import niraj from "../TeamPic/niraj.png";
import shreepanch from "../Projects/shreepaanch.jpg";
import kerkar from "../Projects/kerkar.png";
import womensday from "../Projects/womensday.jpg";
// Team Data

export const team = [
  {
    id: 1,
    name: "Siddhartha K C",
    role: "Creative Director",
    bio: "Leads our creative vision with 8+ years in visual storytelling and brand strategy.",
    image: sid, // Replace with actual path
  },
  {
    id: 2,
    name: "Bijay Thapa",
    role: "SEO Specialist",
    bio: "Technical SEO expert focused on maximizing online visibility and engagement.",
    image: bj, // Replace with actual path
  },
  {
    id: 3,
    name: "Niraj Gurung",
    role: "Production Head",
    bio: "Ensures technical excellence in all our production projects.",
    image: niraj, // Replace with actual path
  },
];

// Project Data
export const projects = [
  {
    id: 1,
    title: "KTA HARU - Shree Paanch",
    description: "Official Music Video",
    image: shreepanch, // Replace with actual path
    tags: ["Video Production", "Audio Recording", "Social Media"],
  },
  {
    id: 2,
    title: "Kerkaar X Astra Event",
    description:
      "Brushing Away the Blues | Art & Vino II – A Creative Escape at WISH ",
    image: kerkar, // Replace with actual path
    tags: ["Event Coverage", "Live Streaming"],
  },
  {
    id: 3,
    title: "International Women's Day",
    description: "Free Wall Climbing Passes for all women",
    image: womensday, // Replace with actual path
    tags: ["Brand Campaign", "Influencer Marketing"],
  },
];

// Client Reviews Data
export const reviews = [
  {
    id: 1,
    name: "Aava Thapa",
    company: "Tech Innovations Nepal",
    review:
      "Astra Production delivered an exceptional video that perfectly captured our brand's essence. Their professionalism and creativity are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sujan Shrestha",
    company: "Himalayan Adventures",
    review:
      "Their digital marketing strategy significantly boosted our online presence. We've seen a noticeable increase in inquiries and bookings.",
    rating: 4,
  },
  {
    id: 3,
    name: "Priya Sharma",
    company: "Kathmandu Fashion House",
    review:
      "The team at Astra is incredibly talented and dedicated. They went above and beyond to ensure our project's success.",
    rating: 5,
  },
];
