import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dentist in Mesa, AZ | Hentges Dental (Formerly Christensen Family Dentistry)",
  description: "Looking for a trusted family dentist in Mesa, AZ? Hentges Dental (formerly Christensen Family Dentistry) provides expert dental care, including implants, veneers, crowns, root canals, and more. Book your appointment today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistSans.variable}`}>
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Hentges Dental",
            "image": "https://hentgesdental.com/og-image.jpg",
            "@id": "https://hentgesdental.com",
            "url": "https://hentgesdental.com",
            "telephone": "+14805551234",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Example St",
              "addressLocality": "Mesa",
              "addressRegion": "AZ",
              "postalCode": "85201",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              }
            ],
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/hentgesdental",
              "https://www.google.com/maps/place/Hentges+Dental"
            ]
          }),
        }}
      /> */}
      <body className={`flex flex-col min-h-screen`}>
        <main className="flex flex-col justify-between w-full min-h-screen text-dark">
          <Header />
          {children}
          <Footer />
        </main>

      </body>
    </html>
  );
}
