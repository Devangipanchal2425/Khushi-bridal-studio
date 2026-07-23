"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* LEFT SIDEBAR */}
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
          {/* Logo Box */}
          <div
            style={{
              backgroundColor: "#F4A3B4",
              color: "#000000",
              textAlign: "center",
              padding: "25px 15px",
              marginBottom: "45px",
            }}
          >
            <h2 style={{ fontSize: "28px", fontWeight: "900", margin: 0, letterSpacing: "2px" }}>KP</h2>
            <h3 style={{ fontSize: "13px", fontWeight: "bold", margin: "6px 0 0 0", letterSpacing: "1px" }}>
              KHUSHI PATEL
            </h3>
            <span style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginTop: "2px" }}>
              MAKE-UP ARTIST
            </span>
          </div>

          {/* Navigation */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <Link href="/" style={{ color: "#ffffff", textDecoration: "none", fontSize: "12px", fontWeight: "600", letterSpacing: "2px" }}>
              HOME
            </Link>
            {/* ABOUT HIGHLIGHTED */}
            <Link href="/about" style={{ color: "#F4A3B4", textDecoration: "none", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px" }}>
              ABOUT
            </Link>
            <Link href="/services" style={{ color: "#ffffff", textDecoration: "none", fontSize: "12px", fontWeight: "600", letterSpacing: "2px" }}>
              SERVICES
            </Link>
            <Link href="/portfolio" style={{ color: "#ffffff", textDecoration: "none", fontSize: "12px", fontWeight: "600", letterSpacing: "2px" }}>
              PORTFOLIO
            </Link>
            <Link href="/contact" style={{ color: "#ffffff", textDecoration: "none", fontSize: "12px", fontWeight: "600", letterSpacing: "2px" }}>
              CONTACT
            </Link>
          </nav>
        </div>

        <div style={{ fontSize: "10px", color: "#888888", borderTop: "1px solid #222", paddingTop: "15px" }}>
          <p style={{ margin: "0 0 5px 0" }}>📍 South Bopal, Ahmedabad</p>
          <p style={{ margin: 0 }}>©2026 KHUSHI MAKEOVER</p>
        </div>
      </aside>

      {/* RIGHT MAIN ABOUT CONTENT */}
      <main style={{ flex: 1, padding: "50px 45px", backgroundColor: "#ffffff" }}>
        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <img
            src="/Khushi.jpeg" // Public folder wali image
            alt="Khushi Patel"
            style={{ width: "380px", borderRadius: "2px", objectFit: "cover" }}
          />
          <div style={{ flex: 1, maxWidth: "600px" }}>
            <span style={{ fontSize: "12px", color: "#F4A3B4", letterSpacing: "2px", fontWeight: "bold" }}>
              KHUSHI PATEL
            </span>
            <h1 style={{ fontSize: "36px", fontFamily: "serif", fontWeight: "bold", margin: "5px 0 20px 0" }}>
              MAKEUP ARTIST
            </h1>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
              Welcome to my creative universe of luxury bridal artistry. I am Khushi Patel, a high-definition makeup artist devoted to crafting timeless, ethereal, and personalized wedding transformations. My philosophy revolves around celebrating your natural elegance and enhancing the unique grace you already possess.
            </p>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8", marginBottom: "25px" }}>
              Specializing in couture bridal looks, soft glam finishes, and contemporary hair sculpting, every makeover is thoughtfully designed to complement your wedding couture, personal aesthetic, and individual aura. From delicate skin-prep rituals to long-wear luxury cosmetics, every detail is seamlessly curated to ensure you look effortlessly radiant and feel truly unforgettable.
            </p>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.8" }}>
              To me, bridal makeup is far more than a technique—it is an intimate art form of capturing emotions, confidence, and joy. It is an absolute privilege to walk alongside you on your most cherished journey and make your dream bridal look come alive.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
