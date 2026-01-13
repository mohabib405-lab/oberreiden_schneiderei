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
  waMessage:
    "Hallo Herr Daoud 👋, ich möchte eine Abholung buchen. Adresse: [Meine Adresse] Produkte: [z.B. 2 Hemden, 1 Hose] Gewünschter Termin: [Datum/Zeit] Name: [Ihr Name]",
};

// WhatsApp Icon
const WhatsAppIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" />
  </svg>
);

export default function Contact() {
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const success = Math.random() > 0.05;

    if (success) {
      setSent(true);
      e.currentTarget.reset(); // ✅ Type-safe
    } else {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">
            Kontakt & Terminvereinbarung
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#102B1D]">
            Lassen Sie uns Ihre Textilien pflegen
          </h2>
          <p className="mt-4 text-gray-600 font-medium">
            Schreiben Sie uns eine Nachricht oder nutzen Sie unseren
            WhatsApp-Abholservice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* FORM */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-emerald-100">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Nachricht gesendet!
                </h3>
                <p className="mt-2 text-gray-600">
                  Vielen Dank. Wir melden uns umgehend.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-emerald-600 font-bold underline"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#102B1D] mb-8">
                  Service-Anfrage
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <input
                    required
                    name="name"
                    placeholder="Ihr Name *"
                    className="input"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Ihre E-Mail *"
                    className="input"
                  />
                  <input
                    name="phone"
                    placeholder="Telefonnummer"
                    className="input"
                  />
                  <input
                    name="service"
                    placeholder="Gewünschter Service"
                    className="input"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="Ihre Nachricht oder Abholadresse *"
                    className="md:col-span-2 input min-h-[150px]"
                  />

                  {error && (
                    <p className="md:col-span-2 text-red-500 flex items-center gap-2 font-bold">
                      <XCircle className="w-4 h-4" />
                      Fehler beim Senden. Bitte erneut versuchen.
                    </p>
                  )}

                  <button
                    disabled={loading}
                    className={`md:col-span-2 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition ${
                      loading
                        ? "bg-gray-400"
                        : "bg-[#2C5F2D] hover:opacity-90"
                    }`}
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    Anfrage absenden
                  </button>
                </form>
              </>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h4 className="text-xl font-bold mb-6">Kontaktdaten</h4>

              <a
                href={`tel:${BUSINESS_DATA.phone}`}
                className="flex items-center gap-4"
              >
                <Phone className="text-emerald-600" />
                {BUSINESS_DATA.phone}
              </a>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(
                BUSINESS_DATA.waMessage
              )}`}
              target="_blank"
              className="flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg text-white bg-[#25D366]"
            >
              <WhatsAppIcon />
              WhatsApp Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
