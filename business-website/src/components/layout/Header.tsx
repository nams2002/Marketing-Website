'use client';

import { useState } from 'react';
import Link from 'next/link';
import { businessInfo, navigationItems } from '@/data/business-info';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    }}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Modern Logo */}
          <div className="flex items-center">
            <Link href="#home" className="text-2xl font-bold text-gradient tracking-tight">
              {businessInfo.name}
            </Link>
          </div>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Modern CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Modern Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-xl hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Modern Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 bg-black/95 backdrop-blur-xl border-t border-gray-800">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="btn-primary block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
