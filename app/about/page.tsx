import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component (Iske andar hi Logo aur Navigation rahenga) */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to our platform! We are dedicated to providing the best service possible. 
            This page contains information about our journey, vision, and core team.
          </p>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify technology and make high-quality digital solutions accessible to everyone.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
