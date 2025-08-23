import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "./HeroCarousel";
import { FaMosque, FaUtensils, FaCalendarAlt, FaAd } from "react-icons/fa";
import { landingPageClasses as c } from "../styles/classes";

const features = [
  { icon: <FaUtensils className="text-green w-12 h-12 mb-3" />, title: "Halal Restaurant Discovery", description: "Search and filter verified halal restaurants near you." },
  { icon: <FaMosque className="text-gold w-12 h-12 mb-3" />, title: "Mosque Proximity & Reviews", description: "Find nearby mosques and view reviews." },
  { icon: <FaCalendarAlt className="text-blue w-12 h-12 mb-3" />, title: "Masjid Events", description: "Stay updated on upcoming events and activities." },
  { icon: <FaAd className="text-red w-12 h-12 mb-3" />, title: "Islamic-Only Ads", description: "Discover vetted and trusted Islamic advertisements." },
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
      <Navbar />
      <HeroCarousel />

      {/* Features Section */}
      <section className={c.featuresSection}>
        <h2 className={c.featuresTitle}>Core Features</h2>
        <div className={c.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={c.featureCard}>
              {f.icon}
              <h3 className={c.featureTitle}>{f.title}</h3>
              <p className={c.featureDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className={c.ctaSection}>
        <h2 className={c.ctaTitle}>Join the Community Today</h2>
        <p className={c.ctaDesc}>
          Save favorites, get event reminders, and explore halal options near you.
        </p>
        <button className={c.ctaButton}>Download App</button>
      </section>

      {/* Footer */}
      <footer className={c.footer}>
        <p>© 2025 MasjidMunchies. All rights reserved.</p>
        <div className={c.footerIcons}>
          <span className={c.footerIcon}>Twitter</span>
          <span className={c.footerIcon}>Facebook</span>
          <span className={c.footerIcon}>Instagram</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
