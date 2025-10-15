'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src="/bg/photo-1504384764586-bb4cdc1707b0.avif" 
          alt="Background" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div className="flex items-center gap-3 text-sm text-gray-700 mb-6" variants={fadeInUp}>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">●</div>
              <span>500+ Projects Delivered</span>
              <span className="text-gray-400">/</span>
              <Link href="#testimonials" className="underline underline-offset-4">Client Success Stories</Link>
            </motion.div>

            <motion.h1 className="text-6xl md:text-7xl font-serif tracking-tight text-gray-900 mb-6" variants={fadeInLeft}>
              {businessInfo.name}
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-10" variants={fadeInUp}>
              Drive Sales Growth, And Harness AI‑Powered User Content — Up To 50× Faster.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" variants={fadeInUp}>
              <Link href="#contact" className="px-6 py-3 rounded-xl bg-black text-white font-semibold shadow-sm hover:shadow-md transition-all text-center">Get Free Strategy Call</Link>
              <Link href="#services" className="px-6 py-3 rounded-xl bg-white text-gray-900 border border-gray-300 font-semibold shadow-sm hover:shadow-md transition-all text-center">View Our Services ↗</Link>
            </motion.div>

            <motion.div className="flex items-center gap-4 text-gray-700" variants={fadeInUp}>
              <div className="flex items-center gap-3">
                <Image src="/images/influencers/abid.png" alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-sm">
                  <div>Loved the performance</div>
                  <div className="text-gray-500">100% Satisfied</div>
                </div>
              </div>
              <div className="text-gray-300">/</div>
              <div className="flex items-center gap-1"><span>★</span><span className="font-semibold">4.9</span></div>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <div className="relative lg:h-[540px] md:h-[520px] h-[420px]">
            {/* Accent rounded card */}
            <motion.div className="absolute right-0 top-0 w-[85%] h-full rounded-[32px] bg-gradient-to-br from-orange-400 to-red-500" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} />

            {/* Person image */}
            <motion.img
              src="/bg/photo-1760140551817-2695daec1b50.avif"
              alt="TS Media team"
              className="absolute right-8 bottom-0 w-[80%] h-[92%] object-cover rounded-[28px] shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            />

            {/* Play button */}
            <motion.button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl grid place-items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900"><path d="M8 5v14l11-7z" /></svg>
            </motion.button>

            {/* Floating cards */}
            <motion.div className="absolute -left-6 top-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-5 py-3 shadow-lg" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <div className="text-sm font-semibold text-gray-900">Ready to go viral?</div>
            </motion.div>

            <motion.div className="absolute left-0 top-28 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-5 py-3 shadow-lg" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55 }}>
              <div className="text-sm font-semibold text-gray-900">Campaign performing well!</div>
            </motion.div>

            <motion.div className="absolute right-4 -top-6 w-56 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-5 shadow-lg" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
              <div className="text-xs uppercase text-gray-400">Campaign reach</div>
              <div className="text-4xl font-bold text-gray-900">2M+</div>
              <div className="text-sm text-gray-600">Followers engaged</div>
            </motion.div>

            <motion.div className="absolute right-8 bottom-4 w-72 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-4 shadow-lg flex gap-4 items-center" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.85 }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center overflow-hidden">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <div className="flex-1">
                <div className="text-gray-900 font-semibold">Latest Campaign</div>
                <div className="text-gray-900 font-bold text-xl">500% ROI</div>
                <div className="flex items-center gap-1 text-sm text-gray-700"><span>★</span><span>4.9</span></div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
