"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const whatsappNumber = "9870085600";
  const instagramLink = "https://www.instagram.com/khushiimakeover_official";
  const facebookLink = "https://www.facebook.com/share/18wh4hPmkN/";

  const [activeTab, setActiveTab] = useState("bridal");

  // Category Tabs List
  const tabs = [
    { id: "bridal", label: "BRIDAL & PRE-FUNCTION", icon: "👑" },
    { id: "hair-spa", label: "KOREAN HAIR SPA THERAPY", icon: "💆‍♀️" },
    { id: "pre-bridal", label: "PRE-BRIDAL SPA", icon: "🌸" },
    { id: "salon-menu", label: "SALON MENU (HAIR, SKIN, NAILS)", icon: "💄" },
  ];

  // Services Data
  const servicesData: Record<string, Array<{
    title: string;
    price: string;
    tag: string;
    features: string[];
    btnText: string;
  }>> = {
    bridal: [
      {
        title: "KOREAN GLASS MAKEUP (SIDER / PARTY)",
        price: "₹7,500/-",
        tag: "TRENDING LOOK",
        btnText: "BOOK KOREAN GLAM",
        features: [
          "Glass Glow Finish Makeup",
          "Hairstyle (Real Flower styling)",
          "Eye Lashes & Premium Eye Lenses",
          "Saree / Outfit Draping",
          "Hair Extension Included",
        ],
      },
      {
        title: "PRE-FUNCTION KOREAN GLASS GLAM",
        price: "₹13,000/-",
        tag: "MOST POPULAR",
        btnText: "BOOK KOREAN GLAM",
        features: [
          "Korean Glass Makeup (Sangeet/Haldi/Mahendi/Engagement)",
          "Hair Style with Real Flowers & Decoration",
          "Eye Lashes & Eye Lenses",
          "Saree / Outfit Draping",
        ],
      },
      {
        title: "BRIDAL KOREAN GLASS MAKEOVER",
        price: "₹18,000/-",
        tag: "LUXURY BRIDAL",
        btnText: "BOOK BRIDAL MAKEOVER",
        features: [
          "Ultra HD Korean Glass Finish Bridal Makeup",
          "Advanced Hair Styling & Extensions",
          "Premium Mink Lashes & Custom Lenses",
          "Duapatta & Heavy Jewelry Draping",
        ],
      },
      {
        title: "ULTIMATE KOREAN PRE-BRIDAL PACKAGE",
        price: "₹25,000/-",
        tag: "FULL TREATMENT",
        btnText: "BOOK COMPLETE PACKAGE",
        features: [
          "Complete Pre-Bridal Skin Care Treatment",
          "Korean Glass Glow Facial Sessions",
          "Hair Spa & Deep Conditioning Therapy",
          "Full Body Polish & Manicure/Pedicure",
        ],
      },
    ],

    "hair-spa": [
      {
        title: "KOREAN SCALP DETOX & HAIR SPA",
        price: "₹3,500/-",
        tag: "DEEP CARE",
        btnText: "BOOK HAIR SPA",
        features: [
          "Scalp Exfoliation & Deep Cleansing",
          "Korean Herbal Steaming Session",
          "Hydrating Hair Mask & Serum Massage",
          "Blow Dry & Hair Shine Finish",
        ],
      },
      {
        title: "ADVANCED KOREAN KERATIN SPA THERAPY",
        price: "₹5,500/-",
        tag: "INTENSE HYDRATION",
        btnText: "BOOK KERATIN SPA",
        features: [
          "Scalp & Root Strengthening Treatment",
          "Keratin Infused Hydration Mask",
          "Laser Therapy for Hair Growth",
          "Smooth & Frizz-Free Finish",
        ],
      },
    ],

    "pre-bridal": [
      {
        title: "GLOW & RADIANCE PRE-BRIDAL",
        price: "₹12,000/-",
        tag: "ESSENTIAL",
        btnText: "BOOK SPA",
        features: [
          "Full Body Waxing & Polishing",
          "Bridal Facial Treatment",
          "Deluxe Manicure & Pedicure",
          "Hair Spa & Deep Conditioning",
        ],
      },
      {
        title: "LUXURY ROYAL PRE-BRIDAL SPA",
        price: "₹20,000/-",
        tag: "ALL-INCLUSIVE",
        btnText: "BOOK ROYAL SPA",
        features: [
          "2-Day Complete Body Pampering",
          "Korean Glass Skin Facial Routine",
          "Body Scrub, Wrap & Massage",
          "Bridal Nail Art & Gel Extensions",
        ],
      },
    ],

    "salon-menu": [
      {
        title: "HAIR STYLING & CUTTING",
        price: "₹1,500/-",
        tag: "REGULAR",
        btnText: "INQUIRE NOW",
        features: [
          "Custom Layered / Bob Cut",
          "Hair Wash & Conditioning",
          "Blowdry & Styling",
        ],
      },
      {
        title: "SKIN GLOW FACIAL & CLEANUP",
        price: "₹2,500/-",
        tag: "SKINCARE",
        btnText: "INQUIRE NOW",
        features: [
          "Deep Pore Cleansing",
          "Fruit / Gold Pack Facial",
          "Face & Neck Massage",
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      
      {/* --- 1. LEFT SIDEBAR NAVIGATION --- */}
      <aside className="w-[260px] bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        <div>
          {/* Logo Badge */}
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-serif font-bold tracking-wider">KP</h2>
            <p className="text-xs font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[9px] tracking-widest block mt-0.5 uppercase">BRIDAL STUDIO & SALON</span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-12">
            <ul className="space-y-6 text-[12px] tracking-[3px] font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              </li>
              <li>
                <Link href="/services" className="text-[#f3a0ad] font-bold">SERVICES</Link>
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

        {/* Sidebar Footer Info */}
        <div className="text-xs text-gray-400 space-y-3 border-t border-gray-800 pt-4">
          <div className="flex space-x-4 text-white mb-2">
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
          <p className="text-[10px] text-gray-500">📍 South Bopal, Ahmedabad</p>
          <p className="text-[10px] text-gray-600">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* --- 2. MAIN SERVICES CONTENT AREA --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-12 max-w-6xl mx-auto relative">
        
        {/* Top Header */}
        <div className="mb-8">
          <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-[11px] uppercase block mb-1">
            STUDIO MENU & RATES
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-gray-950 uppercase">
            SERVICES & PACKAGES
          </h1>
        </div>

        {/* --- TABS BAR --- */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b border-gray-100 pb-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[11px] font-bold tracking-wider px-4 py-2.5 rounded-sm transition-all flex items-center space-x-1.5 uppercase ${
                  isActive
                    ? "bg-[#f3a0ad] text-black shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* --- SERVICES CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData[activeTab]?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 bg-white p-7 rounded-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Tag & Price Header */}
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] bg-[#f3a0ad]/25 text-[#c24b5d] font-bold px-2 py-0.5 rounded-sm tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Service Title & Price */}
                <h3 className="text-lg font-serif font-bold text-gray-950 mt-1 uppercase">
                  {item.title}
                </h3>
                <p className="text-2xl font-serif font-bold text-[#d8586c] mt-1 mb-5">
                  {item.price}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs text-gray-600 leading-snug">
                      <span className="text-[#f3a0ad] mr-2 text-sm">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
                    `Hello Khushi! I would like to book the package: ${item.title} (${item.price}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-block text-center bg-black text-white py-3 text-[11px] font-bold tracking-[2px] uppercase hover:bg-[#f3a0ad] hover:text-black transition-all rounded-sm"
                >
                  {item.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Floating WhatsApp Action Icon */}
        <a
          href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
            "Hello Khushi! I would like to inquire about your studio services."
          )}`}
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
