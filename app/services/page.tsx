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
    <main style={styles.pageBackground}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {packages.map((pkg) => (
            <div key={pkg.id} style={styles.card}>
              {/* Top Right Badge */}
              <div style={styles.badge}>{pkg.badge}</div>

              {/* Package Content */}
              <div style={styles.cardContent}>
                <h2 style={styles.title}>{pkg.title}</h2>
                <div style={styles.price}>{pkg.price}</div>

                {/* Features List */}
                <ul style={styles.featureList}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <span style={styles.starIcon}>✦</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Width Booking Button */}
              <button
                onClick={() => handleBookNow(pkg.title, pkg.price)}
                style={styles.bookButton}
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

const styles: { [key: string]: React.CSSProperties } = {
  pageBackground: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Playfair Display', Georgia, serif", // Aesthetic Serif font like screenshot
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },
  card: {
    border: "1.5px solid #FBCFE8", // Soft Pink Border
    backgroundColor: "#fff",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justify: "space-between",
    paddingTop: "35px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
  },
  badge: {
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "#FCE7F3", // Light Pink Badge
    color: "#9D174D", // Dark Pink Text
    fontSize: "0.7rem",
    fontWeight: "bold",
    padding: "6px 14px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  cardContent: {
    padding: "20px 25px 30px 25px",
    flexGrow: 1,
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "800",
    color: "#000000",
    lineHeight: "1.3",
    marginBottom: "12px",
    letterSpacing: "0.5px",
  },
  price: {
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#DB2777", // Signature Pink Price Color
    marginBottom: "20px",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontFamily: "system-ui, -apple-system, sans-serif", // Clean font for features list
  },
  featureItem: {
    fontSize: "0.88rem",
    color: "#4B5563",
    marginBottom: "10px",
    lineHeight: "1.4",
    display: "flex",
    alignItems: "flex-start",
  },
  starIcon: {
    color: "#F472B6",
    marginRight: "8px",
    fontSize: "0.8rem",
    marginTop: "2px",
  },
  bookButton: {
    width: "100%",
    backgroundColor: "#000000", // Solid Black Button as per screenshot
    color: "#ffffff",
    padding: "14px",
    border: "none",
    fontSize: "0.85rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};
