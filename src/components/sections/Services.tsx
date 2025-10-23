"use client";

import { useState } from 'react';
import Image from 'next/image';
import { businessInfo } from '@/data/business-info';

export default function Services() {
  const [tab, setTab] = useState<'brands' | 'creators'>('brands');
  const [openCal, setOpenCal] = useState(false);

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
    >
      {/* light interactive background */}
      <div className="absolute inset-0">
        <Image
          src="/bg/back1.jpg"
          alt="Services background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "22px 22px"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Offered By TS media
          </h2>
          {/* Two-tab narrative */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1 mb-6">
            <button onClick={()=>setTab('brands')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='brands'?'bg-gray-900 text-white':'text-gray-700'}`}>For Brands</button>
            <button onClick={()=>setTab('creators')} className={`px-4 py-2 rounded-lg text-sm font-medium ${tab==='creators'?'bg-gray-900 text-white':'text-gray-700'}`}>For Creators</button>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            {tab==='brands'
              ? 'We craft bespoke strategies to hit your KPIs — installs, leads, or sales — and handle creator ops end‑to‑end with performance reporting.'
              : 'We help creators grow with content blueprints, brand partnerships, and tools that turn your audience into a business.'}
          </p>
          {/* Enhanced KPI strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {businessInfo.stats.map((s, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                    {s.value}
                  </div>
                  
                  <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                  
                  {/* Professional progress indicator */}
                  <div className="mt-4 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-800"
                      style={{ width: `${75 + (i * 5)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 mb-8 border border-gray-200">
            <p className="text-lg text-gray-900 font-medium text-center mb-4">
              At TS MEDIA, we turn creativity into measurable impact.
            </p>
            <p className="text-gray-700 text-center leading-relaxed">
              From running high-performing logo campaigns for top brands like cricaza, stake, MostBet, and WinFix, where creators showcased branded stickers and delivered real, result-driven engagement — to executing viral song promotions across Bollywood and Haryanvi tracks, our team knows how to make content connect and convert.
            </p>
            <p className="text-blue-600 text-center font-semibold mt-4">
              We don&apos;t just promote — we make brands trend.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessInfo.services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white/70 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400"
            >
              {/* Static gradient border for featured cards (2nd, 4th, 6th) */}
              {(idx === 1 || idx === 3 || idx === 5) && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]">
                  <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,theme(colors.blue.400),theme(colors.purple.400),theme(colors.blue.400))] opacity-30" />
                </div>
              )}

              <div className="relative z-10">
                {/* Service Image */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

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
                {/* <div className="text-center">
                  <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                    <span className="inline-flex items-center gap-2">Learn More <span>→</span></span>
                  </button>
                  <div className="mt-2">
                    <a className="text-sm text-gray-600 hover:text-gray-900" href="#portfolio">See case study →</a>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
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
