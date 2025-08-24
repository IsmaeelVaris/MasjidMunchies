import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import "../styles/carousel.css";
import { heroCarouselClasses as c } from "../styles/classes";

// Slide data
const slides = [
  { title: "Welcome to MasjidMunchies", subtitle: "Discover halal restaurants, mosques, and events near you." },
  { title: "Halal Restaurant Discovery", subtitle: "Search and filter verified halal restaurants near you." },
  { title: "Mosque Proximity & Events", subtitle: "Find nearby mosques, reviews, and community events." },
];

const HeroCarousel: React.FC = () => {
  return (
    <section className={c.container}>
      <Swiper
        modules={[Navigation, Pagination, EffectCreative]}
        navigation
        pagination={{ clickable: true }}
        effect="creative"
        creativeEffect={{
          prev: { translate: ["-100%", 0, -150], rotate: [0, 30, 0] },
          next: { translate: ["100%", 0, -150], rotate: [0, -30, 0] },
        }}
        loop
        speed={1000}
        className={c.swiper}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={c.slide}>
              <h1 className={c.title}>{slide.title}</h1>
              <p className={c.subtitle}>{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
