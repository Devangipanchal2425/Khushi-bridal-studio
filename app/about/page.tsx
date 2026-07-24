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
      <main className="ml-[260px] flex-1 p-8 md:p-16 flex items-center justify-center">
        
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 items-start">
          
          {/* --- Image Column (Tall Portrait Look) --- */}
          <div className="relative w-full h-[680px] rounded shadow-md overflow-hidden">
            <Image
              src="/Khushi.jpeg" // Public folder wali image
              alt="Khushi Patel - Professional Makeup Artist"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* --- Text Content Column --- */}
          <div className="space-y-6 pr-6">
            
            {/* Header section (Pink name + Big Title) */}
            <div>
              <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-xs uppercase">
                KHUSHI PATEL
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-wider text-gray-950 mt-2">
                MAKEUP ARTIST
              </h1>
            </div>

            {/* --- Heartfelt & Praise-filled Content Paragraphs --- */}
            <div className="space-y-5 text-gray-600 text-[14px] leading-[1.8] tracking-wide">
              
              <p>
                I’m <span className="text-gray-900 font-semibold">Khushi Patel</span>, a passionate and visionary makeup artist based in <span className="text-gray-900 font-semibold">Ahmedabad</span>. Artistry for me isn’t just about applying makeup—it’s about discovering and celebrating the unique beauty that every individual naturally possesses. I feel deeply privileged to turn high-end glamor into an unforgettable personal story for every bride I meet.
              </p>
              
              <p>
                Known for my meticulous eye for detail, flawless skin finishes, and mastery in blending modern elegance with timeless traditions, my work spans luxury bridal transformations, editorial fashion shoots, and high-profile glam looks. Each brushstroke is executed with passion, precision, and the finest luxury products to ensure perfection that lasts all day.
              </p>

              <p>
                Over the years, my dedication to enhancing every client's natural elegance has earned me recognition as one of the most trusted and sought-after creative talents in the beauty industry. My goal is simple: to make you feel like the absolute best, most confident version of yourself on your most special day.
              </p>

            </div>

            {/* --- Exact Reference Style AWARDS Section --- */}
            <div className="pt-4">
              <h4 className="text-[#f3a0ad] font-semibold text-[11px] tracking-[3px] uppercase mb-4">
                AWARDS
              </h4>
              <div className="grid grid-cols-4 gap-3">
                <div className="border border-gray-200 bg-white p-3 text-center rounded flex flex-col items-center justify-center min-h-[70px] shadow-sm hover:border-[#f3a0ad] transition-all">
                  <span className="text-xs font-bold text-gray-800">THE BEAUTY</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">AWARDS 2023</span>
                </div>
                <div className="border border-gray-200 bg-white p-3 text-center rounded flex flex-col items-center justify-center min-h-[70px] shadow-sm hover:border-[#f3a0ad] transition-all">
                  <span className="text-xs font-bold text-[#f3a0ad]">BEST BRIDAL</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">ARTIST 2024</span>
                </div>
                <div className="border border-gray-200 bg-white p-3 text-center rounded flex flex-col items-center justify-center min-h-[70px] shadow-sm hover:border-[#f3a0ad] transition-all">
                  <span className="text-xs font-bold text-gray-800">GLAMOUR</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">EXCELLENCE 2025</span>
                </div>
                <div className="border border-gray-200 bg-white p-3 text-center rounded flex flex-col items-center justify-center min-h-[70px] shadow-sm hover:border-[#f3a0ad] transition-all">
                  <span className="text-xs font-bold text-gray-800">OFFICIAL</span>
                  <span className="text-[9px] text-gray-400 mt-0.5">MAKEUP AWARD</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
