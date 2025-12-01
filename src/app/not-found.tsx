"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#333333] text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl sm:text-8xl font-bold mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">Page Not Found</p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Return Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
