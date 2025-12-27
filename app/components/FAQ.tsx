// src/components/FAQ.tsx
import React from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Wie schnell ist der Express-Service?",
    a: "Unser Express-Service liefert in der Regel innerhalb von 24 Stunden — abhängig vom Auftragsvolumen.",
  },
  {
    q: "Bietet ihr Abholung und Lieferung an?",
    a: "Ja, wir holen Ihre Kleidung ab und liefern sie an Ihre Wunschadresse in Zürich.",
  },
  {
    q: "Welche Zahlungsmethoden akzeptiert ihr?",
    a: "Wir akzeptieren Kartenzahlung bei Abholung, TWINT und Rechnung für Geschäftskunden.",
  },
  {
    q: "Welche Reinigungsmittel verwendet ihr?",
    a: "Wir benutzen primär umweltfreundliche und biologisch abbaubare Reinigungsmittel.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white" aria-label="Häufig gestellte Fragen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Häufig gestellte Fragen</h2>

        <dl className="mt-8 space-y-6">
          {FAQS.map((f, idx) => (
            <div key={idx} className="p-4 border rounded-lg">
              <dt className="font-medium text-slate-900">{f.q}</dt>
              <dd className="mt-2 text-slate-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
