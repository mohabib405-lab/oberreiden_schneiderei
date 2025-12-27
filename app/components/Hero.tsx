"use client";
import React from "react";
// Lucide React ikonları
import { Phone, MapPin, CheckCircle } from "lucide-react"; 
import { motion } from "framer-motion"; // Animasyonlar için

// --- TEMA VE RENKLER ---
interface ThemeColors {
  primaryText: string;
  lightAccent: string;
  ctaAccent: string;
  ctaStrong: string; 
  gradientEnd: string;
  gradientStart: string;
  gradientHighlight: string; 
}

const THEME: ThemeColors = {
  primaryText: '#102B1D', // Daha Koyu Yeşil/Siyah
  lightAccent: '#70E0A7', // Soft Mint Green
  ctaAccent: '#00B36B',   // Yeni: Daha canlı, baskın yeşil (Primary CTA)
  ctaStrong: '#00804D',   // Yeni: CTA hover rengi (Daha koyu canlı yeşil)
  gradientEnd: '#E6F5E9', // Çok Açık Pastel Yeşil (Gradient Sonu)
  gradientStart: '#FFFFFF', // Beyaz (Gradient Başlangıcı)
  gradientHighlight: '#00B36B', // Metin Gradient Vurgusu (Canlı Yeşil)
};

// --- İŞ VERİLERİ VE CTA METİNLERİ (Samimi ve Abartısız) ---

// Yeni Başlık: Daha doğal ve hizmet kolaylığına odaklı
const mainTitleDE: string = "Ihre Wäsche. Einfach und schnell.";

// Yeni Alt Başlık: Hizmetin temel faydasını vurguluyor
const subtitleDE: string = "Wir kümmern uns um alles – von der Abholung bis zur sauberen Rückgabe. Qualität, die man spürt."; 

// Trust Badges: Ücretsiz kargo kısıtlamasını belirten not eklendi
const trustBadgesDE: string[] = [
    "Kostenlose Abholung & Lieferung (ab 25€)", // Fiyat şartı eklendi
    "Ökologisch gereinigt", 
    "100% Garantie"
];

// CTA Metinleri kısaltıldı ve daha basit hale getirildi.
const ctaWhatsAppDE: string = "Abholung vereinbaren"; 
const ctaRouteDE: string = "Filialen entdecken";

const waNumber: string = "41781234567";
const waMessage = encodeURIComponent("Hallo, ich möchte eine Abholung vereinbaren.");
const routeCoords = { lat: 47.3769, lng: 8.5417 }; 
const routeLink: string = `https://www.google.com/maps/dir/?api=1&destination=${routeCoords.lat},${routeCoords.lng}`;

// Framer Motion Varyantları (Hız ve akıcılık korundu)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween", 
      ease: "easeOut",
      duration: 0.4, 
    },
  },
};

// ** BURAYA KENDİ GÖRSEL URL'NİZİ EKLEYİN **
// Varsayılan olarak, seçtiğiniz prompt'a uygun bir yer tutucu resim URL'si kullanılmıştır.
const HERO_IMAGE_URL = "/images/hero_01.png";

