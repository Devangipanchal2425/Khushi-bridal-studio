"use client";

import React, { useState } from "react";

interface Recommendation {
  title: string;
  price: string;
  features: string[];
  tip: string;
}

export default function SmartPackageFinder() {
  const whatsappNumber = "9870085600";

  // State for 3 steps selection
  const [occasion, setOccasion] = useState<string>("");
  const [skinType, setSkinType] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  // Logic to calculate recommendation
  const getRecommendation = (): Recommendation | null => {
    if (!occasion || !skinType || !budget) return null;

    // 1. BRIDAL OCCASIONS
    if (occasion === "bridal") {
      if (budget === "luxury") {
        return {
          title: "ULTRA LUXURY AIRBRUSH BRIDAL PACKAGE",
          price: "₹28,000/-",
          features: [
            "Airbrush Flawless HD Makeup",
            "Korean Glass Skin Facial Prep",
            "Real Flower Hair Styling & Extensions",
            "Full Body Rica Waxing & Polish",
            "Nail Extensions & Art",
          ],
          tip: skinType === "dry" 
            ? "💡 Since your skin is dry, we will include extra Hydra-Boost priming before Airbrush." 
            : "💡 Perfect long-lasting choice for all-day bridal glow!",
        };
      } else if (budget === "medium") {
        return {
          title: "WATER RESISTANT BRIDAL PACKAGE",
          price: "₹18,000/-",
          features: [
            "Water Resistant HD Makeup",
            "Real Flower Hair Styling",
            "Lenses & Eye Lashes Included",
            "Damani, Tikko & Nath Setting",
          ],
          tip: "💡 Includes Pre-Bridal Skin Prep suited for your " + skinType + " skin.",
        };
      } else {
        return {
          title: "HD BRIDAL PACKAGE",
          price: "₹17,000/-",
          features: [
            "HD Glam Makeup",
            "Hair Style with Real Flowers",
            "Jewellery & Saree Draping",
            "Eye Lashes & Lenses",
          ],
          tip: "💡 Great budget-friendly choice with full HD finish.",
        };
      }
    }

    // 2. PRE-BRIDAL / ENGAGEMENT / HALDI / MEHENDI
    if (occasion === "pre-bridal") {
      if (budget === "luxury") {
        return {
          title: "ROYAL PRE-BRIDAL SPA + PRE-FUNCTION GLAM",
          price: "₹19,000/-",
          features: [
            "Korean Glass Skin Facial",
            "Full Body Rica Waxing & Oil Massage",
            "Korean Hair Spa Therapy with Face Mask",
            "Manicure & Pedicure",
          ],
          tip: "💡 Full body revival package for maximum glow on your special days.",
        };
      } else {
        return {
          title: "PRE-FUNCTION GLASS MAKEUP PACKAGE",
          price: "₹13,000/-",
          features: [
            "Glass Skin Finish Makeup",
            "Hair Styling with Real Flowers",
            "Eye Lashes & Lenses Included",
            "Saree / Dupatta Draping",
          ],
          tip: skinType === "oily" 
            ? "💡 Glass makeup tuned with matte-prep for oil control." 
            : "💡 Natural dewy finish suited for your skin type.",
        };
      }
    }

    // 3. PARTY / FESTIVE / GUEST LOOK
    if (occasion === "party") {
      if (budget === "luxury" || budget === "medium") {
        return {
          title: "GLASS MAKEUP / HD PARTY PACKAGE",
          price: "₹7,500/-",
          features: [
            "Glass / HD Party Makeup",
            "Hair Style with Real Flowers",
            "Eye Lashes & Lenses",
            "Hair Extensions",
          ],
          tip: "💡 Gives a red-carpet flawless finish for evening functions.",
        };
      } else {
        return {
          title: "ESSENTIAL HD PARTY MAKEUP",
          price: "₹5,500/-",
          features: [
            "HD Party Makeup",
            "Hair Styling",
            "Eye Lashes",
            "Saree / Dupatta Draping",
          ],
          tip: "💡 Quick glam look for engagement or family functions.",
        };
      }
    }

    // 4. REGULAR GROOMING / SELF-CARE
    if (budget === "luxury") {
      return {
        title: "KOREAN GLASS SKIN FACIAL & HAIR SPA COMBO",
        price: "₹8,900/-",
        features: [
          "Korean Glass Skin Facial Prep",
          "Korean Hair Spa Therapy",
          "Relaxing Face & Head Massage",
          "Face Mask & Polishing",
        ],
        tip: "💡 Ultimate head-to-toe relaxation treatment.",
      };
    } else {
      return {
        title: "GLOWING SKIN FACIAL & CLEANUP COMBO",
        price: "₹2,500/-",
        features: [
          "Glowing Skin O3+ / Hydra Facial",
          "Full Face Threading",
          "D-Tan & Face Pack",
        ],
        tip: skinType === "acne" 
          ? "💡 Special Acne Care & Cleansing Products will be used!" 
          : "💡 Instant glow and deep cleansing combo.",
      };
    }
  };

  const recommendation = getRecommendation();

  // Create WhatsApp pre-filled message link
  const getWhatsAppLink = () => {
    if (!recommendation) return "#";
    const text = `Hello Khushi! I used your Website Package Finder:\n\n` +
      `📌 Occasion: ${occasion.toUpperCase()}\n` +
      `💆‍♀️ Skin Type: ${skinType.toUpperCase()}\n` +
      `💰 Budget Preference: ${budget.toUpperCase()}\n\n` +
      `✨ Recommended Package: *${recommendation.title}* (${recommendation.price})\n\n` +
      `I would like to enquire / book an appointment for this!`;

    return `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-gray-50 p-6 md:p-10 rounded-lg border border-pink-100 my-10 shadow-sm">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-[#d8586c] font-bold text-xs tracking-widest uppercase">
          ✨ AI-POWERED PACKAGE FINDER
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-950 mt-1">
          FIND YOUR PERFECT BEAUTY PACKAGE
        </h2>
        <p className="text-xs text-gray-600 mt-2">
          Select your Occasion, Skin Type & Budget — Our website will recommend the best package for you!
        </p>
      </div>

      {/* 3 STEPS SELECTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Step 1: Occasion */}
        <div className="bg-white p-5 rounded-md border border-gray-200 shadow-2xs">
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
            1️⃣ Select Your Occasion
          </label>
          <div className="space-y-2">
            {[
              { id: "bridal", label: "Bride / Main Wedding" },
              { id: "pre-bridal", label: "Engagement / Haldi / Sangeet" },
              { id: "party", label: "Party / Guest Look" },
              { id: "regular", label: "Regular Glow & Self-Care" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setOccasion(item.id)}
                className={`w-full text-left text-xs p-3 rounded transition-all border ${
                  occasion === item.id
                    ? "bg-[#f3a0ad] text-black font-bold border-[#f3a0ad]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Skin Type */}
        <div className="bg-white p-5 rounded-md border border-gray-200 shadow-2xs">
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
            2️⃣ Select Your Skin Type
          </label>
          <div className="space-y-2">
            {[
              { id: "normal", label: "Normal / Combination" },
              { id: "dry", label: "Dry / Dehydrated Skin" },
              { id: "oily", label: "Oily / Shine Prone" },
              { id: "acne", label: "Sensitive / Acne Prone" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setSkinType(item.id)}
                className={`w-full text-left text-xs p-3 rounded transition-all border ${
                  skinType === item.id
                    ? "bg-[#f3a0ad] text-black font-bold border-[#f3a0ad]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Budget Range */}
        <div className="bg-white p-5 rounded-md border border-gray-200 shadow-2xs">
          <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
            3️⃣ Select Budget Range
          </label>
          <div className="space-y-2">
            {[
              { id: "essential", label: "Essential / Standard" },
              { id: "medium", label: "Medium / Premium HD" },
              { id: "luxury", label: "Ultra Luxury / Airbrush" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setBudget(item.id)}
                className={`w-full text-left text-xs p-3 rounded transition-all border ${
                  budget === item.id
                    ? "bg-[#f3a0ad] text-black font-bold border-[#f3a0ad]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RECOMMENDATION RESULT CARD */}
      {recommendation ? (
        <div className="bg-white border-2 border-[#f3a0ad] p-6 md:p-8 rounded-lg shadow-md max-w-2xl mx-auto transition-all animate-fadeIn">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4 mb-4">
            <div>
              <span className="bg-pink-100 text-[#d8586c] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                BEST MATCH FOR YOU
              </span>
              <h3 className="text-xl font-serif font-bold text-gray-950 mt-2">
                {recommendation.title}
              </h3>
            </div>
            <div className="text-2xl font-serif font-bold text-[#d8586c] mt-2 md:mt-0">
              {recommendation.price}
            </div>
          </div>

          {/* Included Features */}
          <ul className="space-y-2 mb-4">
            {recommendation.features.map((feat, idx) => (
              <li key={idx} className="text-xs text-gray-700 flex items-center">
                <span className="text-[#d8586c] mr-2">✦</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Pro Tip */}
          <div className="bg-pink-50 text-[11px] text-pink-900 p-3 rounded mb-6 font-medium">
            {recommendation.tip}
          </div>

          {/* WhatsApp Direct Booking Button */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1eb856] text-white py-3 px-6 text-xs font-bold tracking-wider rounded transition-all shadow-sm"
          >
            <svg
              className="w-4 h-4 fill-current mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            BOOK THIS SUGGESTED PACKAGE ON WHATSAPP
          </a>
        </div>
      ) : (
        <div className="text-center p-6 bg-white border border-dashed border-gray-300 rounded-md max-w-md mx-auto text-gray-400 text-xs font-medium">
          👉 Please select options above to see your recommended package.
        </div>
      )}
    </section>
  );
}
