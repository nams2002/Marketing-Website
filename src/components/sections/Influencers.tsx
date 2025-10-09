'use client';

import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function Influencers() {
  return (
    <section id="influencers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Influencer Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with a diverse network of talented influencers across various niches to help brands reach their target audiences authentically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessInfo.influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
                  {influencer.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {influencer.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {influencer.handle}
                </p>
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {influencer.category}
                </div>
              </div>

              {/* Stats */}
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {influencer.followers}
                    </div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {influencer.platform}
                    </div>
                    <div className="text-sm text-gray-600">Platform</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {influencer.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={influencer.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                >
                  View Profile
                </a>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Collaborate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Network Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
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
            <motion.div variants={staggerItem}>
              <AnimatedCounter
                value="774K+"
                label="Total Reach"
                className="text-blue-600"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <AnimatedCounter
                value="6"
                label="Active Influencers"
                className="text-purple-600"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <AnimatedCounter
                value="95%"
                label="Engagement Rate"
                className="text-green-600"
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <AnimatedCounter
                value="50+"
                label="Campaigns"
                className="text-orange-600"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Work with Our Influencers?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Connect with our influencer network to amplify your brand message and reach your target audience through authentic partnerships.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Start Influencer Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
