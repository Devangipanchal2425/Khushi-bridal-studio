"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        
        {/* Logo Section */}
        <div>
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-bold tracking-wider">KP</h2>
            <p className="text-sm font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[10px] tracking-widest block mt-0.5">MAKE-UP ARTIST</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-10">
            <ul className="space-y-5 text-sm tracking-widest font-medium">
              <li>
                <Link href="/" className="hover:text-[#f3a0ad] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#f3a0ad] font-semibold">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f3a0ad] transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#f3a0ad] transition-colors">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f3a0ad] transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer & Socials */}
        <div className="text-center text-xs text-gray-400 space-y-3">
          <div className="flex justify-center space-x-4 text-white text-base">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">
              📸
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">
              🌐
            </a>
          </div>
          <p className="text-[10px] tracking-wider">© 2026 MAKEUP ARTIST.</p>
        </div>
      </aside>

      {/* 2. RIGHT MAIN CONTENT AREA */}
      <main className="ml-64 flex-1 p-8 lg:p-16 flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Box */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Khushi.jpeg" // Public folder se image call ho rahi hai
              alt="Khushi Patel - Makeup Artist"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <span className="text-[#f3a0ad] font-semibold tracking-widest text-sm uppercase">
                Khushi Patel
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-wider text-gray-900 mt-1">
                MAKEUP ARTIST
              </h1>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              I'm a passionate makeup artist based in Ahmedabad, dedicated to creating timeless and elegant looks for brides on their special day. With a keen eye for detail and high-quality techniques, I strive to highlight each client's unique features.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Fully qualified in modern bridal hair and makeup styling, my work spans across pre-wedding shoots, grand bridal makeovers, and glam party looks.
            </p>

            {/* Highlights / Awards Section */}
            <div className="pt-4">
              <h4 className="text-[#f3a0ad] font-semibold text-xs tracking-widest uppercase mb-3">
                SPECIALIZATIONS
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-gray-200 p-3 text-center rounded text-xs text-gray-600">
                  HD Bridal
                </div>
                <div className="border border-gray-200 p-3 text-center rounded text-xs text-gray-600">
                  Airbrush
                </div>
                <div className="border border-gray-200 p-3 text-center rounded text-xs text-gray-600">
                  Hair Styling
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
