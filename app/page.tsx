'use client';

import React from 'react';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button 
        onClick={() => window.open('https://wa.me/918128154675', '_blank')}
        className="bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium shadow"
      >
        Chat on WhatsApp
      </button>
    </div>
  );
}
