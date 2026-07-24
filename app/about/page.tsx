'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const phoneNumber = "919870085600";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20bridal%20makeup%20services.`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-auto md:h-screen w-full bg-white select-none overflow-x-hidden md:overflow-hidden">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-full md:w-[260px] lg:w-[280px] bg-black text-white flex flex-col justify-between p-6 md:p-8 shrink-0 md:h-full z-20">
        
        {/* Top Branding Box */}
        <div className="bg-[#EFA7B3] text-black p-5 text-center shadow-sm">
          <h1 className="font-serif text-3xl font-bold tracking-widest leading-none">KP</h1>
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase mt-2">KHUSHI PATEL</h2>
          <p className="text-[9px] tracking-widest uppercase font-medium mt-0.5 text-black/70">MAKE-UP ARTIST</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-5 my-8 md:my-auto text-xs tracking-[0.25em] font-medium uppercase">
          <Link href="/" className="text-white/70 hover:text-white transition-colors">HOME</Link>
          <Link href="/about" className="text-[#EFA7B3] font-semibold">ABOUT</Link>
          <Link href="/services" className="text-white/70 hover:text-white transition-colors">SERVICES</Link>
          <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors">PORTFOLIO</Link>
          <Link href="/contact" className="text-white/70 hover:text-white transition-colors">CONTACT</Link>
        </nav>

        {/* Footer Socials */}
        <div className="pt-4 border-t border-white/20 flex items-center space-x-4">
          <a href="https://instagram.com/khushiimakeover_official" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/80 hover:text-white transition-colors">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/80 hover:fill-white transition-colors">
              <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* 2. RIGHT MAIN CONTENT */}
      <main className="flex-1 bg-white p-6 sm:p-10 md:p-12 lg:p-16 overflow-y-auto h-full text-gray-800">
        
        {/* Top Section: Photo + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Profile Image (45% screen width on large screens) */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden shadow-sm">
              <img 
                src="/Khushi.jpeg" 
                alt="Khushi Patel - Makeup Artist" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header & Social Icons */}
            <div className="flex justify-between items-start pt-1">
              <div>
                <p className="text-[#EFA7B3] text-xs md:text-sm tracking-[0.3em] font-medium uppercase">
                  KHUSHI PATEL
                </p>
                <h1 className="text-black font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase mt-1 font-normal leading-tight">
                  MAKEUP ARTIST
                </h1>
                <div className="w-12 h-[2px] bg-[#EFA7B3] mt-3"></div>
              </div>

              {/* Small Top Right Social Buttons */}
              <div className="flex items-center space-x-2 pt-1">
                <a href="https://instagram.com/khushiimakeover_official" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-2">
              <p>
                Welcome to my creative universe of luxury bridal artistry. I am <strong className="text-black font-semibold">Khushi Patel</strong>, a high-definition makeup artist devoted to crafting timeless, ethereal, and personalized wedding transformations. My philosophy revolves around celebrating your natural elegance and enhancing the unique grace you already possess.
              </p>
              <p>
                Specializing in couture bridal looks, soft glam finishes, and contemporary hair sculpting, every makeover is thoughtfully designed to complement your wedding couture, personal aesthetic, and individual aura. From delicate skin-prep rituals to long-wear luxury cosmetics, every detail is seamlessly curated to ensure you look effortlessly radiant and feel truly unforgettable.
              </p>
              <p>
                To me, bridal makeup is far more than a technique—it is an intimate art form of capturing emotions, confidence, and joy. It is an absolute privilege to walk alongside you on your most cherished journey and make your dream bridal look come alive.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="pt-6">
              <h3 className="text-[#EFA7B3] text-[11px] tracking-[0.25em] font-medium uppercase mb-4">
                HIGHLIGHTS & SPECIALTIES
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Card 1 */}
                <div className="border border-gray-100 rounded-sm p-4 text-center bg-gray-50/50 hover:border-gray-200 transition-all">
                  <div className="text-lg mb-2">✨</div>
                  <h4 className="text-[11px] font-serif font-bold text-black tracking-wider uppercase leading-tight">LUXURY BRIDAL</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">COUTURE LOOKS</p>
                </div>

                {/* Card 2 */}
                <div className="border border-gray-100 rounded-sm p-4 text-center bg-gray-50/50 hover:border-gray-200 transition-all">
                  <div className="text-lg mb-2">👑</div>
                  <h4 className="text-[11px] font-serif font-bold text-black tracking-wider uppercase leading-tight">ULTRA HD SKIN</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">CAMERA READY</p>
                </div>

                {/* Card 3 */}
                <div className="border border-gray-100 rounded-sm p-4 text-center bg-gray-50/50 hover:border-gray-200 transition-all">
                  <div className="text-lg mb-2">💎</div>
                  <h4 className="text-[11px] font-serif font-bold text-black tracking-wider uppercase leading-tight">PREMIUM PRODUCTS</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">GLOBAL BRANDS</p>
                </div>

                {/* Card 4 */}
                <div className="border border-gray-100 rounded-sm p-4 text-center bg-gray-50/50 hover:border-gray-200 transition-all">
                  <div className="text-lg mb-2">🕊️</div>
                  <h4 className="text-[11px] font-serif font-bold text-black tracking-wider uppercase leading-tight">CUSTOM GLAM</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">TAILORED BEAUTY</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 32 32">
          <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
        </svg>
      </a>

    </div>
  );
}
