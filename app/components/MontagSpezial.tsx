'use client';
import React from 'react';
import { Percent, Scissors, Shirt, CheckCircle } from 'lucide-react';

/**
 * MontagSpezial - İndirim Bölümü (TSX)
 * Tip tanımlamaları yapılmış, responsive ve modern indirim kampanya bileşeni.
 */

interface DiscountItem {
  label: string;
  icon: React.ReactNode;
  oldPrice: string;
  newPrice: string;
  subLabel?: string;
}

const MontagSpezial: React.FC = () => {
  const backgroundImage: string = "/images/IMG_2372.webp";

  const features: string[] = [
    "30% Rabatt auf alle Dienstleistungen",
    "Professionelle Textilreinigung",
    "Präzise Schneiderei-Arbeiten"
  ];

  const priceExamples: DiscountItem[] = [
    {
      label: "Hemden",
      icon: <Shirt className="w-6 h-6 text-emerald-600 mr-3" />,
      oldPrice: "CHF 7.00",
      newPrice: "CHF 4.90"
    },
    {
      label: "Hosen kürzen",
      icon: <Scissors className="w-6 h-6 text-emerald-600 mr-3" />,
      oldPrice: "CHF 25.00",
      newPrice: "CHF 17.50"
    }
  ];

  return (
    <section 
      id="montag-spezial" 
      className="relative min-h-[70vh] flex items-center py-12 lg:py-20 overflow-hidden font-sans bg-gray-900"
    >
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="İndirim Kampanyası" 
          className="w-full h-full object-cover opacity-50"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => { 
            e.currentTarget.src = "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2000" 
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Taraf: Metin İçeriği */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-white text-center lg:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 md:w-12 bg-emerald-500"></div>
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-emerald-400">
                Wöchentliches Angebot
              </span>
              <div className="h-1 w-8 md:w-12 bg-emerald-500 lg:hidden"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 drop-shadow-lg uppercase">
              Montag <br className="hidden md:block" />
              Spezial
            </h2>

            <div className="space-y-5 w-fit mx-auto lg:mx-0">
              {features.map((item, i) => (
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

          {/* Sağ Taraf: Fiyat Kartı */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 md:p-8 border-t-[10px] border-emerald-500 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Percent className="w-7 h-7 text-gray-800" />
                </div>
                <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">Aktion</h3>
              </div>

              <div className="space-y-6">
                {priceExamples.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-100 rounded-lg">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="text-sm font-bold text-gray-700 uppercase whitespace-pre-line leading-tight">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-gray-400 line-through">{item.oldPrice}</span>
                      <span className="text-xl font-black text-emerald-600">{item.newPrice}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t-2 border-dashed border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col text-left">
                    <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest leading-tight">Jeden Montag</span>
                    <span className="text-gray-800 font-black text-xs">Aktion gültig</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-black text-emerald-600 leading-none">-30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MontagSpezial;