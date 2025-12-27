// app/page.tsx
import React from "react";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Lieferung from "./components/Lieferung";
import HoursOfOperation from "./components/HoursOfOperation";

export const metadata = {
  title: "Kurier & Textilservice Zürich – Schnell & Umweltfreundlich",
  description: "Schnelle Textilreinigung, Abholung & Lieferung in Zürich. Umweltfreundlich und transparent.",
};

export default function Page() {
  return (
    <>
      <Hero brandName="Zürich Clean & Care" />
      <main>
        <HoursOfOperation />
        <Pricing />
        <Lieferung />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
