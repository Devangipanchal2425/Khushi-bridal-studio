"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ServiceItem {
  title?: string;
  price: string;
  tag?: string;
  features?: string[];
  btnText: string;
}

export default function ServicesPage() {
  const whatsappNumber = "9870085600";
  const instagramLink = "https://www.instagram.com/khushiimakeover_official";
  const facebookLink = "https://www.facebook.com/share/18wh4hPmkN/";

  const [activeTab, setActiveTab] = useState<string>("salon-menu");

  // Category Tabs List
  const tabs = [
    { id: "bridal", label: "BRIDAL & PRE-FUNCTION", icon: "👑" },
    { id: "hair-spa", label: "KOREAN HAIR SPA THERAPY", icon: "💆‍♀️" },
    { id: "pre-bridal", label: "PRE-BRIDAL SPA", icon: "🌸" },
    { id: "salon-menu", label: "SALON MENU (HAIR, SKIN, NAILS)", icon: "💄" },
  ];

  // Complete Services Data with Merged Salon Categories
  const servicesData: Record<string, ServiceItem[]> = {
    bridal: [
      {
        title: "NORMAL MAKEUP PACKAGE",
        price: "₹3,500/-",
        tag: "ESSENTIAL",
        btnText: "BOOK PACKAGE",
        features: [
          "Normal Makeup",
          "Hair Style / Curls",
          "Saree Draping",
          "Hair Pinup",
        ],
      },
      {
        title: "HD MAKEUP PACKAGE",
        price: "₹5,500/-",
        tag: "POPULAR CHOICE",
        btnText: "BOOK HD GLAM",
        features: [
          "HD Makeup",
          "Hair Style",
          "Eye Lashes",
          "Saree Draping",
          "Hair Extension",
        ],
      },
      {
        title: "GLASS MAKEUP PACKAGE",
        price: "₹7,500/-",
        tag: "TRENDING GLOW",
        btnText: "BOOK GLASS GLAM",
        features: [
          "Glass Makeup",
          "Hair Style (Real Flower)",
          "Eye Lashes",
          "Eye Lenses",
          "Saree Draping",
          "Hair Extension",
        ],
      },
      {
        title: "WATER RESISTANT MAKEUP PACKAGE",
        price: "₹10,000/-",
        tag: "LONG LASTING",
        btnText: "BOOK PACKAGE",
        features: [
          "Water Resistant Makeup",
          "Hair Style (Real Flower)",
          "Hair Decoration",
          "Eye Lashes",
          "Eye Lenses",
          "Saree Draping",
          "Tikko, Nath & Jewellery Setting",
        ],
      },
      {
        title: "PRE-FUNCTION GLASS MAKEUP",
        price: "₹13,000/-",
        tag: "SANGEET / HALDI / MEHENDI / ENGAGEMENT",
        btnText: "BOOK PRE-FUNCTION",
        features: [
          "Glass Makeup",
          "Hair Style (Real Flower)",
          "Eye Lashes",
          "Eye Lenses",
          "Hair Decoration",
          "Saree Draping",
        ],
      },
      {
        title: "HD BRIDAL / PRE-FUNCTION PACKAGE",
        price: "₹17,000/-",
        tag: "SPECIAL GLAM",
        btnText: "BOOK PACKAGE",
        features: [
          "HD Makeup",
          "Hair Style (Real Flower)",
          "Eye Lashes",
          "Eye Lenses",
          "Tikko & Nath Setting",
          "Saree Draping (Brooch Decoration / Real Flower)",
        ],
      },
      {
        title: "WATER RESISTANT BRIDAL PACKAGE",
        price: "₹18,000/-",
        tag: "LUXURY BRIDAL",
        btnText: "BOOK BRIDAL",
        features: [
          "Water Resistant Makeup",
          "Damani, Tikko & Nath Setting",
          "Hair Style",
          "Eye Lashes",
          "Eye Lenses",
          "Hair Decoration",
          "Saree Draping",
        ],
      },
      {
        title: "PREMIUM GLASS BRIDAL PACKAGE",
        price: "₹22,000/-",
        tag: "SIGNATURE BRIDAL",
        btnText: "BOOK BRIDAL",
        features: [
          "Glass Makeup",
          "Hair Style (Brooch Decoration / Real Flower)",
          "Eye Lashes",
          "Eye Lenses",
          "Damani, Tikko & Nath Setting",
          "Saree Draping",
          "Hair Accessories",
        ],
      },
      {
        title: "ULTRA LUXURY AIRBRUSH BRIDAL PACKAGE",
        price: "₹28,000/-",
        tag: "ROYAL VIP BRIDAL",
        btnText: "BOOK ROYAL BRIDAL",
        features: [
          "Air Brush Makeup",
          "Hair Style (Brooch Decoration, Real Flower, Hair Extensions)",
          "Eye Lashes",
          "Eye Lenses",
          "Damani, Tikko & Nath Setting",
          "Saree Draping",
          "Hair Accessories",
          "Nail Extensions",
        ],
      },
    ],

    "hair-spa": [
      {
        title: "KOREAN HAIR SPA (NECK LENGTH)",
        price: "₹2,000/-",
        tag: "HAIR UP TO NECK",
        btnText: "BOOK HAIR SPA",
      },
      {
        title: "KOREAN HAIR SPA (SHOULDER LENGTH)",
        price: "₹2,600/-",
        tag: "HAIR UP TO SHOULDER",
        btnText: "BOOK HAIR SPA",
      },
      {
        title: "KOREAN HAIR SPA (BELOW SHOULDER)",
        price: "₹3,600/-",
        tag: "HAIR BELOW SHOULDER",
        btnText: "BOOK HAIR SPA",
      },
      {
        title: "KOREAN HAIR SPA (WAIST LENGTH)",
        price: "₹4,600/-",
        tag: "HAIR UP TO WAIST",
        btnText: "BOOK HAIR SPA",
      },
      {
        title: "KOREAN HAIR SPA (BELOW WAIST)",
        price: "₹5,600/-",
        tag: "HAIR BELOW WAIST",
        btnText: "BOOK HAIR SPA",
      },
      {
        title: "FACE MASK WITH HAIR SPA (MASSAGE)",
        price: "₹8,900/-",
        tag: "LUXURY SPA COMBO",
        btnText: "BOOK SPECIAL COMBO",
      },
    ],

    "pre-bridal": [
      {
        title: "PRE-BRIDAL PACKAGE 1",
        price: "₹6,500/-",
        btnText: "BOOK PRE-BRIDAL",
        features: [
          "Threading (Eyebrow, Forehead, Upper Lips)",
          "Normal Waxing (Full Hands, Legs, Underarms)",
          "Clean Up",
          "Manicure & Pedicure (Regular)",
          "Facial (O3+)",
        ],
      },
      {
        title: "PRE-BRIDAL PACKAGE 2",
        price: "₹10,000/-",
        btnText: "BOOK PRE-BRIDAL",
        features: [
          "Threading (Eyebrow, Forehead, Upper Lips)",
          "Rica Waxing (Full Hands, Full Legs, Underarms)",
          "Bikini Wax",
          "Cleanup",
          "Facial (Haydry) & D-Tan (Face)",
          "Manicure & Pedicure (Regular)",
          "Hair Spa (L'Oreal)",
        ],
      },
      {
        title: "PRE-BRIDAL PACKAGE 3",
        price: "₹13,000/-",
        btnText: "BOOK PRE-BRIDAL",
        features: [
          "Threading (Eyebrow, Forehead, Upper Lips)",
          "Rica Waxing (Full Hands, Legs, Underarms)",
          "Bikini Wax & Clean Up",
          "Facial (Haydry Bust.O3+ Raga)",
          "D-Tan (Face, Neck) & Face Mask",
          "Manicure & Pedicure",
          "Hair Spa (L'Oreal)",
          "Body Polishing (Full Body Scrubbing, Cream Massage, Full Body Pack)",
        ],
      },
      {
        title: "ROYAL PRE-BRIDAL PACKAGE 4",
        price: "₹19,000/-",
        btnText: "BOOK ROYAL PRE-BRIDAL",
        features: [
          "Threading (Eyebrow, Forehead, Upper Lips)",
          "Rica Waxing (Full Body)",
          "Clean Up",
          "Facial (Korean Glass / Glowing Skin)",
          "Korean Glass Face Pack & D-Tan",
          "Manicure & Pedicure",
          "Body Oil Massage",
          "Body Polishing (Full Body Scrubbing, Cream Massage, Full Body Pack)",
          "Korean Hair Spa Therapy (With Face Mask & Massage)",
        ],
      },
    ],

"salon-menu": [
      {
        title: "SKIN THREADING, CLEANUP & NAIL SERVICES",
        price: "From ₹30/-",
        btnText: "BOOK SERVICE",
        features: [
          "Upper Lips — ₹30/-",
          "Eyebrow & Forehead — ₹70/-",
          "Real Nail Gel Polish — ₹199/-",
          "Full Face Threading — ₹250/-",
          "Real Nail Gel Polish & Art — ₹399/-",
          "Cleanup (Acne / Normal / Oily Skin) — ₹500/-",
          "Temporary Extensions & Gel Polish — ₹699/-",
          "Temporary Extensions & Art — ₹999/-",
          "Gel / Acrylic Extensions — ₹1,499 to ₹2,399/-",
          "Protein Treatment — ₹5,000/-",
        ],
      },
      {
        title: "WAXING (NORMAL / RICA)",
        price: "From ₹100/-",
        btnText: "BOOK SERVICE",
        features: [
          "Under Arms — ₹100 (Normal) | ₹180 (Rica)",
          "Eyebrow — ₹120 (Normal) | ₹150 (Rica)",
          "Full Face — ₹220 (Normal) | ₹280 (Rica)",
          "Half Arms — ₹200 (Normal) | ₹250 (Rica)",
          "Half Legs — ₹350 (Normal) | ₹450 (Rica)",
          "Full Arms — ₹300 (Normal) | ₹400 (Rica)",
          "Full Legs — ₹400 (Normal) | ₹650 (Rica)",
          "Full Back — ₹300 (Normal) | ₹500 (Rica)",
          "Full Body — ₹2,900 (Normal) | ₹3,500 (Rica)",
          "Bikini — ₹400 (Normal) | ₹550 (Rica)",
        ],
      },
      {
        title: "FACIAL CARE (BASIC, ADVANCE & LUXURY)",
        price: "From ₹350/-",
        btnText: "BOOK FACIAL",
        features: [
          "Korean Glass Face Mask — ₹350/-",
          "Tan Clear Facial — ₹800/-",
          "Glovite Facial (Dry Skin) — ₹1,200/-",
          "Sensi Glow Facial — ₹1,800/-",
          "Light & Bright Facial — ₹2,100/-",
          "Glowing Skin O3+ Facial — ₹2,500/-",
          "Hydra Boost Skin Facial — ₹5,000/-",
          "Korean Glass Skin Facial — ₹5,600/-",
        ],
      },
      {
        title: "D-TAN & FACE PACK",
        price: "From ₹300/-",
        btnText: "BOOK D-TAN",
        features: [
          "Under Arms — ₹300/-",
          "Back of Arms — ₹350/-",
          "Full Arms — ₹400/-",
          "Face & Neck — ₹500/-",
          "Full Legs — ₹600/-",
          "Full Front / Full Back — ₹800/-",
          "Full Body — ₹3,200/-",
        ],
      },
      {
        title: "BODY POLISHING & MASSAGE",
        price: "From ₹400/-",
        btnText: "BOOK MASSAGE",
        features: [
          "Head & Neck Massage — ₹400/-",
          "Stomach Massage — ₹400/-",
          "Full Back Massage — ₹600/-",
          "Full Arms & Legs Massage — ₹1,100/-",
          "Full Front & Back Polishing — ₹1,800/-",
          "Full Arms & Legs Polishing — ₹2,100/-",
          "Full Body Massage — ₹2,800/-",
          "Glowing Skin Body Polishing — ₹6,500/-",
        ],
      },
      {
        title: "HAIR CUT & STYLING",
        price: "From ₹400/-",
        btnText: "BOOK HAIR CUT",
        features: [
          "Under 5 Year Cut — ₹400/-",
          "Only Blow Dry — ₹400/-",
          "Hair Wash with Blow Dry — ₹500/-",
          "Master Stylist Cut — ₹700/-",
          "Iron Tongs / Straightening — ₹800/-",
          "Advance Stylist Cut — ₹1,000/-",
        ],
      },
      {
        title: "HAIR SPA & GLOBAL HIGHLIGHTS",
        price: "From ₹600/-",
        btnText: "BOOK SPA / HIGHLIGHTS",
        features: [
          "L'Oreal Hair Spa (Neck to Waist) — ₹600 to ₹2,100/-",
          "Global Highlights (Pre Light) — ₹1,000 to ₹3,900/-",
          "Global Highlights (Color) — ₹2,500 to ₹6,900/-",
        ],
      },
      {
        title: "HAIR COLOR (MAJIREAL / INOVA)",
        price: "From ₹250/-",
        btnText: "BOOK HAIR COLOR",
        features: [
          "Per Streak — ₹250 (Majireal) | ₹350 (Inova)",
          "Roots Touch Up — ₹550 (Majireal) | ₹650 (Inova)",
          "Touch Up — ₹750 (Majireal) | ₹850 (Inova)",
          "Global Colour — ₹1,500 (Majireal) | ₹1,700 (Inova)",
          "Global Hair (Neck to Waist) — ₹1,800 to ₹7,000/-",
        ],
      },
      {
        title: "HAIR TREATMENTS & MANICURE / PEDICURE",
        price: "From ₹2,000/-",
        btnText: "BOOK TREATMENT",
        features: [
          "Relaxing Manicure & Pedicure — ₹2,000/-",
          "Shine Straightening — ₹2,500 to ₹8,900/-",
          "Botox Treatment — ₹2,500 to ₹7,500/-",
          "Pro Keratin Treatment — ₹2,900 to ₹8,900/-",
          "Premium Manicure & Pedicure — ₹3,200/-",
          "Nano Plastia Treatment — ₹3,900 to ₹9,900/-",
        ],
      },
    ],  };

  const currentServices = servicesData[activeTab] || [];

  // Responsive Grid Layout
  const isThreeColumnLayout =
    activeTab === "bridal" ||
    activeTab === "hair-spa" ||
    activeTab === "salon-menu";

  const gridClasses = isThreeColumnLayout
    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    : "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      {/* --- 1. LEFT SIDEBAR NAVIGATION --- */}
      <aside className="w-[260px] bg-black text-white flex flex-col justify-between p-6 fixed h-full z-20 left-0 top-0">
        <div>
          {/* Logo Badge */}
          <div className="bg-[#f3a0ad] text-black text-center p-5 rounded-sm">
            <h2 className="text-2xl font-serif font-bold tracking-wider">KP</h2>
            <p className="text-xs font-semibold tracking-widest mt-1">
              KHUSHI PATEL
            </p>
            <span className="text-[9px] tracking-widest block mt-0.5 uppercase">
              BRIDAL STUDIO & SALON
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-12">
            <ul className="space-y-6 text-[12px] tracking-[3px] font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#f3a0ad] font-bold">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  CONTACT
                </Link>
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
          <p className="text-[10px] text-gray-500">📍 South Bopal, Ahmedabad</p>
          <p className="text-[10px] text-gray-600">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* --- 2. MAIN SERVICES CONTENT AREA --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-12 max-w-7xl mx-auto relative">
        {/* Top Header */}
        <div className="mb-8 border-b border-gray-100 pb-5">
          <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-[11px] uppercase block mb-1">
            STUDIO MENU & RATES
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wider text-gray-950 uppercase">
            SERVICES & PACKAGES
          </h1>
          <div className="w-16 h-1 bg-[#f3a0ad] mt-3 rounded-full"></div>
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

        {/* --- DYNAMIC GRID --- */}
        <div className={gridClasses}>
          {currentServices.map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 bg-white p-6 rounded-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                {item.title && (
                  <h3 className="text-sm font-serif font-bold text-gray-950 uppercase leading-snug mb-2 min-h-[36px] flex items-center">
                    {item.title}
                  </h3>
                )}

                {/* Price */}
                <p className="text-2xl font-serif font-bold text-[#d8586c] mb-4">
                  {item.price}
                </p>

                {/* Features / Included Items */}
                {item.features && item.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start text-xs text-gray-600 leading-snug"
                      >
                        <span className="text-[#f3a0ad] mr-1.5 text-xs">
                          ✦
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Booking Action Button */}
              <div className="pt-4">
                <a
                  href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
                    `Hello Khushi! I would like to book: ${
                      item.title || "Package"
                    } (${item.price}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-block text-center bg-black text-white py-2.5 text-[10px] font-bold tracking-[2px] uppercase hover:bg-[#f3a0ad] hover:text-black transition-all rounded-sm"
                >
                  {item.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Floating WhatsApp Button */}
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
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
        <SmartPackageFinder />
      </main>
    </div>
  );
}
// ----------------------------------------------------
// Khushi's Personal Beauty Advisor (Dropdown Version)
// ----------------------------------------------------
function SmartPackageFinder() {
  const whatsappNumber = "9870085600";

  const [occasion, setOccasion] = useState<string>("");
  const [skinType, setSkinType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const getRecommendation = () => {
    if (!occasion || !skinType || !budget) return null;

    if (occasion === "bridal") {
      if (budget === "luxury") {
        return {
          title: "ULTRA LUXURY AIRBRUSH BRIDAL PACKAGE",
          price: "₹28,000/-",
          features: [
            "Airbrush Flawless HD Makeup",
            "Korean Glass Skin Facial Prep",
            "Real Flower Hair Styling & Extensions",
            "Full Body Rica Waxing & Polish",
            "Nail Extensions & Art",
          ],
          tip: skinType === "dry" 
            ? "💡 Since your skin is dry, we will include extra Hydra-Boost priming before Airbrush." 
            : "💡 Perfect long-lasting choice for all-day bridal glow!",
        };
      } else if (budget === "medium") {
        return {
          title: "WATER RESISTANT BRIDAL PACKAGE",
          price: "₹18,000/-",
          features: [
            "Water Resistant HD Makeup",
            "Real Flower Hair Styling",
            "Lenses & Eye Lashes Included",
            "Damani, Tikko & Nath Setting",
          ],
          tip: "💡 Includes Pre-Bridal Skin Prep suited for your " + skinType + " skin.",
        };
      } else {
        return {
          title: "HD BRIDAL PACKAGE",
          price: "₹17,000/-",
          features: [
            "HD Glam Makeup",
            "Hair Style with Real Flowers",
            "Jewellery & Saree Draping",
            "Eye Lashes & Lenses",
          ],
          tip: "💡 Great budget-friendly choice with full HD finish.",
        };
      }
    }

    if (occasion === "pre-bridal") {
      if (budget === "luxury") {
        return {
          title: "ROYAL PRE-BRIDAL SPA + PRE-FUNCTION GLAM",
          price: "₹19,000/-",
          features: [
            "Korean Glass Skin Facial",
            "Full Body Rica Waxing & Oil Massage",
            "Korean Hair Spa Therapy with Face Mask",
            "Manicure & Pedicure",
          ],
          tip: "💡 Full body revival package for maximum glow on your special days.",
        };
      } else {
        return {
          title: "PRE-FUNCTION GLASS MAKEUP PACKAGE",
          price: "₹13,000/-",
          features: [
            "Glass Skin Finish Makeup",
            "Hair Styling with Real Flowers",
            "Eye Lashes & Lenses Included",
            "Saree / Dupatta Draping",
          ],
          tip: skinType === "oily" 
            ? "💡 Glass makeup tuned with matte-prep for oil control." 
            : "💡 Natural dewy finish suited for your skin type.",
        };
      }
    }

    if (occasion === "party") {
      if (budget === "luxury" || budget === "medium") {
        return {
          title: "GLASS MAKEUP / HD PARTY PACKAGE",
          price: "₹7,500/-",
          features: [
            "Glass / HD Party Makeup",
            "Hair Style with Real Flowers",
            "Eye Lashes & Lenses",
            "Hair Extensions",
          ],
          tip: "💡 Gives a red-carpet flawless finish for evening functions.",
        };
      } else {
        return {
          title: "ESSENTIAL HD PARTY MAKEUP",
          price: "₹5,500/-",
          features: [
            "HD Party Makeup",
            "Hair Styling",
            "Eye Lashes",
            "Saree / Dupatta Draping",
          ],
          tip: "💡 Quick glam look for engagement or family functions.",
        };
      }
    }

    if (budget === "luxury") {
      return {
        title: "KOREAN GLASS SKIN FACIAL & HAIR SPA COMBO",
        price: "₹8,900/-",
        features: [
          "Korean Glass Skin Facial Prep",
          "Korean Hair Spa Therapy",
          "Relaxing Face & Head Massage",
          "Face Mask & Polishing",
        ],
        tip: "💡 Ultimate head-to-toe relaxation treatment.",
      };
    } else {
      return {
        title: "GLOWING SKIN FACIAL & CLEANUP COMBO",
        price: "₹2,500/-",
        features: [
          "Glowing Skin O3+ / Hydra Facial",
          "Full Face Threading",
          "D-Tan & Face Pack",
        ],
        tip: skinType === "acne" 
          ? "💡 Special Acne Care & Cleansing Products will be used!" 
          : "💡 Instant glow and deep cleansing combo.",
      };
    }
  };

  const recommendation = getRecommendation();

  const getWhatsAppLink = () => {
    if (!recommendation) return "#";
    const text = `Hey Khushi! Your website recommended the following package for me:\n\n` +
      `📌 Occasion: ${occasion.toUpperCase()}\n` +
      `💆‍♀️ Skin Type: ${skinType.toUpperCase()}\n` +
      `💰 Budget Preference: ${budget.toUpperCase()}\n\n` +
      `✨ Suggested Package: *${recommendation.title}* (${recommendation.price})\n\n` +
      `I would love to book this with you!`;

    return `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-gradient-to-br from-pink-50/60 via-white to-pink-50/30 p-6 md:p-8 rounded-2xl border border-pink-200 my-10 shadow-xs relative overflow-hidden max-w-4xl mx-auto">
      {/* Soft Glow Accent */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-pink-200/30 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-6 relative z-10">
        <span className="bg-pink-100 text-[#d8586c] font-bold text-[10px] px-3 py-1 rounded-full tracking-widest uppercase inline-block">
          💖 KHUSHI’S PERSONAL BEAUTY ADVISOR
        </span>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mt-2">
          FIND YOUR DREAM BEAUTY LOOK
        </h2>
        <p className="text-xs text-gray-500 mt-1 italic">
          “Select your occasion, skin type & budget below to get a personalized package recommendation! ✨”
        </p>
      </div>

      {/* Dropdown Selects Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10 bg-white p-4 rounded-xl border border-pink-100 shadow-2xs">
        {/* Dropdown 1: Occasion */}
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            1️⃣ Select Occasion
          </label>
          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f3a0ad] focus:bg-white cursor-pointer transition-all"
          >
            <option value="">-- Choose Occasion --</option>
            <option value="bridal">Bride / Main Wedding</option>
            <option value="pre-bridal">Engagement / Haldi / Sangeet</option>
            <option value="party">Party / Guest Look</option>
            <option value="regular">Regular Glow & Self-Care</option>
          </select>
        </div>

        {/* Dropdown 2: Skin Type */}
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            2️⃣ Select Skin Type
          </label>
          <select
            value={skinType}
            onChange={(e) => setSkinType(e.target.value)}
            className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f3a0ad] focus:bg-white cursor-pointer transition-all"
          >
            <option value="">-- Choose Skin Type --</option>
            <option value="normal">Normal / Combination</option>
            <option value="dry">Dry / Dehydrated Skin</option>
            <option value="oily">Oily / Shine Prone</option>
            <option value="acne">Sensitive / Acne Prone</option>
          </select>
        </div>

        {/* Dropdown 3: Budget */}
        <div>
          <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            3️⃣ Select Budget
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full text-xs p-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f3a0ad] focus:bg-white cursor-pointer transition-all"
          >
            <option value="">-- Choose Budget Range --</option>
            <option value="essential">Essential / Standard</option>
            <option value="medium">Medium / Premium HD</option>
            <option value="luxury">Ultra Luxury / Airbrush</option>
          </select>
        </div>
      </div>

      {/* Output Recommendation Card */}
      {recommendation ? (
        <div className="bg-white border-2 border-[#f3a0ad] p-6 rounded-xl shadow-md transition-all relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-pink-100 pb-3 mb-4">
            <div>
              <span className="bg-pink-100 text-[#d8586c] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                ✨ KHUSHI'S RECOMMENDED PACKAGE
              </span>
              <h3 className="text-lg font-serif font-bold text-gray-900 mt-1.5">
                {recommendation.title}
              </h3>
            </div>
            <div className="text-xl font-serif font-bold text-[#d8586c] mt-2 sm:mt-0">
              {recommendation.price}
            </div>
          </div>

          <ul className="space-y-1.5 mb-4">
            {recommendation.features.map((feat, idx) => (
              <li key={idx} className="text-xs text-gray-700 flex items-center">
                <span className="text-[#d8586c] mr-2">✦</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="bg-pink-50 text-[11px] text-pink-900 p-2.5 rounded-lg mb-5 font-medium border border-pink-100">
            {recommendation.tip}
          </div>

<a
  href={getWhatsAppLink()}
  target="_blank"
  rel="noreferrer"
  className="w-full inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white py-3.5 px-6 text-xs font-bold tracking-wider rounded-lg transition-all shadow-xs"
>
  <svg className="w-4 h-4 fill-current mr-2" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
  BOOK THIS SUGGESTED PACKAGE ON WHATSAPP
</a>        </div>
      ) : (
        <div className="text-center p-5 bg-white/80 border border-dashed border-pink-200 rounded-xl max-w-sm mx-auto text-gray-400 text-xs relative z-10">
          👉 Please select options from dropdowns above to see package recommendation.
        </div>
      )}
    </section>
  );
}
