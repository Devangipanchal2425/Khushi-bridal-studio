"use client";

import Image from "next/image";
import Link from "next/link";

const whatsappNumber = "919870085600";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <aside className="fixed inset-y-0 left-0 z-30 flex w-[25vw] flex-col justify-between bg-black p-3 text-white sm:p-4 md:w-[260px] md:p-6">
        <div>
          <Link
            href="/"
            className="mb-10 block rounded-sm bg-[#8f0018] p-3 text-center md:mb-12 md:bg-[#f3a0ad] md:p-5 md:text-black"
          >
            <h2 className="font-serif text-lg font-bold md:text-2xl">KP</h2>
            <p className="mt-1 text-center text-[7px] font-semibold tracking-wide sm:text-[9px] md:text-xs md:tracking-widest">
              KHUSHI PATEL
            </p>
            <span className="mt-1 block text-center text-[6px] tracking-wide sm:text-[8px] md:text-[9px] md:tracking-widest">
              BRIDAL STUDIO & SALON
            </span>
          </Link>

          <nav>
            <ul className="space-y-6 text-[8px] font-medium tracking-[2px] text-gray-300 sm:text-[10px] md:text-[12px] md:tracking-[3px]">
              <li>
                <Link href="/" className="block hover:text-white">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="block font-bold text-[#f3a0ad]">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/services" className="block hover:text-white">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="block hover:text-white">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:text-white">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-3 text-[6px] text-gray-400 sm:text-[8px] md:pt-4 md:text-[10px]">
          <div className="flex gap-3 text-[10px] md:gap-4 md:text-sm">
            <a
              href="https://www.instagram.com/khushiimakeover_official"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>
            <a
              href="https://www.facebook.com/share/18wh4hPmkN/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
          </div>
          <p className="mt-3">South Bopal, Ahmedabad</p>
          <p className="mt-2">©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

<main className="ml-[25vw] min-h-screen w-[75vw] min-w-0 p-3 sm:p-5 md:ml-[260px] md:w-auto md:p-14">        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="relative h-[190px] overflow-hidden rounded-sm bg-gray-100 sm:h-[300px] md:h-[420px] lg:h-[520px]">
                <Image
                  src="/Khushi.jpeg"
                  alt="Khushi Patel - Makeup Artist"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7 md:space-y-5">
              <div>
                <span className="mb-1 block text-[7px] font-semibold tracking-[2px] text-[#f3a0ad] sm:text-[10px] md:text-[11px] md:tracking-[3px]">
                  KHUSHI PATEL
                </span>
                <h1 className="border-b border-pink-100 pb-2 font-serif text-base font-bold tracking-wide text-gray-950 sm:text-2xl md:pb-3 md:text-4xl">
                  MAKEUP ARTIST
                </h1>
              </div>

              <p className="text-[8px] leading-relaxed text-gray-600 sm:text-[11px] md:text-[13px]">
                Welcome to my creative universe of luxury bridal artistry. I am{" "}
                <strong className="font-semibold text-gray-900">
                  Khushi Patel
                </strong>
                , a high-definition makeup artist devoted to crafting timeless,
                ethereal, and personalized wedding transformations.
              </p>

              <p className="text-[8px] leading-relaxed text-gray-600 sm:text-[11px] md:text-[13px]">
                Specializing in couture bridal looks, soft glam finishes, and
                contemporary hair sculpting, every makeover is thoughtfully
                designed to complement your wedding couture, personal aesthetic,
                and individual aura.
              </p>

              <p className="text-[8px] leading-relaxed text-gray-600 sm:text-[11px] md:text-[13px]">
                Bridal makeup is an intimate art form that captures emotions,
                confidence, and joy on your most cherished day.
              </p>

              <section className="pt-2 md:pt-4">
                <span className="mb-2 block text-[7px] font-semibold tracking-[2px] text-[#f3a0ad] sm:text-[10px] md:mb-3 md:text-[11px] md:tracking-[3px]">
                  AWARDS
                </span>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-3">
                  <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-2 text-center md:p-4">
                    <p className="font-serif text-[7px] font-bold text-gray-900 sm:text-[9px] md:text-[11px]">
                      LUXURY BRIDAL
                    </p>
                    <p className="mt-1 text-[6px] tracking-wide text-gray-400 md:text-[9px]">
                      COUTURE LOOKS
                    </p>
                  </div>

                  <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-2 text-center md:p-4">
                    <p className="font-serif text-[7px] font-bold text-gray-900 sm:text-[9px] md:text-[11px]">
                      ULTRA HD SKIN
                    </p>
                    <p className="mt-1 text-[6px] tracking-wide text-gray-400 md:text-[9px]">
                      CAMERA READY
                    </p>
                  </div>

                  <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-2 text-center md:p-4">
                    <p className="font-serif text-[7px] font-bold text-gray-900 sm:text-[9px] md:text-[11px]">
                      PREMIUM PRODUCTS
                    </p>
                    <p className="mt-1 text-[6px] tracking-wide text-gray-400 md:text-[9px]">
                      GLOBAL BRANDS
                    </p>
                  </div>

                  <div className="rounded-sm border border-gray-100 bg-gray-50/50 p-2 text-center md:p-4">
                    <p className="font-serif text-[7px] font-bold text-gray-900 sm:text-[9px] md:text-[11px]">
                      CUSTOM GLAM
                    </p>
                    <p className="mt-1 text-[6px] tracking-wide text-gray-400 md:text-[9px]">
                      TAILORED BEAUTY
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hello Khushi! I would like to inquire about your makeup services."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl md:bottom-6 md:right-6 md:h-14 md:w-14"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="h-6 w-6 fill-current md:h-7 md:w-7"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M16 2A13 13 0 0 0 4.69 21.25L3 27.5l6.43-1.68A13 13 0 1 0 16 2zm0 23.8a10.74 10.74 0 0 1-5.48-1.5l-.39-.23-4.07 1.07 1.08-3.95-.25-.4A10.8 10.8 0 1 1 16 25.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06s-.52-.16-.74.16-.85 1.06-1.04 1.28-.39.24-.71.08a9 9 0 0 1-2.65-1.63 9.87 9.87 0 0 1-1.83-2.28c-.19-.32 0-.49.15-.65s.32-.37.48-.56a2.16 2.16 0 0 0 .32-.53.59.59 0 0 0 0-.56c-.08-.16-.74-1.78-1.01-2.44s-.54-.56-.74-.57h-.63a1.21 1.21 0 0 0-.88.41A3.7 3.7 0 0 0 8.5 13a6.43 6.43 0 0 0 1.34 3.42 14.7 14.7 0 0 0 5.62 4.96c2.37 1 2.85.83 3.37.78a2.87 2.87 0 0 0 1.89-1.33 2.33 2.33 0 0 0 .16-1.33c-.08-.13-.24-.21-.56-.37z" />
        </svg>
      </a>
    </div>
  );
}
