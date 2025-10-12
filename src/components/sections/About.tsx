import { businessInfo } from '@/data/business-info';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About {businessInfo.name}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are passionate about creating exceptional media experiences that drive business growth and connect brands with their audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Transforming Ideas Into Impactful Media
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                With over 8 years of experience in the media industry, {businessInfo.name} has established itself as a trusted partner for businesses looking to elevate their brand presence and engage their target audience effectively.
              </p>
              <p>
                Our team of creative professionals combines strategic thinking with cutting-edge technology to deliver media solutions that not only look great but also drive measurable results for our clients.
              </p>
              <p>
                From startups to Fortune 500 companies, we&apos;ve helped businesses across various industries tell their stories, build their brands, and achieve their marketing objectives through compelling media content.
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Creative Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Strategic Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Proven Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">Client-Focused</span>
              </div>
            </div>
          </div>

          {/* Visual Element with Professional Photo */}
          <div className="relative space-y-8">
            {/* Professional Portrait */}
            <div className="relative">
              <div className="relative w-80 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/influencers/professional_potrait.jpg"
                  alt="Professional Portrait"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-blue-100 mb-6">
                  To empower businesses with compelling media content that drives engagement, builds brand loyalty, and delivers measurable results.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">{businessInfo.stats[0].value}</div>
                    <div className="text-blue-200 text-sm">{businessInfo.stats[0].label}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{businessInfo.stats[1].value}</div>
                    <div className="text-blue-200 text-sm">{businessInfo.stats[1].label}</div>
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
