// LandingPage.tsx
import React from "react";

const features = [
  {
    title: "Halal Restaurant Discovery",
    description: "Search and filter verified halal restaurants near you.",
  },
  {
    title: "Mosque Proximity & Reviews",
    description: "Find nearby mosques and view Google reviews.",
  },
  {
    title: "Masjid Events",
    description: "Stay updated on upcoming events and activities.",
  },
  {
    title: "Islamic-Only Ads",
    description: "Discover vetted and trusted Islamic advertisements.",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-green-600 text-white text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MasjidMunchies
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover halal restaurants, find nearby mosques, and stay updated on community events.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-green-700 text-white py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Community Today
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Save your favorite places, get event reminders, and explore halal options near you.
        </p>
        <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition">
          Download App
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 px-4 text-center">
        <p>© 2025 MasjidMunchies. All rights reserved.</p>
        <p className="mt-2">
          Contact: info@masjidmunchies.com | Follow us on social media
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
