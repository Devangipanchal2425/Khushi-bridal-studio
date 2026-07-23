'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919870085600";

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      
      {/* 1. MOBILE HEADER */}
      <div 
        className="md:hidden p-4 flex justify-between items-center sticky top-0 z-50"
        style={{ backgroundColor: '#000000' }}
      >
        <div 
          className="px-4 py-2 text-center text-black font-bold rounded-xs"
          style={{ backgroundColor: '#f2a6bb' }}
        >
          <span className="font-serif text-lg tracking-widest block leading-none">KP</span>
          <span className="text-[8px] tracking-wider uppercase block font-sans mt-0.5">KHUSHI PATEL</span>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none px-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden text-white p-6 flex flex-col gap-5 text-center font-medium tracking-widest text-sm uppercase border-b border-gray-800"
          style={{ backgroundColor: '#000000' }}
        >
          <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} style={{ color: '#f2a6bb' }}>SERVICES</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      )}

      {/* 2. LAPTOP / DESKTOP SIDEBAR */}
      <aside 
        className="hidden md:flex w-64 text-white flex-col justify-between p-6 sticky top-0 h-screen shrink-0"
        style={{ backgroundColor: '#000000' }}
      >
        <div>
          {/* Pink Logo Box */}
          <div 
            className="p-6 text-center text-black mb-10 shadow-md rounded-xs"
            style={{ backgroundColor: '#f2a6bb' }}
          >
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
            <Link href="/about" className="hover:text-[#f2a6bb] transition">ABOUT</Link>
            <Link href="/services" style={{ color: '#f2a6bb' }} className="font-bold">SERVICES</Link>
            <Link href="/portfolio" className="hover:text-[#f2a6bb] transition">PORTFOLIO</Link>
            <Link href="/contact" className="hover:text-[#f2a6bb] transition">CONTACT</Link>
          </nav>
        </div>

        {/* Bottom Social Icons */}
        <div className="flex gap-4 text-white text-xs pt-8 border-t border-gray-900">
          <a href="#" className="hover:text-[#f2a6bb] transition">📷</a>
          <a href="#" className="hover:text-[#f2a6bb] transition">f</a>
        </div>
      </aside>

      {/* 3. MAIN SERVICES CONTENT */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-6xl">
        <p className="text-[#f2a6bb] tracking-widest text-xs font-semibold uppercase mb-1">
          KHUSHI PATEL
        </p>
        <h1 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-tight mb-4">
          SERVICES
        </h1>
        <hr className="border-pink-100 my-4 w-full" />
        
        <p className="text-gray-600 text-sm leading-relaxed mt-4">
          Luxury bridal makeup, couture styling, and high-definition glam packages tailored for your special day.
        </p>
      </main>

    </div>
  );
}
