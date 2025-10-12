'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { businessInfo } from '@/data/business-info';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function Influencers() {
  return (
    <section id="influencers" className="section-padding bg-gradient-modern">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Influencer Network
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto text-gray-300">
            We work with a diverse network of talented influencers across various niches to help brands reach their target audiences authentically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businessInfo.influencers.map((influencer) => (
            <motion.div
              key={influencer.id}
              className={`${influencer.avatar.startsWith('/') ? 'influencer-card-with-bg' : 'card-profile'} group`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={influencer.avatar.startsWith('/') ? {
                backgroundImage: `url(${influencer.avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              } : {}}
            >
              {influencer.avatar.startsWith('/') ? (
                // Full background image layout
                <>
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl"></div>

                  {/* Content positioned at bottom */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                    {/* Verification Badge */}
                    <div className="absolute top-6 right-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      {influencer.name}
                    </h3>
                    <p className="text-white/90 font-normal mb-6 leading-relaxed text-sm">
                      {influencer.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-1 text-white/90">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                        <span className="font-semibold">{influencer.followers}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-white/90">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-semibold">48</span>
                      </div>
                    </div>

                    {/* Follow Button */}
                    <motion.button
                      className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Follow +
                    </motion.button>
                  </div>
                </>
              ) : (
                // Original emoji layout
                <>
                  {/* Modern Profile Header */}
                  <div className="text-center mb-8">
                    {/* Large Profile Image with Modern Design */}
                    <div className="relative mb-6">
                      <div className="profile-image">
                        {influencer.avatar}
                      </div>
                      {/* Verification Badge with Modern Styling */}
                      <div className="verification-badge">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                      {influencer.name}
                    </h3>
                    <p className="text-gray-300 font-normal mb-6 leading-relaxed">
                      {influencer.description}
                    </p>
                  </div>

                  {/* Modern Stats Row */}
                  <div className="flex items-center justify-center space-x-8 mb-8">
                    <div className="stats-item">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                      <span className="stats-number">{influencer.followers}</span>
                      <span>followers</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="stats-item">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                      </svg>
                      <span className="stats-number">48</span>
                      <span>projects</span>
                    </div>
                  </div>

                  {/* Modern Follow Button with Neumorphism */}
                  <div className="text-center">
                    <motion.button
                      className="btn-primary w-full"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: 'var(--gradient-primary)',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                      }}
                    >
                      Follow +
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Clean Network Stats */}
        <div className="mt-20 bg-gradient-modern rounded-3xl p-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our Influencer Network Impact
            </h3>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">774K+</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Total Reach</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Active Influencers</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Engagement Rate</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Campaigns</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Modern CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Want to Work with Our Influencers?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with our influencer network to amplify your brand message and reach your target audience through authentic partnerships.
          </p>
          <button className="btn-primary">
            Start Influencer Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
