"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = "919870085600";
  const instagramLink = "https://www.instagram.com/khushiimakeover_official";
  const facebookLink = "https://www.facebook.com/share/18wh4hPmkN/";

  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-gray-800 md:flex-row">
      {/* Mobile menu button: image ke upar */}
      <header className="absolute inset-x-0 top-0 z-40 flex justify-start bg-transparent p-6 md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9b001b] text-white shadow-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <nav className="absolute inset-x-5 top-24 z-30 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-5 text-xs font-medium tracking-[3px] text-gray-300 shadow-xl md:hidden">
          <Link href="/" className="block hover:text-white">
            HOME
          </Link>
          <Link href="/about" className="block font-bold text-[#f3a0ad]">
            ABOUT
          </Link>
          <Link href="/services" className="block hover:text-white">
            SERVICES
          </Link>
          <Link href="/portfolio" className="block hover:text-white">
            PORTFOLIO
          </Link>
          <Link href="/contact" className="block hover:text-white">
            CONTACT
          </Link>
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-20 hidden h-full w-[260px] flex-col justify-between bg-black p-6 text-white md:flex">
        <div>
          <Link
            href="/"
            className="mb-8 block rounded-sm bg-[#f3a0ad] p-5 text-center text-black"
          >
            <h2 className="font-serif text-2xl font-bold tracking-wider">KP</h2>
            <p className="mt-1 text-xs font-semibold tracking-widest">
              KHUSHI PATEL
            </p>
            <span className="mt-0.5 block text-[9px] tracking-widest">
              MAKE-UP ARTIST
            </span>
          </Link>

          <nav className="mt-12">
            <ul className="space-y-6 text-[12px] font-medium tracking-[3px] text-gray-300">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-bold text-[#f3a0ad]">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-white"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-4 text-xs text-gray-400">
          <div className="flex gap-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#f3a0ad]"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#f3a0ad]"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
          <p className="mt-4 text-[10px] text-gray-500">
            South Bopal, Ahmedabad
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="w-full flex-1 p-5 pt-5 sm:p-8 md:ml-[260px] md:max-w-6xl md:p-14">
        <div className="absolute right-12 top-8 hidden gap-3 md:flex">
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 shadow-sm hover:bg-[#f3a0ad] hover:text-black"
          >
            ◎
          </a>
          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700 shadow-sm hover:bg-[#f3a0ad] hover:text-black"
          >
            f
          </a>
        </div>

        {/* Mobile: image → paragraph → awards. Desktop: image left, content right */}
        <div className="mt-0 grid grid-cols-1 items-start gap-6 lg:mt-4 lg:grid-cols-12 lg:gap-10">
          <div className="w-full lg:col-span-5">
            <div className="relative h-[320px] w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm sm:h-[450px] lg:h-[520px]">
              <Image
                src="/Khushi.jpeg"
                alt="Khushi Patel - Makeup Artist"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="space-y-5 lg:col-span-7">
            <div>
              <span className="mb-1 block text-[11px] font-semibold tracking-[3px] text-[#f3a0ad] sm:text-xs">
                KHUSHI PATEL
              </span>
              <h1 className="border-b border-pink-100 pb-3 font-serif text-3xl font-bold tracking-wider text-gray-950 sm:text-4xl">
                MAKEUP ARTIST
              </h1>
            </div>

            <p className="text-xs leading-relaxed text-gray-600 sm:text-[13px]">
              Welcome to my creative universe of luxury bridal artistry. I am{" "}
              <strong className="font-semibold text-gray-900">Khushi Patel</strong>,
              {" "}a high-definition makeup artist devoted to crafting timeless,
              ethereal, and personalized wedding transformations. My philosophy
              revolves around celebrating your natural elegance and enhancing the
              unique grace you already possess.
            </p>

            <p className="text-xs leading-relaxed text-gray-600 sm:text-[13px]">
              Specializing in couture bridal looks, soft glam finishes, and
              contemporary hair sculpting, every makeover is thoughtfully designed
              to complement your wedding couture, personal aesthetic, and
              individual aura.
            </p>

            <p className="text-xs leading-relaxed text-gray-600 sm:text-[13px]">
              To me, bridal makeup is far more than a technique—it is an intimate
              art form of capturing emotions, confidence, and joy. It is an
              absolute privilege to walk alongside you on your most cherished
              journey and make your dream bridal look come alive.
            </p>

            <section className="pt-3 sm:pt-5">
              <span className="mb-3 block text-[10px] font-semibold tracking-[3px] text-[#f3a0ad] sm:text-[11px]">
                AWARDS
                              </span>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-3 text-center">
                  <p className="font-serif text-[10px] font-bold text-gray-900">
                    LUXURY BRIDAL
                  </p>
                  <p className="mt-1 text-[8px] text-gray-400">
                    COUTURE LOOKS
                  </p>
                </div>

                <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-3 text-center">
                  <p className="font-serif text-[10px] font-bold text-gray-900">
                    ULTRA HD SKIN
                  </p>
                  <p className="mt-1 text-[8px] text-gray-400">
                    CAMERA READY
                  </p>
                </div>

                <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-3 text-center">
                  <p className="font-serif text-[10px] font-bold text-gray-900">
                    PREMIUM PRODUCTS
                  </p>
                  <p className="mt-1 text-[8px] text-gray-400">
                    GLOBAL BRANDS
                  </p>
                </div>

                <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-3 text-center">
                  <p className="font-serif text-[10px] font-bold text-gray-900">
                    CUSTOM GLAM
                  </p>
                  <p className="mt-1 text-[8px] text-gray-400">
                    TAILORED BEAUTY
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

     <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
</svg>
      </a>
    </div>
  );
}
             
