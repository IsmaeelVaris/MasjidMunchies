import React, { useEffect } from "react";
import Navbar from "../components/furniture/Navbar";
import Footer from "../components/furniture/Footer";
import HeroCarousel from "./HeroCarousel";
import { FaMosque, FaUtensils, FaCalendarAlt, FaAd } from "react-icons/fa";
import { landingPageClasses as c, featureClasses } from "../styles/classes";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

// Cast icons explicitly
const features: Feature[] = [
  {
    icon: FaUtensils as React.ComponentType<{ className?: string }>,
    title: "Halal Restaurant Discovery",
    description: "Search and filter verified halal restaurants near you.",
  },
  {
    icon: FaMosque as React.ComponentType<{ className?: string }>,
    title: "Mosque Proximity & Reviews",
    description: "Find nearby mosques and view reviews.",
  },
  {
    icon: FaCalendarAlt as React.ComponentType<{ className?: string }>,
    title: "Masjid Events",
    description: "Stay updated on upcoming events and activities.",
  },
  {
    icon: FaAd as React.ComponentType<{ className?: string }>,
    title: "Islamic-Only Ads",
    description: "Discover vetted and trusted Islamic advertisements.",
  },
];

const LandingPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className={c.container}>
      <Navbar />
      <HeroCarousel />

      {/* Features Section */}
      <section className={c.featuresSection}>
        <h2 className={c.featuresTitle}>Core Features</h2>
        <div className={c.featuresGrid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`${featureClasses.card} bg-ivory border border-gray-300 text-bg-dark hover:-translate-y-1 hover:shadow-lg`}
              >
                <Icon
                  className={`${featureClasses.icon} text-green-dark`}
                  aria-hidden="true"
                />
                <h3 className={featureClasses.title}>{f.title}</h3>
                <p className={featureClasses.desc}>{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`${c.ctaSection} bg-ivory border border-gray-300 shadow-md hover:shadow-lg`}
      >
        <h2 className={c.ctaTitle}>Join the Community Today</h2>
        <p className={c.ctaDesc}>
          Save favorites, get event reminders, and explore halal options near
          you.
        </p>
        <button
          className={`${c.ctaButton} bg-green text-text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green-dark`}
        >
          Download App
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
