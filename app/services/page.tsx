"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
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
            <p className="text-sm font-semibold tracking-widest mt-1">KHUSHI PATEL</p>
            <span className="text-[10px] tracking-widest block mt-0.5">MAKE-UP ARTIST</span>
          </div>

          <nav className="mt-12">
            <ul className="space-y-6 text-[13px] tracking-[3px] font-medium text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              </li>
              <li>
                <Link href="/services" className="text-white font-semibold">SERVICES</Link>
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

        <div className="text-center text-xs text-gray-500 space-y-4">
          <div className="flex justify-center space-x-5 text-white text-lg">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">📸</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f3a0ad]">🌐</a>
          </div>
          <p className="text-[10px] tracking-widest">© 2026 MAKEUP ARTIST.</p>
        </div>
      </aside>

      {/* --- 2. RIGHT MAIN CONTENT AREA --- */}
      <main className="ml-[260px] flex-1 p-8 md:p-14">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#f3a0ad] font-semibold tracking-[3px] text-xs uppercase">
            OUR MENU
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider text-gray-950 mt-1">
            SERVICES & PACKAGES
          </h1>
          <p className="text-gray-500 text-xs mt-2 tracking-wide">
            Where Beauty Meets Elegance. Choose your service and book directly via WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">

          {/* ===================================================
              SECTION 1: BRIDAL MAKEOVER (Wedding/Reception)
          ==================================================== */}
          <section>
            <div className="border-b-2 border-[#f3a0ad] pb-3 mb-8">
              <span className="text-[#f3a0ad] font-bold text-xs tracking-[2px] uppercase">SECTION 01</span>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-wider">BRIDAL MAKEOVER</h2>
              <p className="text-xs text-gray-500 mt-1">For Wedding & Reception Ceremonies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "HD Bridal Look", price: "17,000", items: ["HD Makeup", "Hair Style (Real Flower)", "Eye Lashes & Lenses", "Tikko, Nath", "Saree Draping"] },
                { title: "Glass Bridal Look", price: "22,000", items: ["Glass Makeup", "Hair Style & Accessories", "Eye Lashes & Lenses", "Damani, Tikko, Nath", "Saree Draping"] },
                { title: "Airbrush Luxury Bridal", price: "28,000", items: ["Air Brush Makeup", "Hair Style (Broch/Flowers)", "Nail Extensions", "Damani, Tikko, Nath", "Complete Saree Draping"] }
              ].map((pkg, idx) => (
                <div key={idx} className="border-2 border-[#f3a0ad]/40 bg-pink-50/20 p-6 rounded-lg flex flex-col justify-between hover:shadow-lg transition-all">
                  <div>
                    <span className="text-[10px] bg-[#f3a0ad] text-black font-bold px-2.5 py-0.5 rounded tracking-wider">BRIDAL EXCLUSIVE</span>
                    <h3 className="font-bold text-gray-900 text-base mt-3">{pkg.title}</h3>
                    <p className="text-[#f3a0ad] font-extrabold text-2xl mt-1">₹{pkg.price}/-</p>
                    <ul className="mt-4 space-y-2 text-xs text-gray-600">
                      {pkg.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <a
                    href={createWhatsAppLink(pkg.title, pkg.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2.5 rounded text-xs font-semibold tracking-wider transition-colors shadow-sm"
                  >
                    💬 Book on WhatsApp
                  </a>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 mt-3 text-right">* ₹1,000 deposit charged for hair extensions & jewellery.</p>
          </section>

          {/* ===================================================
              SECTION 2: KOREAN HAIR SPA THERAPY
          ==================================================== */}
          <section>
            <div className="border-b-2 border-[#f3a0ad] pb-3 mb-8">
              <span className="text-[#f3a0ad] font-bold text-xs tracking-[2px] uppercase">SECTION 02</span>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-wider">KOREAN HAIR SPA THERAPY</h2>
              <p className="text-xs text-gray-500 mt-1">Deep Nourishing Therapy with Head Massage</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Hair Length Rates */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-gray-800 tracking-wide border-b pb-2">Treatment Pricing by Length</h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span>Hair up to Neck</span>
                      <span className="font-bold text-[#f3a0ad]">₹2,000/-</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span>Hair up to Shoulder</span>
                      <span className="font-bold text-[#f3a0ad]">₹2,600/-</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span>Hair Below Shoulder</span>
                      <span className="font-bold text-[#f3a0ad]">₹3,600/-</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span>Hair up to Waist</span>
                      <span className="font-bold text-[#f3a0ad]">₹4,600/-</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-gray-200">
                      <span>Hair Below Waist</span>
                      <span className="font-bold text-[#f3a0ad]">₹5,600/-</span>
                    </div>
                  </div>
                </div>

                {/* Ultimate Combo Package */}
                <div className="bg-white border-2 border-[#f3a0ad] p-6 rounded-lg flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] bg-black text-white font-bold px-2 py-0.5 rounded tracking-wider">SIGNATURE COMBO</span>
                    <h3 className="font-bold text-gray-900 text-base mt-2">Korean Hair Spa + Face Mask & Massage</h3>
                    <p className="text-[#f3a0ad] font-extrabold text-2xl mt-1">₹8,900/-</p>
                    <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                      Complete relaxation package including full Korean scalp therapy, deep conditioning, customized face mask, and relaxing neck massage.
                    </p>
                  </div>
                  <a
                    href={createWhatsAppLink("Korean Hair Spa Therapy with Face Mask", "8,900")}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2.5 rounded text-xs font-semibold tracking-wider transition-colors"
                  >
                    💬 Book Korean Spa Combo
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* ===================================================
              SECTION 3: SIDER & PRE FUNCTION
          ==================================================== */}
          <section>
            <div className="border-b-2 border-[#f3a0ad] pb-3 mb-8">
              <span className="text-[#f3a0ad] font-bold text-xs tracking-[2px] uppercase">SECTION 03</span>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-wider">SIDER & PRE FUNCTION</h2>
              <p className="text-xs text-gray-500 mt-1">Party Look, Haldi, Sangeet & Mehendi Looks</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Normal Sider Makeup", price: "3,500", items: ["Normal Makeup", "Hair St/Cor", "Saree Draping", "Hair Pinup"] },
                { title: "HD Sider Look", price: "5,500", items: ["HD Makeup", "Hair Style", "Eye Lashes", "Saree Draping", "Hair Extension"] },
                { title: "Glass Sider Look", price: "7,500", items: ["Glass Makeup", "Hair Style (Real flower)", "Eye Lashes & Lenses", "Saree Draping", "Hair Extension"] },
                { title: "Water Resistant Look", price: "10,000", items: ["Water Resistant Makeup", "Hair Style (Real flower)", "Eye Lashes & Lenses", "Tikko, Nath", "Saree Draping"] },
                { title: "Glass Pre-Function Look", price: "13,000", items: ["Glass Makeup", "Hair Style (Real Flow)", "Eye Lashes & Lenses", "Hair Decoration", "Saree Draping"] },
                { title: "Water Resistant Pre-Function", price: "18,000", items: ["Water Resistant Makeup", "Damani, Tikko, Nath", "Hair Style & Decoration", "Eye Lashes & Lenses", "Saree Draping"] }
              ].map((pkg, idx) => (
                <div key={idx} className="border border-gray-200 bg-gray-50/40 p-6 rounded-lg flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{pkg.title}</h3>
                    <p className="text-[#f3a0ad] font-extrabold text-xl mt-1">₹{pkg.price}/-</p>
                    <ul className="mt-4 space-y-2 text-xs text-gray-600">
                      {pkg.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <a
                    href={createWhatsAppLink(pkg.title, pkg.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded text-xs font-semibold tracking-wider transition-colors"
                  >
                    💬 Book on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ===================================================
              SECTION 4: PRE BRIDAL PACKAGES
          ==================================================== */}
          <section>
            <div className="border-b-2 border-[#f3a0ad] pb-3 mb-8">
              <span className="text-[#f3a0ad] font-bold text-xs tracking-[2px] uppercase">SECTION 04</span>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-wider">PRE BRIDAL PACKAGES</h2>
              <p className="text-xs text-gray-500 mt-1">Complete Pampering & Glow Sessions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Basic Glow", price: "6,500", items: ["Threading", "Normal Full Wax", "Clean Up", "O3+ Facial"] },
                { title: "Hydra Glow", price: "10,000", items: ["Full Wax (Rica)", "Mani & Pedi", "Hydra Facial & Cleanup", "D-Tan & Hair Spa"] },
                { title: "Luxury Pamper", price: "13,000", items: ["Rica Waxing + Bikini", "O3+ / Raga Facial", "Body Polishing", "Hair Spa & D-Tan"] },
                { title: "Korean Glass Glow", price: "19,000", items: ["Rica Full Body Wax", "Korean Glass Facial & Pack", "Korean Hair Spa Therapy", "Full Body Oil Massage & Polishing"] }
              ].map((pkg, idx) => (
                <div key={idx} className="border border-gray-200 bg-gray-50/40 p-6 rounded-lg flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{pkg.title}</h3>
                    <p className="text-[#f3a0ad] font-extrabold text-xl mt-1">₹{pkg.price}/-</p>
                    <ul className="mt-4 space-y-2 text-xs text-gray-600">
                      {pkg.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                  <a
                    href={createWhatsAppLink(pkg.title, pkg.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded text-xs font-semibold tracking-wider transition-colors"
                  >
                    💬 Book on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ===================================================
              SECTION 5: SALON SERVICES
          ==================================================== */}
          <section>
            <div className="border-b-2 border-[#f3a0ad] pb-3 mb-8">
              <span className="text-[#f3a0ad] font-bold text-xs tracking-[2px] uppercase">SECTION 05</span>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-wider">SALON SERVICES</h2>
              <p className="text-xs text-gray-500 mt-1">Skin, Hair, Nails, Waxing & Massages</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Category: Facial & Treatments */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-base font-bold text-gray-900 border-b border-[#f3a0ad] pb-2 mb-4">
                  💆‍♀️ Facials & Cleanups
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between"><span>Cleanup (Acne / Normal / Oily)</span> <span className="font-bold">₹500</span></div>
                  <div className="flex justify-between"><span>Tan Clear Facial</span> <span className="font-bold">₹800</span></div>
                  <div className="flex justify-between"><span>Glovite Facial (Dry Skin)</span> <span className="font-bold">₹1,200</span></div>
                  <div className="flex justify-between"><span>Sensi Glow Facial</span> <span className="font-bold">₹1,800</span></div>
                  <div className="flex justify-between"><span>Light & Bright Facial</span> <span className="font-bold">₹2,100</span></div>
                  <div className="flex justify-between"><span>O3+ Glowing Skin Facial</span> <span className="font-bold">₹2,500</span></div>
                  <div className="flex justify-between text-[#f3a0ad] font-bold"><span>Hydra Boost Skin Facial</span> <span>₹5,000</span></div>
                  <div className="flex justify-between text-[#f3a0ad] font-bold"><span>Korean Glass Skin Facial</span> <span>₹5,600</span></div>
                </div>
              </div>

              {/* Category: Hair Spa & Treatments */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-base font-bold text-gray-900 border-b border-[#f3a0ad] pb-2 mb-4">
                  💇‍♀️ Hair Cut, Color & Treatments
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between"><span>Master Stylist Hair Cut</span> <span className="font-bold">₹700</span></div>
                  <div className="flex justify-between"><span>L'oreal Hair Spa</span> <span className="font-bold">From ₹600</span></div>
                  <div className="flex justify-between"><span>Botox Treatment</span> <span className="font-bold">From ₹2,500</span></div>
                  <div className="flex justify-between"><span>Pro Keratin Treatment</span> <span className="font-bold">From ₹2,900</span></div>
                  <div className="flex justify-between"><span>Nanoplastia Treatment</span> <span className="font-bold">From ₹3,900</span></div>
                  <div className="flex justify-between"><span>Global Hair Color</span> <span className="font-bold">From ₹1,500</span></div>
                </div>
              </div>

              {/* Category: Nails */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-base font-bold text-gray-900 border-b border-[#f3a0ad] pb-2 mb-4">
                  💅 Nails & Extensions
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between"><span>Real Nail Gel Polish</span> <span className="font-bold">₹199</span></div>
                  <div className="flex justify-between"><span>Real Nail Gel Polish & Art</span> <span className="font-bold">₹399</span></div>
                  <div className="flex justify-between"><span>Temporary Extensions & Polish</span> <span className="font-bold">₹699</span></div>
                  <div className="flex justify-between"><span>Gel Extensions & Polish</span> <span className="font-bold">₹1,499</span></div>
                  <div className="flex justify-between"><span>Acrylic Extensions & Polish</span> <span className="font-bold">₹1,599</span></div>
                </div>
              </div>

              {/* Category: Body Care & Waxing */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-base font-bold text-gray-900 border-b border-[#f3a0ad] pb-2 mb-4">
                  ✨ Body Care & Waxing
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between"><span>Full Body Rica Wax</span> <span className="font-bold">₹2,900</span></div>
                  <div className="flex justify-between"><span>Full Body Oil Massage</span> <span className="font-bold">₹2,800</span></div>
                  <div className="flex justify-between"><span>Body Polishing (Front & Back)</span> <span className="font-bold">₹1,800</span></div>
                  <div className="flex justify-between"><span>Glowing Body Polishing</span> <span className="font-bold">₹6,500</span></div>
                  <div className="flex justify-between"><span>Full Body D-Tan</span> <span className="font-bold">₹3,200</span></div>
                </div>
              </div>

            </div>

            <div className="text-center pt-8">
              <a
                href={createWhatsAppLink("Salon Service Enquiry")}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-md"
              >
                💬 Inquire or Book Any Salon Service on WhatsApp
              </a>
            </div>
          </section>

        </div>

      </main>

    </div>
  );
}
