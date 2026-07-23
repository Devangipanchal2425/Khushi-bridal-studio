"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const whatsappNumber = "9870085600";
  const whatsappMessage = encodeURIComponent(
    "Hello Khushi! I would like to inquire about your makeup services."
  );

  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      
      {/* --- 1. LEFT SIDEBAR NAVIGATION --- */}
      <aside className="w-[260px] bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        <div>
          {/* Logo Badge */}
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-serif font-bold tracking-wider">KP</h2>
            <p className="text-xs font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[9px] tracking-widest block mt-0.5">MAKE-UP ARTIST</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-12">
            <ul className="space-y-6 text-[12px] tracking-[3px] font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#f3a0ad] font-bold">ABOUT</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">PORTFOLIO</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="text-xs text-gray-400 space-y-4 border-t border-gray-800 pt-4">
          <div className="flex space-x-4 text-white text-sm">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">📸</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">🌐</a>
          </div>
        </div>
      </aside>

      {/* --- 2. MAIN ABOUT CONTENT AREA --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-14 max-w-6xl mx-auto relative">
        
        {/* Top Right Social Icons */}
        <div className="absolute top-8 right-12 flex space-x-3 text-gray-500 text-sm">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f3a0ad] hover:text-black transition-all">
            📷
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f3a0ad] hover:text-black transition-all">
            f
          </a>
        </div>

        {/* Main Grid: Left Portrait Image & Right Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-4">
          
          {/* Artist Portrait Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[520px] rounded-sm overflow-hidden shadow-sm bg-gray-100">
              {/* Apni photo ka path public folder mein /images/artist.jpg rakhein */}
              <Image
                src="/Khushi.jpeg"
                alt="Khushi Patel - Makeup Artist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-xs uppercase block mb-1">
                KHUSHI PATEL
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-gray-950 uppercase border-b border-pink-100 pb-3">
                MAKEUP ARTIST
              </h1>
            </div>

            <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed">
              Welcome to my creative universe of luxury bridal artistry. I am <strong className="text-gray-900 font-semibold">Khushi Patel</strong>, a high-definition makeup artist devoted to crafting timeless, ethereal, and personalized wedding transformations. My philosophy revolves around celebrating your natural elegance and enhancing the unique grace you already possess.
            </p>

            <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed">
              Specializing in couture bridal looks, soft glam finishes, and contemporary hair sculpting, every makeover is thoughtfully designed to complement your wedding couture, personal aesthetic, and individual aura. From delicate skin-prep rituals to long-wear luxury cosmetics, every detail is seamlessly curated to ensure you look effortlessly radiant and feel truly unforgettable.
            </p>

            <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed">
              To me, bridal makeup is far more than a technique—it is an intimate art form of capturing emotions, confidence, and joy. It is an absolute privilege to walk alongside you on your most cherished journey and make your dream bridal look come alive.
            </p>

            {/* HIGHLIGHTS & SPECIALTIES SECTION */}
            <div className="pt-6">
              <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-[11px] uppercase block mb-4">
                HIGHLIGHTS & SPECIALTIES
              </span>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                
                <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-sm text-center flex flex-col items-center justify-center space-y-1 hover:shadow-sm transition-all">
                  <span className="text-xl">🧚‍♀️</span>
                  <h4 className="font-serif font-bold text-[11px] text-gray-900 uppercase tracking-wide mt-1">LUXURY BRIDAL</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">COUTURE LOOKS</p>
                </div>

                <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-sm text-center flex flex-col items-center justify-center space-y-1 hover:shadow-sm transition-all">
                  <span className="text-xl">👑</span>
                  <h4 className="font-serif font-bold text-[11px] text-gray-900 uppercase tracking-wide mt-1">ULTRA HD SKIN</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">CAMERA READY</p>
                </div>

                <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-sm text-center flex flex-col items-center justify-center space-y-1 hover:shadow-sm transition-all">
                  <span className="text-xl">💎</span>
                  <h4 className="font-serif font-bold text-[11px] text-gray-900 uppercase tracking-wide mt-1">PREMIUM PRODUCTS</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">GLOBAL BRANDS</p>
                </div>

                <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-sm text-center flex flex-col items-center justify-center space-y-1 hover:shadow-sm transition-all">
                  <span className="text-xl">🕊️</span>
                  <h4 className="font-serif font-bold text-[11px] text-gray-900 uppercase tracking-wide mt-1">CUSTOM GLAM</h4>
                  <p className="text-[9px] text-gray-400 uppercase tracking-wider">TAILORED BEAUTY</p>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Floating WhatsApp Action Icon */}
        <a
          href={`https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-all z-30 flex items-center justify-center text-xl"
          title="Chat on WhatsApp"
        >
          💬
        </a>

      </main>

    </div>
  );
}
