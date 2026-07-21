'use client';
import React, { useState } from 'react';
import { Home, Image as ImageIcon, Calendar, Phone } from 'lucide-react';

export default function BridalApp() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Local public directory image path
  const brideImageUrl = "/bride.jpeg";

  // Standard encoded WhatsApp URL with pre-filled message
  const whatsappUrl = "https://wa.me/918128154675?text=Hello%20Khushi,%20I%20would%20like%20to%20inquire%20about%20your%20bridal%20makeup%20services.";

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

          {/* Single Line Heading */}
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

        {/* Bottom Bar: Social Links + Direct Image WhatsApp Squircle Icon */}
        <div className="relative z-10 flex items-center justify-between w-full mb-4">
          <div className="flex items-center space-x-3">
            {/* Active Instagram Link */}
            <a 
              href="https://instagram.com/khushiimakeover_official" 
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

          {/* Direct WhatsApp Image Asset inside Squircle Container */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-[18px] bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden p-2.5"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp" 
              className="w-full h-full object-contain filter brightness-0 invert" 
            />
          </a>
        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C2C2C] flex flex-col relative font-sans animate-fadeIn">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="text-left cursor-pointer" onClick={() => setActiveTab('home')}>
          <h1 className="font-serif text-xl md:text-2xl tracking-widest text-[#333333]">KHUSHI PATEL</h1>
          <p className="text-gray-400 uppercase tracking-widest text-[8px] mt-0.5">Bridal Studio & Salon</p>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase">
          <button onClick={() => setActiveTab('home')} className={`hover:text-[#8E7154] ${activeTab === 'home' ? 'text-[#8E7154]' : 'text-gray-600'}`}>HOMEPAGE</button>
          <button onClick={() => setActiveTab('portfolio')} className={`hover:text-[#8E7154] ${activeTab === 'portfolio' ? 'text-[#8E7154]' : 'text-gray-600'}`}>GALLERY</button>
          <button onClick={() => setActiveTab('booking')} className={`hover:text-[#8E7154] ${activeTab === 'booking' ? 'text-[#8E7154]' : 'text-gray-600'}`}>BOOK GLAM</button>
          <button onClick={() => setActiveTab('contact')} className={`hover:text-[#8E7154] ${activeTab === 'contact' ? 'text-[#8E7154]' : 'text-gray-600'}`}>CONTACT</button>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-12 pb-24 md:pb-12">
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <div className="relative w-full overflow-hidden rounded-2xl mb-12 border border-gray-100 bg-[#F5F2EB]">
              <div 
                className="w-full h-64 md:h-[450px] bg-cover bg-center flex flex-col justify-end p-6 md:p-12 relative"
                style={{ backgroundImage: `url('${brideImageUrl}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="relative z-10 text-white max-w-xl">
                  <h2 className="font-serif text-2xl md:text-5xl tracking-wide mb-2">WHAT BEST SUITS YOUR NEEDS?</h2>
                  <button onClick={() => setActiveTab('booking')} className="bg-[#D46A83] text-[#FFFDF9] text-[10px] md:text-xs uppercase tracking-widest font-medium px-5 py-3 rounded-sm shadow-md mt-4">Book Services</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'portfolio' && <div className="p-4"><h2 className="font-serif text-2xl text-[#8E7154]">Gallery Lookbook...</h2></div>}
        {activeTab === 'booking' && <div className="p-4"><h2 className="font-serif text-2xl text-[#8E7154]">Booking Setup...</h2></div>}
        {activeTab === 'contact' && <div className="p-4"><h2 className="font-serif text-2xl text-[#8E7154]">Contact Channels...</h2></div>}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 h-16 flex items-center justify-around px-4 shadow-lg z-50">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center space-y-0.5 ${activeTab === 'home' ? 'text-[#D46A83]' : 'text-gray-400'}`}>
          <Home size={18} />
          <span className="text-[9px] font-medium">Home</span>
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
