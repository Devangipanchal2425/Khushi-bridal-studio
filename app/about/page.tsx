"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      
      {/* --- 1. LEFT SIDEBAR NAVIGATION --- */}
      <aside className="w-[260px] bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        
        {/* Logo Section */}
        <div>
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-bold tracking-wider">KP</h2>
            <p className="text-sm font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[10px] tracking-widest block mt-0.5">MAKE-UP ARTIST</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-12">
            <ul className="space-y-6 text-[13px] tracking-[3px] font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white font-semibold">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer & Socials */}
        <div className="text-center text-xs text-gray-500 space-y-4">
          <div className="flex justify-center space-x-5 text-white text-lg">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">
              📸
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">
              🌐
            </a>
          </div>
          <p className="text-[10px] tracking-widest">© 2026 MAKEUP ARTIST.</p>
        </div>
      </aside>

      {/* --- 2. RIGHT MAIN CONTENT AREA --- */}
      {/* `ml-[260px]` important hai taaki sidebar content ke upar na aaye */}
      <main className="ml-[260px] flex-1 p-8 md:p-16 flex items-center justify-center">
        
        {/* Grid matching the Aayushi Patel reference layout */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 items-start">
          
          {/* --- Image Column (Full Height Style) --- */}
          {/* Height badha di hai `h-[650px]` par taaki photo lambi dikhe */}
          <div className="relative w-full h-[650px] rounded shadow-md overflow-hidden">
            <Image
              src="/Khushi.jpeg" // Public folder wali image
              alt="Khushi Patel - Makeup Artist"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* --- Text Content Column --- */}
          <div className="space-y-8 pr-6">
            
            {/* Header section (Pink name + Big Title) */}
            <div>
              <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-xs uppercase">
                KHUSHI PATEL
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider text-gray-950 mt-2">
                MAKEUP ARTIST
              </h1>
            </div>

            {/* --- Exact Reference Style Paragraphs --- */}
            {/* Font size specific style similar to the ref image */}
            <div className="space-y-6 text-gray-700 text-[14px] leading-[1.9] tracking-wide">
              
              <p>
                I'm a passionate makeup artist based in <span className="font-semibold text-gray-800">Ahmedabad</span>, dedicating my craft to creating timeless and elegant beauty on a client's special day. With a natural ability to connect with each individual client, I feel truly privileged to be part of such a broad, dynamic, and creative field.
              </p>
              
              <p>
                Fully qualified as both a hair and makeup technician, my work spans a wide range of projects from intricate <span className="text-gray-900 font-medium">bridal styling</span> to high-fashion editorials and glam party transformations.
              </p>

              <p>
                My approach is to enhance unique features with high-quality products and modern techniques, ensuring every client feels confident and beautiful.
              </p>

            </div>

            {/* --- Specializations / Awards Section --- */}
            <div className="pt-6">
              <h4 className="text-[#f3a0ad] font-semibold text-[11px] tracking-[2px] uppercase mb-4">
                SPECIALIZATIONS
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-100 bg-gray-50/50 p-4 text-center rounded text-[11px] text-gray-600 tracking-wider">
                  HD BRIDAL
                </div>
                <div className="border border-gray-100 bg-gray-50/50 p-4 text-center rounded text-[11px] text-gray-600 tracking-wider">
                  AIRBRUSH
                </div>
                <div className="border border-gray-100 bg-gray-50/50 p-4 text-center rounded text-[11px] text-gray-600 tracking-wider">
                  HAIR STYLING
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
