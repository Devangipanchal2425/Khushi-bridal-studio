import React from 'react';

export default function Page() {
  return (
    // Main Container: Mobile par Vertical (col), Laptop/Desktop par Horizontal (row)
    <div className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row overflow-x-hidden">
      
      {/* 1. SIDEBAR / NAVIGATION */}
      {/* Mobile: Hidden completely | Desktop (md): Left side 250px fixed sidebar */}
      <aside className="hidden md:flex md:w-64 md:min-h-screen bg-[#111111] p-6 flex-col justify-between border-r border-neutral-800 shrink-0">
        <div>
          {/* Logo / KP Branding */}
          <div className="bg-[#500014] text-white p-6 text-center rounded-md mb-8">
            <h1 className="text-2xl font-bold tracking-widest">KP</h1>
            <p className="text-xs uppercase tracking-wider mt-1 text-pink-200">Khushi Patel</p>
            <p className="text-[10px] uppercase tracking-widest text-pink-300/80">Make-Up Artist</p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-4 font-medium tracking-wider text-sm text-neutral-300">
            <a href="/" className="hover:text-pink-400 transition-colors">HOME</a>
            <a href="/about" className="hover:text-pink-400 transition-colors">ABOUT</a>
            <a href="/services" className="hover:text-pink-400 transition-colors">SERVICES</a>
            <a href="/portfolio" className="hover:text-pink-400 transition-colors">PORTFOLIO</a>
            <a href="/contact" className="hover:text-pink-400 transition-colors">CONTACT</a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-neutral-400 text-lg">
          <a href="#" className="hover:text-white">📷</a>
          <a href="#" className="hover:text-white">📘</a>
        </div>
      </aside>

      {/* 2. MOBILE HEADER / NAVBAR */}
      {/* Mobile: Visible at top | Desktop: Hidden */}
      <header className="md:hidden flex items-center justify-between p-4 bg-[#111111] border-b border-neutral-800 sticky top-0 z-50">
        <div className="text-lg font-bold tracking-wider text-pink-200">
          KHUSHI PATEL
        </div>
        {/* Simple Mobile Nav Links */}
        <nav className="flex gap-3 text-xs tracking-wider text-neutral-300">
          <a href="/" className="hover:text-pink-400">HOME</a>
          <a href="/about" className="hover:text-pink-400">ABOUT</a>
          <a href="/services" className="hover:text-pink-400">SERVICES</a>
        </nav>
      </header>

      {/* 3. MAIN CONTENT AREA */}
      {/* Takes 100% width on Mobile, remaining space on Desktop */}
      <main className="flex-1 w-full p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] md:min-h-screen">
        
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 bg-neutral-900/60 p-6 rounded-2xl border border-neutral-800">
          {/* Main Image */}
          <div className="w-full md:w-1/2 aspect-[3/4] relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/Khushi.jpeg" 
              alt="Khushi Patel" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
              Khushi Patel
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide mb-4">
              MAKEUP ARTIST
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Professional Bridal & Event Makeup Studio. Transforming looks with elegance and flawless finish.
            </p>
            <div>
              <a 
                href="/services" 
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-pink-600/30"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
