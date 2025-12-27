// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold">Zürich Clean & Care</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Nachhaltige Textilreinigung & bequeme Abholung in Zürich.
            </p>

            <address className="not-italic mt-4 text-sm text-slate-300">
              Bahnhofstrasse 1<br />
              8001 Zürich<br />
              Schweiz
            </address>

            <p className="mt-3 text-sm">
              <a href="tel:+41781234567" className="hover:underline">+41 78 123 45 67</a><br />
              <a href="mailto:info@firma.ch" className="hover:underline">info@firma.ch</a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Schnellzugriff</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#pricing" className="hover:underline">Preise</a></li>
              <li><a href="#lieferung" className="hover:underline">Abholung & Lieferung</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contact" className="hover:underline">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Öffnungszeiten</h4>
            <p className="mt-3 text-sm text-slate-300">
              Mo–Fr: 08:00 — 18:00<br />
              Sa: 09:00 — 13:00<br />
              So: Geschlossen
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700" aria-label="Instagram">
                {/* svg */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h2V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} Zürich Clean & Care — Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
