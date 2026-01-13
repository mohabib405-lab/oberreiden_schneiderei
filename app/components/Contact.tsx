"use client";
import React, { useState } from "react";
import { Send, Phone, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";

const BUSINESS_DATA = {
  name: "Ibrahim Daoud",
  company: "Daoud Textil Reinigung",
  address: "Alte Landstrasse 17, 8942 Oberrieden, Schweiz",
  phone: "+41 76 266 98 77",
  whatsappNumber: "41762669877",
  email: "info@daoud-textilreinigung.com",
  waMessage: "Hallo Herr Daoud 👋, ich möchte eine Abholung buchen. Adresse: [Meine Adresse] Produkte: [z.B. 2 Hemden, 1 Hose] Gewünschter Termin: [Datum/Zeit] Name: [Ihr Name]",
};

// Gerçek WhatsApp Logosu (SVG)
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048c0 2.12.554 4.189 1.605 6.04L0 24l6.117-1.605a11.845 11.845 0 005.933 1.598h.005c6.637 0 12.046-5.414 12.049-12.05a11.823 11.823 0 00-3.417-8.359z"/>
  </svg>
);

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    const success = Math.random() > 0.05; 

    if (success) {
      setSent(true);
      e.target.reset();
    } else {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">
            Kontakt & Terminvereinbarung
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#102B1D]">
            Lassen Sie uns Ihre Textilien pflegen
          </h2>
          <p className="mt-4 text-gray-600 font-medium">
            Schreiben Sie uns eine Nachricht oder nutzen Sie unseren bequemen WhatsApp-Abholservice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* A) İletişim Formu */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-emerald-100">
            {sent ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Nachricht gesendet!</h3>
                <p className="mt-2 text-gray-600">Vielen Dank. Wir melden uns umgehend bei Ihnen zurück.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-emerald-600 font-bold underline">Neue Nachricht senden</button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#102B1D] mb-8">Service-Anfrage</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input name="name" required placeholder="Ihr Name *" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  <input name="email" type="email" required placeholder="Ihre E-Mail *" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  <input name="phone" placeholder="Telefonnummer" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  <input name="service" placeholder="Gewünschter Service (z.B. Anzug, Hemden)" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  <textarea name="message" required placeholder="Ihre Nachricht oder Abholadresse... *" className="md:col-span-2 w-full px-5 py-4 rounded-xl border border-gray-200 min-h-[150px] focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  
                  {error && <p className="md:col-span-2 text-red-500 text-sm font-bold flex items-center gap-2"><XCircle className="w-4 h-4"/> Fehler beim Senden. Bitte erneut versuchen.</p>}
                  
                  <button 
                    disabled={loading}
                    className={`md:col-span-2 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition shadow-lg ${loading ? 'bg-gray-400' : 'bg-[#2C5F2D] hover:opacity-90'}`}
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <Send className="w-5 h-5" />}
                    Anfrage absenden
                  </button>
                </form>
              </>
            )}
          </div>

          {/* B) Bilgi Kartları */}
          <div className="space-y-6">
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-emerald-500/10">
              <h4 className="text-xl font-bold text-[#102B1D] mb-6">Kontaktdaten</h4>
              <div className="space-y-6">
                
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Alte+Landstrasse+17+Oberrieden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-2 hover:bg-emerald-50 rounded-2xl transition"
                >
                  <MapPin className="text-emerald-600 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Standort</p>
                    <p className="text-gray-800 font-semibold leading-tight">{BUSINESS_DATA.address}</p>
                  </div>
                </a>

                <a href={`tel:${BUSINESS_DATA.phone}`} className="flex items-start gap-4 p-2 hover:bg-emerald-50 rounded-2xl transition">
                  <Phone className="text-emerald-600 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest"> {BUSINESS_DATA.name}</p>
                    <p className="text-gray-800 font-semibold leading-tight">{BUSINESS_DATA.phone}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Gerçek WhatsApp Butonu */}
            <div className="space-y-4 text-center">
                <p className="text-sm text-gray-500 font-medium">Buchen Sie Ihre Abholung direkt:</p>
                <a 
                  href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(BUSINESS_DATA.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-lg text-white shadow-xl transition-all hover:scale-[1.03] hover:shadow-emerald-200/50 bg-[#25D366]"
                >
                  <WhatsAppIcon />
                  WhatsApp Service
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}