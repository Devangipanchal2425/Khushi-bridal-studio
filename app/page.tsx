'use client';
import React, { useState } from 'react';
import { Home, Image as ImageIcon, Calendar, Phone, Award, Sparkles, HeartHandshake } from 'lucide-react';

export default function BridalApp() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Local public directory image path
  const brideImageUrl = "/bride.jpeg";

  // Updated phone number & pre-filled WhatsApp message URL
  const phoneNumber = "919870085600";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20bridal%20makeup%20services.`;

  if (!showMainApp) {
    return (
      <div className="min-h-screen w-full bg-black relative flex flex-col justify-between p-6 overflow-hidden animate-fadeIn select-none">
        
        {/* Full Screen Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-500"
          style={{ 
            backgroundImage: `url('${brideImageUrl}')`,
            backgroundColor: '#1a1a1a', 
            filter: 'brightness(0.7)' 
          }}
        ></div>

        <div className="absolute inset-0 bg-black/25 z-0"></div>

        {/* Top Header Row with Circle Hamburger */}
        <div className="relative z-10 flex justify-between items-center w-full mt-4">
          <button 
            onClick={() => setShowMainApp(true)}
            className="w-12 h-12 rounded-full bg-[#D46A83] text-white flex flex-col items-center justify-center space-y-1 shadow-md hover:bg-[#b8546c] transition-all"
          >
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </button>
        </div>

        {/* Central Core Branding & Typography Stack */}
        <div className="relative z-10 my-auto text-left pl-2 max-w-xl space-y-2">
          <div className="space-y-3">
            <div className="w-16 h-[2px] bg-[#D46A83]"></div>
            <h2 className="text-[#D46A83] text-sm md:text-base font-medium tracking-[0.35em] uppercase font-sans">
              KHUSHI PATEL
            </h2>
          </div>

          <h1 className="text-white font-serif text-2xl sm:text-4xl md:text-6xl tracking-normal uppercase font-light leading-tight pt-1 whitespace-nowrap overflow-hidden">
            MAKEUP ARTIST
          </h1>

          <div className="pt-6">
            <button 
              onClick={() => setShowMainApp(true)}
              className="bg-[#D46A83] text-white hover:bg-[#b8546c] font-sans tracking-widest text-xs uppercase px-8 py-3.5 transition-all shadow-lg rounded-sm"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Bottom Bar: Social Links + Official WhatsApp Logo Icon */}
        <div className="relative z-10 flex items-center justify-between w-full mb-4">
          <div className="flex items-center space-x-3">
            <a 
              href="https://instagram.com/khushimakeover_official" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/>
              </svg>
            </a>
          </div>

          {/* Exact WhatsApp Green Icon with Phone-inside-Bubble vector */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-[18px] bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32">
              <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
            </svg>
          </a>
        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C2C2C] flex flex-col relative font-sans animate-fadeIn">
      {/* Top Header Navigation Bar */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-left cursor-pointer" onClick={() => { setShowMainApp(false); setActiveTab('home'); }}>
          <h1 className="font-serif text-xl md:text-2xl tracking-widest text-[#333333]">KHUSHI PATEL</h1>
          <p className="text-gray-400 uppercase tracking-widest text-[8px] mt-0.5">Bridal Studio & Salon</p>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase">
          <button onClick={() => setActiveTab('home')} className={`hover:text-[#D46A83] transition-colors ${activeTab === 'home' ? 'text-[#D46A83] font-semibold' : 'text-gray-600'}`}>HOMEPAGE</button>
          <button onClick={() => setActiveTab('about')} className={`hover:text-[#D46A83] transition-colors ${activeTab === 'about' ? 'text-[#D46A83] font-semibold' : 'text-gray-600'}`}>ABOUT ME</button>
          <button onClick={() => setActiveTab('portfolio')} className={`hover:text-[#D46A83] transition-colors ${activeTab === 'portfolio' ? 'text-[#D46A83] font-semibold' : 'text-gray-600'}`}>GALLERY</button>
          <button onClick={() => setActiveTab('booking')} className={`hover:text-[#D46A83] transition-colors ${activeTab === 'booking' ? 'text-[#D46A83] font-semibold' : 'text-gray-600'}`}>BOOK GLAM</button>
          <button onClick={() => setActiveTab('contact')} className={`hover:text-[#D46A83] transition-colors ${activeTab === 'contact' ? 'text-[#D46A83] font-semibold' : 'text-gray-600'}`}>CONTACT</button>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-12 pb-24 md:pb-12">
        {/* HOMEPAGE VIEW */}
        {activeTab === 'home' && (
          <div className="animate-fadeIn space-y-12">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-[#F5F2EB]">
              <div 
                className="w-full h-72 md:h-[480px] bg-cover bg-center flex flex-col justify-end p-6 md:p-12 relative"
                style={{ backgroundImage: `url('${brideImageUrl}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="relative z-10 text-white max-w-2xl space-y-3">
                  <span className="text-[#D46A83] text-xs font-medium tracking-widest uppercase bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Luxury Bridal Artistry
                  </span>
                  <h2 className="font-serif text-2xl md:text-5xl tracking-wide leading-tight">
                    ELEGANCE IN EVERY BRUSHSTROKE
                  </h2>
                  <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed max-w-lg">
                    Creating timeless, radiant bridal makeovers tailored specifically to reflect your personality and heritage on your big day.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4">
                    <button 
                      onClick={() => setActiveTab('booking')} 
                      className="bg-[#D46A83] hover:bg-[#b8546c] text-white text-[10px] md:text-xs uppercase tracking-widest font-medium px-6 py-3 rounded-sm shadow-md transition-all"
                    >
                      Book Your Glam
                    </button>
                    <button 
                      onClick={() => setActiveTab('about')} 
                      className="border border-white/40 hover:bg-white hover:text-black text-white text-[10px] md:text-xs uppercase tracking-widest font-medium px-6 py-3 rounded-sm transition-all"
                    >
                      Read My Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT ME SECTION / TAB */}
        {(activeTab === 'about' || activeTab === 'home') && (
          <div className={`animate-fadeIn max-w-5xl mx-auto py-6 ${activeTab === 'home' ? 'pt-8' : ''}`}>
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-[#D46A83] text-xs font-medium tracking-[0.25em] uppercase">Behind The Art</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#333333]">About Khushi Patel</h2>
              <div className="w-12 h-[2px] bg-[#D46A83] mx-auto pt-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 mb-10">
              <div className="md:col-span-5 relative">
                <div className="w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md relative group">
                  <img 
                    src={brideImageUrl} 
                    alt="Khushi Patel - Makeup Artist" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-2 md:-right-4 bg-[#D46A83] text-white px-5 py-3 rounded-xl shadow-lg text-center border border-white/20">
                  <p className="text-xl font-serif font-bold">5+ Years</p>
                  <p className="text-[9px] uppercase tracking-wider font-sans">Professional Exp.</p>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <div className="space-y-1">
                  <span className="text-[#D46A83] text-xs font-medium tracking-widest uppercase">Certified Bridal Makeup Artist</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#333333]">Crafting Timeless Beauty</h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Welcome to my official studio page! I am <strong className="text-[#333333] font-medium">Khushi Patel</strong>, a professional makeup artist specializing in luxury bridal transformations, HD party makeup, and contemporary skin finishes. My philosophy revolves around enhancing your natural features rather than masking them.
                </p>

                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Every bride deserves to look and feel extraordinary on her special day. Through precise skin prep, high-end international makeup products, and personalized consultations, I ensure your makeover stays flawless, lightweight, and camera-ready all night long.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3 bg-[#FFFDF9] p-3.5 rounded-lg border border-gray-100">
                    <Sparkles className="text-[#D46A83] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#333333]">HD & Airbrush Finish</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Seamless skin textures tailored for 4K cameras.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-[#FFFDF9] p-3.5 rounded-lg border border-gray-100">
                    <Award className="text-[#D46A83] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#333333]">Premium Cosmetics</h4>
                      <p className="text-gray-400 text-xs mt-0.5">Using top global luxury beauty brands only.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button 
                    onClick={() => setActiveTab('booking')}
                    className="bg-[#D46A83] hover:bg-[#b8546c] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-sm shadow-md transition-all"
                  >
                    Book Consultation
                  </button>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="border border-[#D46A83] text-[#D46A83] hover:bg-[#D46A83] hover:text-white text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all flex items-center space-x-2"
                  >
                    <span>Chat +91 98700 85600</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}
        
        {/* OTHER TAB PLACEHOLDERS */}
        {activeTab === 'portfolio' && (
          <div className="p-8 text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl text-[#333333]">Bridal Lookbook</h2>
            <p className="text-gray-500 text-sm">Gallery grid coming up next!</p>
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="p-8 text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl text-[#333333]">Book Your Glam Slot</h2>
            <p className="text-gray-500 text-sm">For instant booking confirmation, reach out directly at <strong className="text-[#D46A83]">+91 98700 85600</strong>.</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block bg-[#25D366] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-lg shadow-md font-medium"
            >
              Confirm on WhatsApp
            </a>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="p-8 text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl text-[#333333]">Contact Khushi Patel</h2>
            <p className="text-gray-600 text-sm">Phone: +91 98700 85600</p>
            <p className="text-gray-600 text-sm">Instagram: @khushimakeover_official</p>
          </div>
        )}
      </main>

      {/* Floating Squircle Official WhatsApp Logo Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 md:bottom-8 right-6 z-50 w-14 h-14 rounded-[18px] bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 32 32">
          <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z"/>
        </svg>
      </a>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 h-16 flex items-center justify-around px-4 shadow-lg z-50">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center space-y-0.5 ${activeTab === 'home' ? 'text-[#D46A83]' : 'text-gray-400'}`}>
          <Home size={18} />
          <span className="text-[9px] font-medium">Home</span>
        </button>
        <button onClick={() => setActiveTab('about')} className={`flex flex-col items-center space-y-0.5 ${activeTab === 'about' ? 'text-[#D46A83]' : 'text-gray-400'}`}>
          <HeartHandshake size={18} />
          <span className="text-[9px] font-medium">About</span>
        </button>
        <button onClick={() => setActiveTab('portfolio')} className={`flex flex-col items-center space-y-0.5 ${activeTab === 'portfolio' ? 'text-[#D46A83]' : 'text-gray-400'}`}>
          <ImageIcon size={18} />
          <span className="text-[9px] font-medium">Gallery</span>
        </button>
        <button onClick={() => setActiveTab('booking')} className={`flex flex-col items-center space-y-0.5 ${activeTab === 'booking' ? 'text-[#D46A83]' : 'text-gray-400'}`}>
          <Calendar size={18} />
          <span className="text-[9px] font-medium">Book</span>
        </button>
        <button onClick={() => setActiveTab('contact')} className={`flex flex-col items-center space-y-0.5 ${activeTab === 'contact' ? 'text-[#D46A83]' : 'text-gray-400'}`}>
          <Phone size={18} />
          <span className="text-[9px] font-medium">Contact</span>
        </button>
      </nav>
    </div>
  );
}
