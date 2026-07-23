"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<
    "korean" | "bridal" | "prebridal" | "salon"
  >("salon");

  const whatsappNumber = "9870085600";

  const createWhatsAppLink = (serviceName: string, price?: string) => {
    const priceText = price ? ` (Price: ₹${price})` : "";
    const message = encodeURIComponent(
      `Hello Khushi! I would like to book/enquire about *${serviceName}*${priceText}. Please share details.`
    );
    return `https://wa.me/91${whatsappNumber}?text=${message}`;
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      
      {/* --- 1. LEFT SIDEBAR NAVIGATION --- */}
      <aside className="w-[260px] bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        <div>
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-bold tracking-wider">KP</h2>
            <p className="text-xs font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[9px] tracking-widest block mt-0.5">BRIDAL STUDIO & SALON</span>
          </div>

          <nav className="mt-10">
            <ul className="space-y-6 text-[13px] tracking-[3px] font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              </li>
              <li>
                <Link href="/services" className="text-[#f3a0ad] font-semibold">SERVICES</Link>
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

        {/* Sidebar Footer Location & Copyright */}
        <div className="text-xs text-gray-400 space-y-2 border-t border-gray-800 pt-4">
          <p className="text-[10px] text-gray-400 flex items-center gap-1">
            📍 South Bopal, Ahmedabad
          </p>
          <p className="text-[9px] tracking-widest text-gray-500">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* --- 2. RIGHT MAIN CONTENT AREA --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-14">
        
        {/* Header Section */}
        <div className="mb-8">
          <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-xs uppercase block mb-1">
            STUDIO MENU & RATES
          </span>
          <h1 className="text-3xl md:text-4xl font-serif tracking-wider text-gray-950 uppercase border-b pb-4 border-pink-100">
            SERVICES & PACKAGES
          </h1>
        </div>

        {/* TAB BUTTONS (Exactly matching screenshot layout) */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveTab("korean")}
            className={`px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-all rounded-sm ${
              activeTab === "korean"
                ? "bg-[#f3a0ad] text-black shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            🧚‍♀️ KOREAN GLASS PACKAGES
          </button>

          <button
            onClick={() => setActiveTab("bridal")}
            className={`px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-all rounded-sm ${
              activeTab === "bridal"
                ? "bg-[#f3a0ad] text-black shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            👑 BRIDAL & PRE-FUNCTION
          </button>

          <button
            onClick={() => setActiveTab("prebridal")}
            className={`px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-all rounded-sm ${
              activeTab === "prebridal"
                ? "bg-[#f3a0ad] text-black shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            🌸 PRE-BRIDAL SPA
          </button>

          <button
            onClick={() => setActiveTab("salon")}
            className={`px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-all rounded-sm ${
              activeTab === "salon"
                ? "bg-[#f3a0ad] text-black shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            💄 SALON MENU (HAIR, SKIN, NAILS)
          </button>
        </div>

        {/* ===================================================
            TAB 1: KOREAN GLASS PACKAGES
        ==================================================== */}
        {activeTab === "korean" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4 tracking-wider uppercase">
                Korean Hair Spa Therapy
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Hair up to Neck</span> <span className="font-bold">₹2,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Hair up to Shoulder</span> <span className="font-bold">₹2,600</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Hair Below Shoulder</span> <span className="font-bold">₹3,600</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Hair up to Waist</span> <span className="font-bold">₹4,600</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Hair Below Waist</span> <span className="font-bold">₹5,600</span></div>
                <div className="flex justify-between pt-2 text-[#f3a0ad] font-bold text-sm"><span>Face Mask with Hair Spa (Massage)</span> <span>₹8,900</span></div>
              </div>
              <a href={createWhatsAppLink("Korean Hair Spa Therapy")} target="_blank" rel="noreferrer" className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded text-xs font-semibold">💬 Book on WhatsApp</a>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4 tracking-wider uppercase">
                Korean Glass Treatments
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Korean Glass Face Mask</span> <span className="font-bold">₹350</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2 text-[#f3a0ad] font-bold"><span>Korean Glass Skin Facial</span> <span>₹5,600</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Glass Sider Look Makeup</span> <span className="font-bold">₹7,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Glass Pre-Function Look</span> <span className="font-bold">₹13,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Korean Glass Glow Pre-Bridal</span> <span className="font-bold">₹19,000</span></div>
                <div className="flex justify-between pt-2 font-bold text-gray-900"><span>Glass Bridal Makeover</span> <span>₹22,000</span></div>
              </div>
              <a href={createWhatsAppLink("Korean Glass Treatments")} target="_blank" rel="noreferrer" className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded text-xs font-semibold">💬 Book on WhatsApp</a>
            </div>
          </div>
        )}

        {/* ===================================================
            TAB 2: BRIDAL & PRE-FUNCTION
        ==================================================== */}
        {activeTab === "bridal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4 tracking-wider uppercase">
                Bridal Makeover (Wedding/Reception)
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>HD Bridal Makeup</span> <span className="text-[#f3a0ad]">₹17,000</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">HD Makeup, Real Flower Hair Style, Eye Lashes & Lenses, Tikko, Nath, Saree Draping</p>
                </div>
                <div className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>Glass Bridal Look</span> <span className="text-[#f3a0ad]">₹22,000</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">Glass Makeup, Hair Accessories/Real Flowers, Damani, Tikko, Nath, Draping</p>
                </div>
                <div className="pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>Air Brush Luxury Bridal</span> <span className="text-[#f3a0ad]">₹28,000</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">Air Brush Makeup, Hair Style, Nail Extensions, Damani, Tikko, Nath, Saree Draping</p>
                </div>
              </div>
              <a href={createWhatsAppLink("Bridal Makeover")} target="_blank" rel="noreferrer" className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded text-xs font-semibold">💬 Book Bridal Slot</a>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4 tracking-wider uppercase">
                Sider & Pre-Function Looks
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Sider Normal Makeup</span> <span className="font-bold">₹3,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Sider HD Makeup</span> <span className="font-bold">₹5,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Sider Glass Makeup</span> <span className="font-bold">₹7,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Water Resistant Sider Look</span> <span className="font-bold">₹10,000</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><span>Sangeet / Haldi Glass Look</span> <span className="font-bold">₹13,000</span></div>
                <div className="flex justify-between pt-1 font-bold text-[#f3a0ad]"><span>Water Resistant Pre-Function</span> <span>₹18,000</span></div>
              </div>
              <a href={createWhatsAppLink("Sider & Pre-Function Makeup")} target="_blank" rel="noreferrer" className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded text-xs font-semibold">💬 Book Pre-Function Slot</a>
            </div>
          </div>
        )}

        {/* ===================================================
            TAB 3: PRE-BRIDAL SPA
        ==================================================== */}
        {activeTab === "prebridal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4 tracking-wider uppercase">
                Pre-Bridal Packages
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>Basic Glow Package</span> <span className="text-[#f3a0ad]">₹6,500</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">Threading, Normal Wax (Full Hands/Legs), Clean Up, O3+ Facial</p>
                </div>
                <div className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>Hydra Pamper Package</span> <span className="text-[#f3a0ad]">₹10,000</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">Rica Waxing, Bikini Wax, Hydra Facial, Cleanup, D-Tan, Mani & Pedi, Hair Spa</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4 tracking-wider uppercase">
                Luxury Pamper Sessions
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>Luxury Glow Session</span> <span className="text-[#f3a0ad]">₹13,000</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">Rica Wax, Facial (O3+/Raga), Body Polishing, Hair Spa, Full Body Scrub & Cream Massage</p>
                </div>
                <div className="pb-2">
                  <div className="flex justify-between font-bold text-sm"><span>Korean Glass Glow Ritual</span> <span className="text-[#f3a0ad]">₹19,000</span></div>
                  <p className="text-[11px] text-gray-500 mt-1">Full Body Rica Wax, Korean Glass Facial & Pack, Body Massage, Korean Hair Spa Therapy</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            TAB 4: SALON MENU (Exact Reference Layout Match)
        ==================================================== */}
        {activeTab === "salon" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1: Facials & Skin */}
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-800 pb-2 mb-4 tracking-wider uppercase">
                FACIALS & SKIN TREATMENTS
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Tan Clear Facial (Tanned Skin)</span> <span className="font-bold">₹800</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Glovite Facial (Dry Skin)</span> <span className="font-bold">₹1,200</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Sensi Glow Facial (Sensitive Skin)</span> <span className="font-bold">₹1,800</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Light & Bright Facial</span> <span className="font-bold">₹2,100</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>O3+ Glowing Skin Facial</span> <span className="font-bold">₹2,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5 text-[#f3a0ad] font-bold"><span>Hydra Boost Skin Facial</span> <span>₹5,000</span></div>
                <div className="flex justify-between text-[#f3a0ad] font-bold"><span>Korean Glass Skin Facial</span> <span>₹5,600</span></div>
              </div>
            </div>

            {/* Box 2: Hair Spa & Treatments */}
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-800 pb-2 mb-4 tracking-wider uppercase">
                HAIR SPA & TREATMENTS
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>L'Oreal Professional Spa</span> <span className="font-bold">₹600 - ₹2,100</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5 text-[#f3a0ad] font-bold"><span>Korean Hair Spa Therapy (Massage)</span> <span>₹2,000 - ₹5,600</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Hair Straightening Treatment</span> <span className="font-bold">₹2,500 - ₹8,900</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Botox Hair Treatment</span> <span className="font-bold">₹2,500 - ₹7,500</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Pro Keratin Treatment</span> <span className="font-bold">₹2,900 - ₹8,900</span></div>
                <div className="flex justify-between"><span>Nanoplastia Treatment</span> <span className="font-bold">₹3,900 - ₹9,900</span></div>
              </div>
            </div>

            {/* Box 3: Nail Extensions & Art */}
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-800 pb-2 mb-4 tracking-wider uppercase">
                NAILS & EXTENSIONS
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Real Nail Gel Polish</span> <span className="font-bold">₹199</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Real Nail Gel Polish & Art</span> <span className="font-bold">₹399</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Temporary Extensions & Gel Polish</span> <span className="font-bold">₹699</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Gel Extensions & Gel Polish</span> <span className="font-bold">₹1,499</span></div>
                <div className="flex justify-between"><span>Acrylic Extensions & Gel Polish</span> <span className="font-bold">₹1,599</span></div>
              </div>
            </div>

            {/* Box 4: Waxing & Body Care */}
            <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm">
              <h3 className="font-serif text-base font-bold text-gray-900 border-b border-gray-800 pb-2 mb-4 tracking-wider uppercase">
                WAXING & BODY CARE
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Under Arms Waxing (Rica)</span> <span className="font-bold">₹180</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Full Arms Waxing (Rica)</span> <span className="font-bold">₹400</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Full Legs Waxing (Rica)</span> <span className="font-bold">₹400</span></div>
                <div className="flex justify-between border-b border-gray-100 pb-1.5"><span>Full Body Wax (Rica)</span> <span className="font-bold">₹3,500</span></div>
                <div className="flex justify-between"><span>Full Body Massage</span> <span className="font-bold">₹2,800</span></div>
              </div>
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
