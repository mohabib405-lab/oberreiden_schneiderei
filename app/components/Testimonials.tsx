"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  MessageSquareQuote,
  ChevronRight,
} from "lucide-react";

// --- Theme Colors ---
const THEME = {
  primary: "#2C5F2D",
  accent: "#6CC4A1",
  darkNeutral: "#344E41",
  lightBackground: "#F0FDF4",
};

type Testimonial = {
  id: string;
  name: string;
  text: string;
  role?: string;
  rating: number;
  photoUrl: string;
};

// --- Testimonials Data ---
const TESTS: Testimonial[] = [
  {
    id: "t1",
    name: "Anna K.",
    role: "Privatkundin",
    rating: 5,
    text: "Absolut schneller und zuverlässiger Service! Mein Business-Hemd war am nächsten Tag perfekt gebügelt und wie neu. Sehr empfehlenswert.",
    photoUrl: `https://placehold.co/80x80/${THEME.accent.substring(
      1
    )}/ffffff?text=AK`,
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
    photoUrl: `https://placehold.co/80x80/${THEME.primary.substring(
      1
    )}/ffffff?text=LB`,
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

// --- Star Rating Component (FIXED TYPE) ---
interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="flex items-center text-yellow-500">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 fill-current ${
          i < rating ? "opacity-100" : "opacity-30"
        }`}
      />
    ))}
  </div>
);

// --- MAIN COMPONENT ---
export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const container = scrollRef.current;
    if (!container) return;

    const SCROLL_INTERVAL = 4500;
    const GAP_SIZE = 32;

    const intervalId = setInterval(() => {
      const firstCard = container.querySelector("blockquote");
      if (!firstCard) return;

      const cardTotalWidth = firstCard.offsetWidth + GAP_SIZE;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: cardTotalWidth,
          behavior: "smooth",
        });
      }
    }, SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-white"
      aria-label="Kundenstimmen und Bewertungen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: THEME.darkNeutral }}
          >
            Ihre Textilien sind bei uns in besten Händen.
          </h2>
          <p
            className="mt-3 text-xl"
            style={{ color: THEME.darkNeutral, opacity: 0.7 }}
          >
            Lesen Sie, was unsere Kunden in Zürich über unseren zuverlässigen
            Service erzählen.
          </p>

          <div className="mt-6">
            <a
              href="https://www.google.com/search?q=daoud+textil+reinigung+zürich+bewertungen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full font-bold text-sm transition duration-300 bg-white border-2 shadow-md hover:shadow-lg"
              style={{
                borderColor: THEME.accent,
                color: THEME.darkNeutral,
              }}
            >
              Alle echten Google Bewertungen anzeigen
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
          className="flex space-x-8 overflow-x-scroll snap-x snap-mandatory pb-4 lg:pb-6 scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {TESTS.map((t) => (
            <blockquote
              key={t.id}
              className="flex-shrink-0 w-80 sm:w-96 p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl snap-center border border-gray-100"
            >
              <p
                className="text-base relative"
                style={{ color: THEME.darkNeutral }}
              >
                <MessageSquareQuote
                  className="w-5 h-5 absolute -top-1 -left-1 opacity-70"
                  style={{ color: THEME.accent }}
                />
                {t.text}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center">
                <img
                  src={t.photoUrl}
                  alt={`Foto von ${t.name}`}
                  className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-white shadow-sm"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/80x80/${THEME.darkNeutral.substring(
                      1
                    )}/ffffff?text=${t.name
                      .substring(0, 2)
                      .toUpperCase()}`;
                  }}
                />
                <div>
                  <span
                    className="font-bold text-sm block"
                    style={{ color: THEME.darkNeutral }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-xs block"
                    style={{ color: THEME.darkNeutral, opacity: 0.7 }}
                  >
                    {t.role}
                  </span>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div
          className="mt-10 text-center text-sm"
          style={{ color: THEME.darkNeutral, opacity: 0.7 }}
        >
          <p>Wischen oder scrollen Sie, um alle Kundenstimmen zu lesen.</p>
        </div>
      </div>
    </section>
  );
}
