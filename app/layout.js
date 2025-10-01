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
  title: "Dentist Mesa, AZ | Hentges Dental",
  description: "Hentges Dental in Mesa, AZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${geistSans.variable}`}>
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
