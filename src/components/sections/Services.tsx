"use client";

import { useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Services() {
  const [tab, setTab] = useState<'brands' | 'creators'>('brands');
  const [openCal, setOpenCal] = useState(false);
  const [spot, setSpot] = useState<{x:number;y:number}>({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const gridOffset = useTransform(scrollY, [0, 600], [0, -40]);

  const spotlightStyle = useMemo(() => ({
    background: `radial-gradient(600px 600px at ${spot.x}px ${spot.y}px, rgba(255,255,255,0.25), transparent 60%)`
  }), [spot]);

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      onMouseMove={(e) => setSpot({ x: e.clientX, y: e.clientY })}
    >
      {/* light interactive background */}
      <div className="absolute inset-0">
        <img
          src="/bg/photo-1470790376778-a9fbc86d70e2.avif"
          alt="Services background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>
      <motion.div className="absolute inset-0 pointer-events-none" style={spotlightStyle} />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: gridOffset }}>
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px"
        }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            SERVICES offered By TS media
          </motion.h2>
          {/* Two-tab narrative */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1 mb-6">
            <button onClick={()=>setTab('brands')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='brands'?'bg-gray-900 text-white':'text-gray-700'}`}>For Brands</button>
            <button onClick={()=>setTab('creators')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='creators'?'bg-gray-900 text-white':'text-gray-700'}`}>For Creators</button>
          </div>
          <motion.p
            key={tab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto mb-8"
          >
            {tab==='brands'
              ? 'We craft bespoke strategies to hit your KPIs — installs, leads, or sales — and handle creator ops end‑to‑end with performance reporting.'
              : 'We help creators grow with content blueprints, brand partnerships, and tools that turn your audience into a business.'}
          </motion.p>
          {/* Enhanced KPI strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {businessInfo.stats.map((s, i) => (
              <motion.div 
                key={i} 
                className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Professional icon based on stat type */}
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                    <div className="text-white">
                      {i === 0 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ) : i === 1 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      ) : i === 2 ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter value={s.value} label="" duration={1.2+i*0.1} />
                  </div>
                  
                  <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                  
                  {/* Professional progress indicator */}
                  <div className="mt-4 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gray-800"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${75 + (i * 5)}%` }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 mb-8 border border-gray-200"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-900 font-medium text-center mb-4">
              At TS MEDIA, we turn creativity into measurable impact.
            </p>
            <p className="text-gray-700 text-center leading-relaxed">
              From running high-performing logo campaigns for top brands like cricaza, stake, MostBet, and WinFix, where creators showcased branded stickers and delivered real, result-driven engagement — to executing viral song promotions across Bollywood and Haryanvi tracks, our team knows how to make content connect and convert.
            </p>
            <p className="text-blue-600 text-center font-semibold mt-4">
              We don&apos;t just promote — we make brands trend.
            </p>
          </motion.div>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {businessInfo.services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: -2,
                scale: 1.015,
                transition: { duration: 0.2 }
              }}
              className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white/70 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400"
            >
              {/* Animated gradient border for featured cards (2nd, 4th, 6th) */}
              {(idx === 1 || idx === 3 || idx === 5) && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]">
                  <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,theme(colors.blue.400),theme(colors.purple.400),theme(colors.blue.400))] opacity-30 animate-[spin_12s_linear_infinite]" />
                </div>
              )}

              {/* Shine sweep */}
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute -left-1 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[220%] transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6 text-center"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-center leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Proof chips (first 3 features) */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  {service.features.slice(0,3).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.button
                    className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05, x: 2, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="inline-flex items-center gap-2">Learn More <span>→</span></span>
                  </motion.button>
                  <div className="mt-2">
                    <a className="text-sm text-gray-600 hover:text-gray-900" href="#portfolio">See case study →</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Polished CTA banner */}
        <div className="text-center mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md p-10 shadow-lg">
            <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Get a 15‑min plan to grow with creators</h3>
            <p className="text-gray-600 mb-5 max-w-2xl mx-auto">Trusted by {businessInfo.stats[1].value} brands • {businessInfo.stats[3].value} team • Rated 4.9/5</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setOpenCal(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:shadow-lg"
              >
                Book Free Strategy Call
              </button>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-gray-900 border border-gray-200 font-semibold shadow hover:shadow-md">See Pricing</a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-gray-900 font-semibold shadow hover:shadow-md">
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="text-gray-500 text-sm mt-3">No sales pitch. 15 minutes. Free.</div>

            {/* small logo strip */}
            <div className="mt-6 overflow-hidden">
              <motion.div className="flex items-center justify-center gap-8 whitespace-nowrap" animate={{ x: ['0%', '-40%'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
                {[...businessInfo.pastClients.slice(0,8), ...businessInfo.pastClients.slice(0,8)].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <span className="text-xl">{c.logo}</span>
                    <span className="text-sm">{c.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Simple calendar modal */}
        {openCal && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm grid place-items-center p-4" onClick={() => setOpenCal(false)}>
            <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden" onClick={(e)=>e.stopPropagation()}>
              <button onClick={() => setOpenCal(false)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 text-gray-800">×</button>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Book your free strategy call</h4>
                <p className="text-gray-600 mb-4">Choose a time that works for you. We&apos;ll share ideas tailored to your goals.</p>
                <div className="aspect-video w-full rounded-lg border">
                  <iframe
                    src="https://cal.com/"
                    title="Calendar"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
