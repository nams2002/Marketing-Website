'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { businessInfo } from '@/data/business-info';
import { useState } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface Influencer {
  id: number;
  name: string;
  handle: string;
  followers: string;
  category: string;
  image: string;
  verified: boolean;
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
  return (
    <section id="influencers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Influencer Network
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We work with a diverse network of talented influencers across various niches to help brands reach their target audiences authentically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessInfo.influencers.map((influencer, index) => (
            <InfluencerCard
              key={influencer.id}
              influencer={influencer}
              index={index}
            />
          ))}
        </div>

        {/* Network Stats */}
        <div className="mt-16 bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
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
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Work with Our Influencers?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
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
