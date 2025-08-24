import React, { useEffect } from "react";
import Navbar from "../components/furniture/Navbar";
import Footer from "../components/furniture/Footer";
import HeroCarousel from "./HeroCarousel";
import { FaMosque, FaUtensils, FaCalendarAlt, FaAd } from "react-icons/fa";
import { landingPageClasses as c } from "../styles/classes";

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

// Cast icons explicitly
const features: Feature[] = [
  { icon: FaUtensils as React.ComponentType<{ className?: string }>, title: "Halal Restaurant Discovery", description: "Search and filter verified halal restaurants near you." },
  { icon: FaMosque as React.ComponentType<{ className?: string }>, title: "Mosque Proximity & Reviews", description: "Find nearby mosques and view reviews." },
  { icon: FaCalendarAlt as React.ComponentType<{ className?: string }>, title: "Masjid Events", description: "Stay updated on upcoming events and activities." },
  { icon: FaAd as React.ComponentType<{ className?: string }>, title: "Islamic-Only Ads", description: "Discover vetted and trusted Islamic advertisements." },
];

const LandingPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
  }, []);

  return (
    <div className={c.container}>
      <HeroCarousel />

      <section className={c.featuresSection}>
        <h2 className={c.featuresTitle}>Core Features</h2>
        <div className={c.featuresGrid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className={c.featureCard}>
                <Icon className="w-12 h-12 mb-3" />
                <h3 className={c.featureTitle}>{f.title}</h3>
                <p className={c.featureDesc}>{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={c.ctaSection}>
        <h2 className={c.ctaTitle}>Join the Community Today</h2>
        <p className={c.ctaDesc}>
          Save favorites, get event reminders, and explore halal options near you.
        </p>
        <button className={c.ctaButton}>Download App</button>
      </section>
    </div>
  );
};

export default LandingPage;
