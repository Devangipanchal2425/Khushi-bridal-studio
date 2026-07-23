'use client';
import React from 'react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
export default function AboutPage() {
  const phoneNumber = "919870085600";

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col md:flex-row font-sans relative">
      {/* Shared Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-6 md:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header Section */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-[#EFA7B3] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
              KNOW YOUR ARTIST & STUDIO
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-black uppercase font-normal">
              ABOUT KHUSHI MAKEOVER
            </h2>
            <div className="w-16 h-[2px] bg-[#EFA7B3] mx-auto md:mx-0 mt-3"></div>
          </div>

          {/* Hero / Philosophy Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 md:p-8 border border-gray-100">
            <div className="space-y-4">
              <span className="bg-[#EFA7B3] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 inline-block">
                BEAUTY & ELEGANCE
              </span>
              <h3 className="font-serif text-2xl font-bold text-black uppercase">
                Redefining Glamour in South Bopal
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                At Khushi Makeover, we believe makeup isn't about altering your appearance—it’s about enhancing your natural features and instilling confidence. Whether it's your big wedding day or a relaxing self-care session, we deliver tailored beauty experiences.
              </p>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                Specializing in **HD Bridal Makeovers, Airbrush Couture, and Korean Glass Skin Therapy**, our studio ensures long-lasting, photo-ready perfection for every occasion.
              </p>
            </div>
            <div className="border-2 border-[#EFA7B3] p-6 bg-white text-center space-y-3">
              <span className="text-4xl">👑</span>
              <h4 className="font-serif font-bold text-black text-lg uppercase">Signature Excellence</h4>
              <p className="text-xs text-gray-500 font-light">
                Dermatologically tested luxury brands, hygienic application, and private suite experience.
              </p>
            </div>
          </div>

          {/* Highlights / Features Grid */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-black uppercase tracking-wide border-b pb-2">
              WHY CLIENTS LOVE US
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="border border-gray-200 p-6 space-y-2 hover:border-[#EFA7B3] transition-all bg-white">
                <span className="text-2xl">✨</span>
                <h4 className="font-serif font-bold text-black uppercase text-sm">Glass Skin Specialists</h4>
                <p className="text-xs text-gray-500 font-light">
                  Expertise in Korean dewiness and glass-finish makeup that looks natural and weightless.
                </p>
              </div>

              <div className="border border-gray-200 p-6 space-y-2 hover:border-[#EFA7B3] transition-all bg-white">
                <span className="text-2xl">💍</span>
                <h4 className="font-serif font-bold text-black uppercase text-sm">Customized Bridal Packages</h4>
                <p className="text-xs text-gray-500 font-light">
                  Tailored according to your outfit, jewelry, face structure, and wedding theme.
                </p>
              </div>

              <div className="border border-gray-200 p-6 space-y-2 hover:border-[#EFA7B3] transition-all bg-white">
                <span className="text-2xl">🌿</span>
                <h4 className="font-serif font-bold text-black uppercase text-sm">Complete Hair & Skin Care</h4>
                <p className="text-xs text-gray-500 font-light">
                  From Korean Hair Spa therapies to Nanoplastia & Botox, we offer complete hair transformation.
                </p>
              </div>

            </div>
          </div>

          {/* Studio Location & Contact Banner */}
          <div className="bg-black text-white p-8 md:p-10 space-y-6 text-center border-t-2 border-[#EFA7B3]">
            <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-tight">
              VISIT OUR STUDIO
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light max-w-lg mx-auto">
              Ready for your dream makeover or hair therapy? Book your appointment or consultation today!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-semibold tracking-wider pt-2">
              <a
                href={`https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#EFA7B3] text-black hover:bg-white px-8 py-3 uppercase transition-all duration-300 font-bold"
              >
                Book Appointment via WhatsApp 📱
              </a>
              <Link 
                href="/services" 
                className="border border-white hover:border-[#EFA7B3] hover:text-[#EFA7B3] px-8 py-3 uppercase transition-all"
              >
                View Services & Rates
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-800 text-gray-400 text-[11px] font-light">
              📍 Location: South Bopal, Ahmedabad, Gujarat
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
