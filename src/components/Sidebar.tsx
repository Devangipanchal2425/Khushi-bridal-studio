'use client';
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-black text-white md:min-h-screen flex flex-col justify-between p-8 flex-shrink-0 z-40">
      <div className="space-y-12">
        
        {/* LOGO CONTAINER - Ek hi jagah se update hoga */}
        <Link href="/" className="block bg-[#C3A492] p-4 text-center shadow-md hover:bg-[#b29381] transition-all">
          <img 
            src="/studio-logo.png" 
            alt="Khushi Makeover Logo" 
            className="w-full h-auto max-h-28 object-contain mx-auto"
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="flex flex-col space-y-5 text-xs font-semibold tracking-[0.25em] uppercase text-left">
          <Link href="/" className="text-gray-300 hover:text-[#EFA7B3] transition-colors">HOME</Link>
          <Link href="/about" className="text-gray-300 hover:text-[#EFA7B3] transition-colors">ABOUT</Link>
          <Link href="/services" className="text-gray-300 hover:text-[#EFA7B3] transition-colors">SERVICES</Link>
        </nav>
      </div>

      <div className="pt-8 border-t border-gray-800 space-y-3">
        <p className="text-[10px] text-gray-400 font-light">📍 South Bopal, Ahmedabad</p>
        <p className="text-[10px] text-gray-500 font-light">©2026 KHUSHI MAKEOVER</p>
      </div>
    </aside>
  );
}
