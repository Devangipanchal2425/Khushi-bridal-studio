'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const phoneNumber = "919870085600";
  const instagramUrl = "https://instagram.com/khushiimakeover_official";
  
  type TabType = 'korean' | 'bridal' | 'prebridal' | 'salon';
  const [activeTab, setActiveTab] = useState<TabType>('korean');
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Glam Quiz State
  const [eventType, setEventType] = useState('');
  const [glamStyle, setGlamStyle] = useState('');
  const [skinType, setSkinType] = useState('');
  const [showResult, setShowResult] = useState(false);

  const buildWhatsappLink = (packageName: string, price: string) => {
    return `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20and%20book%20the%20*${encodeURIComponent(packageName)}*%20(${encodeURIComponent(price)}).`;
  };

  const getRecommendation = () => {
    if (glamStyle === 'korean') {
      return {
        title: "✨ Korean Glass Dewy Transformation",
        desc: "Ultra-hydrated, glass glow base with subtle eye accent and real flower hair styling.",
        package: "Pre-Function Korean Glass Glam / Bridal Korean Glass",
        price: "₹13,000 - ₹22,000"
      };
    } else if (eventType === 'bridal') {
      return {
        title: "👑 Airbrush / HD Couture Bridal Look",
        desc: "Long-lasting, sweat-proof flawlessness with custom lashes, lenses & jewellery draping.",
        package: "Airbrush Luxury Bridal Glam",
        price: "₹28,000"
      };
    } else {
      return {
        title: "🌸 HD Signature Sider & Party Glam",
        desc: "Soft matte high-definition glam tailored for your outfit and face shape.",
        package: "HD Sider / Party Glam",
        price: "₹5,500 - ₹10,000"
      };
    }
  };

  const rec = getRecommendation();

  const sendQuizToWhatsapp = () => {
    const text = `Hello Khushi! ✨ I took the Glam Quiz on your website:\n\n• *Event:* ${eventType || 'Not Specified'}\n• *Preferred Style:* ${glamStyle || 'Not Specified'}\n• *Recommended Package:* ${rec.title}\n\nI would love to check availability for my date!`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
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
    { id: 'salon', label: '💄 SALON MENU (FULL SKIN, HAIR & NAILS)' },
  ];

  const salonCategories = [
    {
      category: "🧵 Threading & Waxing",
      badge: "EXPRESS CARE",
      items: [
        { name: "Skin Threading (Eyebrows, Upper lip, Forehead)", price: "₹50 - ₹250" },
        { name: "Normal Waxing (Full Arms & Legs)", price: "₹600 - ₹1,200" },
        { name: "Rica Liposoluble Waxing (Gentle & De-Tan)", price: "₹900 - ₹2,200" },
        { name: "Full Body Rica Waxing", price: "₹3,500" },
      ]
    },
    {
      category: "✨ Facials, Masks & Skin Therapy",
      badge: "GLOW SPECIAL",
      items: [
        { name: "Deep CleanUp & D-Tan Face Pack", price: "₹799" },
        { name: "Basic Organic Glow Facial", price: "₹1,200" },
        { name: "Advance Hydra & O3+ Facial", price: "₹2,500" },
        { name: "Luxurious Korean Glass Skin Facial", price: "₹5,600" },
        { name: "Customized Hydro-Jelly Face Mask & D-Tan", price: "₹999" },
      ]
    },
    {
      category: "🌿 Body Spa & Polishing",
      badge: "PURE RELAXATION",
      items: [
        { name: "Aromatherapy Full Body Oil Massage", price: "₹2,200" },
        { name: "Full Body Scrubbing & D-Tan Pack", price: "₹2,800" },
        { name: "Luxurious Body Polishing (Glow Therapy)", price: "₹4,500" },
      ]
    },
    {
      category: "💇‍♀️ Hair Cut, Styling & Coloring",
      badge: "TRENDING",
      items: [
        { name: "Advanced Layer / Step Hair Cut & Blowdry", price: "₹600 - ₹1,200" },
        { name: "Creative Hair Styling & Real Flower Pinup", price: "₹1,500" },
        { name: "L'Oreal Inoa Ammonia-Free Global Color", price: "₹3,500 - ₹6,500" },
        { name: "Global Highlights & Balayage", price: "₹4,000 - ₹8,500" },
      ]
    },
    {
      category: "💆‍♀️ Hair Spa & Treatments",
      badge: "HAIR REPAIR",
      items: [
        { name: "L'Oreal Professional Nourishing Spa", price: "₹1,200 - ₹2,100" },
        { name: "Korean Hair Spa Therapy (Massage + Mask)", price: "₹2,000 - ₹5,600" },
        { name: "Hair Shine Straightening Treatment", price: "₹2,500 - ₹8,900" },
        { name: "Botox Hair Deep Repair Treatment", price: "₹2,500 - ₹7,500" },
        { name: "Pro Keratin Smoothing Treatment", price: "₹2,900 - ₹8,900" },
        { name: "Nanoplastia Organic Transformation", price: "₹3,900 - ₹9,900" },
      ]
    },
    {
      category: "💅 Mani-Pedi & Nails Studio",
      badge: "AESTHETIC NAILS",
      items: [
        { name: "Hand Manicure & Leg Pedicure Spa Combo", price: "₹1,800" },
        { name: "Classic Gel Polish & Extension Removal", price: "₹799" },
        { name: "Aesthetic Press-On Nails & Nail Art", price: "₹1,299" },
        { name: "Acrylic & Gel Nail Extensions", price: "₹2,499" },
        { name: "Bridal Chrome & Stone Nail Art", price: "₹3,500" },
      ]
    }
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
        <div className="max-w-6xl mx-auto space-y-12">
          
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

          {/* Tab 4: Salon Menu */}
          {activeTab === 'salon' && (
            <div className="space-y-8 text-xs">
              
              {/* Quick Search Bar */}
              <div className="flex items-center bg-gray-50 border border-gray-200 p-3 space-x-3">
                <span className="text-gray-400">🔍</span>
                <input 
                  type="text" 
                  placeholder="Search service (e.g., Botox, Waxing, Facial, Korean Hair Spa)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-xs text-black"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="text-gray-400 text-xs">Clear</button>
                )}
              </div>

              {/* Categorized Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {salonCategories.map((cat, idx) => {
                  const filteredItems = cat.items.filter(item => 
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                  );

                  if (searchTerm && filteredItems.length === 0) return null;

                  return (
                    <div key={idx} className="border border-gray-200 p-6 space-y-4 bg-white shadow-sm hover:border-[#EFA7B3] transition-all relative">
                      <h4 className="font-serif text-base font-bold text-black border-b pb-2 uppercase tracking-wide flex items-center justify-between">
                        <span>{cat.category}</span>
                        <span className="text-[9px] bg-pink-100 text-[#D46A83] px-2 py-0.5 rounded font-semibold">{cat.badge}</span>
                      </h4>
                      <div className="space-y-3">
                        {filteredItems.map((item, i) => (
                          <div key={i} className="flex justify-between items-start border-b border-gray-50 pb-1.5">
                            <span className="text-gray-700 pr-2">{item.name}</span>
                            <span className="font-bold text-black whitespace-nowrap">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Custom Package Callout */}
              <div className="bg-black text-white p-6 text-center space-y-3 rounded-none mt-8 shadow-md border-t-2 border-[#EFA7B3]">
                <h4 className="font-serif text-xl font-bold tracking-wide">✨ Want a Custom Salon Combo?</h4>
                <p className="text-gray-300 text-xs font-light">Combine Hair, Skin, Massage & Nails for exclusive salon package discounts!</p>
                <button
                  type="button"
                  onClick={() => setShowCustomModal(true)}
                  className="mt-2 inline-block bg-[#EFA7B3] text-black font-bold text-xs uppercase tracking-widest px-6 py-3 hover:bg-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Build Custom Package
                </button>
              </div>

            </div>
          )}

          {/* STANDALONE UNIQUE FEATURE: BRIDAL & GLAM CONCIERGE QUIZ */}
          <section className="bg-gradient-to-b from-gray-50 to-pink-50/30 py-12 px-6 md:px-10 my-12 border-y border-[#EFA7B3]/40">
            <div className="max-w-5xl mx-auto space-y-10">
              
              <div className="text-center space-y-3">
                <span className="bg-[#EFA7B3] text-black text-[10px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full inline-block">
                  EXCLUSIVE STUDIO FEATURE
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-black uppercase tracking-tight">
                  THE BRIDAL & GLAM CONCIERGE
                </h2>
                <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto font-light">
                  Not sure which makeover suits your event? Discover your personalized glam match in seconds!
                </p>
                <div className="w-12 h-[2px] bg-[#EFA7B3] mx-auto mt-2"></div>
              </div>

              <div className="bg-white p-6 md:p-10 border border-[#EFA7B3] shadow-xl relative overflow-hidden">
                <h3 className="font-serif text-xl font-bold text-black border-b pb-3 uppercase flex items-center justify-between">
                  <span>✨ Find Your Signature Look</span>
                  <span className="text-xs text-[#D46A83] font-sans">Step-by-Step Match</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-xs">
                  
                  <div className="space-y-2">
                    <label className="font-bold text-gray-800 uppercase tracking-wider block">1. What's the Occasion?</label>
                    <select 
                      value={eventType}
                      onChange={(e) => { setEventType(e.target.value); setShowResult(true); }}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#EFA7B3] bg-gray-50"
                    >
                      <option value="">-- Select Occasion --</option>
                      <option value="bridal">Main Wedding / Bridal Day</option>
                      <option value="sangeet">Sangeet / Haldi / Engagement</option>
                      <option value="party">Reception / Party / Sider Glam</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-gray-800 uppercase tracking-wider block">2. Preferred Makeup Vibe?</label>
                    <select 
                      value={glamStyle}
                      onChange={(e) => { setGlamStyle(e.target.value); setShowResult(true); }}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#EFA7B3] bg-gray-50"
                    >
                      <option value="">-- Select Finish --</option>
                      <option value="korean">Luminescent Korean Glass Skin Glow</option>
                      <option value="hd">High Definition (HD) Flawless Look</option>
                      <option value="airbrush">Airbrush Royal Glam (Waterproof)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-gray-800 uppercase tracking-wider block">3. Skin Sensitivity Focus?</label>
                    <select 
                      value={skinType}
                      onChange={(e) => setSkinType(e.target.value)}
                      className="w-full p-3 border border-gray-300 focus:outline-none focus:border-[#EFA7B3] bg-gray-50"
                    >
                      <option value="">-- Select Skin Need --</option>
                      <option value="dry">Dry / Dehydrated (Needs Hydration)</option>
                      <option value="oily">Oily / Combination (Needs Matte Base)</option>
                      <option value="sensitive">Sensitive (Needs Organic Products)</option>
                    </select>
                  </div>

                </div>

                {showResult && (
                  <div className="mt-8 bg-pink-50/60 border-l-4 border-[#EFA7B3] p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold text-[#D46A83] tracking-widest uppercase">RECOMMENDED MATCH FOR YOU</span>
                        <h4 className="font-serif text-xl font-bold text-black mt-1">{rec.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{rec.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 block">Est. Range</span>
                        <span className="text-lg font-serif font-bold text-[#D46A83]">{rec.price}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={sendQuizToWhatsapp}
                        className="bg-black text-white hover:bg-[#EFA7B3] hover:text-black font-bold text-xs uppercase tracking-widest py-3 px-6 transition-all duration-300 cursor-pointer"
                      >
                        Consult Khushi Patel for this Look 📱
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* VIP Experience Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-6 border border-gray-200 space-y-2 text-center hover:border-[#EFA7B3] transition-all">
                  <span className="text-3xl">☕</span>
                  <h4 className="font-serif font-bold text-black uppercase text-sm">Private Bridal Suite</h4>
                  <p className="text-xs text-gray-500 font-light">Relaxed, air-conditioned studio environment with custom refreshments and personalized music space.</p>
                </div>

                <div className="bg-white p-6 border border-gray-200 space-y-2 text-center hover:border-[#EFA7B3] transition-all">
                  <span className="text-3xl">🪞</span>
                  <h4 className="font-serif font-bold text-black uppercase text-sm">Skin Prep & Consultation</h4>
                  <p className="text-xs text-gray-500 font-light">Every makeover starts with a tailored skin prep mask session to ensure effortless, non-cakey glow.</p>
                </div>

                <div className="bg-white p-6 border border-gray-200 space-y-2 text-center hover:border-[#EFA7B3] transition-all">
                  <span className="text-3xl">👑</span>
                  <h4 className="font-serif font-bold text-black uppercase text-sm">High-End Luxury Brands</h4>
                  <p className="text-xs text-gray-500 font-light">Only certified, ultra-premium dermatologically tested products used for flawless long-stay looks.</p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Custom Service Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black p-8 max-w-md w-full shadow-2xl relative space-y-6 border-2 border-[#EFA7B3]">
            <button 
              onClick={() => setShowCustomModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-lg cursor-pointer"
            >
              ✕
            </button>
            
            <div className="text-center space-y-2">
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wide">Custom Package Inquiry</h3>
              <p className="text-xs text-gray-600">Select your preferred salon service mix to get an instant quote on WhatsApp!</p>
            </div>

            <div className="space-y-4 text-xs">
              <label className="block font-semibold">Choose Your Preferred Combo:</label>
              <select 
                value={selectedService} 
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#EFA7B3]"
              >
                <option value="">-- Select Service Mix --</option>
                <option value="Luxurious Facial + Body Massage Spa">Luxurious Facial + Body Massage Spa</option>
                <option value="Korean Hair Spa + Nanoplastia / Botox">Korean Hair Spa + Nanoplastia / Botox</option>
                <option value="L'Oreal Inoa Global Color + Hair Highlights">L'Oreal Inoa Global Color + Hair Highlights</option>
                <option value="Full Rica Waxing + Body Polishing">Full Rica Waxing + Body Polishing</option>
                <option value="Complete Hand & Leg Mani-Pedi Spa Combo">Complete Hand & Leg Mani-Pedi Spa Combo</option>
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
