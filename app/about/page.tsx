'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const brideImageUrl = "/bride.jpeg";
  const artistImageUrl = "/khushi.jpeg";

  const phoneNumber = "919870085600";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20bridal%20makeup%20services.`;

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col md:flex-row font-sans selection:bg-[#D46A83] selection:text-white">
      
      {/* LEFT SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-black text-white md:min-h-screen flex flex-col justify-between p-8 flex-shrink-0 z-40">
        <div className="space-y-12">
          {/* Logo Box - Links back to Home */}
          <Link href="/" className="block bg-[#EFA7B3] text-black p-6 text-center shadow-md hover:bg-[#d88c99] transition-all">
            <h1 className="font-serif text-3xl tracking-wider font-bold">KP</h1>
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mt-1">KHUSHI PATEL</h2>
            <p className="text-[8px] uppercase tracking-widest text-gray-800 mt-0.5">Make-Up Artist</p>
          </Link>

          {/* Navigation Menu */}
          <nav className="flex flex-col space-y-5 text-xs font-semibold tracking-[0.25em] uppercase text-left">
            <Link href="/" className="text-gray-300 hover:text-[#EFA7B3] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-[#EFA7B3]">
              ABOUT
            </Link>
            <span className="text-gray-500 cursor-not-allowed">SERVICES</span>
            <span className="text-gray-500 cursor-not-allowed">PORTFOLIO</span>
            <span className="text-gray-500 cursor-not-allowed">CONTACT</span>
          </nav>
        </div>

        {/* Sidebar Footer Social Links */}
        <div className="pt-8 border-t border-gray-800 space-y-3">
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/khushimakeover_official" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
              </svg>
            </a>
          </div>
          <p className="text-[10px] text-gray-500 font-light">©2026 KHUSHI PATEL</p>
        </div>
      </aside>

      {/* RIGHT MAIN CONTENT AREA */}
      <main className="flex-1 bg-white p-6 md:p-16 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-12 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Portrait Photo */}
            <div className="lg:col-span-5">
              <div className="w-full h-[450px] md:h-[550px] bg-gray-100 overflow-hidden shadow-sm">
                <img 
                  src={artistImageUrl} 
                  alt="Khushi Patel" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = brideImageUrl;
                  }}
                />
              </div>
            </div>

            {/* Right Column: Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[#EFA7B3] text-sm md:text-base font-medium tracking-[0.25em] uppercase">
                    KHUSHI PATEL
                  </h3>
                  <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-black mt-1 uppercase font-normal">
                    MAKEUP ARTIST
                  </h2>
                  <div className="w-16 h-[2px] bg-[#EFA7B3] mt-3"></div>
                </div>

                <div className="flex items-center space-x-2">
                  <a 
                    href="https://instagram.com/khushimakeover_official" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#EFA7B3] hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#EFA7B3] hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                      <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-light pt-2">
                <p>
                  Welcome to my creative universe of luxury bridal artistry. I am <strong className="text-black font-normal">Khushi Patel</strong>, a high-definition makeup artist devoted to crafting timeless, ethereal, and personalized wedding transformations. My philosophy revolves around celebrating your natural elegance and enhancing the unique grace you already possess.
                </p>
                <p>
                  Specializing in couture bridal looks, soft glam finishes, and contemporary hair sculpting, every makeover is thoughtfully designed to complement your wedding couture, personal aesthetic, and individual aura. From delicate skin-prep rituals to long-wear luxury cosmetics, every detail is seamlessly curated to ensure you look effortlessly radiant and feel truly unforgettable.
                </p>
                <p>
                  To me, bridal makeup is far more than a technique—it is an intimate art form of capturing emotions, confidence, and joy. It is an absolute privilege to walk alongside you on your most cherished journey and make your dream bridal look come alive.
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#EFA7B3]">
                  HIGHLIGHTS & SPECIALTIES
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="border border-gray-100 bg-white p-4 text-center rounded-sm hover:border-[#EFA7B3] transition-all flex flex-col items-center justify-center space-y-1">
                    <span className="text-lg">✨</span>
                    <p className="text-[10px] font-serif font-bold text-gray-800">LUXURY BRIDAL</p>
                    <p className="text-[8px] text-gray-400 uppercase">COUTURE LOOKS</p>
                  </div>

                  <div className="border border-gray-100 bg-white p-4 text-center rounded-sm hover:border-[#EFA7B3] transition-all flex flex-col items-center justify-center space-y-1">
                    <span className="text-lg">👑</span>
                    <p className="text-[10px] font-serif font-bold text-gray-800">ULTRA HD SKIN</p>
                    <p className="text-[8px] text-gray-400 uppercase">CAMERA READY</p>
                  </div>

                  <div className="border border-gray-100 bg-white p-4 text-center rounded-sm hover:border-[#EFA7B3] transition-all flex flex-col items-center justify-center space-y-1">
                    <span className="text-lg">💎</span>
                    <p className="text-[10px] font-serif font-bold text-gray-800">PREMIUM PRODUCTS</p>
                    <p className="text-[8px] text-gray-400 uppercase">GLOBAL BRANDS</p>
                  </div>

                  <div className="border border-gray-100 bg-white p-4 text-center rounded-sm hover:border-[#EFA7B3] transition-all flex flex-col items-center justify-center space-y-1">
                    <span className="text-lg">🕊️</span>
                    <p className="text-[10px] font-serif font-bold text-gray-800">CUSTOM GLAM</p>
                    <p className="text-[8px] text-gray-400 uppercase">TAILORED BEAUTY</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Logo */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32">
          <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
        </svg>
      </a>

    </div>
  );
}
