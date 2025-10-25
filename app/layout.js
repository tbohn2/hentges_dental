import { Geist, Instrument_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSticker from "../components/ContactSticker";
import AccessibilityTab from "../components/AccessibilityTab";
// import PageTransition from "../components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Hentges Dental | Family & Cosmetic Dentist in Mesa, AZ (Formerly Christensen Family Dentistry)",
  description: "Looking for a trusted family dentist in Mesa, AZ? Hentges Dental provides expert dental care, including implants, veneers, crowns, root canals, and more. Call (480) 964-2131 today!",
  keywords: "dentist Mesa AZ, family dentist, dental implants, veneers, crowns, root canal, accessible dental care",
  robots: "index, follow",
  openGraph: {
    title: "Hentges Dental | Family & Cosmetic Dentist | Mesa, AZ",
    description: "Looking for a trusted family dentist in Mesa, AZ? Hentges Dental provides expert dental care, including implants, veneers, crowns, root canals, and more. Book your appointment today!",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistSans.variable} ${quicksand.variable}`}>
      <head>
        <meta name="theme-color" content="#F9FAFB" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Critical resource hints - load in parallel */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/happy-family.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/tooth.png" as="image" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "@id": "https://hentgesdental.com/#dentist",
              "name": "Hentges Dental",
              "image": "https://hentgesdental.com/images/og-logo.png",
              "url": "https://hentgesdental.com",
              "telephone": "+14809642131",
              "email": "hentgesdental@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "560 N Stapley Dr Ste 2",
                "addressLocality": "Mesa",
                "addressRegion": "AZ",
                "postalCode": "85203",
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
                  "opens": "07:30",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.42583773881805,
                "longitude": -111.80566902401911
              },
              // "sameAs": [
              //   "https://www.facebook.com/hentgesdental",
              //   "https://www.google.com/maps/place/Hentges+Dental"
              // ],
              "image": [
                "https://hentgesdental.com/images/office1.jpg",
                "https://hentgesdental.com/images/office2.jpg",
                "https://hentgesdental.com/images/office3.jpg",
                "https://hentgesdental.com/images/office4.jpg",
                "https://hentgesdental.com/images/DrHentgesAndFamilySmall2.jpg"
              ],
              "founder": {
                "@type": "Person",
                "name": "Dr. Zach Hentges",
                "jobTitle": "Dentist"
              }
            }),
          }}
        />

      </head>
      <body className={`flex flex-col min-h-screen`}>
        <main className="flex flex-col justify-between w-full min-h-screen text-dark">
          <ContactSticker />
          <Header />
          <div className="w-full flex flex-col items-center justify-center page-fade-in">
            {/* <PageTransition> */}
            {children}
            {/* </PageTransition> */}
          </div>
          <Footer />
          <AccessibilityTab />
        </main>

      </body>
    </html>
  );
}
