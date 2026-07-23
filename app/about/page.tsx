'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      
      {/* LEFT SIDEBAR (Inline Navigation & Logo) */}
      <aside className="w-full md:w-64 bg-black text-white flex flex-col justify-between p-6 shrink-0 md:min-h-screen">
        <div>
          {/* As-it-is Pink Logo Box from Screenshot */}
          <div className="bg-[#f2a6bb] p-6 text-center text-black mb-10 shadow-md rounded-xs">
            <h2 className="font-serif text-3xl font-bold tracking-widest leading-none">KP</h2>
            <p className="font-sans text-[10px] tracking-widest font-bold uppercase mt-2">
              KHUSHI PATEL
            </p>
            <p className="font-sans text-[7px] tracking-wider uppercase text-gray-800 font-semibold mt-0.5">
              MAKE-UP ARTIST
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 font-medium text-xs tracking-[0.2em] uppercase text-gray-300">
            <Link href="/" className="hover:text-[#f2a6bb] transition">HOME</Link>
            <Link href="/about" className="text-[#f2a6bb] font-bold">ABOUT</Link>
            <Link href="/services" className="hover:text-[#f2a6bb] transition">SERVICES</Link>
            <Link href="/portfolio" className="hover:text-[#f2a6bb] transition">PORTFOLIO</Link>
            <Link href="/contact" className="hover:text-[#f2a6bb] transition">CONTACT</Link>
          </nav>
        </div>

        {/* Bottom Social Icons */}
        <div className="flex gap-4 text-white text-xs pt-8 border-t border-gray-900 mt-10 md:mt-0">
          <a href="#" className="hover:text-[#f2a6bb] transition">📷</a>
          <a href="#" className="hover:text-[#f2a6bb] transition">f</a>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Image Section */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xs shadow-sm">
              <img
                src="/your-about-image.jpg" // Apni image ka exact path yahan daal do
                alt="Khushi Patel - Makeup Artist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Title & Socials */}
            <div>
              <p className="text-[#f2a6bb] tracking-widest text-xs font-semibold uppercase mb-1">
                KHUSHI PATEL
              </p>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-tight">
                  MAKEUP ARTIST
                </h1>
                
                <div className="flex gap-2 text-gray-600">
                  <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition text-xs">
                    📷
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition text-xs">
                    f
                  </a>
                </div>
              </div>
              <hr className="border-pink-100 my-4 w-full" />
            </div>

            {/* Paragraphs */}
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 font-sans">
              <p>
                Welcome to my creative universe of luxury bridal artistry. I am <strong className="text-gray-800 font-semibold">Khushi Patel</strong>, a high-definition makeup artist devoted to crafting timeless, ethereal, and personalized wedding transformations. My philosophy revolves around celebrating your natural elegance and enhancing the unique grace you already possess.
              </p>
              <p>
                Specializing in couture bridal looks, soft glam finishes, and contemporary hair sculpting, every makeover is thoughtfully designed to complement your wedding couture, personal aesthetic, and individual aura. From delicate skin-prep rituals to long-wear luxury cosmetics, every detail is seamlessly curated to ensure you look effortlessly radiant and feel truly unforgettable.
              </p>
              <p>
                To me, bridal makeup is far more than a technique—it is an intimate art form of capturing emotions, confidence, and joy. It is an absolute privilege to walk alongside you on your most cherished journey and make your dream bridal look come alive.
              </p>
            </div>

            {/* Highlights & Specialties Grid */}
            <div className="pt-6">
              <h3 className="text-[#f2a6bb] text-xs font-semibold tracking-widest uppercase mb-4">
                HIGHLIGHTS & SPECIALTIES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="border border-gray-100 p-4 rounded-xs text-center bg-gray-50/30">
                  <span className="text-xl mb-2 block">✨</span>
                  <h4 className="font-serif text-[10px] font-bold text-gray-800 uppercase">
                    LUXURY BRIDAL
                  </h4>
                  <p className="text-[8px] text-gray-400 mt-1 uppercase">COUTURE LOOKS</p>
                </div>

                <div className="border border-gray-100 p-4 rounded-xs text-center bg-gray-50/30">
                  <span className="text-xl mb-2 block">👑</span>
                  <h4 className="font-serif text-[10px] font-bold text-gray-800 uppercase">
                    ULTRA HD SKIN
                  </h4>
                  <p className="text-[8px] text-gray-400 mt-1 uppercase">CAMERA READY</p>
                </div>

                <div className="border border-gray-100 p-4 rounded-xs text-center bg-gray-50/30">
                  <span className="text-xl mb-2 block">💎</span>
                  <h4 className="font-serif text-[10px] font-bold text-gray-800 uppercase">
                    PREMIUM PRODUCTS
                  </h4>
                  <p className="text-[8px] text-gray-400 mt-1 uppercase">GLOBAL BRANDS</p>
                </div>

                <div className="border border-gray-100 p-4 rounded-xs text-center bg-gray-50/30">
                  <span className="text-xl mb-2 block">🕊️</span>
                  <h4 className="font-serif text-[10px] font-bold text-gray-800 uppercase">
                    CUSTOM GLAM
                  </h4>
                  <p className="text-[8px] text-gray-400 mt-1 uppercase">TAILORED BEAUTY</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
