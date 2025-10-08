import Image from "next/image";
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
  title: "Dentist Mesa, AZ | Hentges Dental",
  description: "At Hentges Dental, your smile is our top priority. Call us today to schedule an appointment with the best family dentist in Mesa.",
  keywords: "Dentist Mesa, AZ",
};

export default function Home() {

  const icons = [
    { title: "Emergency", subtext: "Same Day Treatment", image: toothPain, link: "/emergency-dentistry" },
    { title: "General Dentistry", subtext: "Routine Care", image: generalDentistry, link: "/family-dentistry" },
    { title: "Implants", subtext: "Replace Missing Teeth", image: implant, link: "/procedures/dental-implants" },
    { title: "Crowns", subtext: "Restore Damaged Teeth", image: crown, link: "/procedures/dental-crown" },
    { title: "Veneers", subtext: "Improve Your Smile", image: veneers, link: "/procedures/dental-veneers" },
    { title: "Other", subtext: "See All Services", image: toothSparkle, link: "/procedures/dental-procedures" },
  ];

  const officePics = [office1, office2, office3, office4];

  const socialIcons = [facebook, instagram, google];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div id="welcome" className="w-11/12 flex flex-col items-center justify-center gap-4 rounded-lg my-6 relative min-h-[70vh]">
        <Image
          src={azLake}
          alt="Arizona lake landscape"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 bg-primary p-4 md:p-8 rounded-lg opacity-90 text-secondary">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center">Hentges Dental</h1>
            <p className="font-bold text-lg md:text-2xl lg:text-3xl italic text-center px-4">Trusted Family & Cosmetic Dentistry in Mesa, AZ</p>
          </div>
          <button className="button-2 text-xl md:text-2xl lg:text-4xl font-semibold my-4 px-4 py-2 md:px-6 md:py-3"><Link href="/about">Book Appointment</Link></button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full bg-primary text-secondary px-2 md:px-4 py-8 gap-4">
        {icons.map((icon) => (
          <Link href={icon.link} key={icon.title} className="flex flex-col items-center justify-between gap-2 w-1/3 sm:w-1/4 lg:w-1/7 dental-icons p-2">
            <Image src={icon.image} alt={icon.title} className="w-3/4 md:w-1/2" />
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="font-bold text-sm md:text-lg lg:text-2xl text-secondary">{icon.title}</h2>
              <p className="font-bold text-xs md:text-sm lg:text-xl text-tertiary">{icon.subtext}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full text-primary bg-secondary p-4 gap-4">
        <div className="flex lg:flex-col flex-row items-center justify-center w-1/3 sm:w-1/3 lg:w-1/4 gap-4">
          {officePics.map((pic, index) => {
            if (index > 1) return;
            return (
              <Image
                key={index}
                src={pic}
                alt={`Office Picture ${index + 1}`}
                className="w-full lg:w-11/12 rounded-lg p-2 lg:p-4"
              />
            )
          })}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 text-primary bg-secondary p-4">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2 text-center">WELCOME TO HENTGES DENTAL</h2>
          <p className="text-center text-base md:text-lg lg:text-2xl px-4">Creating beautiful, confident smiles for Mesa families is what drives us at Hentges Dental. We believe exceptional dental care goes beyond treatment – it's about building lasting relationships with our patients. Our team combines advanced technology with personalized attention to ensure every visit exceeds your expectations. From routine cleanings to complex procedures, we're committed to making your dental experience comfortable, effective, and stress-free.</p>
          <button className="button-1 text-lg md:text-xl lg:text-2xl my-4 px-4 py-2"><Link href="/patient-testimonials">Read Our Reviews</Link></button>
        </div>
        <div className="flex lg:flex-col flex-row items-center justify-center w-1/3 sm:w-1/3 lg:w-1/4 gap-4">
          {officePics.map((pic, index) => {
            if (index < 2) return;
            return (
              <Image
                key={index}
                src={pic}
                alt={`Office Picture ${index + 1}`}
                className="w-full lg:w-11/12 rounded-lg p-2 lg:p-4"
              />
            )
          })}
        </div>
      </div>

      {/* <div id="great-experience" className="relative flex text-primary bg-primary w-full">
        {officePics.map((pic, index) => (
          <Image
            key={index}
            src={pic}
            alt={`Office Picture ${index + 1}`}
            className={`w-1/4 ${index % 2 === 0 ? 'self-start' : 'self-end'} rounded-lg p-4`}
          />
        ))}
        <div className="absolute inset-0 z-10 self-center flex items-center justify-evenly gap-2 w-full bg-tertiary opacity-95 p-4 border-t-4 border-b-4 border-secondary">
          <div className="flex flex-col justify-center gap-2 w-3/4">
            <h2 className="font-bold text-6xl">ALWAYS A GREAT EXPERIENCE</h2>
            <p className="text-2xl">At Hentges Dental, we make sure you have a great experience every time you come in. We use the latest technology and techniques to ensure you have a great experience. Our patients love us because we are friendly, efficient, and always put their needs first.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Link href="/patient-testimonials" className="font-bold text-2xl hover:underline">READ REVIEWS</Link>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 bg-primary text-quaternary p-4 w-full">
        <Image src={DrHentgesAndFamilySmall2} alt="Dr. Hentges and Family" className="w-11/12 lg:w-1/3 rounded-lg" />
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-2/3 p-4">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center lg:text-left">Dr. Hentges and Family</h2>
          <p className="font-bold text-base md:text-lg lg:text-2xl text-center lg:text-left">Dr. Zach Hentges is a dedicated and experienced dentist with over 10 years of practice. He grew up in Mesa, attended Mesa High School and graduated from Arizona State University before earning his dental degree from Midwestern University. He is married and a proud father of four children. In his free time, Dr. Hentges enjoys playing sports with his kids and wakeboarding. Dr. Hentges is committed to providing the same high-quality care and friendly service that you've come to expect at Christensen Family Dentistry. I'm confident that you will find him to be a caring and communicative provider who truly understands the needs of our community.</p>
        </div>
      </div>
    </div>
  );
}
