import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white relative overflow-hidden flex flex-col justify-between">
      {/* Background Image Container - Full Clarity & Brightness */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bride.jpeg"
          alt="Khushi Patel - Makeup Artist"
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Soft subtle gradient for text contrast without darkening the whole face */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Navigation / Header */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto w-full">
        <button 
          aria-label="Toggle Menu" 
          className="p-3 rounded-full bg-pink-900/40 text-pink-300 hover:bg-pink-900/60 transition-colors backdrop-blur-md border border-pink-500/20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full flex-1 flex flex-col justify-center">
        <div className="space-y-6 max-w-xl">
          <div className="space-y-2">
            <div className="w-12 h-1 bg-pink-400 mb-4"></div>
            <h2 className="text-pink-400 font-medium tracking-widest uppercase text-xs sm:text-sm md:text-base drop-shadow-md">
              KHUSHI PATEL
            </h2>
            {/* MAKEUP ARTIST in 1 Single Line */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-tight text-white whitespace-nowrap drop-shadow-lg">
              MAKEUP ARTIST
            </h1>
          </div>

          <div className="pt-2">
            <Link 
              href="#about"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-md transition-all shadow-xl hover:shadow-pink-600/30"
            >
              ABOUT ME
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a 
              href="https://www.instagram.com/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-neutral-600 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:text-pink-400 hover:border-pink-400 transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-neutral-600 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:text-pink-400 hover:border-pink-400 transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
