'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Interface Definitions
interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  category: 'bridal' | 'party' | 'pre-wedding' | 'workshop';
  popular?: boolean;
  description: string;
  features: string[];
  includes: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'signature-bridal',
    title: 'Signature Luxury Bridal Glam',
    subtitle: 'The Ultimate Wedding Day Transformation',
    price: '₹25,000',
    duration: '4-5 Hours',
    category: 'bridal',
    popular: true,
    description: 'A bespoke high-definition bridal look crafted to highlight your natural features with maximum longevity, radiance, and luxury finish.',
    features: [
      'Ultra HD / Airbrush Long-Wear Makeup',
      'Couture Hair Sculpting & Extension Setting',
      'Advanced Skin Preparation & Prep Rituals',
      'Dupatta, Jewelry & Outfit Draping',
      'Premium Silk Lash Application'
    ],
    includes: [
      'Personal Consultation & Skin Analysis',
      'Touch-up Kit for Event',
      'Lashes & Hair Accessories'
    ]
  },
  {
    id: 'engagement-sangeet',
    title: 'Engagement & Sangeet Luxe',
    subtitle: 'Vibrant, Radiant & Camera-Ready Look',
    price: '₹15,000',
    duration: '3 Hours',
    category: 'bridal',
    description: 'Designed specifically for pre-wedding functions like Sangeet, Cocktail, or Engagement with medium-to-full glam coverage.',
    features: [
      'High-Definition Glam Makeup',
      'Textured / Hollywood Waves or Updo',
      'Skin Hydration & Glow Prep',
      'Lashes & Draping Assistance'
    ],
    includes: ['Customized Lash Selection', 'Hair Extensions Styling']
  },
  {
    id: 'hd-party-glam',
    title: 'HD Celebrity Party Makeover',
    subtitle: 'Soft Glam or Bold Statement for Special Guest',
    price: '₹8,500',
    duration: '2 Hours',
    category: 'party',
    popular: true,
    description: 'Perfect for bridesmaids, family members, or party attendees seeking an elevated, flawless finish without feeling heavy.',
    features: [
      'Customized HD Soft/Full Glam Makeup',
      'Sleek Hair Styling or Soft Curls',
      'Skin Prep & Setting',
      'Standard Premium Lashes'
    ],
    includes: ['Setting Spray Touchup', 'Standard Lashes']
  },
  {
    id: 'pre-wedding-shoot',
    title: 'Pre-Wedding Conceptual Glam',
    subtitle: 'Outdoor & Studio Photogenic Styling',
    price: '₹18,000',
    duration: 'Full Day (Up to 2 Looks)',
    category: 'pre-wedding',
    description: 'Versatile makeup and hair configurations created specifically to endure studio lighting, outdoor climate, and camera flashes.',
    features: [
      '2 Distinct Hair & Makeup Look Changes',
      'Matte & Sweat-Proof HD Finish',
      'On-Location Touch-Ups',
      'Concept Outfit Draping'
    ],
    includes: ['On-site Assistance', 'Multiple Outfit Adaptation']
  },
  {
    id: 'self-makeup-workshop',
    title: 'Personalized Self-Makeup Masterclass',
    subtitle: '1-on-1 Private Learning Session',
    price: '₹12,000',
    duration: '1 Full Day (5 Hours)',
    category: 'workshop',
    description: 'Learn how to master daily soft glam, skin care routine, makeup selection according to your skin type, and evening transformations.',
    features: [
      'Vanity Audit & Product Guide',
      'Skin Prep & Color Correction Masterclass',
      'Day-to-Night Look Transition Tech',
      'Hands-on Practical Practice'
    ],
    includes: ['Certificate of Completion', 'Product Shopping Checklist']
  }
];

