"use client";
import { businessInfo } from '@/data/business-info';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm mb-4 border border-blue-100">Why Choose Us</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blueprint</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                We don&apos;t just create campaigns — we craft experiences powered by data, creativity, and strategy.
              </p>
              <p>
                Every idea we execute is backed by insights, innovation, and intent to deliver measurable results that truly matter.
              </p>
              <p>
                Unlike traditional agencies, we don&apos;t guess — we analyze, design, and deliver.
              </p>
            </div>

            {/* Enhanced Strategy Triangle */}
            <div className="mt-8 p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 rounded-2xl border border-gray-200 shadow-lg">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900 mb-6">Where Creativity Meets Data — and Ideas Turn into Impact.</div>
                
                {/* Enhanced Triangle Diagram */}
                <div className="relative flex flex-col items-center justify-center space-y-6 mt-8">
                  {/* Creativity - Top */}
                  <div className="relative">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg mb-3">
                        <span className="text-2xl text-white">💡</span>
                      </div>
                      <div className="text-xl font-bold text-blue-600 mb-2">CREATIVITY</div>
                      <div className="text-sm text-gray-600 text-center max-w-32">Innovative ideas that captivate audiences</div>
                    </div>
                  </div>

                  {/* Central Triangle */}
                  <div className="relative">
                    <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-gray-400 mb-2"></div>
                    <div className="text-xs text-gray-500 font-medium">IMPACT</div>
                  </div>

                  {/* Bottom Row - Strategy & Data */}
                  <div className="flex items-center justify-center space-x-16">
                    {/* Strategy - Left */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg mb-3">
                        <span className="text-2xl text-white">📊</span>
                      </div>
                      <div className="text-xl font-bold text-purple-600 mb-2">STRATEGY</div>
                      <div className="text-sm text-gray-600 text-center max-w-32">Data-driven campaigns that deliver results</div>
                    </div>

                    {/* Connecting Lines */}
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-gray-400"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="w-8 h-0.5 bg-gradient-to-l from-green-400 to-gray-400"></div>
                    </div>

                    {/* Data - Right */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg mb-3">
                        <span className="text-2xl text-white">📈</span>
                      </div>
                      <div className="text-xl font-bold text-green-600 mb-2">DATA</div>
                      <div className="text-sm text-gray-600 text-center max-w-32">Insights that optimize performance</div>
                    </div>
                  </div>

                  {/* Bottom Connection Lines */}
                  <div className="flex justify-center space-x-16 mt-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-gray-300"></div>
                    <div className="w-0.5 h-8 bg-gradient-to-b from-green-400 to-gray-300"></div>
                  </div>
                </div>

                {/* Results Banner */}
                <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="text-sm text-gray-600 mb-2">Our Approach Delivers</div>
                  <div className="flex justify-center space-x-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">500%</div>
                      <div className="text-xs text-gray-500">ROI Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">2M+</div>
                      <div className="text-xs text-gray-500">Engagements</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-500">Client Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow">Contact Us</a>
              <a href="#services" className="px-6 py-3 rounded-xl bg-white text-gray-900 border border-gray-200 font-semibold shadow">Explore Features</a>
            </div>
          </div>

          {/* Visual card with image and small overlay */}
          <div className="relative lg:h-[460px] h-[340px]">
            <Image src="/bg/photo-1523240795612-9a054b0db644.avif" alt="Team working" fill className="object-cover rounded-3xl" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-gray-200" />
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-lg p-4 w-64 border border-gray-100">
              <div className="text-xs text-gray-500">Client Growth</div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="mt-2 text-sm text-emerald-600">+12.8%</div>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is to become the global benchmark for influencer excellence — crafting campaigns that elevate brands, celebrate creativity, and connect with audiences on a human level. We strive to turn influence into impact, and ideas into unforgettable experiences.
            </p>
          </div>
        </div>

        {/* Clients carousel */}
        <div className="relative mt-20">
          <div className="text-center text-gray-500 mb-6">Building Trust With Global Clients</div>
          <div className="overflow-hidden py-2">
            <motion.div className="flex gap-12 items-center whitespace-nowrap" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
              {[...businessInfo.pastClients, ...businessInfo.pastClients].map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <span className="text-xl">{c.logo}</span>
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
