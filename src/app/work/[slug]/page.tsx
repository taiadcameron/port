"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects, type ProjectData } from "../../../../lib/data";

// --- COMPONENTS ---

const AnimatedText = ({
  text,
  delay = 0,
  shouldAnimate = true,
  className = "",
}: {
  text: string;
  delay?: number;
  shouldAnimate?: boolean;
  className?: string;
}) => {
  const words = text.split(" ");
  if (!shouldAnimate) return <span className={className}>{text}</span>;
  return (
    <span className={className}>
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

const Card = ({
  item,
  index,
  targetScale,
  progress,
}: {
  item: any;
  index: number;
  targetScale: number;
  progress: any;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(${index * 25}px)` }}
        className="relative flex flex-col w-full max-w-5xl aspect-[16/10] origin-top  overflow-hidden "
      >
        <div className="relative flex-1 w-full h-full group">
          <img
            src={item.src}
            alt={item.title || "Project Image"}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE ---
export default function ProjectPage() {
  const params = useParams();

  // Handle undefined params safely
  const rawSlug = params ? (params.slug as string) : null;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const container = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // State for random projects to prevent hydration mismatch
  const [nextProjectsList, setNextProjectsList] = useState<any[]>([]);

  // Generate random projects on client side only
  useEffect(() => {
    if (!slug) return;

    const projectKeys = Object.keys(projects);
    if (projectKeys.length > 1) {
      // Exclude the current project
      const otherProjects = projectKeys.filter((key) => key !== slug);
      // Fisher-Yates shuffle
      const shuffled = [...otherProjects];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      // Select first two
      const randomProjects = shuffled.slice(0, 2).map((key) => ({
        ...projects[key],
        id: key,
      }));
      setNextProjectsList(randomProjects);
    }
  }, [slug]);

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#333] font-sans">
        Loading project...
      </div>
    );
  }

  const projectData = projects[slug];

  if (!projectData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#333] font-sans gap-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="text-gray-400">
          The project "{slug}" does not exist in our database.
        </p>
        <Link href="/" className="underline hover:text-gray-200">
          Back to Home
        </Link>
      </div>
    );
  }

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cardImages = projectData.images.map((imgStr, i) => ({
    id: i,
    src: imgStr,
    title: `${projectData.title} Shot ${i + 1}`,
  }));

  return (
    <div className="grain-bg flex bg-[#333333] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <main className="w-full flex flex-col justify-start items-center">
        {/* HERO */}
        <section className="relative w-full  flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 z-0 max-w-[1400px]">
          <div className="max-w-5xl w-full">
            <div className="mb-4 md:mb-8 top-8 left-8 z-20">
              <Link href="/">
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group cursor-pointer flex items-center gap-3  text-white transition-colors"
                >
                  <div className="relative w-8 h-8 rounded-full border skew-button border-white/30 group-hover:border-white flex items-center justify-center transition-all duration-300 overflow-hidden ">
                    {/* Background fill animation */}
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-500" />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className=" skew-button relative z-10  transition-all duration-300"
                    >
                      <path
                        d="M19 12H5M12 19l-7-7 7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-12 ">
              <div className="md:col-span-12  text-left">
                <h1 className="text-[clamp(2rem,5vw,5rem)] font-bold tracking-tight text-white uppercase  ">
                  <AnimatedText
                    text={projectData.client}
                    delay={0.1}
                    shouldAnimate={shouldAnimate}
                  />
                </h1>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <p className=" text-sm md:text-  leading-snug  text-gray-300 max-w-2xl mb-8">
                    {projectData.overview}
                  </p>
                  <a
                    href={projectData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skew-button inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 rounded-full text-sm uppercase tracking-wider text-white group"
                  >
                    Visit Live Site
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    >
                      <path
                        d="M1 11L11 1M11 1H1M11 1V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="md:col-span-4 space-y-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm font-mono text-gray-300">
                    {projectData.technologies.map((tech, i) => (
                      <span key={i}>[ {tech} ]</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold">
                    Approach
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {projectData.approach}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold">
                    Features
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {projectData.features.map((feat, i) => (
                      <li key={i}>
                        - {typeof feat === "string" ? feat : feat.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className=" md:flex md:col-span-12 justify-end items-center mt-2"
              >
                <div className="flex items-center gap-3 pointer-events-none">
                  <div className="relative w-8 h-8 rounded-full border bg-white skew-button border-white/30 flex items-center justify-center transition-all duration-300 overflow-hidden">
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500" />
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      className="relative z-10 transition-all duration-300"
                    >
                      <path
                        d="M12 5v14m0 0l7-7m-7 7l-7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section ref={container} className="relative z-10 w-full pb-24 px-4">
          {cardImages.map((image, i) => {
            const targetScale = 1 - (cardImages.length - i) * 0.05;
            return (
              <Card
                key={image.id}
                index={i}
                item={image}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
        </section>

        {/* NEXT PROJECTS */}
        <section className="relative z-10 w-full py-24 px-4 sm:px-6 md:px-8 max-w-4xl">
          <div className="w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-white"
            >
              Next Projects
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full">
              {nextProjectsList.map((project, index) => (
                <Link href={`/work/${project.id}`} key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="w-full cursor-pointer group relative overflow-hidden rounded-sm"
                  >
                    <img
                      src={project.thumbnail || project.hero}
                      alt={project.title}
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 sm:p-6 transition-opacity"
                    >
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {project.client} • {project.year}
                      </p>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
