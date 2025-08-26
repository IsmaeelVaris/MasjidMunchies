// src/styles/classes.ts

export const globalClasses = {
  body: "font-sans bg-bg-dark text-text-white m-0 p-0 box-border",
  smoothScroll: "scroll-smooth",
  button: "transition-all duration-300 ease-in-out",
  btnPrimary:
    "rounded-2xl font-semibold px-6 py-3 bg-green text-text-white hover:bg-green-dark hover:scale-105 transform transition-all",
};

export const featureClasses = {
  card:
    "feature-card bg-ivory rounded-2xl border border-gray-300 p-8 text-center transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:shadow-lg text-bg-dark",
  icon:
    "w-12 h-12 mb-3 transition-transform duration-400 ease-in-out hover:scale-125 hover:rotate-3 text-green-dark",
  title: "text-xl font-bold mb-3 text-bg-dark",
  desc: "text-bg-dark/80",
};

export const fadeClasses = {
  fadeUp:
    "fade-up opacity-0 translate-y-5 transition-opacity transition-transform duration-800 ease-out",
  fadeUpShow: "opacity-1 translate-y-0",
};

export const heroCarouselClasses = {
  container:
    "relative w-full min-h-[700px] flex items-center justify-center overflow-hidden",
  swiper: "w-full h-full",
  slide:
    "hero-slide w-full h-full min-h-[700px] flex flex-col items-center justify-center rounded-2xl px-4 text-center bg-ivory border border-gray-300 shadow-md text-bg-dark",
  title: "text-4xl md:text-5xl font-extrabold mb-4 text-bg-dark",
  subtitle: "text-lg md:text-xl text-bg-dark/80 max-w-2xl",
  navigation: "swiper-button-white text-bg-dark",
  pagination: "swiper-pagination-bullets bottom-4",
};

export const landingPageClasses = {
  container: "font-sans bg-bg-dark text-text-white",
  featuresSection: "py-24 px-4 bg-bg-light",
  featuresTitle:
    "text-4xl font-bold text-center mb-12 text-text-secondary fade-up",
  featuresGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto",
  featureCard: featureClasses.card,
  featureTitle: featureClasses.title,
  featureDesc: featureClasses.desc,
  ctaSection:
    "py-28 px-4 text-center bg-ivory rounded-3xl shadow-lg overflow-hidden fade-up flex flex-col items-center md:px-8",
  ctaTitle:
    "text-5xl md:text-6xl font-extrabold mb-4 text-green-dark fade-up",
  ctaDesc: "mb-8 text-xl md:text-2xl text-bg-dark/80 fade-up",
  ctaButton: globalClasses.btnPrimary + " fade-up",
  footer: "py-12 px-4 bg-bg-dark text-text-white text-center space-y-2",
  footerIcons: "flex justify-center gap-4 mt-2",
  footerIcon: "text-gold hover:text-green cursor-pointer",
};

export const dashboardClasses = {
  container: "font-sans bg-bg-dark text-text-white min-h-screen pt-24",
  welcomeBanner:
    "bg-bg-light py-12 rounded-b-3xl shadow-lg text-center px-4 md:px-8",
  welcomeTitle: "text-4xl md:text-5xl font-extrabold text-text-white",
  welcomeDesc: "mt-3 text-lg text-text-secondary max-w-2xl mx-auto",
  searchSection: "py-16 px-4 md:px-8 flex flex-col items-center",
  searchContainer:
    "bg-ivory rounded-3xl p-8 shadow-xl w-full max-w-3xl flex flex-col gap-6 text-bg-dark",
  searchTitle:
    "text-3xl md:text-4xl font-extrabold text-green-dark text-center",
  searchDesc: "text-bg-dark/80 text-center mb-4",
  input:
    "w-full p-4 rounded-2xl bg-bg-light text-text-white border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gold",
  searchButton:
    "w-full py-3 rounded-2xl bg-green text-text-white font-semibold hover:bg-green-dark transition",
  locationButton:
    "w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue text-text-white font-semibold hover:bg-blue-light transition shadow-md",
  orDivider: "flex items-center gap-2 my-2 text-gray-400",
  orLine: "flex-grow h-px bg-gray-300",
  orText: "text-sm font-medium",
  mapContainer:
    "w-full max-w-4xl h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl mt-8 bg-ivory text-bg-dark flex items-center justify-center",
};
