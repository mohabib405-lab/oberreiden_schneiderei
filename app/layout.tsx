import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daoud-textilreinigung.com"),
  title: {
    default:
      "Daoud Textil Reinigung – Schneiderei & Textilservice in Oberrieden",
    template: "%s | Daoud Textil Reinigung",
  },
  description:
    "Umweltfreundliche Textilreinigung und präzise Schneiderei in Oberrieden. Kostenlose Abholung & Lieferung. Jetzt Termin per WhatsApp vereinbaren.",
  openGraph: {
    title: "Daoud Textil Reinigung in Oberrieden",
    description:
      "Professionelle Textilreinigung & Schneiderei. 10+ Jahre Erfahrung. Kostenlose Abholung möglich.",
    url: "https://daoud-textilreinigung.com",
    siteName: "Daoud Textil Reinigung",
    locale: "de_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* LocalBusiness / Laundry Service JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DryCleaningOrLaundry",
              name: "Daoud Textil Reinigung",
              image: "https://daoud-textilreinigung.com/hero.jpg",
              url: "https://daoud-textilreinigung.com",
              telephone: "+41762669877",
              email: "info@daoud-textilreinigung.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Alte Landstrasse 17",
                addressLocality: "Oberrieden",
                postalCode: "8942",
                addressCountry: "CH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.2796,
                longitude: 8.5721,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Zürich",
              },
              priceRange: "$$",
              sameAs: [
                "https://wa.me/41762669877"
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
