"use client";

import React, { useState, useEffect } from "react";
import { Scissors, Sparkles, Truck } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface HeroProps {
  brandName: string;
}

const SLIDE_IMAGES = [
  "/images/IMG_2361.webp",
  "/images/IMG_2362.webp",
  "/images/IMG_2367.webp",
  "/images/IMG_2369.webp",
  "/images/IMG_2372.webp",
];

const THEME = {
  ctaAccent: "#00B36B",
  overlayColor: "rgba(0, 0, 0, 0.65)",
};

const mainTitleDE = "Textilreinigung & Schneiderei";
const subtitleDE =
  "Ihre Experten für professionelle Pflege und präzise Änderungen in Oberrieden. Wir garantieren höchste Qualität für Ihre Garderobe.";

const trustBadgesDE = [
  { text: "Abholung & Lieferung", icon: Truck },
  { text: "Ökologische Reinigung", icon: Sparkles },
  { text: "Höchste Qualität", icon: Scissors },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

const Hero: React.FC<HeroProps> = ({ brandName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden text-center bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* BACKGROUND SLIDER - KESİNTİSİZ GEÇİŞ (Cross-fade) */}
      <div className="absolute inset-0 z-0">
        {/* Siyah arkaplanı görmemek için mode="wait" kaldırıldı */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={SLIDE_IMAGES[currentSlide]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={`${brandName} Service`}
          />
        </AnimatePresence>
        
        {/* Overlay her zaman en üstte kalır ve kararmayı önler */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{ backgroundColor: THEME.overlayColor }}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* H1 Başlık */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-white uppercase"
          variants={itemVariants}
        >
          {mainTitleDE}
          <span className="block text-xl md:text-3xl mt-2 font-light tracking-[0.2em] opacity-90">
            in Oberrieden
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-sm md:text-lg text-white/80 max-w-2xl leading-relaxed"
          variants={itemVariants}
        >
          {subtitleDE}
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3 md:gap-6"
          variants={itemVariants}
        >
          {trustBadgesDE.map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20"
            >
              <badge.icon
                className="w-4 h-4 mr-2.5 flex-shrink-0"
                style={{ color: THEME.ctaAccent }}
              />
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white">
                {badge.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Minimal Indicators */}
        <div className="mt-12 flex gap-2.5 z-30">
          {SLIDE_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-500 ${
                currentSlide === i ? "w-10 bg-white" : "w-4 bg-white/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;