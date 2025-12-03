"use client";

import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiLinkedin, CiMail } from "react-icons/ci";
import { SlSocialBehance } from "react-icons/sl";
import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Types ---
type TabId = "work" | "about" | "education" | "connect";
type WorkFilter = "all" | "websites" | "marketing";

interface WorkImage {
  id: string;
  src: string;
  categories: string[];
  title: string;
  client: string;
  year: string;
}

interface Tab {
  id: TabId;
  label: string;
}

interface AnimatedTextProps {
  text: string;
  delay?: number;
  shouldAnimate?: boolean;
}

// 1. Container: Controls the staggering order
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each item appearing
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

// 2. Item: The smooth slide-up animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1], // Smooth cubic-bezier
    },
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("work");
  const [workFilter, setWorkFilter] = useState<WorkFilter>("all");
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const tabs: Tab[] = [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "education", label: "Experience & Education" },
    { id: "connect", label: "Connect" },
  ];

  // Work images data
  const workImages: WorkImage[] = [
    {
      id: "martial-arts-website",
      src: "/work/hero (1).png",
      categories: ["framer"],
      title: "Martial Arts Website",
      client: "Morton Martial Arts",
      year: "2025",
    },
    {
      id: "smoked-salmon-website",
      src: "/work/hero (4).png",
      categories: ["framer"],
      title: "Smoked Salmon Website",
      client: "Loch Stock & Two Smoking Barrels",
      year: "2024",
    },
    {
      id: "agency-website",
      src: "/work/hero (5).png",
      categories: ["coded"],
      title: "Agency Website",
      client: "Keter Creative",
      year: "2025",
    },
    {
      id: "legal-services-site",
      src: "/work/hero (6).png",
      categories: ["framer"],
      title: "Legal Website",
      client: "Medinalegal",
      year: "2025",
    },
    {
      id: "landscaping-website",
      src: "/work/hero (8).png",
      categories: ["framer"],
      title: "Landscaping Website",
      client: "Verdant Luxe Landscapes",
      year: "2025",
    },
    {
      id: "landscaping-landing-page",
      src: "/work/hero (7).png",
      categories: ["framer"],
      title: "Landscaping Landing Page",
      client: "The Green Oasis",
      year: "2024",
    },
    {
      id: "club-app",
      src: "/work/hero (3).png",
      categories: ["coded"],
      title: "Club App",
      client: "Join The Club",
      year: "2025",
    },
    {
      id: "music-documentary-website",
      src: "/work/hero (2).png",
      categories: ["coded"],
      title: "Music Documentary Website",
      client: "Music Through The Lens",
      year: "2025",
    },
  ];

  const filteredImages =
    workFilter === "all"
      ? workImages
      : workImages.filter((img) => img.categories.includes(workFilter));

  // Text animation component for the header
  const AnimatedText = ({
    text,
    delay = 0,
    shouldAnimate = true,
  }: AnimatedTextProps) => {
    const words = text.split(" ");
    if (!shouldAnimate) return <span>{text}</span>;

    return (
      <span>
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: delay + index * 0.04,
              ease: "easeOut",
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <>
      <div className="flex bg-[#333333] text-white min-h-screen">
        <main className="w-full flex flex-col justify-start mt-12 sm:mt-20 md:mt-32 lg:mt-40 items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 px-4 sm:px-6 md:px-8">
          {/* --- UPDATED HEADER SECTION --- */}
          {/* We wrap the whole header in a motion.div with containerVariants to handle the stagger */}
          <motion.div
            className="w-full max-w-3xl flex flex-col items-start"
            variants={containerVariants}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
          >
            <div className="md:w-[70%]">
              {/* 1. Profile Image */}
              <motion.div variants={itemVariants}>
                <Image
                  src="/off.jpg"
                  alt="Tai Cameron Profile"
                  width={100}
                  height={100}
                  className="border-white rounded-md border-1"
                />
              </motion.div>
              {/* 2. Social Icons */}
              <motion.div variants={itemVariants} className="flex gap-4 mt-4">
                {[
                  <a href="https://www.linkedin.com/in/tai-cameron">
                    <CiLinkedin
                      size={30}
                      key="Linkedin"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                  </a>,

                  <a href="https://www.behance.net/taicameron">
                    <SlSocialBehance
                      size={30}
                      key="Behance"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                  </a>,

                  <a href="mailto:tadc936@gmail.com">
                    <CiMail
                      size={30}
                      key="Email"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                  </a>,
                ].map((icon: ReactNode, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* 3. Name (Smooth Slide Up) */}
              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl mt-8 sm:mt-4 md:mt-8 mb-2 font-medium"
              >
                Tai Cameron
              </motion.h1>

              {/* 4. Bio Description (The part you wanted animated the same) */}
              <motion.div
                variants={itemVariants}
                className=" leading-tight  text-gray-300"
              >
                <p>
                  Web designer and SEO specialist, <br />
                  Crafting clean, converting websites.
                </p>
              </motion.div>

              {/* 5. Tab Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex mt-6 sm:mt-8 justify-between w-full gap-1 sm:gap-2"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="px-2 sm:px-3 md:px-4 py-2 rounded-lg text-xs sm:text-sm relative transition-colors duration-300 cursor-pointer"
                    style={{
                      color: activeTab === tab.id ? "black" : "white",
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="tabBackground"
                        className="absolute inset-0 bg-white rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          opacity: { duration: 0.3 },
                          layout: {
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          },
                        }}
                        style={{ originY: "0px" }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
          {/* --- CONTENT SECTIONS --- */}
          <div className="w-full max-w-[1400px]">
            <AnimatePresence mode="wait">
              {/* === WORK SECTION === */}
              {activeTab === "work" && (
                <motion.div
                  key="work"
                  // Apply Container Variants here to control the flow
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex justify-center items-center flex-col gap-4 sm:gap-6 md:gap-8 mb-24"
                >
                  {/* Filter Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="flex w-full items-start"
                  >
                    <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm relative overflow-x-auto pb-2 w-full">
                      {(["all", "framer", "coded"] as WorkFilter[]).map(
                        (filter) => (
                          <button
                            key={filter}
                            onClick={() => setWorkFilter(filter)}
                            className="relative capitalize whitespace-nowrap cursor-pointer hover:text-gray-300 transition-colors"
                          >
                            {filter}
                            {workFilter === filter && (
                              <motion.div
                                layoutId="workFilterUnderline"
                                className="absolute left-0 right-0 h-[1px] bg-white bottom-[-4px]"
                                transition={{
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 30,
                                }}
                                style={{ originY: "0px" }}
                              />
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </motion.div>

                  {/* Work Grid */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={workFilter}
                      // Re-declare container variants for the grid so images stagger when filter changes
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full"
                    >
                      {filteredImages.map((image) => (
                        <Link href={`/work/${image.id}`} key={image.id}>
                          <motion.div
                            variants={itemVariants} // Inherits stagger from parent
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 },
                            }}
                            className="w-full cursor-pointer group relative overflow-hidden"
                          >
                            <Image
                              src={image.src}
                              alt={image.title}
                              width={450}
                              height={450}
                              className="w-full h-auto"
                            />
                            {/* Hover overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 sm:p-6 transition-opacity"
                            >
                              <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                                {image.title}
                              </h3>
                              <p className="text-gray-300 text-xs sm:text-sm">
                                {image.client} • {image.year}
                              </p>
                            </motion.div>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {filteredImages.length === 0 && (
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-400 text-center py-12"
                    >
                      No work found in this category.
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* === ABOUT SECTION === */}
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-6 sm:gap-8 max-w-3xl mx-auto mb-24"
                >
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-col gap-3"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                    >
                      Get to Know Me
                    </motion.h2>
                    <motion.p
                      variants={itemVariants}
                      className="text-base text-gray-300 leading-relaxed"
                    >
                      My interest in web development stems from its combination
                      of artistic design and technical skill. I focus on clean
                      UI/UX, minimalist design, and SEO practices to create
                      aesthetically pleasing websites that convert.
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-base text-gray-300 leading-relaxed"
                    >
                      Outside of websites and SEO, I practice Brazilian Jiu
                      Jitsu and photography. These practices have instilled
                      discipline and awareness in me, which allows me to view
                      situations from various perspectives, enhancing my approch
                      to design.
                    </motion.p>
                    <motion.p
                      variants={itemVariants}
                      className="text-base text-gray-300 leading-relaxed"
                    >
                      I'm currently seeking junior roles where I can contribute
                      to meaningful projects while continuing to grow my
                      technical and creative skillset.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    viewport={{ once: true, margin: "-50px" }}
                    whileInView="visible"
                    initial="hidden"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                    >
                      Tech Stack
                    </motion.h2>

                    <div className="space-y-4 sm:space-y-6">
                      <motion.div variants={itemVariants}>
                        <h3 className="text-sm sm:text-base text-gray-400 mb-2">
                          Frontend
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                          [ HTML ] [ CSS ] [ JS ] [ React ] [ NextJs ]
                        </p>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <h3 className="text-sm sm:text-base text-gray-400 mb-2">
                          Backend
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                          [ Express ] [ MongoDB ] [ JS ] [ React ] [ NextJs ]
                        </p>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <h3 className="text-sm sm:text-base text-gray-400 mb-2">
                          Design
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                          [ Figma ] [ Framer ] [ Photoshop ]
                        </p>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <h3 className="text-sm sm:text-base text-gray-400 mb-2">
                          SEO
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                          [ SEMrush ] [ Moz ]
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* === EDUCATION SECTION (Previously Completed) === */}
              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col  gap-24 max-w-3xl mx-auto mb-24"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                    className="flex flex-col gap-6"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-xl sm:text-2xl font-bold"
                    >
                      Education
                    </motion.h2>

                    <div className="flex gap-8 md:flex-row flex-col ">
                      <div className="flex flex-col gap-2 pb">
                        <div className="flex flex-col">
                          <motion.h4
                            variants={itemVariants}
                            className="text-lg text-white leading-tight"
                          >
                            BSc in Website Development
                          </motion.h4>
                          <motion.span
                            variants={itemVariants}
                            className="text-sm text-gray-400 whitespace-nowrap text-xs"
                          >
                            SAE Institute London - 2025
                          </motion.span>
                        </div>
                        <motion.p
                          variants={itemVariants}
                          className="text-base text-gray-300"
                        >
                          Comprehensive program covering modern web
                          technologies, UX/UI design principles, and full-stack
                          development. Focus on creating accessible, performant
                          web applications.
                        </motion.p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                          <motion.h4
                            variants={itemVariants}
                            className="text-lg text-white leading-tight"
                          >
                            BTEC in Computer Science
                          </motion.h4>
                          <motion.span
                            variants={itemVariants}
                            className="text-sm text-gray-400 whitespace-nowrap text-xs"
                          >
                            Kingston College - 2021
                          </motion.span>
                        </div>
                        <motion.p
                          variants={itemVariants}
                          className="text-base text-gray-300"
                        >
                          Comprehensive program covering modern web
                          technologies, UX/UI design principles, and full-stack
                          development. Focus on creating accessible, performant
                          web applications.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                    className="flex flex-col gap-6"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-xl sm:text-2xl font-bold"
                    >
                      Experience
                    </motion.h2>

                    <div className="flex flex-col gap-8">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2  ">
                          <motion.h4
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-white"
                          >
                            Freelance Web Designer & SEO Specialist
                          </motion.h4>
                          <motion.span
                            variants={itemVariants}
                            className="text-sm sm:text-base text-gray-400 whitespace-nowrap"
                          >
                            2024 - Present
                          </motion.span>
                        </div>
                        <div className="text-gray-300 flex flex-col gap-2 text-base pl-2">
                          <motion.li variants={itemVariants}>
                            Designed and developed websites for local businesses
                            including martial arts gyms and e-commerce clients,
                            focusing on SEO optimization and conversion-focused
                            layouts.
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Managed digital marketing and search optimization
                            strategies to improve client visibility and organic
                            traffic
                          </motion.li>
                          <motion.li variants={itemVariants}>
                            Created portfolio templates and practice projects to
                            refine UI/UX skills and explore modern web
                            technologies
                          </motion.li>
                        </div>
                      </div>
                      <motion.div
                        viewport={{ once: true }}
                        whileInView={{ scaleX: 1 }}
                        initial={{ scaleX: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ originX: 0, height: "1px", width: "100%" }}
                        className="w-full h-[1px] bg-gray-400"
                      ></motion.div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2  ">
                          <motion.h4
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-white"
                          >
                            Volunteer BJJ Instructor
                          </motion.h4>
                          <motion.span
                            variants={itemVariants}
                            className="text-sm sm:text-base text-gray-400 whitespace-nowrap"
                          >
                            2023 - Present
                          </motion.span>
                        </div>
                        <div className="text-base text-gray-300 flex flex-col gap-2 pl-2">
                          <motion.li variants={itemVariants}>
                            Teaching Brazilian Jiu-Jitsu to children, developing
                            communication and mentorship skills
                          </motion.li>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2, margin: "-100px" }}
                    className="flex flex-col gap-6"
                  >
                    <motion.h2
                      variants={itemVariants}
                      className="text-xl font-bold  "
                    >
                      Courses
                    </motion.h2>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col">
                        <motion.h4
                          variants={itemVariants}
                          className="text-lg text-white leading-tight"
                        >
                          Compact Key Words
                        </motion.h4>
                        <motion.span
                          variants={itemVariants}
                          className="text-sm text-gray-400 whitespace-nowrap text-xs"
                        >
                          Edward Sturm - 2024
                        </motion.span>
                      </div>
                      <motion.p
                        variants={itemVariants}
                        className="text-sm text-gray-300"
                      >
                        Advanced SEO course focusing on keyword research,
                        content optimization, and search intent analysis for
                        local businesses
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              {activeTab === "connect" && (
                <motion.div
                  key="connect"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col gap-2 max-w-3xl mx-auto "
                >
                  <div className="md:w-[70%]">
                    {/* Header Text */}
                    <motion.div
                      variants={itemVariants}
                      className="mb-6 sm:mb-8  sm:text-left"
                    >
                      <h2 className=" text-gray-300 text-sm leading-snug text-left">
                        Let's connect, I'd love to discuss how I can contribute
                        to your team.
                      </h2>
                    </motion.div>

                    {/* 1. LinkedIn */}
                    <motion.a
                      href="https://linkedin.com/in/tai-cameron" // Update with your actual URL
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors"
                    >
                      <div className="text-white">
                        <CiLinkedin
                          size={28}
                          className="w-6 h-6 sm:w-7 sm:h-7"
                        />
                      </div>
                      <div className="text-right">
                        <h3 className="text-base font-bold text-white leading-tight">
                          LinkedIn
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">
                          Tai Cameron
                        </p>
                      </div>
                    </motion.a>

                    {/* 2. Behance */}
                    <motion.a
                      href="https://behance.net/TaiCameron"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors"
                    >
                      <div className="text-white">
                        <SlSocialBehance
                          size={28}
                          className="w-6 h-6 sm:w-7 sm:h-7"
                        />
                      </div>
                      <div className="text-right">
                        <h3 className="text-base font-bold text-white leading-tight">
                          Behance
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">
                          @TaiCameron
                        </p>
                      </div>
                    </motion.a>

                    {/* 3. Email */}
                    <motion.a
                      href="mailto:Tadc936@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-colors"
                    >
                      <div className="text-white">
                        <CiMail size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="text-right">
                        <h3 className="text-base font-bold text-white leading-tight">
                          Email
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">
                          Tadc936@gmail.com
                        </p>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}
