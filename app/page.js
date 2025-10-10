import SEOImage from "../components/SEOImage";
import Link from "next/link";
import crown from "../public/images/crown.svg";
import generalDentistry from "../public/images/general-dentistry.svg";
import implant from "../public/images/implant.svg";
import veneers from "../public/images/veneers.svg";
import toothPain from "../public/images/tooth-pain.svg";
import toothSparkle from "../public/images/tooth-sparkle.svg";
import office1 from "../public/images/office1.jpg";
import office2 from "../public/images/office2.jpg";
import office3 from "../public/images/office3.jpg";
import office4 from "../public/images/office4.jpg";
import facebook from "../public/images/facebook.svg";
import instagram from "../public/images/instagram.svg";
import google from "../public/images/google.svg";
import DrHentgesAndFamilySmall2 from "../public/images/DrHentgesAndFamilySmall2.jpg";
import azLake from "../public/images/az-lake.jpg";

export const metadata = {
  title: "Dentist | Mesa, AZ | Hentges Dental",
  description: "Trusted Mesa, AZ dentist Dr. Zach Hentges provides comprehensive dental care including implants, veneers, crowns & emergency services. Call (480) 964-2131!",
  keywords: "dentist Mesa AZ, family dentist Mesa, cosmetic dentist Mesa AZ, dental implants Mesa, emergency dentist Mesa, teeth whitening Mesa, dental crowns Mesa, East Valley dentist, North Mesa dentist, Tempe dentist, Chandler dentist, Gilbert dentist, Apache Junction dentist",
};

