"use client";

import React, { useState } from "react";

interface ServiceItem {
  name: string;
  price: string;
  highlighted?: boolean;
}

interface ServiceSubCategory {
  title: string;
  items: ServiceItem[];
}

interface CategoryData {
  id: string;
  tabLabel: string;
  icon: string;
  subCategories: ServiceSubCategory[];
}

const servicesData: CategoryData[] = [
  {
    id: "korean",
    tabLabel: "KOREAN GLASS PACKAGES",
    icon: "🧚‍♀️",
    subCategories: [
      {
        title: "KOREAN GLASS GLAM",
        items: [
          { name: "Korean Glass Makeup (Sider / Party)", price: "₹7,500" },
          { name: "Pre-Function Korean Glass Glam", price: "₹13,000", highlighted: true },
          { name: "Bridal Korean Glass Makeover", price: "₹22,000" },
        ],
      },
      {
        title: "KOREAN SPECIALS",
        items: [
          { name: "Korean Glass Glowing Skin Facial", price: "₹5,600", highlighted: true },
          { name: "Korean Hair Spa Therapy", price: "₹2,000 - ₹5,600" },
        ],
      },
    ],
  },
  {
    id: "bridal",
    tabLabel: "BRIDAL & PRE-FUNCTION",
    icon: "👑",
    subCategories: [
      {
        title: "BRIDAL MAKEOVERS",
        items: [
          { name: "Traditional Bridal Makeup", price: "₹15,000" },
          { name: "HD Premium Bridal Makeup", price: "₹18,000", highlighted: true },
          { name: "Airbrush Luxury Bridal", price: "₹25,000" },
        ],
      },
    ],
  },
  {
    id: "spa",
    tabLabel: "PRE-BRIDAL SPA",
    icon: "🌸",
    subCategories: [
      {
        title: "BODY POLISHING & SPA",
        items: [
          { name: "Rica Full Body Waxing", price: "₹3,500" },
          { name: "Full Body Polish & Pack", price: "₹4,500", highlighted: true },
        ],
      },
    ],
  },
  {
    id: "salon",
    tabLabel: "SALON MENU (HAIR, SKIN, NAILS)",
    icon: "💄",
    subCategories: [
      {
        title: "FACIALS & SKIN TREATMENTS",
        items: [
          { name: "Tan Clear Facial (Tanned Skin)", price: "₹800" },
          { name: "Glovite Facial (Dry Skin)", price: "₹1,200" },
          { name: "Sensi Glow Facial (Sensitive Skin)", price: "₹1,800" },
          { name: "Light & Bright Facial", price: "₹2,100" },
          { name: "O3+ Glowing Skin Facial", price: "₹2,500" },
          { name: "Hydra Boost Skin Facial", price: "₹5,000", highlighted: true },
          { name: "Korean Glass Skin Facial", price: "₹5,600", highlighted: true },
        ],
      },
      {
        title: "HAIR SPA & TREATMENTS",
        items: [
          { name: "L'Oreal Professional Spa", price: "₹600 - ₹2,100" },
          { name: "Korean Hair Spa Therapy (Massage)", price: "₹2,000 - ₹5,600", highlighted: true },
          { name: "Hair Straightening Treatment", price: "₹2,500 - ₹8,900" },
          { name: "Botox Hair Treatment", price: "₹2,500 - ₹7,500" },
          { name: "Pro Keratin Treatment", price: "₹2,900 - ₹8,900" },
          { name: "Nanoplastia Treatment", price: "₹3,900 - ₹9,900" },
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("salon");
  const whatsappNumber = "919870085600";

  const handleServiceClick = (serviceName: string, servicePrice: string) => {
    const message = `Hello, I am interested in this package:\n\n📦 *Package Name:* ${serviceName}\n💰 *Price:* ${servicePrice}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  };

  const currentCategory = servicesData.find((cat) => cat.id === activeTab);

  return (
    <div>
      {/* Header Titles */}
      <div style={{ marginBottom: "35px" }}>
        <span style={{ fontSize: "11px", color: "#F4A3B4", letterSpacing: "2px", fontWeight: "bold", textTransform: "uppercase" }}>
          STUDIO MENU & RATES
        </span>
        <h1 style={{ fontSize: "36px", fontFamily: "serif", fontWeight: "bold", margin: "6px 0 12px 0", color: "#000000" }}>
          SERVICES & PACKAGES
        </h1>
        <div style={{ width: "55px", height: "2px", backgroundColor: "#F4A3B4" }}></div>
      </div>

      {/* Horizontal Tabs (Matching Image 2) */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
        {servicesData.map((cat) => {
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                backgroundColor: isActive ? "#FCE7F3" : "#F3F4F6",
                color: isActive ? "#9D174D" : "#374151",
                border: isActive ? "1px solid #FBCFE8" : "1px solid transparent",
                padding: "11px 20px",
                fontSize: "11px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textTransform: "uppercase",
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Section */}
      {currentCategory && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "30px" }}>
          {currentCategory.subCategories.map((sub, index) => (
            <div key={index} style={{ border: "1px solid #E5E7EB", padding: "25px 30px", backgroundColor: "#ffffff" }}>
              <h3 style={{ fontSize: "15px", fontFamily: "serif", fontWeight: "bold", marginBottom: "18px", borderBottom: "1px solid #000000", paddingBottom: "8px", textTransform: "uppercase" }}>
                {sub.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {sub.items.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleServiceClick(item.name, item.price)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: item.highlighted ? "#DB2777" : "#374151",
                      fontWeight: item.highlighted ? "bold" : "normal",
                      padding: "4px 0",
                    }}
                  >
                    <span>{item.name}</span>
                    <span style={{ fontWeight: "bold" }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
