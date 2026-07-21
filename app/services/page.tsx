'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const phoneNumber = "918128154675";
  const instagramUrl = "https://instagram.com/khushiimakeover_official";
  const [activeTab, setActiveTab] = useState<'korean' | 'bridal' | 'prebridal' | 'salon'>('korean');

  const buildWhatsappLink = (packageName: string, price: string) => {
    return `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20and%20book%20the%20*${encodeURIComponent(packageName)}*%20(${encodeURIComponent(price)}).`;
  };

  const koreanPackages = [
    {
      title: "KOREAN GLASS MAKEUP (SIDER / PARTY)",
      price: "₹7,500/-",
      features: [
        "Glass Glow Finish Makeup",
        "Hairstyle (Real Flower styling)",
        "Eye Lashes & Premium Eye Lenses",
        "Saree / Outfit Draping",
        "Hair Extension Included"
      ],
      tag: "TRENDING LOOK"
    },
    {
      title: "PRE-FUNCTION KOREAN GLASS GLAM",
      price: "₹13,000/-",
      features: [
        "Korean Glass Makeup (Sangeet/Haldi/Mahendi/Engagement)",
        "Hair Style with Real Flowers & Decoration",
        "Eye Lashes & Eye Lenses",
        "Saree / Outfit Draping"
      ],
      tag: "MOST POPULAR"
    },
    {
      title: "BRIDAL KOREAN GLASS MAKEOVER",
      price: "₹22,000/-",
      features: [
        "Signature Korean Glass Skin Makeup",
        "Hair Style (Brooch Decoration / Real Flowers)",
        "Damani, Tikko & Nath Placement",
        "Eye Lashes & Eye Lenses",
        "Hair Accessories & Extensions",
        "Saree / Dupatta Draping"
      ],
      tag: "LUXURY BRIDAL"
    },
    {
      title: "ULTIMATE KOREAN PRE-BRIDAL PACKAGE",
      price: "₹19,000/-",
      features: [
        "Korean Glass Glowing Skin Facial & Face Pack",
        "Korean Hair Spa Therapy (With Face Mask & Massage)",
        "Rica Full Body Waxing & Body Polishing",
        "Full Body Oil Massage, Scrubbing & Pack",
        "Clean Up, D-Tan, Manicure, Pedicure, Threading"
      ],
      tag: "FULL TREATMENT"
    }
  ];

  const bridalPackages = [
    {
      title: "NORMAL SIDER GLAM",
      price: "₹3,500/-",
      features: ["Normal Makeup", "Hair Straightening / Curling & Pinup", "Saree Draping"]
    },
    {
      title: "HD SIDER / PARTY GLAM",
      price: "₹5,500/-",
      features: ["High Definition (HD) Makeup", "Hair Styling & Hair Extension", "Eye Lashes", "Saree Draping"]
    },
    {
      title: "WATER RESISTANT PARTY GLAM",
      price: "₹10,000/-",
      features: ["Water Resistant Long-Wear Makeup", "Hair Style with Real Flowers & Decoration", "Eye Lashes & Eye Lenses", "Tikko & Nath Placement", "Saree Draping"]
    },
    {
      title: "PRE-FUNCTION WATER RESISTANT GLAM",
      price: "₹18,000/-",
      features: ["Water Resistant Makeup (Haldi/Sangeet/Roka/Engagement)", "Hair Style & Hair Decoration", "Damani, Tikko, Nath Placement", "Eye Lashes & Eye Lenses", "Saree Draping"]
    },
    {
      title: "HD BRIDAL MAKEOVER",
      price: "₹17,000/-",
      features: ["HD Bridal Makeup", "Hair Style (Real Flowers)", "Eye Lashes & Lenses", "Tikko & Nath Styling", "Saree / Dupatta Draping"]
    },
    {
      title: "AIR BRUSH LUXURY BRIDAL GLAM",
      price: "₹28,000/-",
      features: ["Flawless Airbrush Bridal Makeup", "Couture Hair Accessories & Real Flowers", "Eye Lashes & Eye Lenses", "Damani, Tikko, Nath Draping", "Hair Extensions", "Nail Extensions Included"],
      tag: "ROYAL CHOICE"
    }
  ];

  const preBridalPackages = [
    { title: "BASIC PRE-BRIDAL", price: "₹6,500/-", features: ["Threading (Eyebrow, Forehead, Upper lips)", "Full Hands, Legs & Underarms Normal Wax", "Clean Up & O3+ Facial", "Regular Manicure & Pedicure"] },
    { title: "ADVANCED PRE-BRIDAL", price: "₹10,000/-", features: ["Threading", "Rica Waxing (Full Hands, Legs, Underarms) & Bikini Wax", "Hydra Facial, Clean Up & D-Tan Face", "Regular Manicure, Pedicure & Loreal Hair Spa"] },
    { title: "LUXURY PRE-BRIDAL", price: "₹13,000/-", features: ["Threading", "Rica Full Hands, Legs & Underarms Wax & Bikini Wax", "Hydra / O3+ / Raga Facial & Face Mask", "Body Polishing & Full Body Pack, Scrub & Massage", "Hair Spa, Clean Up, D-Tan Face & Neck"] }
  ];

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col md:flex-row font-sans">
      <aside className="w-full md:w-64 bg-black text-white md:min-h-screen flex flex-col justify-between p-8 flex-shrink-0 z-40">
        <div className="space-y-12">
          <Link href="/" className="block bg-[#EFA7B3] text-black p-6 text-center shadow-md hover:bg-[#d88c99] transition-all">
            <h1 className="font-serif text-3xl tracking-wider font-bold">KP</h1>
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold mt-1">KHUSHI PATEL</h2>
            <p className="text-[8px] uppercase tracking-widest text-gray-800 mt-0.5">Bridal Studio & Salon</p>
          </Link>

          <nav className="flex flex-col space-y-5 text-xs font-semibold tracking-[0.25em] uppercase text-left">
            <Link href="/" className="text-gray-300 hover:text-[#EFA7B3] transition-colors">HOME</Link>
            <Link href="/about" className="text-gray-300 hover:text-[#EFA7B3] transition-colors">ABOUT</Link>
            <Link href="/services" className="text-[#EFA7B3]">SERVICES</Link>
          </nav>
        </div>

        <div className="pt-8 border-t border-gray-800 space-y-3">
          <p className="text-[10px] text-gray-400 font-light">📍 South Bopal, Ahmedabad</p>
          <p className="text-[10px] text-gray-500 font-light">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      <main className="flex-1 bg-white p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-[#EFA7B3] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
              STUDIO MENU & RATES
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-black uppercase font-normal">
              SERVICES & PACKAGES
            </h2>
            <div className="w-16 h-[2px] bg-[#EFA7B3] mx-auto md:mx-0 mt-3"></div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 border-b border-gray-200 pb-4">
            <button 
              onClick={() => setActiveTab('korean')}
              className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all ${
                activeTab === 'korean' ? 'bg-[#EFA7B3] text-black shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ✨ KOREAN GLASS PACKAGES
            </button>
            <button 
              onClick={() => setActiveTab('bridal')}
              className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all ${
                activeTab === 'bridal' ? 'bg-[#EFA7B3] text-black shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              👑 BRIDAL & PRE-FUNCTION
            </button>
            <button 
              onClick={() => setActiveTab('prebridal')}
              className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all ${
                activeTab === 'prebridal' ? 'bg-[#EFA7B3] text-black shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              🌸 PRE-BRIDAL SPA
            </button>
            <button 
              onClick={() => setActiveTab('salon')}
              className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all ${
                activeTab === 'salon' ? 'bg-[#EFA7B3] text-black shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              💄 SALON MENU (HAIR, SKIN, NAILS)
            </button>
          </div>

          {activeTab === 'korean' && (
            <div className="space-y-6">
              <div className="bg-pink-50/50 p-4 border-l-4 border-[#EFA7B3]">
                <h4 className="font-serif text-lg font-bold text-black uppercase">Korean Glass Skin Transformations</h4>
                <p className="text-xs text-gray-600 font-light mt-1">Specialized ultra-dewy, luminescent Korean makeup techniques & specialized hair therapy.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {koreanPackages.map((item, idx) => (
                  <div key={idx} className="border border-[#EFA7B3] p-6 bg-white relative flex flex-col justify-between hover:shadow-lg transition-all">
                    {item.tag && (
                      <span className="absolute top-0 right-0 bg-[#EFA7B3] text-black text-[9px] font-bold tracking-widest uppercase px-3 py-1">
                        {item.tag}
                      </span>
                    )}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-black">{item.title}</h3>
                      <p className="text-2xl font-serif text-[#D46A83] font-bold mt-2">{item.price}</p>
                      <ul className="space-y-2 mt-4">
                        {item.features.map((f, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                            <span className="text-[#EFA7B3]">✦</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={buildWhatsappLink(item.title, item.price)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 block text-center bg-black text-white hover:bg-[#EFA7B3] hover:text-black text-[10px] font-bold tracking-widest uppercase py-3 transition-all"
                    >
                      BOOK KOREAN GLAM
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bridal' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 border-l-4 border-black">
                <h4 className="font-serif text-lg font-bold text-black uppercase">Bridal & Pre-Function Glam</h4>
                <p className="text-xs text-gray-600 font-light mt-1">HD & Airbrush signature bridal makeovers for Wedding, Reception, Haldi & Sangeet.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bridalPackages.map((item, idx) => (
                  <div key={idx} className="border border-gray-200 p-6 bg-white flex flex-col justify-between hover:border-[#EFA7B3] transition-all">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-black">{item.title}</h3>
                      <p className="text-xl font-serif text-[#D46A83] font-bold mt-2">{item.price}</p>
                      <ul className="space-y-2 mt-4">
                        {item.features.map((f, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                            <span className="text-[#EFA7B3]">✦</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={buildWhatsappLink(item.title, item.price)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 block text-center bg-black text-white hover:bg-[#EFA7B3] hover:text-black text-[10px] font-bold tracking-widest uppercase py-2.5 transition-all"
                    >
                      BOOK THIS LOOK
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'prebridal' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {preBridalPackages.map((item, idx) => (
                <div key={idx} className="border border-gray-200 p-6 bg-white flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-black">{item.title}</h3>
                    <p className="text-2xl font-serif text-[#D46A83] font-bold mt-2">{item.price}</p>
                    <ul className="space-y-2 mt-4">
                      {item.features.map((f, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start space-x-2">
                          <span className="text-[#EFA7B3]">✦</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={buildWhatsappLink(item.title, item.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block text-center bg-black text-white hover:bg-[#EFA7B3] hover:text-black text-[10px] font-bold tracking-widest uppercase py-2.5 transition-all"
                  >
                    INQUIRE PRE-BRIDAL
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'salon' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
              <div className="border border-gray-200 p-6 space-y-4">
                <h4 className="font-serif text-base font-bold text-black border-b pb-2 uppercase">Facials & Skin Treatments</h4>
                <div className="space-y-2">
                  <div className="flex justify-between"><span>Tan Clear Facial (Tanned Skin)</span><span className="font-bold">₹800</span></div>
                  <div className="flex justify-between"><span>Glovite Facial (Dry Skin)</span><span className="font-bold">₹1,200</span></div>
                  <div className="flex justify-between"><span>Sensi Glow Facial (Sensitive Skin)</span><span className="font-bold">₹1,800</span></div>
                  <div className="flex justify-between"><span>Light & Bright Facial</span><span className="font-bold">₹2,100</span></div>
                  <div className="flex justify-between"><span>O3+ Glowing Skin Facial</span><span className="font-bold">₹2,500</span></div>
                  <div className="flex justify-between text-[#D46A83] font-bold"><span>Hydra Boost Skin Facial</span><span>₹5,000</span></div>
                  <div className="flex justify-between text-[#D46A83] font-bold"><span>Korean Glass Skin Facial</span><span>₹5,600</span></div>
                </div>
              </div>

              <div className="border border-gray-200 p-6 space-y-4">
                <h4 className="font-serif text-base font-bold text-black border-b pb-2 uppercase">Hair Spa & Treatments</h4>
                <div className="space-y-2">
                  <div className="flex justify-between"><span>L Oreal Professional Spa</span><span className="font-bold">₹600 - ₹2,100</span></div>
                  <div className="flex justify-between text-[#D46A83] font-bold"><span>Korean Hair Spa Therapy (Massage)</span><span>₹2,000 - ₹5,600</span></div>
                  <div className="flex justify-between"><span>Hair Straightening Treatment</span><span className="font-bold">₹2,500 - ₹8,900</span></div>
                  <div className="flex justify-between"><span>Botox Hair Treatment</span><span className="font-bold">₹2,500 - ₹7,500</span></div>
                  <div className="flex justify-between"><span>Pro Keratin Treatment</span><span className="font-bold">₹2,900 - ₹8,900</span></div>
                  <div className="flex justify-between"><span>Nanoplastia Treatment</span><span className="font-bold">₹3,900 - ₹9,900</span></div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
