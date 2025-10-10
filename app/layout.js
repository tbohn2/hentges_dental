import { Geist, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityTab from "../components/AccessibilityTab";
// import PageTransition from "../components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dentist | Mesa, AZ | Hentges Dental (Formerly Christensen Family Dentistry)",
  description: "Looking for a trusted family dentist in Mesa, AZ? Hentges Dental (formerly Christensen Family Dentistry) provides expert dental care, including implants, veneers, crowns, root canals, and more. Book your appointment today!",
  keywords: "dentist Mesa AZ, family dentist, dental implants, veneers, crowns, root canal, accessible dental care, WCAG compliant",
  robots: "index, follow",
  openGraph: {
    title: "Accessible Dental Care in Mesa, AZ | Hentges Dental",
    description: "WCAG 2.1 AA compliant dental website with accessibility features for all patients",
    type: "website",
  }
};

export default function RootLayout({ children }) {

  const contactItems = [{
    href: "https://maps.app.goo.gl/KSnY73NxWP46MLpG8", name: "560 N. Stapley Dr. Mesa, AZ 85203 Suite 2", svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  }, {
    href: "tel:(480) 964-2131", name: "(480) 964-2131", svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
    </svg>
  }];

  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Hentges Dental",
              "image": "https://hentgesdental.com/og-image.png",
              "@id": "https://hentgesdental.com",
              "url": "https://hentgesdental.com",
              "telephone": "+14809642131",
              "email": "hentgesdental@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "560 N. Stapley Dr. Ste 2",
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
              "sameAs": [
                "https://www.facebook.com/hentgesdental",
                "https://www.google.com/maps/place/Hentges+Dental"
              ],
              "accessibilityFeature": [
                "textSize",
                "highContrast",
                "screenReaderCompatible",
                "keyboardNavigation"
              ],
              "accessibilityHazard": "none",
              "accessibilityAPI": "ARIA",
              "accessibilityControl": "fullKeyboardControl",
              "image": [
                "https://hentgesdental.com/images/office1.jpg",
                "https://hentgesdental.com/images/office2.jpg",
                "https://hentgesdental.com/images/office3.jpg",
                "https://hentgesdental.com/images/office4.jpg",
                "https://hentgesdental.com/images/DrHentgesAndFamilySmall2.jpg"
              ]
            }),
          }}
        />
      </head>
      <body className={`flex flex-col min-h-screen`}>
        <main className="flex flex-col justify-between w-full min-h-screen text-dark">
          <div className="p-3 font-bold lg:text-xl md:text-lg sm:text-base flex flex-row flex-wrap items-center justify-evenly gap-2 w-full bg-primary border-b-2 border-secondary sticky top-0 z-50">
            {contactItems.map((item, index) => (
              <div className="flex flex-row flex-nowrap items-center justify-center gap-2" key={index}>
                <a href={item.href} className="flex justify-center items-center gap-2 flex-nowrap hover:underline">{item.svg}{item.name}</a>
              </div>
            ))}
          </div>
          <Header />
          <div className="w-full flex flex-col items-center justify-center my-4">
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
