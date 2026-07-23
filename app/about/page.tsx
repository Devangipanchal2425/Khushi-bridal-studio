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
    id: "korean",
    tabLabel: "KOREAN GLASS & SPA",
    icon: "✨",
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
    tabLabel: "SALON MENU (FULL SKIN, HAIR & NAILS)",
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
  const [activeTab, setActiveTab] = useState("bridal");
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
      {/* LEFT SIDEBAR (EXACT IMAGE MATCH) */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div>
          {/* Beige/Nude Box Logo */}
          <div
            style={{
              backgroundColor: "#CBB3A2",
              padding: "30px 15px",
              textAlign: "center",
              marginBottom: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "15px 20px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#000000",
                  margin: 0,
                  fontFamily: "serif",
                  letterSpacing: "1px",
                }}
              >
                KHUSHI MAKEOVER
              </h2>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <Link
              href="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: "500",
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
                letterSpacing: "2px",
                fontWeight: "500",
              }}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              style={{
                color: "#E8A3B6",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: "600",
                borderBottom: "1px solid #333",
                paddingBottom: "10px",
              }}
            >
              SERVICES
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div style={{ fontSize: "10px", color: "#777777" }}>
          <p style={{ margin: "0 0 6px 0" }}>📍 South Bopal, Ahmedabad</p>
          <p style={{ margin: 0 }}>©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* RIGHT MAIN SECTION */}
      <main style={{ flex: 1, padding: "50px 40px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <span
            style={{
              fontSize: "11px",
              color: "#E8A3B6",
              letterSpacing: "3px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            STUDIO MENU & RATES
          </span>
          <h1
            style={{
              fontSize: "30px",
              fontFamily: "serif",
              fontWeight: "400",
              margin: "8px 0 12px 0",
              letterSpacing: "1px",
            }}
          >
            SERVICES & PACKAGES
          </h1>
          <div
            style={{
              width: "50px",
              height: "2px",
              backgroundColor: "#E8A3B6",
              margin: "0 auto",
            }}
          ></div>
        </div>

        {/* VERTICAL CENTERED TABS (Exact Screenshot Match) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            marginBottom: "45px",
          }}
        >
          {servicesData.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  backgroundColor: isActive ? "#F4B3C2" : "#F3F4F6",
                  color: isActive ? "#000000" : "#4B5563",
                  border: "none",
                  padding: "12px 28px",
                  fontSize: "11px",
                  fontWeight: "600",
                  letterSpacing: "1.5px",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "420px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  transition: "all 0.2s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE SECTION DISPLAY */}
        {currentCategory && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "30px",
            }}
          >
            {currentCategory.subCategories.map((sub, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #E5E7EB",
                  padding: "25px",
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
                  }}
                >
                  {sub.title}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {sub.items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleServiceClick(item.name, item.price)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        fontSize: "13px",
                        color: item.highlighted ? "#E8A3B6" : "#374151",
                        fontWeight: item.highlighted ? "bold" : "400",
                        padding: "4px 0",
                      }}
                    >
                      <span>{item.name}</span>
                      <span style={{ fontWeight: "600" }}>{item.price}</span>
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
