"use client";

import React from 'react';
import { Calendar, Clock, CheckCircle, Truck } from 'lucide-react';

/**
 * Lieferservice - Responsive "Esnaf" Edition
 * - Tablet ve Mobilde başlıklar ortalı, ancak liste içerikleri sola hizalı.
 * - Schweizer Qualitätsarbeit odağı.
 * - Gelişmiş responsive hiyerarşi.
 */

export default function Lieferung() {
  const backgroundImage = "/images/IMG_2360.webp";

  return (
    <section 
      id="lieferservice" 
      className="relative min-h-[70vh] flex items-center py-12 lg:py-20 overflow-hidden font-sans bg-gray-100"
    >
      {/* Hintergrundbild mit dezentem Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Textilpflege Service" 
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2000" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Textbereich */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 md:w-12 bg-emerald-500"></div>
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-emerald-400">
                Zuverlässiger Service
              </span>
              <div className="h-1 w-8 md:w-12 bg-emerald-500 lg:hidden"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 drop-shadow-lg text-center lg:text-left">
              Abholung & <br className="hidden md:block" />
              Lieferung
            </h2>

            {/* Liste: Container ortalanır, ama içindekiler sola yaslıdır */}
            <div className="space-y-5 w-fit mx-auto lg:mx-0">
              {[
                "Kostenlose Abholung & Zustellung",
                "Schweizer Qualitätsarbeit",
                "Direkt vor Ihre Haustür"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="shrink-0 bg-emerald-500 rounded-full p-1 mt-1 group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg md:text-xl font-semibold drop-shadow-md text-left max-w-[280px] md:max-w-none">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kartenbereich */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 md:p-8 border-t-[10px] border-emerald-500 transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Truck className="w-7 h-7 text-gray-800" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Liefertage</h3>
              </div>

              <div className="space-y-4">
                {/* Montag */}
                <div className="flex items-center p-4 bg-gray-50 border-2 border-gray-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-emerald-600 mr-4" />
                  <span className="text-xl font-black text-gray-900 tracking-wider text-left">MONTAG</span>
                </div>

                {/* Samstag */}
                <div className="flex items-center p-4 bg-gray-50 border-2 border-gray-100 rounded-lg">
                  <Clock className="w-6 h-6 text-emerald-600 mr-4" />
                  <span className="text-xl font-black text-gray-900 tracking-wider text-left">SAMSTAG</span>
                </div>
              </div>

              {/* Fußbereich */}
              <div className="mt-10 pt-6 border-t-2 border-dashed border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-left">
                    <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Liefergebühr</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-black text-emerald-600 leading-none">Gratis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}