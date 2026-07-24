"use client";

import React from "react";

export default function ServicesPage() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Left Sidebar - 38% Width */}
      <aside className="w-[38%] bg-black text-white p-3 flex flex-col justify-between shrink-0">
        {/* Aapka Sidebar/KP Logo Content */}
      </aside>

      {/* Right Main Content - 62% Width */}
      <main className="w-[62%] bg-[#2a2a2a] text-white p-4 overflow-y-auto">
        {/* Aapke Services aur Packages */}
      </main>
    </div>
  );
}
