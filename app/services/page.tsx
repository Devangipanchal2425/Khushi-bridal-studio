'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const phoneNumber = "918128154675";
  const instagramUrl = "https://instagram.com/khushiimakeover_official";
  
  type TabType = 'korean' | 'bridal' | 'prebridal' | 'salon';
  const [activeTab, setActiveTab] = useState<TabType>('korean');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

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

  const tabs: { id: TabType; label: string }[] = [
    { id: 'korean', label: '✨ KOREAN GLASS PACKAGES' },
    { id: 'bridal', label: '👑 BRIDAL & PRE-FUNCTION' },
    { id: 'prebridal', label: '🌸 PRE-BRIDAL SPA' },
    { id: 'salon', label: '💄 SALON MENU (HAIR, SKIN, NAILS)' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col md:flex-row font-sans relative">
      {/* Sidebar Navigation */}
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

      {/* Main Content Area */}
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

          {/* Active Navigation Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-[#EFA7B3] text-black shadow-md ring-2 ring-[#EFA7B3] scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Korean Glass */}
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

          {/* Tab 2: Bridal */}
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

          {/* Tab 3: Pre-Bridal */}
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

          {/* Tab 4: Salon Menu (Hair, Skin & NOW NAILS!) */}
          {activeTab === 'salon' && (
            <div className="space-y-8 text-xs">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Facials */}
                <div className="border border-gray-200 p-6 space-y-4 bg-white shadow-sm hover:border-[#EFA7B3] transition-all">
                  <h4 className="font-serif text-base font-bold text-black border-b pb-2 uppercase tracking-wide flex items-center justify-between">
                    <span>✨ Facials & Skin</span>
                    <span className="text-[10px] bg-pink-100 text-[#D46A83] px-2 py-0.5 rounded">SKIN CARE</span>
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex justify-between"><span>Tan Clear Facial</span><span className="font-bold">₹800</span></div>
                    <div className="flex justify-between"><span>Glovite Facial</span><span className="font-bold">₹1,200</span></div>
                    <div className="flex justify-between"><span>Sensi Glow Facial</span><span className="font-bold">₹1,800</span></div>
                    <div className="flex justify-between"><span>Light & Bright Facial</span><span className="font-bold">₹2,100</span></div>
                    <div className="flex justify-between"><span>O3+ Glowing Facial</span><span className="font-bold">₹2,500</span></div>
                    <div className="flex justify-between text-[#D46A83] font-bold"><span>Hydra Boost Facial</span><span>₹5,000</span></div>
                    <div className="flex justify-between text-[#D46A83] font-bold"><span>Korean Glass Facial</span><span>₹5,600</span></div>
                  </div>
                </div>

                {/* Hair Spa */}
                <div className="border border-gray-200 p-6 space-y-4 bg-white shadow-sm hover:border-[#EFA7B3] transition-all">
                  <h4 className="font-serif text-base font-bold text-black border-b pb-2 uppercase tracking-wide flex items-center justify-between">
                    <span>💇‍♀️ Hair Treatments</span>
                    <span className="text-[10px] bg-pink-100 text-[#D46A83] px-2 py-0.5 rounded">HAIR CARE</span>
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex justify-between"><span>L Oreal Professional Spa</span><span className="font-bold">₹600 - ₹2,100</span></div>
                    <div className="flex justify-between text-[#D46A83] font-bold"><span>Korean Hair Therapy</span><span>₹2,000 - ₹5,600</span></div>
                    <div className="flex justify-between"><span>Hair Straightening</span><span className="font-bold">₹2,500 - ₹8,900</span></div>
                    <div className="flex justify-between"><span>Botox Hair Treatment</span><span className="font-bold">₹2,500 - ₹7,500</span></div>
                    <div className="flex justify-between"><span>Pro Keratin Treatment</span><span className="font-bold">₹2,900 - ₹8,900</span></div>
                    <div className="flex justify-between"><span>Nanoplastia Treatment</span><span className="font-bold">₹3,900 - ₹9,900</span></div>
                  </div>
                </div>

                {/* NAILS SECTION (NEWLY ADDED) */}
                <div className="border border-[#EFA7B3] p-6 space-y-4 bg-pink-50/20 shadow-sm hover:shadow-md transition-all relative">
                  <span className="absolute -top-3 right-4 bg-[#EFA7B3] text-black font-bold text-[8px] uppercase tracking-widest px-2 py-0.5 rounded shadow">
                    NEW MENU
                  </span>
                  <h4 className="font-serif text-base font-bold text-black border-b border-[#EFA7B3] pb-2 uppercase tracking-wide flex items-center justify-between">
                    <span>💅 Nails Studio & Spa</span>
                    <span className="text-[10px] bg-[#EFA7B3] text-black px-2 py-0.5 rounded font-semibold">NAIL ART</span>
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex justify-between"><span>Classic Gel Polish</span><span className="font-bold">₹799</span></div>
                    <div className="flex justify-between"><span>Aesthetic Press-On Nails</span><span className="font-bold">₹1,299</span></div>
                    <div className="flex justify-between"><span>Acrylic Nail Extensions</span><span className="font-bold">₹1,899</span></div>
                    <div className="flex justify-between"><span>Gel Extensions + Nail Art</span><span className="font-bold">₹2,499</span></div>
                    <div className="flex justify-between"><span>Luxury Spa Pedicure</span><span className="font-bold">₹1,100</span></div>
                    <div className="flex justify-between text-[#D46A83] font-bold"><span>Korean Glass Nail Art</span><span>₹2,999</span></div>
                    <div className="flex justify-between text-[#D46A83] font-bold"><span>Bridal Chrome & Stone Nails</span><span>₹3,500</span></div>
                  </div>
                </div>

              </div>

              {/* NEW INTERACTIVE FEATURE: Custom Package Builder Trigger */}
              <div className="bg-black text-white p-6 text-center space-y-3 rounded-none mt-6 shadow-md border-t-2 border-[#EFA7B3]">
                <h4 className="font-serif text-xl font-bold tracking-wide">✨ Want a Custom Salon Combo?</h4>
                <p className="text-gray-300 text-xs font-light">Mix & match Hair, Skin, and Nails services for exclusive combo discounts!</p>
                <button
                  type="button"
                  onClick={() => setShowCustomModal(true)}
                  className="mt-2 inline-block bg-[#EFA7B3] text-black font-bold text-xs uppercase tracking-widest px-6 py-3 hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  Build Custom Package
                </button>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* INTERACTIVE MODAL (Pop-up Feature) */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black p-8 max-w-md w-full shadow-2xl relative space-y-6 border-2 border-[#EFA7B3]">
            <button 
              onClick={() => setShowCustomModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-lg"
            >
              ✕
            </button>
            
            <div className="text-center space-y-2">
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wide">Custom Package Inquiry</h3>
              <p className="text-xs text-gray-600">Select your preferred salon service mix to get an instant quote on WhatsApp!</p>
            </div>

            <div className="space-y-4 text-xs">
              <label className="block font-semibold">Choose Your Main Focus:</label>
              <select 
                value={selectedService} 
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#EFA7B3]"
              >
                <option value="">-- Select Service Combo --</option>
                <option value="Hair Spa + Korean Glass Nails">Hair Spa + Korean Glass Nails</option>
                <option value="Hydra Facial + Gel Extensions">Hydra Facial + Gel Extensions</option>
                <option value="Complete Head-to-Toe Beauty Combo">Complete Head-to-Toe Beauty Combo</option>
              </select>

              <a
                href={`https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20want%20to%20customize%20a%20package%20for:%20*${encodeURIComponent(selectedService || "Custom Salon Services")}*.`}
                target="_blank"
                rel="noreferrer"
                className={`block text-center py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                  selectedService ? 'bg-black text-white hover:bg-[#EFA7B3] hover:text-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Send Inquiry on WhatsApp 📱
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
