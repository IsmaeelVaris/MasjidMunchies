// src/styles/classes.ts
export const globalClasses = {
  body: "font-sans bg-bg-dark text-white m-0 p-0 box-border",
  smoothScroll: "scroll-smooth",
  button: "transition-all duration-300 ease-in-out",
  btnPrimary: "rounded-xl font-semibold px-8 py-3 bg-[#17603B] text-[#F8F9FA] hover:bg-[#1F5D43] hover:scale-105 transform transition-all",
};

export const featureClasses = {
  card: "feature-card bg-[rgba(34,34,34,0.7)] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.08)] p-8 text-center transition-transform duration-400 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
  icon: "w-12 h-12 mb-3 transition-transform duration-400 ease-in-out hover:scale-125 hover:rotate-3",
  title: "text-xl font-bold mb-3 text-green",
  desc: "text-white/80",
};

export const fadeClasses = {
  fadeUp: "fade-up opacity-0 translate-y-5 transition-opacity transition-transform duration-800 ease-out",
  fadeUpShow: "opacity-1 translate-y-0",
};


export const heroCarouselClasses = {
  container: "relative w-full min-h-[700px] flex items-center justify-center overflow-hidden",
  swiper: "w-full h-full",
  slide: "hero-slide w-full h-full min-h-[700px] flex flex-col items-center justify-center rounded-2xl px-4 text-center bg-gradient-to-r from-[#17603B] to-[#17658C] shadow-xl",
  title: "text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-4",
  subtitle: "text-xl md:text-2xl text-white/80 max-w-2xl",
  navigation: "swiper-button-white text-white", // ensures Swiper arrows are white
  pagination: "swiper-pagination-bullets bottom-4",
};



export const landingPageClasses = {
  container: "font-sans bg-bg-dark text-white",
  featuresSection: "py-24 px-4 bg-bg-gray",
  featuresTitle: "text-4xl font-bold text-center mb-12 text-text-secondary fade-up",
  featuresGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto",
  featureCard: featureClasses.card,
  featureTitle: featureClasses.title,
  featureDesc: featureClasses.desc,
  ctaSection: "py-28 px-4 text-center bg-moorish bg-gradient-to-r from-green-dark to-gold overflow-hidden fade-up",
  ctaTitle: "text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg fade-up",
  ctaDesc: "mb-8 text-xl md:text-2xl text-white/90 fade-up",
  ctaButton: globalClasses.btnPrimary + " fade-up",
  footer: "py-12 px-4 bg-bg-dark text-white text-center space-y-2",
  footerIcons: "flex justify-center gap-4 mt-2",
  footerIcon: "text-gold hover:text-green cursor-pointer",
};
