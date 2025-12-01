// app/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageFlipperProps {
  images: string[];
  alt?: string;
  className?: string;
  flipSpeed?: number;
}

function ImageFlipper({
  images,
  alt = "Flipper image",
  className = "",
  flipSpeed = 10,
}: ImageFlipperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startFlipping = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, flipSpeed);
  };

  const stopFlipping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCurrentIndex(0);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={startFlipping}
      onMouseLeave={stopFlipping}
    >
      <Image
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        fill
        className="object-cover"
      />
    </div>
  );
}

export default function HomePage() {
  // Example image arrays - replace with your actual image paths
  const projectImages = [
    "/work/mma/img (1).png",
    "/work/mma/img (2).png",
    "/work/mma/img (3).png",
    "/work/mma/img (4).png",
    "/work/mma/img (5).png",
  ];

  const portfolioImages1 = [
    "/work/mma/img (1).png",
    "/work/mma/img (2).png",
    "/work/mma/img (3).png",
    "/work/mma/img (4).png",
    "/work/mma/img (5).png",
  ];

  const portfolioImages2 = [
    "/work/mma/img (1).png",
    "/work/mma/img (2).png",
    "/work/mma/img (3).png",
    "/work/mma/img (4).png",
    "/work/mma/img (5).png",
  ];

  const portfolioImages3 = [
    "/work/mma/img (1).png",
    "/work/mma/img (2).png",
    "/work/mma/img (3).png",
    "/work/mma/img (4).png",
    "/work/mma/img (5).png",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            Hover over any project to see it come to life
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-5xl mx-auto mb-24">
          <ImageFlipper
            images={projectImages}
            alt="Featured project"
            className="w-full h-[400px] md:h-[600px] rounded-2xl shadow-2xl"
            flipSpeed={120}
          />
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Featured Project
            </h2>
            <p className="text-slate-400">
              Interactive web application with modern design
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Recent Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Portfolio Item 1 */}
          <div className="group">
            <ImageFlipper
              images={portfolioImages1}
              alt="E-commerce platform"
              className="w-full h-64 rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]"
              flipSpeed={100}
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                E-commerce Platform
              </h3>
              <p className="text-slate-400 text-sm">
                Next.js • TypeScript • Tailwind CSS
              </p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="group">
            <ImageFlipper
              images={portfolioImages2}
              alt="SaaS dashboard"
              className="w-full h-64 rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]"
              flipSpeed={150}
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                SaaS Dashboard
              </h3>
              <p className="text-slate-400 text-sm">
                React • TypeScript • Analytics
              </p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="group">
            <ImageFlipper
              images={portfolioImages3}
              alt="Agency website"
              className="w-full h-64 rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]"
              flipSpeed={80}
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                Agency Website
              </h3>
              <p className="text-slate-400 text-sm">
                Framer Motion • GSAP • Modern UI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Let's create something amazing
          </p>
          <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
            Get in touch
          </button>
        </div>
      </section>
    </main>
  );
}
