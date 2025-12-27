"use client";
// next/navigation importu derleme hatasına neden olduğu için kaldırıldı.
import { useState, useEffect, useRef } from "react";
import React from "react"; // React'ı import etmeyi unutmayın

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  /**
   * Yumuşak Kaydırma İşleyicisi.
   * Logo ve "Start" bağlantıları için kullanılır.
   */
  const handleScrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Varsayılan atlama davranışını engelle
    // Hero bölümünün ID'si 'home' olarak ayarlandı.
    const heroSection = document.getElementById('home'); 
    if (heroSection) {
      // Yumuşak kaydırma
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Mobil menüyü kapat
    setOpen(false);
  };

  /**
   * Dışarı tıklama veya Escape tuşu ile menüyü kapatma işleyicisi.
   */
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current) return;
      if (open && !menuRef.current.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Navigasyon Bağlantıları (Redundant "Kontakt" linki kaldırıldı)
  const links = [
    { href: "#home", label: "Start" }, // Hero section ID
    { href: "#pricing", label: "Preise" },
    { href: "#lieferung", label: "Abholung" },
    { href: "#testimonials", label: "Kunden" },
    { href: "#faq", label: "FAQ" },
    // { href: "#contact", label: "Kontakt" }, // "Jetzt anfragen" butonu ile aynı işlevi gördüğü için kaldırıldı
  ];

  // --- UI/UX İyileştirmesi için Renk Şeması (Yeşil Temaya Geri Dönüş) ---
  // Primary (Koyu): slate-800
  // Accent (Vurgu): emerald-500 (Önceki temadan)
  const primaryColor = 'text-slate-800';
  const accentColor = 'bg-emerald-500 hover:bg-emerald-600 text-white'; 
  const accentTextColor = 'text-emerald-500';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Navbar yüksekliği artırıldı */}
          {/* logo ve Marka Adı (Sadece Metin - Estetik Güncellendi) */}
          <div className="flex items-center gap-3">
            {/* LOGO LINK'E smooth scroll eklendi */}
            <a 
              href="#home" 
              onClick={handleScrollToHero} 
              className="flex items-center gap-1 group"
            >
              <span className="sr-only">Daoud Reinigung & Schneiderei</span>
              
              {/* Güncellenmiş Metin Logo Stili: Daha Zarif */}
              <div className="flex flex-col leading-none">
                {/* Ana Marka Adı (Daha Kalın, Büyütülmüş) */}
                <span className="font-extrabold text-3xl text-slate-900 tracking-tighter">DAOUD</span>
                {/* Alt Metin (İnce, küçük, ayrıştırılmış ve yeşil vurgulu) */}
                <span className={`text-[11px] uppercase tracking-[0.2em] font-medium text-slate-600`}>
                  <span className={accentTextColor}>REINIGUNG</span> 
                  <span className="mx-1 font-extralight text-slate-400">|</span> 
                  SCHNEIDEREI
                </span>
              </div>
            </a>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                // Sadece 'Start' linkine smooth scroll uygulandı
                onClick={l.href === "#home" ? handleScrollToHero : undefined}
                className={`text-slate-600 hover:${primaryColor} text-sm font-medium transition duration-150`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              // CTA butonu stili zümrüt yeşili ile güçlendirildi
              className={`ml-4 inline-flex items-center px-6 py-3 rounded-full ${accentColor} text-sm font-bold shadow-lg transition duration-300 transform hover:scale-[1.03]`}
            >
              Jetzt anfragen
            </a>
          </nav>

          {/* mobile hamburger */}
          <div className="md:hidden flex items-center">
            {/* Telefon butonu daha sade hale getirildi */}
            <a href="tel:+41781234567" className="mr-3 inline-flex items-center p-2 rounded-full bg-slate-100 text-slate-800 text-sm hover:bg-slate-200">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.77 19.77 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.04.36 2.05.72 3.01a2 2 0 0 1-.45 2.11L8.91 11.09a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45c.96.36 1.97.6 3.01.72A2 2 0 0 1 22 16.92z"/></svg>
            </a>

            <button
              ref={btnRef}
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`p-2 rounded-full inline-flex items-center justify-center text-slate-700 hover:bg-slate-100 ${open ? 'ring-2 ring-slate-200' : ''}`}
            >
              <span className="sr-only">Menü öffnen</span>
              {/* hamburger / close icon */}
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden stroke="currentColor">
                  <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden stroke="currentColor">
                  <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu panel (daha geniş max-h ayarlandı) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white border-t border-slate-100 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pt-4 pb-6 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              // 'Start' linki için smooth scroll, diğerleri için sadece menüyü kapatma
              onClick={l.href === "#home" ? handleScrollToHero : () => setOpen(false)}
              className="block px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            // Mobil CTA butonu stili zümrüt yeşili ile güncellendi
            className={`block mt-4 px-4 py-3 rounded-full ${accentColor} text-center font-bold shadow-md transition duration-200`}
          >
            Jetzt anfragen
          </a>

          <div className="pt-4 border-t mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">Daoud</p>
              <a href="tel:+41781234567" className="text-sm text-slate-600 hover:text-slate-900 transition">+41 78 123 45 67</a>
            </div>
            <div className="flex items-center gap-2">
              {/* sosyal medya ikonları zümrüt yeşili renginde */}
              <a href="#" aria-label="Instagram" className={`p-2 rounded-full hover:bg-slate-100 ${accentTextColor}`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className={`p-2 rounded-full hover:bg-slate-100 ${accentTextColor}`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h2z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}