const FAQ_DATA = [
  {
    question: 'How far in advance should I book my bridal date?',
    answer: 'We recommend booking 3 to 6 months in advance for wedding season dates to ensure availability.'
  },
  {
    question: 'Do you provide venue/destination services?',
    answer: 'Yes, Khushi Patel and her team travel worldwide for destination weddings and venue bookings.'
  },
  {
    question: 'What cosmetics brands do you use in your vanity?',
    answer: 'We strictly use luxury international brands including Charlotte Tilbury, NARS, Dior, MAC, Huda Beauty, and Estée Lauder.'
  },
  {
    question: 'Is a bridal trial session included?',
    answer: 'Trial sessions can be scheduled separately upon request where we discuss skin prep, mood boards, and look customization.'
  }
];

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bridal' | 'party' | 'pre-wedding' | 'workshop'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  const whatsappNumber = "919870085600";

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-[#f2a6bb] selection:text-black">
      
      {/* ==============================================
          1. MOBILE NAVIGATION BAR
      =============================================== */}
      <div className="md:hidden p-4 flex justify-between items-center sticky top-0 z-50 bg-black border-b border-gray-900">
        <Link href="/" className="bg-[#f2a6bb] px-4 py-2 text-center text-black rounded-xs shadow-md">
          <span className="font-serif text-lg font-bold tracking-widest block leading-none">KP</span>
          <span className="text-[8px] tracking-widest uppercase block font-sans font-bold mt-0.5">KHUSHI PATEL</span>
        </Link>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-2xl px-3 py-1 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white p-6 flex flex-col gap-5 text-center font-medium tracking-[0.2em] text-xs uppercase border-b border-gray-800">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f2a6bb] transition">HOME</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f2a6bb] transition">ABOUT</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#f2a6bb] font-bold">SERVICES</Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f2a6bb] transition">PORTFOLIO</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f2a6bb] transition">CONTACT</Link>
        </div>
      )}

      {/* ==============================================
          2. DESKTOP SIDEBAR
      =============================================== */}
      <aside className="hidden md:flex w-64 bg-black text-white flex-col justify-between p-6 sticky top-0 h-screen shrink-0 border-r border-gray-900">
        <div>
          {/* Pink Logo Header Box */}
          <Link href="/" className="block bg-[#f2a6bb] p-6 text-center text-black mb-10 shadow-lg rounded-xs hover:opacity-95 transition">
            <h2 className="font-serif text-3xl font-bold tracking-widest leading-none">KP</h2>
            <p className="font-sans text-[10px] tracking-widest font-bold uppercase mt-2">KHUSHI PATEL</p>
            <p className="font-sans text-[7px] tracking-wider uppercase text-gray-800 font-semibold mt-0.5">MAKE-UP ARTIST</p>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6 font-medium text-xs tracking-[0.2em] uppercase text-gray-300">
            <Link href="/" className="hover:text-[#f2a6bb] transition">HOME</Link>
            <Link href="/about" className="hover:text-[#f2a6bb] transition">ABOUT</Link>
            <Link href="/services" className="text-[#f2a6bb] font-bold">SERVICES</Link>
            <Link href="/portfolio" className="hover:text-[#f2a6bb] transition">PORTFOLIO</Link>
            <Link href="/contact" className="hover:text-[#f2a6bb] transition">CONTACT</Link>
          </nav>
        </div>

        {/* Footer Socials */}
        <div className="flex gap-4 text-gray-400 text-xs pt-6 border-t border-gray-900">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#f2a6bb] transition">📷 Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#f2a6bb] transition">f Facebook</a>
        </div>
      </aside>

      {/* ==============================================
          3. MAIN SERVICES CONTENT AREA
      =============================================== */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-6xl mx-auto">
        
        {/* HERO TITLE SECTION */}
        <div className="mb-10">
          <p className="text-[#f2a6bb] tracking-widest text-xs font-semibold uppercase mb-1">
            EXQUISITE BRIDAL & BEAUTY SERVICES
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-3xl lg:text-5xl font-serif text-gray-900 tracking-tight">
              OUR SERVICES
            </h1>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Khushi,%20I%20want%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-xs text-xs font-bold uppercase tracking-widest hover:bg-[#f2a6bb] hover:text-black transition shadow-sm w-fit"
            >
              Custom Booking Inquiry
            </a>
          </div>
          <hr className="border-pink-100 my-6 w-full" />
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            From timeless high-definition bridal artistry to soft-glam party transformations, each service is meticulously tailored to suit your features, wedding couture, and personal aesthetic.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-gray-100">
          {[
            { id: 'all', label: 'All Offerings' },
            { id: 'bridal', label: 'Bridal Packages' },
            { id: 'party', label: 'Party Glam' },
            { id: 'pre-wedding', label: 'Pre-Wedding' },
            { id: 'workshop', label: 'Masterclasses' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition rounded-xs font-medium ${
                selectedCategory === tab.id
                  ? 'bg-[#f2a6bb] text-black font-bold shadow-xs'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className={`border border-gray-100 rounded-xs p-6 md:p-8 bg-white flex flex-col justify-between shadow-xs hover:shadow-md transition relative ${
                service.popular ? 'ring-1 ring-[#f2a6bb]' : ''
              }`}
            >
              {service.popular && (
                <span className="absolute top-0 right-0 bg-[#f2a6bb] text-black text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl-xs">
                  Most Popular
                </span>
              )}

              <div>
                <p className="text-[#f2a6bb] text-[10px] font-bold tracking-widest uppercase mb-1">
                  {service.category.replace('-', ' ')}
                </p>
                <h3 className="text-xl font-serif text-gray-900 font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 mb-4 font-serif italic">
                  {service.subtitle}
                </p>

                <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-gray-100">
                  <span className="text-2xl font-bold text-gray-900 font-serif">{service.price}</span>
                  <span className="text-xs text-gray-400">/ {service.duration}</span>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Key Highlights:</p>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-[#f2a6bb] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setActiveModal(service)}
                  className="flex-1 py-2.5 px-4 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gray-50 transition text-center"
                >
                  View Details
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Khushi,%20I%20want%20to%20book%20the%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#f2a6bb] hover:text-black transition text-center"
                >
                  Book Date
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* LUXURY STANDARDS BANNER */}
        <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-xs mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-serif text-gray-900 mb-2">The Luxury Artistry Promise</h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Hygiene, Longevity & Perfection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="text-3xl mb-3 block">💎</span>
              <h4 className="font-serif text-sm font-bold text-gray-900 mb-1">Global Brands</h4>
              <p className="text-xs text-gray-500">Only high-tier cosmetics used for flawless skin.</p>
            </div>
            <div className="p-4">
              <span className="text-3xl mb-3 block">✨</span>
              <h4 className="font-serif text-sm font-bold text-gray-900 mb-1">HD Finish</h4>
              <p className="text-xs text-gray-500">Camera-ready makeup that lasts 16+ hours.</p>
            </div>
            <div className="p-4">
              <span className="text-3xl mb-3 block">🌸</span>
              <h4 className="font-serif text-sm font-bold text-gray-900 mb-1">Custom Skin-Prep</h4>
              <p className="text-xs text-gray-500">Deep hydration rituals before application.</p>
            </div>
            <div className="p-4">
              <span className="text-3xl mb-3 block">🕊️</span>
              <h4 className="font-serif text-sm font-bold text-gray-900 mb-1">Sterilized Vanity</h4>
              <p className="text-xs text-gray-500">100% sanitized tools, brushes & applicators.</p>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-[#f2a6bb] text-xs font-semibold tracking-widest uppercase mb-1">GOT QUESTIONS?</p>
            <h2 className="text-2xl lg:text-3xl font-serif text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-xs overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 md:p-5 bg-white hover:bg-gray-50 transition flex justify-between items-center text-sm font-medium text-gray-900"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#f2a6bb] font-bold text-lg">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="p-4 md:p-5 bg-gray-50/50 border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA SECTION */}
        <div className="bg-black text-white p-8 md:p-12 rounded-xs text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight mb-4">
            Ready to Create Your Dream Look?
          </h2>
          <p className="text-gray-400 text-xs max-w-xl mx-auto mb-8 leading-relaxed">
            Dates for the upcoming wedding season fill up fast. Reserve your consultation and secure your special date with Khushi Patel today.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%20Khushi,%20I%20would%20like%20to%20reserve%20my%20wedding%20date.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f2a6bb] text-black px-8 py-3.5 rounded-xs text-xs font-bold uppercase tracking-widest hover:bg-white transition shadow-lg"
          >
            Connect on WhatsApp
          </a>
        </div>

      </main>

      {/* ==============================================
          4. SERVICE DETAILS MODAL
      =============================================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xs max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            <p className="text-[#f2a6bb] text-[10px] font-bold tracking-widest uppercase mb-1">
              Package Details
            </p>
            <h3 className="text-2xl font-serif text-gray-900 font-bold mb-1">
              {activeModal.title}
            </h3>
            <p className="text-xs text-gray-500 font-serif italic mb-4">
              {activeModal.subtitle}
            </p>

            <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-gray-100">
              <span className="text-2xl font-bold text-gray-900 font-serif">{activeModal.price}</span>
              <span className="text-xs text-gray-400">/ Estimated Duration: {activeModal.duration}</span>
            </div>

            <p className="text-gray-600 text-xs leading-relaxed mb-6">
              {activeModal.description}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Features & Technique:</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {activeModal.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#f2a6bb]">✦</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Inclusions:</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {activeModal.includes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#f2a6bb]">✦</span> {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="flex-1 py-3 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-gray-50 transition"
              >
                Close
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%20Khushi,%20I%20am%20interested%20in%20${encodeURIComponent(activeModal.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#f2a6bb] hover:text-black transition text-center"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ==============================================
          5. FLOATING WHATSAPP BUTTON
      =============================================== */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Khushi,%20I%20have%20a%20query%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition z-40 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>

    </div>
  );
}
