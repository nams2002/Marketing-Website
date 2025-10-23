"use client";
import { businessInfo } from '@/data/business-info';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0">
        <Image src="/bg/back1.jpg" alt="testimonials bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Clients Have To Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Like reviews any five friends with logo. Here&apos;s what our clients have to say about working with {businessInfo.name}.
          </p>
        </div>

        {/* carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {businessInfo.testimonials.map((t) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="snap-start shrink-0 w-[92%] sm:w-[540px] bg-gray-900/95 border border-gray-700 rounded-2xl p-7 shadow-lg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,theme(colors.blue.500),theme(colors.purple.500),theme(colors.blue.500))]" />
                {/* Header with name and company */}
                <div className="mb-4">
                  <div className="text-white font-semibold text-lg leading-tight">{t.name}</div>
                  <div className="text-sm text-gray-400 leading-tight">{t.position} · {t.company}</div>
                </div>
                {/* Body */}
                <p className="text-gray-300/90 mb-5 text-[17px] leading-7">“{t.content}”</p>
                {/* Stars */}
                <motion.div className="flex" initial={{ x: -12, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA below */}
        <div className="text-center mt-10">
        </div>


      </div>
    </section>
  );
}
