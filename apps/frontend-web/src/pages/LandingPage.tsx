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
      <section className="text-textWhite text-center py-24 px-4 bg-gradient-to-r from-primary to-blue">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to MasjidMunchies
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-sm">
          Discover halal restaurants, find nearby mosques, and stay updated on community events.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-primary-dark text-textWhite font-semibold px-6 py-3 rounded-lg hover:bg-primary shadow-md focus:outline-none focus:ring-4 focus:ring-gold transition-colors duration-200">
            Get Started
          </button>
          <button className="bg-transparent border border-textWhite text-textWhite px-6 py-3 rounded-lg hover:bg-gold hover:text-textPrimary shadow-md focus:outline-none focus:ring-4 focus:ring-primary-dark transition-colors duration-200">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-bgGray">
        <h2 className="text-3xl font-bold text-center mb-12 text-textPrimary">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 bg-bgLight"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-textWhite py-24 px-4 text-center bg-gradient-to-r from-primary-dark to-gold">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Join the Community Today
        </h2>
        <p className="mb-6 text-lg md:text-xl drop-shadow-sm">
          Save your favorite places, get event reminders, and explore halal options near you.
        </p>
          <button className="bg-primary-dark text-textWhite font-semibold px-6 py-3 rounded-lg hover:bg-primary shadow-md focus:outline-none focus:ring-4 focus:ring-gold transition-colors duration-200">
          Download App
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center bg-bgDark text-textWhite">
        <p>© 2025 MasjidMunchies. All rights reserved.</p>
        <p className="mt-2 text-gold">
          Contact: info@masjidmunchies.com | Follow us on social media
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
