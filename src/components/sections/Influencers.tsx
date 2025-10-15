'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { businessInfo } from '@/data/business-info';
import { useState, useRef, useEffect } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface Influencer {
  id: number;
  name: string;
  handle: string;
  followers: string;
  platform: string;
  category: string;
  profileUrl: string;
  description: string;
  avatar: string;
}

const InfluencerCard = ({ influencer, index }: { influencer: Influencer, index: number }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={influencer.avatar}
            alt={influencer.name}
            fill
            className="object-cover object-center"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
            <div className="text-white text-6xl font-bold">
              {influencer.name.charAt(0)}
            </div>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Verified Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        {/* Name */}
        <h3 className="text-2xl font-bold mb-2">
          {influencer.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
          {influencer.description}
        </p>

        {/* Stats */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{influencer.followers}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">48</span>
          </div>
        </div>

        {/* Follow Button */}
        <button className="w-full py-3 bg-white/20 backdrop-blur-md rounded-2xl text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30">
          Follow +
        </button>
      </div>
    </motion.div>
  );
};

export default function Influencers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Show 2-3 influencers per slide based on screen size
  const itemsPerSlide = 3; // Desktop: 3, Mobile: 2 (handled by CSS)
  const totalSlides = Math.ceil(businessInfo.influencers.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false); // Stop auto-play when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false); // Stop auto-play when user interacts
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="influencers" className="relative py-24 overflow-hidden">
      {/* split background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[#c0d3d8]" />
        <div className="bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:sticky lg:top-24">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">The Creators Network</h2>
            <div className="h-0.5 w-16 bg-gray-300 mb-6" />
            <p className="text-gray-600 mb-8">Keeping up to date with what&apos;s occurring within the creator economy is vital. Explore top creators and campaigns curated by our team.</p>
            <button className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors duration-200">Join today</button>
          </div>

          {/* Carousel Container */}
          <div className="lg:col-span-2 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Wrapper */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {Array.from({ length: totalSlides }, (_, slideIndex) => {
                  const startIndex = slideIndex * itemsPerSlide;
                  const endIndex = Math.min(startIndex + itemsPerSlide, businessInfo.influencers.length);
                  const slideInfluencers = businessInfo.influencers.slice(startIndex, endIndex);

                  return (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {slideInfluencers.map((influencer, index) => (
                          <InfluencerCard 
                            key={influencer.id} 
                            influencer={influencer} 
                            index={startIndex + index} 
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gray-800 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {/* Enhanced Network Impact Section */}
            <div className="mt-16 relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-10 shadow-xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Network Performance
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Influencer Network Impact</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">Real results from our data-driven influencer partnerships and campaign strategies.</p>
                </div>
                
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-8" 
                  variants={staggerContainer} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div variants={staggerItem} className="group">
                    <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        <AnimatedCounter value="774K+" label="" duration={2} />
                      </div>
                      <div className="text-slate-200 font-medium">Total Reach</div>
                      <div className="text-xs text-slate-300 mt-1">Across all platforms</div>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="group">
                    <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        <AnimatedCounter value="6" label="" duration={1.5} />
                      </div>
                      <div className="text-gray-200 font-medium">Active Influencers</div>
                      <div className="text-xs text-gray-300 mt-1">Verified creators</div>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="group">
                    <div className="relative bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        <AnimatedCounter value="95%" label="" duration={1.8} />
                      </div>
                      <div className="text-blue-200 font-medium">Engagement Rate</div>
                      <div className="text-xs text-blue-300 mt-1">Above industry avg</div>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="group">
                    <div className="relative bg-gradient-to-br from-indigo-700 to-indigo-800 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">
                        <AnimatedCounter value="50+" label="" duration={2.2} />
                      </div>
                      <div className="text-indigo-200 font-medium">Campaigns</div>
                      <div className="text-xs text-indigo-300 mt-1">Successfully delivered</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-16 relative">
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 text-center shadow-xl">
                <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Ready to Get Started?
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Want to Work with Our 
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Influencers?</span>
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Connect with our influencer network to amplify your brand message and reach your target audience through authentic partnerships that drive real results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.button 
                      className="relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center gap-2">
                        Start Influencer Campaign
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </motion.button>
                    
                    <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg">
                      View Case Studies
                    </button>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Free Strategy Call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>24h Response Time</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>Custom Campaigns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
