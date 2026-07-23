"use client";

import React from "react";

interface ServicePackage {
  id: string;
  badge: string;
  title: string;
  price: string;
  features: string[];
}

const packages: ServicePackage[] = [
  {
    id: "1",
    badge: "TRENDING LOOK",
    title: "KOREAN GLASS MAKEUP (SIDER / PARTY)",
    price: "₹7,500/-",
    features: [
      "Glass Glow Finish Makeup",
      "Hairstyle (Real Flower styling)",
      "Eye Lashes & Premium Eye Lenses",
      "Saree / Outfit Draping",
      "Hair Extension Included",
    ],
  },
  {
    id: "2",
    badge: "MOST POPULAR",
    title: "PRE-FUNCTION KOREAN GLASS GLAM",
    price: "₹13,000/-",
    features: [
      "Korean Glass Makeup (Sangeet/Haldi/Mahendi/Engagement)",
      "Hair Style with Real Flowers & Decoration",
      "Eye Lashes & Eye Lenses",
      "Saree / Outfit Draping",
    ],
  },
  {
    id: "3",
    badge: "LUXURY BRIDAL",
    title: "BRIDAL KOREAN GLASS MAKEOVER",
    price: "₹22,000/-",
    features: [
      "Signature Korean Glass Skin Makeup",
      "Hair Style (Brooch Decoration / Real Flowers)",
      "Damani, Tikko & Nath Placement",
      "Eye Lashes & Eye Lenses",
      "Hair Accessories & Extensions",
      "Saree / Dupatta Draping",
    ],
  },
  {
    id: "4",
    badge: "FULL TREATMENT",
    title: "ULTIMATE KOREAN PRE-BRIDAL PACKAGE",
    price: "₹19,000/-",
    features: [
      "Korean Glass Glowing Skin Facial & Face Pack",
      "Korean Hair Spa Therapy (With Face Mask & Massage)",
      "Rica Full Body Waxing & Body Polishing",
      "Full Body Oil Massage, Scrubbing & Pack",
      "Clean Up, D-Tan, Manicure, Pedicure, Threading",
    ],
  },
];

export default function ServicesPage() {
  const whatsappNumber = "919870085600";

  const handleBookNow = (packageName: string, packagePrice: string) => {
    const message = `Hello, I am interested in this package:\n\n📦 *Package Name:* ${packageName}\n💰 *Price:* ${packagePrice}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                border: "1.5px solid #FBCFE8",
                backgroundColor: "#ffffff",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "35px",
              }}
            >
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "#FCE7F3",
                  color: "#9D174D",
                  fontSize: "11px",
                  fontWeight: "bold",
                  padding: "6px 14px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {pkg.badge}
              </div>

              {/* Package Content */}
              <div style={{ padding: "20px 25px 30px 25px", flexGrow: 1 }}>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "#000000",
                    lineHeight: "1.3",
                    marginBottom: "12px",
                    fontFamily: "serif",
                  }}
                >
                  {pkg.title}
                </h2>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#DB2777",
                    marginBottom: "20px",
                    fontFamily: "serif",
                  }}
                >
                  {pkg.price}
                </div>

                {/* Features List */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "13px",
                        color: "#4B5563",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "flex-start",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <span style={{ color: "#F472B6", marginRight: "8px" }}>✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <button
                onClick={() => handleBookNow(pkg.title, pkg.price)}
                style={{
                  width: "100%",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  padding: "14px",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                BOOK KOREAN GLAM
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
