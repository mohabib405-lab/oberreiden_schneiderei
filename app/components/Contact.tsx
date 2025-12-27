"use client";
import React, { useState } from "react";
import { Send, Phone, Mail, Clock, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";

// --- Theme Colors (Hält die Konsistenz mit den anderen Blöcken) ---
const THEME = {
  primary: '#2C5F2D', // Deep Forest Green
  accent: '#6CC4A1',  // Mint Green
  darkNeutral: '#344E41', // Dark Green-Gray for text
  lightBackground: '#F0FDF4', // Light Green-White
};

// --- Dummy-Daten für Informationen ---
const CONTACT_INFO = [
  { 
    icon: Phone, 
    title: "Rufen Sie uns an", 
    value: "+41 78 123 45 67", 
    href: "tel:+41781234567" 
  },
  { 
    icon: Mail, 
    title: "Per E-Mail", 
    value: "info@saubere-zukunft.ch", 
    href: "mailto:info@saubere-zukunft.ch" 
  },
  { 
    icon: MapPin, 
    title: "Adresse (Abholservice)", 
    value: "Zürich-City & Umgebung" 
  },
  { 
    icon: Clock, 
    title: "Servicezeiten", 
    value: "Mo - Fr: 8:00 - 18:00 Uhr" 
  },
];


// --- Hauptkomponente ---
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hinweis: Formspree URL muss vor der Nutzung ersetzt werden.
  const ACTION_URL = "https://formspree.io/f/YOUR_FORM_ID"; 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    
    // Simulate API call for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    try {
      // Deaktiviert den echten Fetch-Aufruf im Canvas-Umfeld
      // Um diesen Teil zu testen, muss die Simulation in einer echten Umgebung auskommentiert werden.
      /*
      const res = await fetch(ACTION_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
        e.currentTarget.reset();
      } else {
        setError(true);
        console.error("Form submission failed", res.statusText);
      }
      */
      
      // *** SIMULATION START ***
      const success = Math.random() > 0.1; // 90% Erfolgswahrscheinlichkeit
      if (success) {
         setSent(true);
         e.currentTarget.reset();
      } else {
         setError(true);
      }
      // *** SIMULATION END ***

    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Erfolgs-/Fehlermeldungs-Komponente
  const StatusMessage = () => {
    if (sent) {
      return (
        <div className={`p-6 rounded-xl bg-white shadow-xl border-l-4 border-[${THEME.accent}] flex items-center`}>
          <CheckCircle className={`w-8 h-8 flex-shrink-0 text-[${THEME.accent}]`} />
          <div className="ml-4">
            <h3 className={`text-xl font-bold text-[${THEME.darkNeutral}]`}>Vielen Dank für Ihre Anfrage!</h3>
            <p className={`mt-1 text-[${THEME.darkNeutral}]/80`}>
              Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.
            </p>
          </div>
        </div>
      );
    }
    
    if (error) {
        return (
          <div className="p-6 rounded-xl bg-white shadow-xl border-l-4 border-red-500 flex items-center">
            <XCircle className="w-8 h-8 flex-shrink-0 text-red-500" />
            <div className="ml-4">
              <h3 className={`text-xl font-bold text-[${THEME.darkNeutral}]`}>Hoppla, etwas ist schiefgelaufen.</h3>
              <p className={`mt-1 text-[${THEME.darkNeutral}]/80`}>
                Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon.
              </p>
            </div>
          </div>
        );
    }

    return null;
  };

  return (
    <section 
      id="contact" 
      className={`py-20 sm:py-32 bg-[${THEME.lightBackground}]`} 
      aria-label="Kontaktformular und Geschäftsdaten"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
            <span className={`inline-block text-sm font-semibold uppercase tracking-wider text-[${THEME.accent}]`}>
                Kontaktieren Sie uns
            </span>
            <h2 className={`mt-2 text-4xl sm:text-5xl font-extrabold text-[${THEME.darkNeutral}]`}>
                Wir freuen uns auf Ihre Nachricht.
            </h2>
        </div>

        <StatusMessage />

        {/* Haupt-Grid: Kontaktformular (links) und Infos (rechts) */}
        <div className={`mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16`}>
          
          {/* A) Kontaktformular */}
          <div className="lg:col-span-2 p-8 sm:p-10 bg-white rounded-3xl shadow-2xl">
            <h3 className={`text-2xl font-bold text-[${THEME.darkNeutral}] mb-6`}>
              Schnelle Service-Anfrage
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              aria-label="Kontaktformular"
            >
              <input type="hidden" name="_subject" value="Neue Service-Anfrage von der Webseite" />
              
              {/* Name */}
              <input 
                name="name" 
                required 
                id="name" 
                placeholder="Ihr Name *" 
                className="col-span-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-[${THEME.accent}] focus:ring-1 focus:ring-[${THEME.accent}] transition" 
              />

              {/* E-Mail */}
              <input 
                name="email" 
                type="email" 
                required 
                id="email" 
                placeholder="Ihre E-Mail *" 
                className="col-span-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-[${THEME.accent}] focus:ring-1 focus:ring-[${THEME.accent}] transition" 
              />

              {/* Telefon */}
              <input 
                name="phone" 
                id="phone" 
                placeholder="Telefon (optional)" 
                className="col-span-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-[${THEME.accent}] focus:ring-1 focus:ring-[${THEME.accent}] transition" 
              />
              
              {/* Thema/Betreff */}
              <input 
                name="service" 
                id="service" 
                placeholder="Gewünschte Dienstleistung (z.B. Hemdenservice, Lederreinigung)" 
                className="col-span-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-[${THEME.accent}] focus:ring-1 focus:ring-[${THEME.accent}] transition" 
              />


              {/* Nachricht */}
              <textarea 
                name="message" 
                id="message" 
                required 
                placeholder="Detaillierte Nachricht (z.B. Abholort, Menge der Textilien) *" 
                className="sm:col-span-2 px-4 py-3 rounded-xl border border-gray-300 min-h-[140px] focus:border-[${THEME.accent}] focus:ring-1 focus:ring-[${THEME.accent}] transition" 
              />

              {/* Submit Button */}
              <button
                type="submit"
                className={`sm:col-span-2 flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition duration-300 shadow-lg 
                           bg-[${THEME.primary}] text-white hover:bg-[${THEME.primary}]/90 disabled:opacity-50`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" /> 
                    Senden...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Jetzt Service anfragen
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* B) Kontaktinformationen und Karte */}
          <div className="lg:col-span-1 space-y-8 p-6 lg:p-0">
            {CONTACT_INFO.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start">
                  <Icon className={`w-6 h-6 flex-shrink-0 mt-1 text-[${THEME.accent}]`} />
                  <div className="ml-4">
                    <h4 className={`text-lg font-semibold text-[${THEME.darkNeutral}]`}>{item.title}</h4>
                    {item.href ? (
                        <a 
                            href={item.href} 
                            className={`text-base text-[${THEME.darkNeutral}]/80 hover:underline font-medium`}
                        >
                            {item.value}
                        </a>
                    ) : (
                        <p className={`text-base text-[${THEME.darkNeutral}]/80`}>{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
            
            <div className={`p-4 rounded-xl bg-white border border-gray-200 shadow-md`}>
                <h4 className={`text-lg font-bold text-[${THEME.darkNeutral}] mb-2`}>
                    Hinweis zur Abholung
                </h4>
                <p className={`text-sm text-[${THEME.darkNeutral}]/70`}>
                    Wir sind ein mobiler Lieferservice. Abholungen in Zürich und Umgebung erfolgen nach vorheriger Terminvereinbarung über das Formular.
                </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}