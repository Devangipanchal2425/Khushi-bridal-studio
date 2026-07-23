"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const whatsappNumber = "9870085600";
  const whatsappMessage = encodeURIComponent(
    "Hello Khushi! I would like to inquire about your makeup services."
  );

  const instagramLink = "https://www.instagram.com/khushiimakeover_official";
  const facebookLink = "https://www.facebook.com/share/18wh4hPmkN/";

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

        {/* Sidebar Footer Social Icons */}
        <div className="text-xs text-gray-400 space-y-4 border-t border-gray-800 pt-4">
          <div className="flex space-x-4 text-white">
            <a 
              href={instagramLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-[#f3a0ad] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href={facebookLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-[#f3a0ad] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* --- 2. MAIN ABOUT CONTENT AREA --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-14 max-w-6xl mx-auto relative">
        
        {/* Top Right Social Icons */}
        <div className="absolute top-8 right-12 flex space-x-3">
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#f3a0ad] hover:text-black transition-all shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href={facebookLink} 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#f3a0ad] hover:text-black transition-all shadow-sm"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>
        </div>

        {/* Main Grid: Left Portrait Image & Right Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-4">
          
          {/* Artist Portrait Image */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[520px] rounded-sm overflow-hidden shadow-sm bg-gray-100">
              <Image
                src="/images/Khushi.jpeg"
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

            {/* HIGHLIGHTS & SPECIALTIES */}
            <div className="pt-6">
              <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-[11px] uppercase block mb-4">
                HIGHLIGHTS & SPECIALTIES
              </span>

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
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-105 transition-all z-30 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

      </main>

    </div>
  );
}
