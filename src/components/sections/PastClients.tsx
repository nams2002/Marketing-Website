'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { businessInfo } from '@/data/business-info';

export default function PastClients() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="past-clients" className="relative py-24">
      {/* background image */}
      <div className="absolute inset-0">
        <Image src="/bg/photo-1493305457700-d3d24daf8c8c.avif" alt="catalog bg" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Past Clients
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We&apos;ve had the privilege of working with some amazing brands across various industries. Here are some of our successful partnerships.
          </p>
        </div>

        {/* moving catalogue rows */}
        <div className="space-y-6">
          {[0,1].map((row) => (
            <div key={row} className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: row === 0 ? ['0%','-50%'] : ['-50%','0%'] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                {/* ensure each card fully visible: add side padding gutter */}
                <div className="shrink-0 w-4" />
                {[...businessInfo.pastClients, ...businessInfo.pastClients].map((client, i) => (
                  <div
                    key={`${client.id}-${row}-${i}`}
                    className="group relative shrink-0 w-[360px] rounded-2xl p-6 shadow-sm hover:shadow transition-all duration-300 border border-gray-200 bg-white/70 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-[radial-gradient(circle_at_20%_10%,#000,transparent_35%),radial-gradient(circle_at_80%_90%,#000,transparent_35%)]" />
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                        <div className="text-xs text-gray-500">{client.industry}</div>
                      </div>
                      <div className="w-12 h-12 relative">
                        <Image 
                          src={client.logo} 
                          alt={`${client.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium text-gray-800">{client.project}</div>
                      <p className="text-gray-600 line-clamp-3">{client.description}</p>
                    </div>
                    {/* <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">★ 4.9</span>
                      <span className="underline underline-offset-4 text-blue-600">View details</span>
                    </div> */}
                  </div>
                ))}
                <div className="shrink-0 w-4" />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="rounded-2xl border border-gray-200 p-8 bg-white/70 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Want your brand in this catalogue?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Let&apos;s discuss how we can help your brand achieve similar success with our proven marketing strategies and creative solutions.</p>
            <button 
              onClick={scrollToContact}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
