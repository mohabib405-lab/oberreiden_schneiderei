import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Clock
} from "lucide-react";

/**
 * Aktualisierter Footer für Daoud Textil Reinigung
 * Enthält die korrekten Arbeitszeiten aus der HoursOfOperation Komponente.
 */
export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  const business = {
    name: "Daoud Textil Reinigung",
    address: "Alte Landstrasse 17, 8942 Oberrieden, Switzerland",
    phone: "+41 76 266 98 77",
    whatsapp: "41762669877",
    email: "info@daoud-textilreinigung.com",
    blurb: "Daoud Textil Reinigung — Gegründet von Mohammad Daoud. Über 40 Jahre Erfahrung in der Textilbranche"
  };

  // Korrekte Arbeitszeiten aus der HoursOfOperation Komponente
  const operatingHours = [
    { day: "Montag", hours: "09:00 – 18:00", isClosed: false },
    { day: "Dienstag – Freitag", hours: "08:00 – 18:30", isClosed: false },
    { day: "Samstag", hours: "08:00 – 14:00", isClosed: false },
    { day: "Sonntag", hours: "Geschlossen", isClosed: true },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 mt-12 border-t border-emerald-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Spalte 1: Info & Kontakt */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl tracking-tight">
              {business.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {business.blurb}
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <address className="not-italic text-slate-300">
                  {business.address}
                </address>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-emerald-400 transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-emerald-400 transition-colors">
                  {business.email}
                </a>
              </div>
            </div>
          </div>

          {/* Spalte 2: Navigation */}
          <div className="md:pl-12">
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-y-3 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#lieferservice" className="hover:text-emerald-400 transition-colors">Abholung & Lieferung</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Spalte 3: Öffnungszeiten & Social */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500" /> Öffnungszeiten
            </h4>
            <div className="space-y-3 text-sm">
              {operatingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{item.day}</span>
                  <span className={item.isClosed ? "text-rose-400 font-medium" : "text-emerald-400 font-medium"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a 
                href={`https://wa.me/${business.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-emerald-600/10 text-emerald-500 px-4 py-2 rounded-full border border-emerald-600/20 hover:bg-emerald-600 hover:text-white transition-all text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <div className="flex gap-2">
                <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} {business.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-emerald-400 transition-colors uppercase tracking-widest">Impressum</a>
            <a href="/datenschutzerklaerung" className="hover:text-emerald-400 transition-colors uppercase tracking-widest">Datenschutz</a>
            <a href="/agb" className="hover:text-emerald-400 transition-colors uppercase tracking-widest">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}