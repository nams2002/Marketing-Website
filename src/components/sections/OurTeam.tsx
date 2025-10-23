'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurTeam() {
  const teamMembers = [
    { 
      name: 'Akshat', 
      title: 'Marketing\nDirector', 
      blurb: 'Driving growth through innovative marketing strategies and data-driven insights.', 
      image: '/bg/our_team/Akshat.JPG' 
    },
    { 
      name: 'Deepak', 
      title: 'CEO', 
      blurb: 'Leading our vision with passion and expertise to drive business success.', 
      image: '/bg/our_team/Deepak.JPG' 
    },
    { 
      name: 'Shailesh', 
      title: 'Strategic\nAdvisor', 
      blurb: 'Providing strategic guidance and industry expertise to drive business success.', 
      image: '/bg/our_team/Shailesh.jpg' 
    },
  ];

  return (
    <section id="our-team" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full bg-red-700/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Team</h2>
            <div className="hidden md:block text-right text-gray-300 text-xs max-w-[220px]">Meet the <span className="text-white">talented individuals</span> behind our <span className="text-white">success</span>, bringing <span className="text-red-400">expertise</span> and passion to every project.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {teamMembers.map((member, index) => {
              const isCenter = index === 1; // Deepak (CEO) in center
              return (
                <motion.div 
                  key={member.name} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 min-h-[360px] flex flex-col justify-between ${isCenter ? 'shadow-2xl' : 'shadow'} overflow-hidden`}
                >
                  {member.image && (
                    <div className="absolute inset-0 -z-10">
                      <Image src={member.image} alt={member.name} fill className="object-cover opacity-30" />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
                  <div>
                    <h3 className={`whitespace-pre-line ${isCenter ? 'text-3xl md:text-4xl' : 'text-2xl'} font-extrabold text-white`}>{member.title}</h3>
                    <p className="text-white/80 text-lg font-medium mt-2">{member.name}</p>
                  </div>
                  <div className="text-gray-300 text-sm max-w-xs">
                    <p>{member.blurb}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
