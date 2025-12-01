// lib/data.ts

// --- TYPES ---
export type Feature = {
  title: string;
  description?: string;
};

export type Challenge = {
  challenge: string;
  solution: string;
};

export type ResultMetric = {
  metric?: string;
  before?: string;
  after?: string;
  change?: string;
};

export type ProjectData = {
  title: string;
  client: string;
  year: string;
  role: string;
  categories: string[];
  hero: string;
  thumbnail: string;
  overview: string;
  problem: string;
  goals: string[];
  approach: string;
  features: (string | Feature)[];
  challenges?: Challenge[];
  technicalDetails?: string;
  results?: (string | ResultMetric)[];
  learnings?: string;
  services?: string[];
  technologies: string[];
  link: string;
  github?: string;
  images: string[];
};

// --- DATA ---
export const projects: Record<string, ProjectData> = {
  "martial-arts-website": {
    title: "Martial Arts Website",
    client: "Morton Martial Arts",
    year: "2025",
    role: "Web Designer & Developer | SEO Specialist",
    categories: ["websites", "marketing"],
    hero: "/work/mma/img (1).png",

    thumbnail: "/work/mma/img (1).png",

    overview:
      "A sleek, professional website designed to position the MMA gym as a community-focused, premium martial arts destination. The design emphasizes a minimalist aesthetic with clean lines, intuitive navigation, and a visual hierarchy tailored to appeal to parents of young learners.",
    problem:
      "The MMA gym was a newly opened facility with no existing online presence. The challenge was to attract local families and establish credibility quickly in a competitive market.",
    goals: [
      "Increase membership sign-ups by targeting local parents and schools",
      "Enhance visibility through SEO and local marketing efforts",
      "Create a straightforward, engaging user experience.",
    ],
    approach:
      "Focusing on a minimal, luxury-inspired design, I tailored the UI to be simple, direct, and kid-friendly. Local SEO was integrated with tailored location and service pages.",
    features: [
      "Class Schedule & Booking",
      "Targeted Local SEO & Service Pages",
      "Kids & Parent Sections",
      "Poster & Flyer Designs",
    ],
    challenges: [
      {
        challenge: "Personalization complexity when targeting families",
        solution: "Developed a straightforward, visually appealing UI.",
      },
    ],
    technicalDetails:
      "Built with Framer and React, utilizing custom animations.",
    results: ["Increased membership sign-ups by 292%."],
    learnings:
      "This project reinforced the importance of user research in driving design decisions.",
    services: ["Web Design", "SEO Optimization"],
    technologies: ["Framer", "Figma", "React", "SEMrush", "Moz"],
    link: "https://example.com",
    images: [
      "/work/mma/img (1).png",
      "/work/mma/img (2).png",
      "/work/mma/img (3).png",
      "/work/mma/img (4).png",
      "/work/mma/img (5).png",
    ],
  },
  "smoked-salmon-website": {
    title: "Artisan Smoked Salmon Website",
    client: "Loch Stock & Two Smoking Barrels",
    year: "2024",
    role: "Web Designer & Developer",
    categories: ["websites"],
    hero: "/work/ls/img (1).png",
    thumbnail: "/work/ls/img (1).png",
    overview:
      "A minimalist, elegant website designed to evoke the luxury and exquisite taste of artisan smoked salmon.",
    problem:
      "The smoked salmon artisan had no digital presence and needed an online platform to showcase their premium products.",
    goals: ["Showcase products", "Highlight awards", "Enable orders"],
    approach:
      "Minimalist style balancing aesthetic appeal with functional clarity.",
    features: [
      "Product Showcase",
      "Order Form",
      "Award Showcase",
      "Blog Section",
    ],
    challenges: [
      {
        challenge: "Handling real-time data updates",
        solution: "Implemented WebSocket connections.",
      },
    ],
    technicalDetails: "Designed in Figma and developed with Framer.",
    results: ["Active Users increased by 271%"],
    learnings: "Reinforced blending simplicity with storytelling.",
    services: ["Web Design", "UI/UX Design"],
    technologies: ["Framer", "Figma"],
    link: "https://example.com",
    images: [
      "/work/ls/img (1).png",
      "/work/ls/img (2).png",
      "/work/ls/img (3).png",
      "/work/ls/img (4).png",
    ],
  },
  "agency-website": {
    title: "Web Design Agency Website",
    client: "Keter Creative",
    year: "2025",
    role: "Web Designer & Developer",
    categories: ["websites"],
    hero: "/work/hero (3).png",
    thumbnail: "/work/hero (3).png",
    overview:
      "A minimal, professional, and modern website designed with innovative flair.",
    problem:
      "Goal was to build a strong digital presence to attract potential clients.",
    goals: ["Showcase portfolio", "Communicate services", "Impress visitors"],
    approach: "Clean aesthetic fused with dynamic animations.",
    features: ["Portfolio Gallery", "Contact Pages", "Animated UI"],
    challenges: [
      {
        challenge: "Framer Motion learning curve",
        solution: "Optimized orchestration.",
      },
    ],
    technicalDetails: "Built with React, Next.js, Tailwind CSS.",
    results: ["Significantly enhanced development skills."],
    learnings: "Gained expertise in front-end animation.",
    services: ["Web Design"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
    images: ["/work/hero (3).png", "/work/hero (3).png", "/work/hero (3).png"],
  },
  "legal-services-site": {
    title: "Legal Services Site",
    client: "Chambers Law",
    year: "2025",
    role: "Web Designer & Developer",
    categories: ["framer", "code"],
    hero: "/work/med/img (1).png",
    thumbnail: "/work/med/img (1).png",
    overview: "A trustworthy, professional, and authoritative website.",
    problem: "The firm faced a dated, ineffective website.",
    goals: ["Enhance image", "Showcase services", "Build trust"],
    approach: "Focused on clarity and professionalism.",
    features: ["Services Pages", "Client Testimonials", "Blog"],
    technicalDetails: "Designed in Figma, developed in Framer.",
    results: ["Demonstrates refined UI/UX capabilities."],
    learnings: "Gained experience with Framer.",
    services: ["UI/UX Design"],
    technologies: ["Framer", "Figma"],
    link: "https://example.com",
    images: [
      "/work/med/img (1).png",
      "/work/med/img (2).png",
      "/work/med/img (3).png",
      "/work/med/img (4).png",
      "/work/med/img (5).png",
      "/work/med/img (6).png",
    ],
  },
  "landscaping-website": {
    title: "E-commerce Platform",
    client: "Urban Style",
    year: "2024",
    role: "Full-Stack Developer",
    categories: ["designs", "code"],
    hero: "/work/vl/img (1).png",
    thumbnail: "/work/vl/img (1).png",
    overview: "Modern e-commerce platform with cart functionality.",
    problem: "Needed to expand from physical retail to online sales.",
    goals: ["Build scalable solution", "Integrate payments"],
    approach: "Designed comprehensive product management system.",
    features: ["Smart Cart", "Payment Integration", "Inventory Sync"],
    challenges: [
      { challenge: "Inventory sync", solution: "Real-time webhooks." },
    ],
    technicalDetails: "Built with Next.js, MongoDB, Stripe.",
    results: ["Revenue grew to $45K/mo"],
    learnings: "E-commerce requires robust error handling.",
    services: ["Full-Stack Dev", "SEO"],
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    link: "https://example.com",
    images: [
      "/work/vl/img (1).png",
      "/work/vl/img (2).png",
      "/work/vl/img (3).png",
      "/work/vl/img (4).png",
      "/work/vl/img (5).png",
      "/work/vl/img (6).png",
      "/work/vl/img (7).png",
      "/work/vl/img (8).png",
    ],
  },
  "landscaping-landing-page": {
    title: "The Green Oasis",
    client: "Template",
    year: "2024",
    role: "Web Designer",
    categories: ["website"],
    hero: "/work/go/img (1).png",
    thumbnail: "/work/go/img (1).png",
    overview: "A visually clean and eco-friendly landing page.",
    problem: "Conceptual exercise to explore landing page design.",
    goals: ["Create compelling layout", "Showcase services"],
    approach: "Competitor analysis informed layout decisions.",
    features: ["Service Highlights", "Portfolio", "Contact Form"],
    technicalDetails: "Prototyped in Figma and Framer.",
    results: ["Reinforced clean design principles."],
    learnings: "Importance of content hierarchy.",
    services: ["UI/UX Design"],
    technologies: ["Framer", "Figma"],
    link: "https://example.com",
    images: [
      "/work/go/img (1).png",
      "/work/go/img (2).png",
      "/work/go/img (3).png",
    ],
  },
  "club-app": {
    title: "Join The Club",
    client: "SAE Project",
    year: "2025",
    role: "Full Stack Developer",
    categories: ["websites"],
    hero: "/work/hero (7).png",
    thumbnail: "/work/hero (7).png",
    overview: "Student-focused web app for campus life.",
    problem: "Clubs struggle with visibility and communication.",
    goals: ["Central hub", "Easy discovery", "Seamless management"],
    approach: "Research identified pain points; solution was a CMS + Portal.",
    features: ["Event Portal", "CMS Dashboard", "Profiles"],
    challenges: [
      { challenge: "Fast rendering", solution: "Full-stack JS architecture." },
    ],
    technicalDetails: "Next.js, MongoDB, Express, Node.js.",
    results: ["Leads increased by 500%"],
    learnings: "Deepened full-stack expertise.",
    services: ["Web App Dev", "Brand Strategy"],
    technologies: ["Next.js", "MongoDB", "Express"],
    link: "https://example.com",
    images: ["/work/hero (7).png", "/work/hero (7).png", "/work/hero (7).png"],
  },
  "music-documentary-website": {
    title: "Music Through The Lens",
    client: "SAE Film Students",
    year: "2025",
    role: "Web Designer",
    categories: ["websites"],
    hero: "/work/mttl/img (1).png",
    thumbnail: "/work/mttl/img (1).png",
    overview: "Cinematic website for a concert photography documentary.",
    problem: "Needed digital presence with zero budget.",
    goals: ["Showcase doc", "Enable contact", "SEO strategy"],
    approach: "Tailored distinct user personas.",
    features: ["Immersive Gallery", "Filmmaker Profiles", "Newsletter"],
    challenges: [
      { challenge: "Zero budget", solution: "Organic social strategy." },
    ],
    technicalDetails: "MERN stack, Framer Motion.",
    results: ["Successfully launched platform."],
    learnings: "Understanding audience deeply.",
    services: ["Web Design", "SEO"],
    technologies: ["React", "Node.js", "Framer Motion"],
    link: "https://example.com",
    images: [
      "/work/mttl/img (1).png",
      "/work/mttl/img (2).png",
      "/work/mttl/img (3).png",
      "/work/mttl/img (4).png",
      "/work/mttl/img (5).png",
      "/work/mttl/img (6).png",
    ],
  },
};
