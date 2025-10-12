'use client';

import { motion } from 'framer-motion';
import { businessInfo } from '@/data/business-info';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-modern">
      <div className="container-max">
        <AnimatedSection className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-subtitle max-w-2xl mx-auto text-gray-300"
            variants={fadeInUp}
          >
            We offer comprehensive media solutions tailored to meet your business needs and drive meaningful results.
          </motion.p>
        </AnimatedSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {businessInfo.services.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="card-modern group"
            >
              <div className="text-center">
                {/* Modern Icon with Glassmorphism */}
                <motion.div
                  className="text-4xl mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    color: 'var(--primary)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Clean Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>

                {/* Minimal Description */}
                <p className="text-gray-300 mb-6 leading-relaxed opacity-90">
                  {service.description}
                </p>

                {/* Clean Features List */}
                <ul className="space-y-2 mb-8 text-left">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Minimal CTA */}
                <div className="text-center">
                  <motion.button
                    className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors duration-200 group-hover:underline"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clean CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our media solutions can help you achieve your business goals and connect with your audience in meaningful ways.
            </p>
            <button className="btn-primary">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
