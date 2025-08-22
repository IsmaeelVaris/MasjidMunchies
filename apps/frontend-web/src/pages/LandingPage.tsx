import React from "react";
import Navbar from "../components/Navbar";
import { FaMosque, FaUtensils, FaCalendarAlt, FaAd } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils className="text-green w-10 h-10 mb-3" />,
    title: "Halal Restaurant Discovery",
    description: "Search and filter verified halal restaurants near you.",
  },
  {
    icon: <FaMosque className="text-gold w-10 h-10 mb-3" />,
    title: "Mosque Proximity & Reviews",
    description: "Find nearby mosques and view reviews.",
  },
  {
    icon: <FaCalendarAlt className="text-blue w-10 h-10 mb-3" />,
    title: "Masjid Events",
    description: "Stay updated on upcoming events and activities.",
  },
  {
    icon: <FaAd className="text-green w-10 h-10 mb-3" />,
    title: "Islamic-Only Ads",
    description: "Discover vetted and trusted Islamic advertisements.",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans bg-bgDark text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center bg-gradient-to-br from-green to-blue overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent)]"></div>

        <h1 className="relative text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">
          Welcome to MasjidMunchies
        </h1>
        <p className="relative text-lg md:text-xl mb-8 drop-shadow-sm text-white/90 max-w-2xl mx-auto">
          Discover halal restaurants, nearby mosques, and stay updated on community events.
        </p>
        <div className="relative flex justify-center gap-6">
          <button className="bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-green transition-colors shadow-xl hover:scale-105 transform duration-200">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-gold hover:text-black shadow-lg hover:scale-105 transform transition duration-200">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-bgGray relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-textPrimary drop-shadow-md">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-bgLight p-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform transition duration-300 text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-3 text-green">{feature.title}</h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-4 text-center bg-gradient-to-r from-green-dark to-gold overflow-hidden">
        {/* Layered gradient shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue/20 rounded-full filter blur-3xl animate-pulse"></div>

        <h2 className="relative text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Join the Community Today
        </h2>
        <p className="relative mb-8 text-lg md:text-xl text-white/90 drop-shadow-sm max-w-2xl mx-auto">
          Save favorites, get event reminders, and explore halal options near you.
        </p>
        <button className="relative bg-black text-white font-bold px-10 py-4 rounded-2xl hover:bg-green shadow-xl hover:scale-105 transform transition duration-200">
          Download App
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-bgDark text-white text-center space-y-2">
        <p>© 2025 MasjidMunchies. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          {/* Social placeholders */}
          <span className="text-gold hover:text-green cursor-pointer">Twitter</span>
          <span className="text-gold hover:text-blue cursor-pointer">Facebook</span>
          <span className="text-gold hover:text-white cursor-pointer">Instagram</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
