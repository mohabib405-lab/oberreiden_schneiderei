"use client";
import React, { useState, useEffect, useRef } from "react";
import { Star, MessageSquareQuote, ChevronRight, User } from "lucide-react";

// --- Theme Colors (Hält die Konsistenz mit den anderen Blöcken) ---
const THEME = {
  primary: '#2C5F2D', // Deep Forest Green
  accent: '#6CC4A1',  // Mint Green
  darkNeutral: '#344E41', // Dark Green-Gray for text
  lightBackground: '#F0FDF4', // Light Green-White
};

type Testimonial = {
  id: string;
  name: string;
  text: string;
  role?: string;
  rating: number; 
  photoUrl: string; // Avatar URL
};

// Manuell kuratierte und visuell ansprechende Bewertungen (mit Rating)
// Tırnak işaretleri kaldırıldı (")
const TESTS: Testimonial[] = [
  {
    id: "t1",
    name: "Anna K.",
    role: "Privatkundin",
    rating: 5,
    text: "Absolut schneller und zuverlässiger Service! Mein Business-Hemd war am nächsten Tag perfekt gebügelt und wie neu. Sehr empfehlenswert.",
    photoUrl: `https://placehold.co/80x80/${THEME.accent.substring(1)}/ffffff?text=AK`,
  },
  {
    id: "t2",
    name: "Michael S.",
    role: "Geschäftskunde",
    rating: 5,
    text: "Die regelmässige Abholung direkt vom Büro spart uns viel Zeit im Arbeitsalltag. Äusserst professionelle und diskrete Abwicklung.",
    photoUrl: `https://placehold.co/80x80/6CC4A1/ffffff?text=MS`,
  },
  {
    id: "t3",
    name: "Laura B.",
    role: "Stammkundin",
    rating: 5,
    text: "Ich schätze die umweltfreundlichen Reinigungsmittel und die konstant hohe Qualität der Schneiderarbeiten. Hier stimmt das Gesamtpaket.",
    photoUrl: `https://placehold.co/80x80/${THEME.primary.substring(1)}/ffffff?text=LB`,
  },
  {
    id: "t4",
    name: "David M.",
    role: "Neukunde",
    rating: 5,
    text: "Erstmals den Lieferservice genutzt und total begeistert. Der Preis ist fair und der Komfort unschlagbar.",
    photoUrl: `https://placehold.co/80x80/2C5F2D/ffffff?text=DM`,
  },
  {
    id: "t5",
    name: "Sandra H.",
    role: "Pendlerin",
    rating: 5,
    text: "Dank der Express-Option habe ich meine Kleidung immer rechtzeitig zurück. Der beste Service in Zürich!",
    photoUrl: `https://placehold.co/80x80/6CC4A1/ffffff?text=SH`,
  },
];

// Hilfskomponente für die Sternbewertung
const StarRating = ({ rating }) => (
  <div className="flex items-center text-yellow-500">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 fill-current ${i < rating ? 'opacity-100' : 'opacity-30'}`} 
      />
    ))}
  </div>
);

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-Scroll Logik
  useEffect(() => {
    if (isPaused) return;

    const container = scrollRef.current;
    if (!container) return;

    // Setzt das Intervall für das automatische Weiterscrollen
    const SCROLL_INTERVAL = 4500; // 4.5 Sekunden pro Karte
    const GAP_SIZE = 32; // space-x-8 = 32px

    const intervalId = setInterval(() => {
      const firstCard = container.querySelector('blockquote');
      if (!firstCard) return;

      const cardTotalWidth = firstCard.offsetWidth + GAP_SIZE;
      
      // Kaydırma sonuna ulaşıldı mı?
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        // Başa dön (yumuşak geçişle)
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Bir kart genişliği kadar kaydır
        container.scrollBy({ left: cardTotalWidth, behavior: 'smooth' });
      }

    }, SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Handlers für Pause/Resume beim Hover (auch für Touch-Geräte relevant)
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section 
      id="testimonials" 
      className={`py-20 sm:py-28 bg-white`} // Daha kompakt hale getirildi
      aria-label="Kundenstimmen und Bewertungen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header und CTA - Metinler güncellendi */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className={`text-4xl sm:text-5xl font-extrabold text-[${THEME.darkNeutral}]`}>
            Ihre Textilien sind bei uns in besten Händen.
          </h2>
          <p className={`mt-3 text-xl text-[${THEME.darkNeutral}]/70`}>
            Lesen Sie, was unsere Kunden in Zürich über unseren zuverlässigen Service erzählen.
          </p>
          
          {/* Prominenter CTA zu Google */}
          <div className="mt-6">
            <a 
              href="https://www.google.com/search?q=daoud+textil+reinigung+zürich+bewertungen" 
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-full font-bold text-sm transition duration-300 
                          bg-white border-2 border-[${THEME.accent}] text-[${THEME.darkNeutral}] hover:bg-[${THEME.lightBackground}] shadow-md hover:shadow-lg`}
            >
              Alle echten Google Bewertungen anzeigen
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Testimonials Carousel (Horizontal Scroll & Auto-Play) */}
        <div 
          ref={scrollRef}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause} // Dokunmatik cihazlar için
          onTouchEnd={handleResume}   // Dokunmatik cihazlar için
          // Responsive horizontal scrolling container
          className="flex space-x-8 overflow-x-scroll snap-x snap-mandatory pb-4 lg:pb-6 scrollbar-hide"
          style={{ 
            // Versteckt die Scrollbar auf Webkit-Browsern (Mac/Chrome)
            WebkitOverflowScrolling: 'touch', 
            scrollbarWidth: 'none', // Firefox
          }}
        >
          {TESTS.map((t) => (
            <blockquote 
              key={t.id} 
              // Card Styling and Responsiveness
              className={`flex-shrink-0 w-80 sm:w-96 p-5 bg-white rounded-xl shadow-lg transition duration-300 transform hover:shadow-2xl snap-center border border-gray-100`} // Border yerine shadow/border kombosu
            >
              
              {/* Zitat Text (Daha az boşluk) */}
              <p className={`text-base text-[${THEME.darkNeutral}] relative`}>
                <MessageSquareQuote className={`w-5 h-5 absolute -top-1 -left-1 text-[${THEME.accent}] opacity-70`} />
                {t.text}
              </p>
              
              {/* Footer mit Avatar, Name und Rolle (Yorumun altında kompakt bir şekilde) */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center">
                <img
                    src={t.photoUrl}
                    alt={`Foto von ${t.name}`}
                    className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/80x80/${THEME.darkNeutral.substring(1)}/ffffff?text=${t.name.substring(0, 2).toUpperCase()}`}}
                />
                <div>
                    <span className={`font-bold text-sm text-[${THEME.darkNeutral}] block`}>{t.name}</span>
                    <span className="text-xs text-[${THEME.darkNeutral}]/70 block">{t.role}</span>
                    <StarRating rating={t.rating} /> {/* Rating buraya taşındı */}
                </div>
              </div>

            </blockquote>
          ))}
        </div>
        
        {/* Hinweis zur Scrollbar-Ausblendung */}
        {/* React uyarılarına neden olan 'jsx' ve 'global' kaldırıldı. */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {/* Zusätzlicher Platzhalter für die Kompaktheit */}
        <div className="mt-10 text-center text-[${THEME.darkNeutral}]/70 text-sm">
           <p>Wischen oder scrollen Sie, um alle Kundenstimmen zu lesen.</p>
        </div>
      </div>
    </section>
  );
}