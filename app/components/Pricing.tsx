"use client";

import React, { useState } from 'react';
import { Scissors, Shirt } from 'lucide-react';

const THEME = {
  primaryText: 'text-slate-900',
  darkNeutral: 'text-slate-700',
  accent: 'emerald-600',
  accentBg: 'bg-emerald-600',
  lightBackground: 'bg-emerald-50',
};

const SERVICE_DATA_DE = {
  'Reinigung': {
    categoryDE: "Textilreinigung",
    icon: Shirt,
    items: [
      { 
        name: "Bekleidungsreinigung", 
        description: "Schonende Reinigung für Hemden, Anzüge, Kleider und Alltagskleidung.",
        image: "/images/Bekleidungsreinigung.jpg",
        alt: "Giyim temizliği"
      },
      { 
        name: "Heimtextilien", 
        description: "Hygiene für Vorhänge, Bettwäsche, Decken und Tischtücher.",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
        alt: "Ev tekstili temizliği"
      },
      { 
        name: "Chemische Reinigung", 
        description: "Professionelle Trockenreinigung für empfindliche Textilien und hochwertige Garderobe.",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop",
        alt: "Chemische Reinigung Service"
      }
    ]
  },
  'Schneiderei': {
    categoryDE: "Schneiderei",
    icon: Scissors,
    items: [
      { 
        name: "Anpassungen", 
        description: "Präzises Kürzen, Enger- oder Weiter-Machen für die perfekte Passform.",
        image: "/images/Anpassungen.jpg",
        alt: "Kıyafet tadilatı"
      },
      { 
        name: "Reparaturen", 
        description: "Fachgerechtes Flicken, Reissverschluss-Ersatz und Knopf-Service.",
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop",
        alt: "Kıyafet onarımı"
      },
      { 
        name: "Vorhänge & Gardinen", 
        description: "Individuelle Neuanfertigung, Kürzen und Reparatur Ihrer Vorhänge.",
        image: "/images/Vorhänge & Gardinen.jpg",
        alt: "Perde hizmetleri"
      }
    ]
  }
};

type CategoryKey = keyof typeof SERVICE_DATA_DE;

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('Reinigung');
  const activeData = SERVICE_DATA_DE[selectedCategory];

  return (
    <section id="pricing" className={`py-12 sm:py-20 ${THEME.lightBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Bölümü */}
        <div className="text-center mb-10">
          <h2 className={`text-4xl font-bold ${THEME.primaryText} tracking-tight`}>
            Unsere Services
          </h2>
        </div>

        {/* Kategori Filtresi */}
        <div className="flex justify-center gap-4 mb-10">
          {(Object.keys(SERVICE_DATA_DE) as Array<CategoryKey>).map((key) => {
            const Icon = SERVICE_DATA_DE[key].icon;
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  isActive 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-slate-700 hover:bg-emerald-50 shadow-sm'
                }`}
              >
                <Icon className="w-5 h-5" />
                {SERVICE_DATA_DE[key].categoryDE}
              </button>
            );
          })}
        </div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeData.items.map((item, idx) => (
            <article 
              key={`${selectedCategory}-${idx}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              {/* Görsel Alanı */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}