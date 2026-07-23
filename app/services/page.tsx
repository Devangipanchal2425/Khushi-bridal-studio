"use client";

import React from "react";

// Types for Package Data
interface ServicePackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

// Packages Data List
const packages: ServicePackage[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹999",
    description: "Perfect for getting started with essential features.",
    features: ["Core Features Included", "Standard Support", "1 Week Turnaround"],
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "₹2,499",
    description: "Most popular choice for growing projects & teams.",
    features: [
      "All Basic Features",
      "Priority Support",
      "Advanced Customization",
      "3 Days Turnaround",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹4,999",
    description: "Complete end-to-end solution with dedicated assistance.",
    features: [
      "All Pro Features",
      "24/7 Dedicated Support",
      "Full Custom Integration",
      "Express Delivery",
    ],
  },
];

export default function ServicesPage() {
  const whatsappNumber = "919870085600"; // Country Code + WhatsApp Number

  // Function to handle direct WhatsApp redirect with pre-filled message
  const handleWhatsAppRedirect = (packageName: string, packagePrice: string) => {
    const message = `Hello, I am interested in this package:\n\n📦 *Package Name:* ${packageName}\n💰 *Price:* ${packagePrice}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main style={styles.container}>
      <section style={styles.header}>
        <h1 style={styles.title}>Our Services & Packages</h1>
        <p style={styles.subtitle}>
          Choose the best plan for your needs and connect with us directly on WhatsApp.
        </p>
      </section>

      {/* Package Cards Grid */}
      <div style={styles.grid}>
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            style={{
              ...styles.card,
              ...(pkg.popular ? styles.popularCard : {}),
            }}
          >
            {pkg.popular && <span style={styles.badge}>Most Popular</span>}
            
            <h2 style={styles.packageName}>{pkg.name}</h2>
            <div style={styles.price}>{pkg.price}</div>
            <p style={styles.description}>{pkg.description}</p>

            <ul style={styles.featureList}>
              {pkg.features.map((feature, idx) => (
                <li key={idx} style={styles.featureItem}>
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleWhatsAppRedirect(pkg.name, pkg.price)}
              style={{
                ...styles.button,
                ...(pkg.popular ? styles.popularButton : styles.defaultButton),
              }}
            >
              Enquire on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

// Inline styles for easy copy-paste without external CSS dependencies
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#666",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    alignItems: "stretch",
  },
  card: {
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  popularCard: {
    borderColor: "#25D366",
    borderWidth: "2px",
    transform: "scale(1.02)",
  },
  badge: {
    position: "absolute",
    top: "-12px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#ffffff",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  packageName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#0f172a",
  },
  price: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: "15px",
  },
  description: {
    color: "#64748b",
    marginBottom: "20px",
    fontSize: "0.95rem",
    lineHeight: "1.5",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 30px 0",
    flexGrow: 1,
  },
  featureItem: {
    padding: "8px 0",
    color: "#334155",
    fontSize: "0.95rem",
  },
  button: {
    width: "100%",
    padding: "14px 20px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  defaultButton: {
    backgroundColor: "#25D366",
    color: "#ffffff",
  },
  popularButton: {
    backgroundColor: "#128C7E",
    color: "#ffffff",
  },
};
