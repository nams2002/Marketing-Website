'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Dark Modern Background */}
      <div className="absolute inset-0">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-gray-800/70" />

        {/* Glowing geometric elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional glow effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/5 via-transparent to-transparent rounded-full"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Modern Heading */}
          <motion.div
            className="mb-8"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-hero text-white mb-6 font-extrabold tracking-tight"
              variants={fadeInUp}
            >
              <span className="block">
                {businessInfo.name}
              </span>
              <span className="block text-gradient mt-2">
                {businessInfo.tagline}
              </span>
            </motion.h1>
          </motion.div>

          {/* Clean Description */}
          <motion.p
            className="text-subtitle max-w-2xl mx-auto mb-12 text-gray-300"
            variants={fadeInUp}
          >
            {businessInfo.description}
          </motion.p>

          {/* Modern CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#services"
                className="btn-primary"
              >
                Get Started Today
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#portfolio"
                className="btn-secondary"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Clean Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            variants={staggerContainer}
          >
            {businessInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-gray-300 transition-colors duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 bg-current rounded-full"></div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