const Hero: React.FC = () => {
  const whatsappLink: string = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <motion.section
      id="home"
      className="relative pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden text-center lg:text-left rounded-b-3xl shadow-lg"
      style={{
        // Arka Plan: Beyazdan Açık Yeşil'e Yumuşak Dikey Gradient
        background: `linear-gradient(180deg, ${THEME.gradientStart} 0%, ${THEME.gradientEnd} 100%)`,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      
      {/* Estetik Gradientli Kelime Stili ve Buton CSS'i (Tailwind sorununu aşmak için) */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Başlıkta vurgulanacak kelimeye gradient uygulayan özel stil */
        .gradient-text-hero {
          display: inline;
          /* Daha yoğun ve baskın renkler kullanıldı */
          background: linear-gradient(90deg, ${THEME.ctaStrong} 30%, ${THEME.gradientHighlight} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900; /* Vurgu için ultra kalın */
          letter-spacing: -1px; /* Daha kompakt görünüm */
        }

        /* UYARI: Buton renkleri için özel sınıf tanımlanmıştır. */
        .btn-primary-custom {
          background-color: ${THEME.ctaAccent};
          transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .btn-primary-custom:hover {
          background-color: ${THEME.ctaStrong} !important;
        }
        .btn-primary-custom:focus {
          box-shadow: 0 0 0 4px rgba(0, 179, 107, 0.5); /* focus:ring-4 yerine statik ring */
        }
      `}} />

      {/* Yatay boşluklar korundu (içe çekilmiş görünüm için) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* İçerik Sütunu (Sol) */}
          <div className="lg:col-span-7">
            <motion.h1 
              // Tipografi: Daha büyük ve baskın
              className={`text-6xl sm:text-7xl font-extrabold tracking-tight text-[${THEME.primaryText}]`}
              variants={itemVariants}
            >
              {/* Kilit Kelimeye Gradient Uygulama */}
              {mainTitleDE.split(' ').slice(0, 2).join(' ')} 
              <span className="gradient-text-hero">
                 {' ' + mainTitleDE.split(' ').slice(2).join(' ')}
              </span>
            </motion.h1>
            
            <motion.p 
              className={`mt-4 text-xl sm:text-2xl font-normal text-[${THEME.primaryText}]/80`}
              variants={itemVariants}
            >
              {subtitleDE}
            </motion.p>
            
            {/* CTA Grubu: Daha Kompakt Butonlar */}
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
              variants={itemVariants}
            >
              {/* Birincil CTA */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`btn-primary-custom flex items-center justify-center px-6 py-3 rounded-full font-bold text-base shadow-lg transition duration-300 ease-in-out 
                            text-white transform hover:scale-[1.05]`} 
              >
                <Phone className="w-4 h-4 mr-2" />
                {ctaWhatsAppDE}
              </a>
              
              {/* İkincil CTA */}
              <a 
                href={routeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center px-6 py-3 rounded-full font-medium text-base transition duration-300 
                            bg-transparent border-2 border-[${THEME.lightAccent}] text-[${THEME.primaryText}] hover:bg-[${THEME.lightAccent}]/30`}
              >
                <MapPin className="w-4 h-4 mr-2" /> 
                {ctaRouteDE}
              </a>
            </motion.div>
            
            {/* Güven Rozetleri (Şartlı Ücretsiz Teslimat dahil) */}
            <motion.div 
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-[${THEME.primaryText}]/70"
              variants={itemVariants}
            >
              {trustBadgesDE.map((badge, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className={`w-4 h-4 mr-2 text-[${THEME.ctaAccent}]`} /> 
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Resim Sütunu (Sağ) - SVG KART KALDIRILDI, BASİT RESİM EKLENDİ */}
          <motion.div 
            className="hidden lg:col-span-5 lg:flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            {/* Tek bir görsel için div */}
            <div className="relative w-full max-w-lg aspect-[5/4] rounded-3xl overflow-hidden transition duration-500 hover:shadow-3xl">
                {/* Canvas'ta seçtiğiniz prompt'a uygun bir görseli buraya yükleyip URL'sini kullanın.
                  Görselin tam genişliği kaplaması ve uyumlu olması için object-cover kullanıldı.
                */}
                <img 
                    src={HERO_IMAGE_URL} 
                    alt="Sauber und genäht: Textilreinigung und Schneiderei Daoud" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    // Resim yüklenemezse veya bulunamazsa yedek metin
                    onError={(e) => { 
                        const target = e.target as HTMLImageElement; 
                        target.onerror = null; 
                        target.src="https://placehold.co/800x600/94A3B8/FFFFFF?text=Bild+Nicht+Verfügbar"; 
                    }}
                />
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;