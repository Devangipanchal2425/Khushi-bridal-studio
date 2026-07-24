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
        <svg
          className="h-7 w-7 fill-current text-white"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z" />
        </svg>
      </a>
          </div>
  );
}
