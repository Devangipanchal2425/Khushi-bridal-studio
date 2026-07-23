"use client";

import React, { useState } from "react";
import Link from "next/link";

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
          { name: "Ultimate Korean Pre-Bridal Package", price: "₹19,000" },
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
      {
        title: "PRE-FUNCTION EVENTS",
        items: [
          { name: "Engagement / Ring Ceremony", price: "₹8,500" },
          { name: "Sangeet / Mehendi Look", price: "₹7,000" },
          { name: "Reception Look", price: "₹10,000", highlighted: true },
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
          { name: "Aroma Body Oil Massage", price: "₹2,500" },
        ],
      },
      {
        title: "HANDS & FEET CARE",
        items: [
          { name: "Luxury Manicure", price: "₹1,200" },
          { name: "Pedicure Care Spa", price: "₹1,500" },
          { name: "D-Tan Hand & Feet Glow", price: "₹1,800", highlighted: true },
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
  // Default selected tab as per Image 2 (SALON MENU)
  const [activeTab, setActiveTab] = useState("salon");
  const whatsappNumber = "919870085600";

  const handleServiceClick = (serviceName: string, servicePrice: string) => {
    const message = `Hello, I am interested in this package:\n\n📦 *Package Name:* ${serviceName}\n💰 *Price:* ${servicePrice}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const currentCategory = servicesData.find((cat) => cat.id === activeTab);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* LEFT PERSISTENT SIDEBAR */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "35px 25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div>
          {/* Logo Container */}
          <div
            style={{
              backgroundColor: "#F4A3B4",
              color: "#000000",
              textAlign: "center",
              padding: "25px 15px",
              marginBottom: "45px",
            }}
          >
            <h2 style={{ fontSize: "28px", fontWeight: "900", margin: 0, letterSpacing: "2px" }}>
              KP
            </h2>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", margin: "6px 0 0 0", letterSpacing: "1px" }}>
              KHUSHI PATEL
            </h3>
            <span style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginTop: "2px" }}>
              BRIDAL STUDIO & SALON
            </span>
          </div>

          {/* Navigation Links (Clickable & Active Styling) */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <Link
              href="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              HOME
            </Link>

            <Link
              href="/about"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              ABOUT
            </Link>

            <Link
              href="/services"
              style={{
                color: "#F4A3B4", // Highlighted for current page
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              SERVICES
            </Link>

            <Link
              href="/portfolio"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              PORTFOLIO
            </Link>

            <Link
              href="/contact"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              CONTACT
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div style={{ fontSize: "10px", color: "#888888", borderTop: "1px solid #222", paddingTop: "15px" }}>
          <p style={{ margin: "0 0 5px 0" }}>📍 South Bopal, Ahmedabad</p>
          <p style={{ margin: 0 }}>©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* RIGHT MAIN SERVICES SECTION */}
      <main style={{ flex: 1, padding: "50px 45px", backgroundColor: "#ffffff" }}>
        {/* Header Titles */}
        <div style={{ marginBottom: "35px" }}>
          <span
            style={{
              fontSize: "11px",
              color: "#F4A3B4",
              letterSpacing: "2px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            STUDIO MENU & RATES
          </span>
          <h1
            style={{
              fontSize: "36px",
              fontFamily: "serif",
              fontWeight: "bold",
              margin: "6px 0 12px 0",
              color: "#000000",
              letterSpacing: "1px",
            }}
          >
            SERVICES & PACKAGES
          </h1>
          <div style={{ width: "55px", height: "2px", backgroundColor: "#F4A3B4" }}></div>
        </div>

        {/* Horizontal Category Tabs (Exactly like Image 2) */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "40px",
            flexWrap: "wrap",
            borderBottom: "1px solid #f0f0f0",
            paddingBottom: "18px",
          }}
        >
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
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Sub-Categories Menu Cards */}
        {currentCategory && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "30px",
            }}
          >
            {currentCategory.subCategories.map((sub, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #E5E7EB",
                  padding: "25px 30px",
                  backgroundColor: "#ffffff",
                }}
              >
                <h3
                  style={{
                    fontSize: "15px",
                    fontFamily: "serif",
                    fontWeight: "bold",
                    marginBottom: "18px",
                    borderBottom: "1px solid #000000",
                    paddingBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "#000000",
                  }}
                >
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
      </main>
    </div>
  );
}
