import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <div>
        {/* Pink Logo Box */}
        <div className="bg-[#f2a6bb] p-6 text-center text-black mb-10 shadow-md">
          <h2 className="font-serif text-3xl font-bold tracking-widest">KP</h2>
          <p className="font-sans text-[10px] tracking-widest font-semibold uppercase mt-1">
            KHUSHI PATEL
          </p>
          <p className="font-sans text-[8px] tracking-wider uppercase text-gray-800">
            MAKE-UP ARTIST
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 font-medium text-sm tracking-widest uppercase">
          <Link href="/" className="hover:text-[#f2a6bb] transition">Home</Link>
          <Link href="/about" className="text-[#f2a6bb] transition">About</Link>
          <Link href="/services" className="hover:text-[#f2a6bb] transition">Services</Link>
          <Link href="/portfolio" className="hover:text-[#f2a6bb] transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#f2a6bb] transition">Contact</Link>
        </nav>
      </div>

      {/* Bottom Social Icons */}
      <div className="flex gap-4 text-white text-sm pt-6 border-t border-gray-800">
        <a href="#" className="hover:text-[#f2a6bb] transition">📷</a>
        <a href="#" className="hover:text-[#f2a6bb] transition">f</a>
      </div>
    </aside>
  );
}