export default function Home() {

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "Hentges Dental",
    "description": "Trusted family and cosmetic dental practice in Mesa, AZ providing comprehensive dental care including implants, veneers, crowns, and emergency services",
    "url": "https://hentgesdental.com",
    "telephone": "(480) 964-2131",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "560 N. Stapley Dr. Suite 2",
      "addressLocality": "Mesa",
      "addressRegion": "AZ",
      "postalCode": "85203",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.4152",
      "longitude": "-111.8315"
    },
    "openingHours": [
      "Mo-Th 07:30-17:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Insurance",
    "currenciesAccepted": "USD",
    "medicalSpecialty": "Dentistry",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Family Dentistry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Cosmetic Dentistry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Restorative Dentistry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Emergency Dentistry"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Zach Hentges",
      "jobTitle": "Dentist",
      "alumniOf": ["Arizona State University", "Midwestern University"]
    }
  };

  const icons = [
    { title: "Emergency", subtext: "Same Day Service", image: toothPain, link: "/emergency-dentistry" },
    { title: "General Dentistry", subtext: "Routine Checkups", image: generalDentistry, link: "/family-dentistry" },
    { title: "Implants", subtext: "Replace Lost Teeth", image: implant, link: "/procedures/dental-implants" },
    { title: "Crowns", subtext: "Restore Your Teeth", image: crown, link: "/procedures/dental-crown" },
    { title: "Veneers", subtext: "Upgrade Your Smile", image: veneers, link: "/procedures/dental-veneers" },
    { title: "Other", subtext: "View More Services", image: toothSparkle, link: "/dental-procedures" }
  ];

  const officePics = [office1, office2, office3, office4];

  const socialIcons = [facebook, instagram, google];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <div id="welcome" className="w-11/12 flex flex-col items-center justify-center gap-4 rounded-lg my-6 relative min-h-[70vh]">
          <SEOImage
            src={azLake}
            alt="Beautiful Arizona lake landscape at sunset - Hentges Dental Mesa location backdrop"
            title="Arizona Lake Landscape - Hentges Dental"
            fill
            className="object-cover rounded-lg"
            priority={true}
            sizes="100vw"
          />
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 bg-primary p-4 md:p-8 rounded-lg opacity-90 text-secondary">
              <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center">Hentges Dental</h1>
              <p className="font-bold text-lg md:text-2xl lg:text-3xl italic text-center px-4">Best Family & Cosmetic Dentist in Mesa, AZ</p>
            </div>
            <button className="button-2 text-xl md:text-2xl lg:text-4xl font-semibold my-4 px-4 py-2 md:px-6 md:py-3"><Link href="/about">Book Appointment</Link></button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full bg-primary text-secondary px-2 md:px-4 py-8 gap-4">
          {icons.map((icon) => (
            <Link href={icon.link} key={icon.title} className="flex flex-col items-center justify-between gap-2 w-1/3 sm:w-1/4 xl:w-1/7 dental-icons p-2">
              <SEOImage
                src={icon.image}
                alt={`${icon.title} dental service icon - ${icon.subtext} at Hentges Dental Mesa`}
                title={`${icon.title} - Hentges Dental`}
                width={64}
                height={64}
                className="w-3/4 md:w-1/2"
                sizes="(max-width: 768px) 25vw, 12vw"
              />
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="font-bold text-sm md:text-lg lg:text-xl text-secondary">{icon.title}</h2>
                <p className="font-bold text-xs md:text-sm lg:text-lg text-tertiary">{icon.subtext}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full text-primary bg-secondary p-4 gap-4">
          <div className="flex lg:flex-col flex-row items-center justify-center w-1/3 sm:w-1/3 lg:w-1/4 gap-4">
            {officePics.map((pic, index) => {
              if (index > 1) return;
              return (
                <SEOImage
                  key={index}
                  src={pic}
                  alt={`Hentges Dental office interior ${index + 1} - Modern dental practice in Mesa, Arizona`}
                  title={`Hentges Dental Office - Mesa, AZ`}
                  width={400}
                  height={300}
                  className="w-full lg:w-11/12 rounded-lg p-2 lg:p-4"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )
            })}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 text-primary bg-secondary p-4">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2 flex flex-col items-center justify-center gap-4">WELCOME TO <br /> <span className="font-bold text-3xl md:text-4xl lg:text-5xl">HENTGES DENTAL</span></h2>
            <p className="text-center text-base md:text-lg lg:text-2xl px-4">
              At Hentges Dental, patient satisfaction is at the heart of everything we do. We're proud to help North Mesa and East Valley families achieve healthy, beautiful smiles. Our commitment goes beyond treatment—we focus on building relationships and truly listening to our patients' needs. With personalized care and advanced technology, we strive to ensure every visit is comfortable, effective, and leaves you fully satisfied with your dental experience.
            </p>
            <button className="button-1 text-lg md:text-xl lg:text-2xl my-4 px-4 py-2"><Link href="/patient-testimonials">Read Our Reviews</Link></button>
          </div>
          <div className="flex lg:flex-col flex-row items-center justify-center w-1/3 sm:w-1/3 lg:w-1/4 gap-4">
            {officePics.map((pic, index) => {
              if (index < 2) return;
              return (
                <SEOImage
                  key={index}
                  src={pic}
                  alt={`Hentges Dental office interior ${index + 1} - Modern dental practice in Mesa, Arizona`}
                  title={`Hentges Dental Office - Mesa, AZ`}
                  width={400}
                  height={300}
                  className="w-full lg:w-11/12 rounded-lg p-2 lg:p-4"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 bg-primary text-quaternary p-4 w-full">
          <SEOImage
            src={DrHentgesAndFamilySmall2}
            alt="Dr. Zach Hentges and his family - Trusted family dentist in Mesa, Arizona"
            title="Dr. Zach Hentges and Family - Hentges Dental"
            width={400}
            height={300}
            className="w-11/12 md:w-1/2 lg:w-1/3 rounded-lg"
            sizes="(max-width: 768px) 90vw, 30vw"
          />
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-2/3 p-4">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left">Dr. Hentges and Family</h2>
            <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left">Dr. Zach Hentges is a dedicated and experienced dentist with over 10 years of practice. As one of the best dentists in North Mesa AZ, he grew up in Mesa, attended Mesa High School and graduated from Arizona State University before earning his dental degree from Midwestern University. He is married and a proud father of four children. In his free time, Dr. Hentges enjoys playing sports with his kids and wakeboarding. Dr. Hentges is committed to providing the same high-quality care and friendly service that you&apos;ve come to expect at Christensen Family Dentistry. I&apos;m confident that you will find him to be a caring and communicative provider who truly understands the needs of our East Valley community.</p>
          </div>
        </div>
      </div>
    </>
  );
}
