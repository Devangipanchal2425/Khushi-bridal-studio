'use client';
import React from 'react';
import Sidebar from '../../src/components/Sidebar';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm shadow-sm">
              <img
                src="/your-about-image.jpg" // Apni image ka exact path yahan rakhein
                alt="Khushi Patel - Makeup Artist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: Details Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Title & Social Icons */}
            <div>
              <p className="text-[#f2a6bb] tracking-widest text-xs font-semibold uppercase mb-1">
                KHUSHI PATEL
              </p>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-tight">
                  MAKEUP ARTIST
                </h1>
                
                {/* Social Icons */}
                <div className="flex gap-2 text-gray-600">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-xs">
                    📷
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-xs">
                    f
                  </a>
                </div>
              </div>
              <hr className="border-pink-200 my-4 w-full" />
            </div>

            {/* Paragraphs (Exact Text from Screenshot) */}
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 font-sans">
              <p>
                Welcome to my creative universe of luxury bridal artistry. I am <strong className="text-gray-800">Khushi Patel</strong>, a high-definition makeup artist devoted to crafting timeless, ethereal, and personalized wedding transformations. My philosophy revolves around celebrating your natural elegance and enhancing the unique grace you already possess.
              </p>
              <p>
                Specializing in couture bridal looks, soft glam finishes, and contemporary hair sculpting, every makeover is thoughtfully designed to complement your wedding couture, personal aesthetic, and individual aura. From delicate skin-prep rituals to long-wear luxury cosmetics, every detail is seamlessly curated to ensure you look effortlessly radiant and feel truly unforgettable.
              </p>
              <p>
                To me, bridal makeup is far more than a technique—it is an intimate art form of capturing emotions, confidence, and joy. It is an absolute privilege to walk alongside you on your most cherished journey and make your dream bridal look come alive.
              </p>
            </div>

            {/* Highlights & Specialties Section */}
            <div className="pt-6">
              <h3 className="text-[#f2a6bb] text-xs font-semibold tracking-widest uppercase mb-4">
                HIGHLIGHTS & SPECIALTIES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Card 1 */}
                <div className="border border-gray-100 p-4 rounded-md text-center shadow-xs">
                  <span className="text-2xl mb-2 block">✨</span>
                  <h4 className="font-serif text-[11px] font-bold text-gray-800 uppercase">
                    LUXURY BRIDAL
                  </h4>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase">COUTURE LOOKS</p>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-100 p-4 rounded-md text-center shadow-xs">
                  <span className="text-2xl mb-2 block">👑</span>
                  <h4 className="font-serif text-[11px] font-bold text-gray-800 uppercase">
                    ULTRA HD SKIN
                  </h4>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase">CAMERA READY</p>
                </div>

                {/* Card 3 */}
                <div className="border border-gray-100 p-4 rounded-md text-center shadow-xs">
                  <span className="text-2xl mb-2 block">💎</span>
                  <h4 className="font-serif text-[11px] font-bold text-gray-800 uppercase">
                    PREMIUM PRODUCTS
                  </h4>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase">GLOBAL BRANDS</p>
                </div>

                {/* Card 4 */}
                <div className="border border-gray-100 p-4 rounded-md text-center shadow-xs">
                  <span className="text-2xl mb-2 block">🕊️</span>
                  <h4 className="font-serif text-[11px] font-bold text-gray-800 uppercase">
                    CUSTOM GLAM
                  </h4>
                  <p className="text-[9px] text-gray-400 mt-1 uppercase">TAILORED BEAUTY</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
