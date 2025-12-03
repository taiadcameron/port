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
      "A sleek, professional website designed to position the MMA gym as a community focused, premium martial arts destination. The design emphasizes a minimalist aesthetic with clean lines, intuitive navigation, and a visual hierarchy tailored to appeal to parents of young learners.",
    problem:
      "The MMA gym was a newly opened facility with no existing online presence. The challenge was to attract local families and establish credibility quickly in a competitive market.",
    goals: [
      "Increase membership sign-ups by targeting local parents and schools",
      "Enhance visibility through SEO and local marketing efforts",
      "Create a straightforward, engaging user experience.",
    ],
    approach:
      "Focusing on a minimal, luxury inspired design, I tailored the UI to be simple, direct, and accessible to everyone. Local SEO was integrated with tailored location and service pages.",
    features: [
      "Class Schedule & Booking",
      "Targeted Local SEO & Service Pages",
      "Disciplines Overview",
      "Poster & Flyer Designs",
    ],

    services: ["Web Design", "SEO Optimization"],
    technologies: ["Framer", "Figma", "React", "SEMrush"],
    link: "https://mortonmartialarts.com",
    images: [
      "/work/mma/img (1).png",
      "/work/mma/img (2).png",
      "/work/mma/img (3).png",
      "/work/mma/img (4).png",
      "/work/mma/img (5).png",
      "/work/mma/img (6).png",
      "/work/mma/img (7).png",
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
      "A premium artisan smoked salmon producer needed a digital presence that matched the quality of their product. The challenge was creating an online experience as refined as their offerings. The solution: a minimalist, elegant website that combines luxury aesthetics with intuitive functionality, establishing a compelling digital brand presence.",
    problem:
      "The smoked salmon artisan had no digital presence and needed an online platform to showcase their premium products.",
    goals: ["Showcase products", "Highlight awards", "Enable orders"],
    approach:
      "We utilized a minimalist design strategy, focusing on negative space and typography to evoke sophistication. The development workflow moved from high-fidelity prototyping in Figma to production in Framer.",
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
    link: "https://www.lochandstock.co.uk/",
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
    hero: "/work/kc/img (1).png",
    thumbnail: "/work/kc/img (1).png",
    overview:
      "A digital design agency establishing its market presence through a portfolio driven website. Built to showcase technical capabilities and creative vision, the site combines minimalist aesthetics with dynamic animations to engage prospective clients and communicate service expertise with clarity and innovation.",
    problem:
      "Goal was to build a strong digital presence to attract potential clients.",
    goals: ["Showcase portfolio", "Communicate services", "Impress visitors"],
    approach:
      "Blending minimalist design with dynamic animations using Framer Motion to create an engaging user experience that highlights the agency's creative and technical skills.",
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
    technologies: [
      "Next.js",
      "Tailwind   CSS",
      "Motion",
      "Figma",
      "TypeScript",
    ],
    link: "https://ketercreative.com",
    images: [
      "/work/kc/img (1).png",
      "/work/kc/img (2).png",
      "/work/kc/img (3).png",
      "/work/kc/img (4).png",
      "/work/kc/img (5).png",
    ],
  },
  "legal-services-site": {
    title: "Medinalegal Website",
    client: "Medinalegal",
    year: "2025",
    role: "Web Designer & Developer",
    categories: ["framer", "code"],
    hero: "/work/med/img (1).png",
    thumbnail: "/work/med/img (1).png",
    overview:
      "A Spanish law firm serving international expatriates required a digital presence that conveyed trust and professionalism. The website balances authoritative design with accessible navigation, clearly presenting legal services and expertise to help foreign clients navigate Spanish law with confidence and clarity.",
    problem: "The firm faced a dated, ineffective website.",
    goals: ["Enhance image", "Showcase services", "Build trust"],
    approach:
      "Prioritizing clarity, trust, and professionalism through clean typography, intuitive navigation, and strategic service presentation that makes complex legal information accessible to international clients.",
    features: ["Services Pages", "Client Testimonials", "Blog"],
    technicalDetails: "Designed in Figma, developed in Framer.",
    results: ["Demonstrates refined UI/UX capabilities."],
    learnings: "Gained experience with Framer.",
    services: ["UI/UX Design"],
    technologies: ["Framer", "Figma"],
    link: "https://medinalegal.es/",
    images: [
      "/work/med/img (1).png",
      "/work/med/img (2).png",
      "/work/med/img (3).png",
      "/work/med/img (4).png",
      "/work/med/img (5).png",
    ],
  },
  "landscaping-website": {
    title: "Verdant Lux Landscapes",
    client: "Verdant Lux Landscapes",
    year: "2024",
    role: "Full-Stack Developer",
    categories: ["designs", "code"],
    hero: "/work/vl/img (1).png",
    thumbnail: "/work/vl/img (1).png",
    overview:
      "A luxury landscaping company’s digital platform designed to attract high-end clients and showcase premium outdoor services. The website leverages clean, sophisticated design, immersive project galleries, and intuitive navigation to present the company’s expertise and unique value.",
    problem: "Needed to expand from physical retail to online sales.",
    goals: ["Build scalable solution", "Integrate payments"],
    approach:
      "The site emphasizes visual storytelling through a curated portfolio, clear service descriptions, and easy contact pathways, using high quality imagery and a nature inspired color palette to convey professionalism, trust, and an elevated brand experience.",
    features: ["Blog", "Service Showcase", "Contact Form", "Work Portolio"],
    challenges: [
      { challenge: "Inventory sync", solution: "Real-time webhooks." },
    ],
    technicalDetails: "Built with Next.js, MongoDB, Stripe.",
    results: ["Revenue grew to $45K/mo"],
    learnings: "E-commerce requires robust error handling.",
    services: ["Framer", "Figma"],
    technologies: ["Framer", "Figma"],
    link: "https://verdantluxelandscapes.framer.website",
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
    client: "The Green Oasis",
    year: "2024",
    role: "Web Designer",
    categories: ["website"],
    hero: "/work/go/img (1).png",
    thumbnail: "/work/go/img (1).png",
    overview:
      "A conceptual landing page design exploring eco friendly landscaping aesthetics. The template demonstrates clean visual hierarchy and strategic content placement to effectively showcase landscaping services while maintaining an inviting, nature-focused design language.​",
    problem: "Conceptual exercise to explore landing page design.",
    goals: ["Create compelling layout", "Showcase services"],
    approach:
      "Informed by competitor analysis, the design prioritizes visual storytelling through hero imagery, intuitive service presentation, and clear calls to action, establishing effective content hierarchy that guides visitors naturally through the conversion path.",
    features: ["Testimonials", "Services", "Contact Form"],
    technicalDetails: "Prototyped in Figma and Framer.",
    results: ["Reinforced clean design principles."],
    learnings: "Importance of content hierarchy.",
    services: ["UI/UX Design"],
    technologies: ["Framer", "Figma"],
    link: "https://thegreenoasis.framer.website",
    images: [
      "/work/go/img (1).png",
      "/work/go/img (2).png",
      "/work/go/img (3).png",
    ],
  },
  "club-app": {
    title: "Join The Club",
    client: "Join The Club",
    year: "2025",
    role: "Full Stack Developer",
    categories: ["websites"],
    hero: "/work/jtc/img (1).png",
    thumbnail: "/work/jtc/img (1).png",
    overview:
      "School club management web application Join The Club. Created during my university studies to help clubs manage events and memberships more effectively.",
    problem: "Clubs struggle with visibility and communication.",
    goals: ["Central hub", "Easy discovery", "Seamless management"],
    approach:
      "Developed a full-stack solution with user friendly interfaces for both students and club admins, focusing on intuitive navigation and efficient data management to streamline club operations and enhance member engagement. (Login only available with .edu email)",
    features: ["Event Portal", "CMS Dashboard", "Profiles"],
    challenges: [
      { challenge: "Fast rendering", solution: "Full-stack JS architecture." },
    ],
    technicalDetails: "Next.js, MongoDB, Express, Node.js.",
    results: ["Leads increased by 500%"],
    learnings: "Deepened full-stack expertise.",
    services: ["Web App Dev", "Brand Strategy"],
    technologies: [
      "Next.js",
      "MongoDB",
      "Express",
      "Node.js",
      "Tailwind CSS",
      "Figma",
    ],
    link: "https://jtc-flax.vercel.app/",
    images: [
      "/work/jtc/img (1).png",
      "/work/jtc/img (2).png",
      "/work/jtc/img (3).png",
      "/work/jtc/img (4).png",
      "/work/jtc/img (5).png",
    ],
  },
  "music-documentary-website": {
    title: "Music Through The Lens",
    client: "Music Through The Lens",
    year: "2025",
    role: "Web Designer",
    categories: ["websites"],
    hero: "/work/mttl/img (1).png",
    thumbnail: "/work/mttl/img (1).png",
    overview:
      "A cinematic digital platform created for film students to showcase their concert photography documentary. The website merges immersive visual storytelling with functional design, presenting the documentary project, filmmaker profiles, and behind the scenes content in an engaging, media-rich experience.​",
    problem: "Needed digital presence with zero budget.",
    goals: ["Showcase doc", "Enable contact", "SEO strategy"],
    approach:
      "Designed around distinct user personas fans, industry professionals, and fellow filmmakers the site prioritizes high-quality imagery, seamless navigation, and dynamic animations to create an authentic, emotionally resonant experience that reflects the documentary's artistic vision.",
    features: ["Immersive Gallery", "Filmmaker Profiles", "Newsletter"],
    challenges: [
      { challenge: "Zero budget", solution: "Organic social strategy." },
    ],
    technicalDetails: "MERN stack, Framer Motion.",
    results: ["Successfully launched platform."],
    learnings: "Understanding audience deeply.",
    services: ["Web Design", "SEO"],
    technologies: ["React", "Node.js", "Motion", "Figma", "MongoDB", "Express"],
    link: "https://mttl.onrender.com/",
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
