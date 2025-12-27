import React from 'react';
// next/image yerine standart HTML img etiketi kullanılacaktır.
import { Clock, CheckCircle, Truck, DollarSign, MapPin, ArrowRight } from 'lucide-react';

// --- Theme Colors (Hält die Konsistenz mit dem Pricing-Block) ---
const THEME = {
  primary: '#00b46c', // Deep Forest Green (CTA Background)
  accent: '#6CC4A1',  // Mint Green (Highlight Color)
  darkNeutral: '#344E41', // Dark Green-Gray for text
  lightBackground: '#FFFFFF', // GÜNCELLENDİ: Sadece arka planı beyaz yapmak için
};

// --- Daten für die Liefervorteile ---
const DELIVERY_FEATURES = [
  {
    icon: Clock,
    title: "Pünktliche Terminvereinbarung",
    description: "Wir holen Ihre Textilien direkt bei Ihnen zu Hause oder im Büro ab – präzise und zuverlässig."
  },
  {
    icon: CheckCircle,
    title: "Flexible Zeitfenster",
    description: "Wählen Sie ein für Sie passendes Abhol- und Lieferfenster. Maximale Flexibilität für Ihren Alltag."
  },
  {
    icon: Truck,
    title: "Kontaktlose Zustellung",
    description: "Sichere Rücklieferung an Ihre Wunschadresse. Auf Wunsch ist eine kontaktfreie Übergabe möglich."
  },
];

export default function Lieferung() {
  // Yer tutucu görsel URL'si (Temaya uygun yeşil arka planlı)
  const placeholderImageUrl = `/images/lieferung.jpg`;
  
  // Hover efekti için birincil rengin biraz daha koyusu
  const ctaHoverColor = '#244c25'; 

  return (
    <section 
      id="lieferung" 
      className={`py-20 sm:py-32`} 
      style={{ backgroundColor: THEME.lightBackground }} // Section Background (Artık #FFFFFF)
      aria-label="Abhol- und Lieferservice"
    >
      {/* Tailwind'in dinamik renk sorununu aşmak için özel CSS ekleme */}
      <style dangerouslySetInnerHTML={{__html: `
        .cta-primary-delivery {
          background-color: ${THEME.primary};
          transition: background-color 0.3s ease-in-out;
        }
        .cta-primary-delivery:hover {
          background-color: ${ctaHoverColor}; /* Hover rengi */
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 1. Content Column (Text & Features) */}
          <div className="lg:pr-10">
            
            {/* Headline and Free Delivery Highlight - GÖRÜNMEZLİK GİDERİLDİ */}
            <div className="mb-6">
              {/* Bu span, yeşil arka plan üzerinde beyaz metin kullanmaya devam edecektir (badge olduğu için) */}
              <span 
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-white shadow-md`}
                style={{ backgroundColor: THEME.accent }} // Vurgu rengi inline style ile garanti edildi
              >
                <DollarSign className="w-4 h-4 mr-2" /> GRATIS LIEFERUNG ab CHF 100!
              </span>
              <h2 className={`mt-4 text-4xl sm:text-5xl font-extrabold`} style={{ color: THEME.darkNeutral }}>
                Maximale Bequemlichkeit, minimale Mühe.
              </h2>
              <p className={`mt-4 text-xl`} style={{ color: `${THEME.darkNeutral}cc` }}> {/* ~80% opacity */}
                Erleben Sie Reinigungsqualität, ohne den Weg zum Laden. Wir kümmern uns um die Logistik, Sie gewinnen Zeit.
              </p>
            </div>

            {/* Feature List - Renkler garanti altına alındı */}
            <div className="mt-8 space-y-6">
              {DELIVERY_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <Icon className={`w-6 h-6 flex-shrink-0 mt-1`} style={{ color: THEME.accent }} />
                    <div className="ml-4">
                      <h3 className={`text-lg font-semibold`} style={{ color: THEME.darkNeutral }}>{feature.title}</h3>
                      <p className={`mt-1 text-base`} style={{ color: `${THEME.darkNeutral}b3` }}>{feature.description}</p> {/* ~70% opacity */}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main CTA - Arka planı koyu yeşil, metni beyaz kalmaya devam edecek */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className={`cta-primary-delivery inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition duration-300 shadow-xl text-white transform hover:scale-[1.02]`}
                // Arka plan rengi artık özel CSS sınıfı (cta-primary-delivery) tarafından yönetiliyor.
              >
                Abholung/Lieferung anfragen
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
            </div>

          </div>

          {/* 2. Visual Column (Image Placeholder) */}
          <div className="flex justify-center lg:justify-end">
            {/* Resim kenarlığına gölge eklendi (shadow-2xl) */}
            <div className="w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <img
                src={placeholderImageUrl} 
                alt="Sauberer Lieferservice für Textilreinigung"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
              />
              {/* Overlay - Renk garanti altına alındı */}
              <div 
                className={`absolute inset-0 pointer-events-none rounded-3xl`}
                style={{ backgroundColor: `${THEME.accent}1A` }} // Mint Green + 10% Opaklık
              ></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}