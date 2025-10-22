'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Slide = { title: string; blurb: string; image?: string; href?: string };

export default function OurTeam() {
  const slides: Slide[] = useMemo(() => [
    { title: 'Meet Our\nCreative\nDirector', blurb: "Leading our creative vision with passion and expertise.", image: '/bg/our_team/IMG_4450[1].JPG', href: '#contact' },
    { title: 'Our\nMarketing\nSpecialist', blurb: 'Driving growth through innovative marketing strategies and data-driven insights.', image: '/bg/our_team/IMG_4480.JPG', href: '#contact' },
    { title: 'Strategic\nAdvisor', blurb: 'Providing strategic guidance and industry expertise to drive business success.', image: '/bg/our_team/WhatsApp Image 2025-10-22 at 20.15.19_7cabf5a5.jpg', href: '#contact' },
  ], []);

  const [index, setIndex] = useState(1);
  const [paused, setPaused] = useState(false);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const order = [index - 1, index, index + 1].map((i) => (i + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  return (
    <section id="our-team" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full bg-red-700/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-8 md:p-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Team</h2>
            <div className="hidden md:block text-right text-gray-300 text-xs max-w-[220px]">Meet the <span className="text-white">talented individuals</span> behind our <span className="text-white">success</span>, bringing <span className="text-red-400">expertise</span> and passion to every project.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {order.map((idx, pos) => {
              const s = slides[idx];
              const isCenter = pos === 1;
              const CardInner = (
                <div className={`relative rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 min-h-[360px] flex flex-col justify-between ${isCenter ? 'shadow-2xl' : 'shadow'} overflow-hidden`}>
                  {s.image && (
                    <div className="absolute inset-0 -z-10">
                      <Image src={s.image || ''} alt="team member" fill className="object-cover opacity-30" />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
                  <div>
                    {pos === 0 && (
                      <button onClick={prev} className="mb-3 text-gray-400 hover:text-white text-xl font-bold">previous</button>
                    )}
                    {pos === 2 && (
                      <button onClick={next} className="mb-3 text-gray-400 hover:text-white text-xl font-bold">next</button>
                    )}
                    <h3 className={`whitespace-pre-line ${isCenter ? 'text-3xl md:text-4xl' : 'text-2xl'} font-extrabold text-white`}>{s.title}</h3>
                  </div>
                  <div className="text-gray-300 text-sm max-w-xs">
                    {idx === 0 ? (
                      <button onClick={() => { window.location.hash = '#contact'; }} className="text-white font-semibold underline underline-offset-4">Let&apos;s talk</button>
                    ) : (
                      <p>{s.blurb}</p>
                    )}
                  </div>
                </div>
              );
              return (
                <motion.div key={idx} animate={{ opacity: isCenter ? 1 : 0.55, y: isCenter ? 0 : 12, scale: isCenter ? 1 : 0.96 }} transition={{ duration: 0.3 }}>
                  {isCenter && s.href ? (
                    <Link href={s.href} className="block">{CardInner}</Link>
                  ) : (
                    CardInner
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
