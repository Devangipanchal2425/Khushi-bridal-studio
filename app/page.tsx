'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const brideImageUrl = "/bride.jpeg";
  const phoneNumber = "919870085600";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20bridal%20makeup%20services.`;

  return (
    <main className="fixed inset-0 h-full w-full bg-black overflow-hidden select-none">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('${brideImageUrl}')`,
          backgroundColor: '#1a1a1a', 
          filter: 'brightness(0.65)' 
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-5 sm:p-8 box-border">
        
        {/* TOP ROW: Menu Button (Top Left) */}
        <div className="w-full flex justify-start items-center pt-1">
          <Link 
            href="/about"
            aria-label="Open Menu"
            className="w-11 h-11 rounded-full bg-[#5c0f1e] text-white flex flex-col items-center justify-center space-y-1 shadow-lg border border-white/10 active:scale-95 transition-all"
          >
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </Link>
        </div>

        {/* CENTER CONTENT */}
        <div className="w-full max-w-md my-auto text-left space-y-3 pl-1">
          <div className="space-y-2">
            <div className="w-10 h-[2px] bg-[#EFA7B3]"></div>
            <h2 className="text-[#EFA7B3] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
              KHUSHI PATEL
            </h2>
          </div>

          <h1 className="text-white font-serif text-3xl sm:text-5xl uppercase font-normal leading-tight">
            MAKEUP ARTIST
          </h1>

          <div className="pt-3">
            <Link 
              href="/about"
              className="bg-[#5c0f1e] text-white tracking-widest text-xs uppercase px-6 py-3 shadow-md rounded-sm font-medium inline-block border border-white/10 active:scale-95 transition-all"
            >
              ABOUT ME
            </Link>
          </div>
        </div>

        {/* BOTTOM ROW: Social Links & WhatsApp */}
        <div className="w-full flex items-center justify-between pb-1">
          <div className="flex items-center space-x-3">
            <a 
              href="https://instagram.com/khushiimakeover_official" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
              </svg>
            </a>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 32 32">
              <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
