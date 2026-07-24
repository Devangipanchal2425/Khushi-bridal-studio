'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const brideImageUrl = "/bride.jpeg";
  const phoneNumber = "919870085600";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20bridal%20makeup%20services.`;

  return (
    <div className="h-screen h-[100dvh] w-screen max-w-[100vw] bg-black relative flex flex-col justify-between p-4 sm:p-6 md:p-8 overflow-hidden animate-fadeIn select-none">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500"
        style={{ 
          backgroundImage: `url('${brideImageUrl}')`,
          backgroundColor: '#1a1a1a', 
          filter: 'brightness(0.7)' 
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Top Header Row - Top Left Pink Menu Button */}
      <div className="relative z-10 flex justify-start items-center w-full pt-1 sm:pt-2">
        <Link 
          href="/about"
          aria-label="Open Menu"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EFA7B3] text-black flex flex-col items-center justify-center space-y-1 shadow-md hover:bg-[#d88c99] transition-all"
        >
          <span className="w-4 sm:w-5 h-[2px] bg-black"></span>
          <span className="w-4 sm:w-5 h-[2px] bg-black"></span>
          <span className="w-4 sm:w-5 h-[2px] bg-black"></span>
        </Link>
      </div>

      {/* Central Content (Mobile safe font sizes & line spacing) */}
      <div className="relative z-10 my-auto text-left pl-1 sm:pl-4 w-full max-w-xl space-y-2 sm:space-y-3 py-4">
        <div className="space-y-1.5 sm:space-y-3">
          <div className="w-10 sm:w-16 h-[2px] bg-[#EFA7B3]"></div>
          <h2 className="text-[#EFA7B3] text-[11px] sm:text-sm md:text-base font-medium tracking-[0.25em] sm:tracking-[0.35em] uppercase font-sans">
            KHUSHI PATEL
          </h2>
        </div>

        <h1 className="text-white font-serif text-2xl sm:text-5xl md:text-6xl tracking-wide uppercase font-light leading-tight">
          MAKEUP ARTIST
        </h1>

        <div className="pt-3 sm:pt-6">
          <Link 
            href="/about"
            className="bg-[#EFA7B3] text-black hover:bg-[#d88c99] font-sans tracking-widest text-[11px] sm:text-xs uppercase px-5 sm:px-8 py-2.5 sm:py-3.5 transition-all shadow-lg rounded-sm font-semibold inline-block"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Bottom Social Bar & WhatsApp Logo */}
      <div className="relative z-10 flex items-center justify-between w-full pb-1 sm:pb-2">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a 
            href="https://instagram.com/khushiimakeover_official" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
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
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
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
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white" viewBox="0 0 32 32">
            <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
