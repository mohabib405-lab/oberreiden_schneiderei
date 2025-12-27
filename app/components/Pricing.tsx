"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf } from 'lucide-react';

// --- Theme Colors (Tailwind classes for consistency) ---
const THEME = {
  // Primary (Ana metin, koyu renkler, Navbar ile uyumlu)
  primaryText: 'text-slate-900',
  darkNeutral: 'text-slate-700',
  // Accent (Vurgu, CTA, Navbar CTA ile uyumlu)
  accent: 'emerald-600',
  accentBg: 'bg-emerald-600',
  // Light Background (Bölüm arka planı)
  lightBackground: 'bg-emerald-50',
};

// --- Data Structure (German) ---
const SERVICE_DATA_DE = {
  'Reinigung': {
    categoryDE: "Textilreinigung & Wäsche",
    descriptionDE: "Professionelle, umweltfreundliche und schonende Reinigung für alle Textilien.",
    items: [
      { name: "Hemde" },
      { name: "Hose" },
      { name: "Anzugjacke / Blazer" },
      { name: "Mantel / Jacke" },
      { name: "Daunenduvet" },
      { name: "Teppichreinigung (pro m²)" }
    ]
  },
  'Schneiderei': {
    categoryDE: "Schneiderei & Reparaturen",
    descriptionDE: "Präzise und schnelle Änderungsarbeiten und Reparaturen durch unsere erfahrenen Schneider.",
    items: [
      { name: "Hosen kürzen" },
      { name: "Hosen enger machen" },
      { name: "Ärmel kürzen" },
      { name: "Reissverschluss ersetzen" },
      { name: "Knopf annähen / reparieren" },
      { name: "Kleine Riss-Reparatur" }
    ]
  }
};

// Set initial state to the first category
type CategoryKey = keyof typeof SERVICE_DATA_DE;

// --- Components ---

const Header = () => (
  <div className="text-center mb-8 sm:mb-12">
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-emerald-800 bg-emerald-100`}> 
      <Leaf className="w-4 h-4 mr-2 text-emerald-600" /> Unsere Services
    </span>

    <h2 className={`mt-4 text-3xl sm:text-4xl font-extrabold ${THEME.primaryText} tracking-tight`}>
      Klare Übersicht — Leistungen als Karten
    </h2>

    <p className={`mt-3 text-sm ${THEME.darkNeutral} max-w-2xl mx-auto`}>
      Titel, kurze Beschreibung und Kategorie — kein Preis, keine zusätzlichen Aktionen.
    </p>
  </div>
);

const CATEGORY_IMAGES: Record<string, string> = {
  Reinigung: '/images/hero_01.png',
  Schneiderei: '/images/hero_02.jpg',
};

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('Reinigung');

  return (
    <section id="pricing" className={`py-12 sm:py-20 ${THEME.lightBackground}`} aria-label="Unsere Dienstleistungen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <div>
          <div className="flex gap-3 justify-center mb-6">
            {(Object.keys(SERVICE_DATA_DE) as Array<keyof typeof SERVICE_DATA_DE>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === key ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 shadow-sm'
                }`}
              >
                {SERVICE_DATA_DE[key].categoryDE}
              </button>
            ))}
          </div>

          {/* Selected category */}
          {(() => {
            const key = selectedCategory;
            const categoryData = SERVICE_DATA_DE[key];
            const imageSrc = CATEGORY_IMAGES[key] || '/images/hero_01.png';
            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${THEME.primaryText}`}>{categoryData.categoryDE}</h3>
                  <p className="text-sm text-slate-600 hidden sm:block">{categoryData.descriptionDE}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryData.items.map((item, idx) => (
                    <article key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                      <div className="relative h-40 w-full">
                        <Image src={imageSrc} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="p-4">
                        <h4 className="font-semibold text-lg text-slate-900">{item.name}</h4>
                        <p className="mt-2 text-sm text-slate-600">{categoryData.descriptionDE}</p>

                        <span className="inline-block mt-3 text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{categoryData.categoryDE}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}