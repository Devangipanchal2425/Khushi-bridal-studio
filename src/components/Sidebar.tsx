'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. MOBILE HEADER (Only visible on small screens) */}
      <div className="md:hidden bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="bg-[#f2a6bb] px-3 py-1 text-black font-bold text-sm">
          KP MAKEUP
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black text-white p-6 flex flex-col gap-4 text-center">
          <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#f2a6bb]">ABOUT</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      )}

      {/* 2. LAPTOP/DESKTOP SIDEBAR (Hidden on mobile, visible on md screens & up) */}
      <aside className="hidden md:flex w-64 min-h-screen bg-black text-white flex-col justify-between p-6 sticky top-0 h-screen">
        <div>
          {/* Logo Box */}
          <div className="bg-[#f2a6bb] p-6 text-center text-black mb-10 shadow-md">
            <h2 className="font-serif text-3xl font-bold tracking-widest">KP</h2>
            <p className="font-sans text-[10px] tracking-widest font-semibold uppercase mt-1">
              KHUSHI PATEL
            </p>
            <p className="font-sans text-[8px] tracking-wider uppercase text-gray-800">
              MAKE-UP ARTIST
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6 font-medium text-sm tracking-widest uppercase">
            <Link href="/" className="hover:text-[#f2a6bb] transition">Home</Link>
            <Link href="/about" className="text-[#f2a6bb] transition">About</Link>
            <Link href="/services" className="hover:text-[#f2a6bb] transition">Services</Link>
            <Link href="/portfolio" className="hover:text-[#f2a6bb] transition">Portfolio</Link>
            <Link href="/contact" className="hover:text-[#f2a6bb] transition">Contact</Link>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-white text-sm pt-6 border-t border-gray-800">
          <a href="#" className="hover:text-[#f2a6bb] transition">📷</a>
          <a href="#" className="hover:text-[#f2a6bb] transition">f</a>
        </div>
      </aside>
    </>
  );
}
