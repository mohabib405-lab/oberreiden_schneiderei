"use client";
import React from "react";
import { Clock, XCircle, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion"; // Animasyonlar için kaldırıldı

// --- TEMA VE RENKLER (Hero.tsx ile uyumlu) ---
// Not: Dinamik renk hatalarını önlemek için, özel renkler artık inline style olarak kullanılacaktır.
const THEME = {
  primaryText: '#102B1D',      // Ana Metin Rengi (Koyu)
  lightAccent: '#70E0A7',      // Açık Vurgu (Mint Green)
  ctaAccent: '#00B36B',        // Canlı Yeşil (Checkmark, CTA)
  ctaStrong: '#00804D',        // Koyu Canlı Yeşil
  
  // Tablo Satır Renkleri (Beyazdan kaçınılan renkler)
  rowAccentLight: '#F7FFF8',   // Çok açık, neredeyse beyaz yeşil (Tek Satırlar)
  rowAccentDark: '#E6F5E9',    // Hafif yeşil (Çift Satırlar)
  
  baseBackground: '#FFFFFF',   // Ana arka plan (Tamamen beyaz)
};

// Arbeitszeiten Daten (Eksik olan veri dizisi eklendi)
const OPERATING_HOURS = [
  { day: "Montag", hours: "08:00 – 18:00 Uhr", closed: false },
  { day: "Dienstag", hours: "08:00 – 18:30 Uhr", closed: false },
  { day: "Mittwoch", hours: "08:00 – 18:30 Uhr", closed: false },
  { day: "Donnerstag", hours: "08:00 – 18:30 Uhr", closed: false },
  { day: "Freitag", hours: "08:00 – 18:30 Uhr", closed: false },
  { day: "Samstag", hours: "08:00 – 14:00 Uhr", closed: false },
  { day: "Sonntag", hours: "Geschlossen", closed: true },
];

export default function   HoursOfOperation() {
  
  // Fonksiyon, mevcut günü belirlemek için
  const getCurrentDayIndex = () => {
    // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi.
    const today = new Date().getDay(); 
    // Pazartesi (Index 0)
    if (today === 0) return 6; // Pazar
    return today - 1; 
  };
  
  const todayIndex = getCurrentDayIndex();

  // Framer Motion Varyantları ve bileşeni kaldırıldı.

  // Bugün vurgusu için arka plan rengi (Hex + Opaklık 30%)
  const todayBgColor = `${THEME.lightAccent}33`; 

  return (
    <section 
      id="opening-hours" 
      // Arka planı tamamen beyaza (THEME.baseBackground) ayarladım
      className={`py-20`} 
      style={{ backgroundColor: THEME.baseBackground }}
      aria-label="Öffnungszeiten"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div 
            className="mb-10"
            // Animasyon kaldırıldı
        >
          {/* İkon rengi inline style ile düzeltildi */}
          <Clock className={`w-10 h-10 mx-auto`} style={{ color: THEME.ctaAccent }} />
          {/* Başlık rengi inline style ile düzeltildi */}
          <h2 className={`mt-3 text-3xl sm:text-4xl font-extrabold`} style={{ color: THEME.primaryText }}>
            Wann sind wir für Sie da?
          </h2>
          {/* Alt başlık rengi inline style ile düzeltildi */}
          <p className={`mt-2 text-lg`} style={{ color: `${THEME.primaryText}b3` }}> {/* b3 = /70 opacity */}
            Hier finden Sie unsere aktuellen Öffnungszeiten.
          </p>
        </div>

        {/* Saat Tablosu / Liste */}
        <div 
            // Tablo arka planını da beyaza ayarladım
            className={`bg-[${THEME.baseBackground}] rounded-2xl shadow-xl overflow-hidden border border-gray-100 divide-y divide-gray-200`}
            // Animasyon kaldırıldı
        >
          {OPERATING_HOURS.map((item, index) => {
            const isToday = index === todayIndex;
            // Bantlama efekti için renk seçimi
            const isEven = index % 2 === 0;
            const rowBgColor = isEven ? THEME.rowAccentDark : THEME.rowAccentLight; 
            
            return (
              <div 
                key={item.day} 
                // motion.div yerine normal div kullanıldı
                className={`flex justify-between items-center p-4 sm:p-5 transition-all duration-300 
                            ${isToday ? 'font-bold border-l-4' : ''} 
                            hover:shadow-md hover:scale-[1.01] cursor-pointer`}
                // Hatalı dinamik Tailwind sınıfları yerine inline style kullanıldı
                style={{
                    backgroundColor: isToday ? todayBgColor : rowBgColor,
                    borderColor: isToday ? THEME.ctaAccent : 'transparent', // border-l-4 ile birlikte
                }}
                // Animasyon kaldırıldı
              >
                {/* Gün */}
                <span 
                  className={`text-base font-semibold ${isToday ? '' : ''} flex items-center`}
                  style={{ color: isToday ? THEME.ctaStrong : THEME.primaryText }}
                >
                  {item.day}
                  {isToday && (
                    <span 
                        // motion.span yerine normal span kullanıldı, animasyon kaldırıldı
                        className={`ml-2 px-3 py-1 text-xs font-bold rounded-full text-white`}
                        style={{ backgroundColor: THEME.ctaAccent }}
                    >
                        Heute
                    </span>
                  )}
                </span>

                {/* Saatler */}
                <span 
                  className={`text-base font-medium ${item.closed ? 'text-red-500 italic' : ''}`}
                  style={{ color: item.closed ? '' : THEME.primaryText }}
                >
                  {item.closed ? (
                    <span className="flex items-center">
                      <XCircle className="w-4 h-4 mr-2 text-red-500" />
                      {item.hours}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      {/* İkon rengi inline style ile düzeltildi */}
                      <CheckCircle className={`w-4 h-4 mr-2`} style={{ color: THEME.ctaAccent }} />
                      {item.hours}
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Zusatzinformationen */}
        {/* Metin rengi inline style ile düzeltildi */}
        <p className={`mt-8 text-sm`} style={{ color: `${THEME.primaryText}b3` }}>
            Beachten Sie: Wir bieten einen flexiblen Abhol- und Lieferservice an. Individuelle Termine sind nach Absprache möglich.
        </p>

      </div>
    </section>
  );
}