'use client';
import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const phoneNumber = "919870085600";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;

  return (
    <div className="flex h-[100dvh] w-full bg-[#1e1e1e] overflow-hidden text-white select-none">
      
      {/* 1. LEFT SIDEBAR (Menu Section - Width reduced to ~38% on mobile) */}
      <aside className="w-[38%] min-w-[145px] max-w-[240px] bg-black h-full flex flex-col justify-between p-3 sm:p-5 border-r border-white/10 z-20 shrink-0">
        
        {/* Top Branding Card */}
        <div className="bg-[#5c0f1e] text-white rounded-md p-2.5 sm:p-4 text-center shadow-md">
          <h1 className="font-serif text-lg sm:text-2xl font-bold tracking-wider">KP</h1>
          <p className="text-[10px] sm:text-xs tracking-widest font-medium uppercase mt-0.5">KHUSHI PATEL</p>
          <p className="text-[8px] sm:text-[10px] text-white/70 uppercase tracking-tight">BRIDAL STUDIO & SALON</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-3 sm:space-y-4 my-auto py-2 text-[11px] sm:text-sm font-sans tracking-widest uppercase">
          <Link href="/" className="text-white/70 hover:text-white transition-colors">HOME</Link>
          <Link href="/about" className="text-white/70 hover:text-white transition-colors">ABOUT</Link>
          <Link href="/services" className="text-[#EFA7B3] font-semibold">SERVICES</Link>
          <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors">PORTFOLIO</Link>
          <Link href="/contact" className="text-white/70 hover:text-white transition-colors">CONTACT</Link>
        </nav>

        {/* Bottom Socials & Address */}
        <div className="pt-2 border-t border-white/15 space-y-2 text-[9px] sm:text-xs text-white/70">
          <div className="flex items-center space-x-2">
            <a href="https://instagram.com/khushiimakeover_official" target="_blank" rel="noreferrer">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/></svg>
            </a>
          </div>
          <p className="leading-tight text-[8px] sm:text-[10px]">📍 South Bopal, Ahmedabad</p>
          <p className="text-[7px] sm:text-[9px] text-white/50">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* 2. RIGHT CONTENT AREA (Remaining ~62% width for Services) */}
      <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 bg-[#262626]">
        {/* Studio Menu & Packages content goes here */}
        <div className="space-y-4">
          <div>
            <p className="text-[#EFA7B3] text-[10px] tracking-widest uppercase">STUDIO MENU &</p>
            <h2 className="text-white font-serif text-xl sm:text-3xl font-light uppercase leading-tight">
              SERVICES & PACKAGES
            </h2>
            <div className="w-10 h-[2px] bg-[#5c0f1e] mt-2"></div>
          </div>

          {/* Cards List */}
          <div className="space-y-3 pt-2">
            <button className="w-full bg-[#333] hover:bg-[#3d3d3d] text-white p-3 rounded-md text-left text-xs font-medium flex items-center justify-between">
              <span>👑 BRIDAL & FUNCTION</span>
            </button>
            <button className="w-full bg-[#333] hover:bg-[#3d3d3d] text-white p-3 rounded-md text-left text-xs font-medium flex items-center justify-between">
              <span>💆‍♀️ KOREAN HAIR THERAPY</span>
            </button>
            <button className="w-full bg-[#333] hover:bg-[#3d3d3d] text-white p-3 rounded-md text-left text-xs font-medium flex items-center justify-between">
              <span>🌸 PRE-BRIDAL SPA</span>
            </button>
            <button className="w-full bg-[#5c0f1e] text-white p-3 rounded-md text-left text-xs font-medium flex items-center justify-between">
              <span>💄 SALON MENU SKIN, NAILS</span>
            </button>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Icon */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-4 right-4 z-30 w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl"
      >
        <svg className="w-6 h-6 fill-white" viewBox="0 0 32 32">
          <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
        </svg>
      </a>

    </div>
  );
}
