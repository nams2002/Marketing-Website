'use client';

import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function PastClients() {
  return (
    <section id="past-clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Past Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve had the privilege of working with some amazing brands across various industries. Here are some of our successful partnerships.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {businessInfo.pastClients.map((client) => (
            <motion.div
              key={client.id}
              variants={staggerItem}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden relative"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Client Logo/Icon */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{client.logo}</div>
                <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                <div className="text-sm text-blue-600 font-medium">{client.industry}</div>
              </div>

              {/* Project Info */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {client.project}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>

              {/* Success Indicator */}
              <div className="flex items-center justify-center pt-4 border-t border-gray-200">
                <div className="flex items-center text-green-600">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Successfully Delivered</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your brand achieve similar success with our proven marketing strategies and creative solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
