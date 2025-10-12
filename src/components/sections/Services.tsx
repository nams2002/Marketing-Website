'use client';

import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We offer comprehensive media solutions tailored to meet your business needs and drive meaningful results.
          </motion.p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {businessInfo.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6 text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our media solutions can help you achieve your business goals and connect with your audience in meaningful ways.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
