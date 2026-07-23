"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<
    "korean" | "bridal" | "prebridal" | "salon"
  >("korean");

  const whatsappNumber = "9870085600";

  const createWhatsAppLink = (serviceName: string, price?: string) => {
    const priceText = price ? ` (Price: ₹${price})` : "";
    const message = encodeURIComponent(
      `Hello Khushi! I would like to book/enquire about *${serviceName}*${priceText}. Please share details.`
    );
    return `https://wa.me/91${whatsappNumber}?text=${message}`;
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      
      {/* --- 1. LEFT SIDEBAR --- */}
      <aside className="w-[260px] bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        <div>
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-bold tracking-wider font-serif">KP</h2>
            <p className="text-xs font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[9px] tracking-widest block mt-0.5">BRIDAL STUDIO & SALON</span>
          </div>

          <nav className="mt-10">
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

        <div className="text-xs text-gray-400 space-y-2 border-t border-gray-800 pt-4">
          <p className="text-[10px] text-gray-400 flex items-center gap-1">
            📍 South Bopal, Ahmedabad
          </p>
          <p className="text-[9px] tracking-widest text-gray-500">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* --- 2. RIGHT MAIN CONTENT --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-12">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-[#f3a0ad] font-bold tracking-[3px] text-xs uppercase block mb-1">
            STUDIO MENU & RATES
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-gray-950 uppercase border-b pb-3 border-pink-100">
            SERVICES & PACKAGES
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "korean", label: "🧚‍♀️ KOREAN GLASS PACKAGES" },
            { id: "bridal", label: "👑 BRIDAL & PRE-FUNCTION" },
            { id: "prebridal", label: "🌸 PRE-BRIDAL SPA" },
            { id: "salon", label: "💄 SALON MENU (HAIR, SKIN, NAILS)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-all rounded-sm ${
                activeTab === tab.id
                  ? "bg-[#f3a0ad] text-black shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===================================================
            TAB 1: KOREAN GLASS PACKAGES
        ==================================================== */}
        {activeTab === "korean" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Package Card 1 */}
            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-[#f3a0ad] text-black text-[9px] font-extrabold tracking-widest px-3 py-1 uppercase">
                TRENDING LOOK
              </div>
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase tracking-wide pr-24 leading-snug">
                  KOREAN GLASS MAKEUP (SIDER / PARTY)
                </h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">
                  ₹7,500/-
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Glass Glow Finish Makeup</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Hairstyle (Real Flower styling)</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Eye Lashes & Premium Eye Lenses</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Saree / Outfit Draping</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Hair Extension Included</li>
                </ul>
              </div>
              <a
                href={createWhatsAppLink("KOREAN GLASS MAKEUP (SIDER / PARTY)", "7,500")}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block mt-4"
              >
                BOOK KOREAN GLAM
              </a>
            </div>

            {/* Package Card 2 */}
            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-[#f3a0ad] text-black text-[9px] font-extrabold tracking-widest px-3 py-1 uppercase">
                MOST POPULAR
              </div>
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase tracking-wide pr-24 leading-snug">
                  PRE-FUNCTION KOREAN GLASS GLAM
                </h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">
                  ₹13,000/-
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Korean Glass Makeup (Sangeet/Haldi/Mahendi/Engagement)</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Hair Style with Real Flowers & Decoration</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Eye Lashes & Eye Lenses</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Saree / Outfit Draping</li>
                </ul>
              </div>
              <a
                href={createWhatsAppLink("PRE-FUNCTION KOREAN GLASS GLAM", "13,000")}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block mt-4"
              >
                BOOK KOREAN GLAM
              </a>
            </div>

            {/* Package Card 3 */}
            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-[#f3a0ad] text-black text-[9px] font-extrabold tracking-widest px-3 py-1 uppercase">
                LUXURY BRIDAL
              </div>
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase tracking-wide pr-24 leading-snug">
                  BRIDAL KOREAN GLASS MAKEOVER
                </h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">
                  ₹22,000/-
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Signature Korean Glass Skin Makeup</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Hair Style (Brooch Decoration / Real Flowers)</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Damani, Tikko & Nath Placement</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Eye Lashes & Eye Lenses</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Hair Accessories & Extensions</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Saree / Dupatta Draping</li>
                </ul>
              </div>
              <a
                href={createWhatsAppLink("BRIDAL KOREAN GLASS MAKEOVER", "22,000")}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block mt-4"
              >
                BOOK KOREAN GLAM
              </a>
            </div>

            {/* Package Card 4 */}
            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 bg-[#f3a0ad] text-black text-[9px] font-extrabold tracking-widest px-3 py-1 uppercase">
                FULL TREATMENT
              </div>
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase tracking-wide pr-24 leading-snug">
                  ULTIMATE KOREAN PRE-BRIDAL PACKAGE
                </h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">
                  ₹19,000/-
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Korean Glass Glowing Skin Facial & Face Pack</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Korean Hair Spa Therapy (With Face Mask & Massage)</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Rica Full Body Waxing & Body Polishing</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Full Body Oil Massage, Scrubbing & Pack</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Clean Up, D-Tan, Manicure, Pedicure, Threading</li>
                </ul>
              </div>
              <a
                href={createWhatsAppLink("ULTIMATE KOREAN PRE-BRIDAL PACKAGE", "19,000")}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block mt-4"
              >
                BOOK KOREAN GLAM
              </a>
            </div>

          </div>
        )}

        {/* ===================================================
            TAB 2: BRIDAL & PRE-FUNCTION
        ==================================================== */}
        {activeTab === "bridal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase">HD BRIDAL MAKEOVER</h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">₹17,000/-</p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> HD Makeup Finish</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Real Flower Hairstyle</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Eye Lashes & Lenses</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Saree Draping</li>
                </ul>
              </div>
              <a href={createWhatsAppLink("HD BRIDAL MAKEOVER", "17,000")} target="_blank" rel="noreferrer" className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block">
                BOOK APPOINTMENT
              </a>
            </div>

            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase">AIRBRUSH LUXURY BRIDAL</h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">₹28,000/-</p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Air Brush Flawless Makeup</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Premium Hairstyle & Extensions</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Nail Extensions & Complete Draping</li>
                </ul>
              </div>
              <a href={createWhatsAppLink("AIRBRUSH LUXURY BRIDAL", "28,000")} target="_blank" rel="noreferrer" className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block">
                BOOK APPOINTMENT
              </a>
            </div>
          </div>
        )}

        {/* ===================================================
            TAB 3: PRE-BRIDAL SPA
        ==================================================== */}
        {activeTab === "prebridal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase">BASIC GLOW PACKAGE</h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">₹6,500/-</p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Threading & Normal Full Wax</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Clean Up & O3+ Facial</li>
                </ul>
              </div>
              <a href={createWhatsAppLink("BASIC GLOW PACKAGE", "6,500")} target="_blank" rel="noreferrer" className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block">
                BOOK APPOINTMENT
              </a>
            </div>

            <div className="border-2 border-pink-100 rounded-sm bg-white flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="font-serif font-extrabold text-lg text-gray-950 uppercase">LUXURY PAMPER SESSION</h3>
                <p className="text-[#d87080] font-serif font-bold text-2xl mt-2 mb-4">₹13,000/-</p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Rica Waxing + Bikini Wax</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> O3+ / Raga Facial & Body Polishing</li>
                  <li className="flex items-start gap-2"><span className="text-[#f3a0ad]">✦</span> Hair Spa & Full Body Scrub</li>
                </ul>
              </div>
              <a href={createWhatsAppLink("LUXURY PAMPER SESSION", "13,000")} target="_blank" rel="noreferrer" className="w-full bg-black hover:bg-gray-900 text-white text-center py-3 text-xs font-bold tracking-[2px] uppercase transition-colors block">
                BOOK APPOINTMENT
              </a>
            </div>
          </div>
        )}

        {/* ===================================================
            TAB 4: SALON MENU
        ==================================================== */}
        {activeTab === "salon" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif font-bold text-base text-gray-900 border-b border-gray-800 pb-2 mb-4 tracking-wider uppercase">
                FACIALS & SKIN TREATMENTS
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Tan Clear Facial (Tanned Skin)</span> <span className="font-bold">₹800</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Glovite Facial (Dry Skin)</span> <span className="font-bold">₹1,200</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Sensi Glow Facial (Sensitive Skin)</span> <span className="font-bold">₹1,800</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Light & Bright Facial</span> <span className="font-bold">₹2,100</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>O3+ Glowing Skin Facial</span> <span className="font-bold">₹2,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5 text-[#d87080] font-bold"><span>Hydra Boost Skin Facial</span> <span>₹5,000</span></div>
                <div className="flex justify-between text-[#d87080] font-bold"><span>Korean Glass Skin Facial</span> <span>₹5,600</span></div>
              </div>
              <a href={createWhatsAppLink("Facial Services")} target="_blank" rel="noreferrer" className="w-full bg-black hover:bg-gray-900 text-white text-center py-2 text-xs font-bold tracking-widest uppercase transition-colors block mt-6">
                ENQUIRE VIA WHATSAPP
              </a>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif font-bold text-base text-gray-900 border-b border-gray-800 pb-2 mb-4 tracking-wider uppercase">
                HAIR SPA & TREATMENTS
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>L'Oreal Professional Spa</span> <span className="font-bold">₹600 - ₹2,100</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5 text-[#d87080] font-bold"><span>Korean Hair Spa Therapy (Massage)</span> <span>₹2,000 - ₹5,600</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Hair Straightening Treatment</span> <span className="font-bold">₹2,500 - ₹8,900</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Botox Hair Treatment</span> <span className="font-bold">₹2,500 - ₹7,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Pro Keratin Treatment</span> <span className="font-bold">₹2,900 - ₹8,900</span></div>
                <div className="flex justify-between"><span>Nanoplastia Treatment</span> <span className="font-bold">₹3,900 - ₹9,900</span></div>
              </div>
              <a href={createWhatsAppLink("Hair Treatments")} target="_blank" rel="noreferrer" className="w-full bg-black hover:bg-gray-900 text-white text-center py-2 text-xs font-bold tracking-widest uppercase transition-colors block mt-6">
                ENQUIRE VIA WHATSAPP
              </a>
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
