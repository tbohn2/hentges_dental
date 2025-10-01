import Image from "next/image";
import Link from "next/link";
import crown from "../public/images/crown.svg";
import generalDentistry from "../public/images/general-dentistry.svg";
import implant from "../public/images/implant.svg";
import veneers from "../public/images/veneers.svg";
import office1 from "../public/images/office1.jpg";
import office2 from "../public/images/office2.jpg";
import office3 from "../public/images/office3.jpg";
import office4 from "../public/images/office4.jpg";
import facebook from "../public/images/facebook.svg";
import instagram from "../public/images/instagram.svg";
import google from "../public/images/google.svg";
import DrHentgesAndFamilySmall2 from "../public/images/DrHentgesAndFamilySmall2.jpg";
import azLake from "../public/images/az-lake.jpg";
import water from "../public/images/water.jpg";

export const metadata = {
  title: "Dentist Mesa, AZ | Hentges Dental",
  description: "At Hentges Dental, your smile is our top priority. Call us today to schedule an appointment with the best family dentist in Mesa.",
  keywords: "Dentist Mesa, AZ",
};

export default function Home() {

  const icons = [
    { title: "General Dentistry", subtext: "General Dentistry", image: generalDentistry, link: "/general-dentistry" },
    { title: "Implants", subtext: "Implants", image: implant, link: "/implants" },
    { title: "Veneers", subtext: "Veneers", image: veneers, link: "/veneers" },
    { title: "Crowns", subtext: "Crowns", image: crown, link: "/crowns" },
  ];

  const officePics = [office1, office2, office3, office4];

  const socialIcons = [facebook, instagram, google];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div id="welcome" className="w-11/12 flex flex-col items-center justify-center gap-4 rounded-lg my-3">
        <Image
          src={azLake}
          alt="Arizona lake landscape"
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center justify-center gap-6 bg-primary p-4 rounded-lg opacity-90 text-tertiary">
            <h1 className="font-bold text-8xl">Hentges Dental</h1>
            <p className="font-bold text-4xl">Mesa, Arizona</p>
          </div>
          <button className="button-2 text-4xl my-4"><Link href="/about">Request Appointment</Link></button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 bg-primary text-secondary p-4">
        <div className="flex flex-row items-center justify-center gap-6 w-full py-4">
          {icons.map((icon) => (
            <Link href={icon.link} key={icon.title} className="flex flex-col items-center justify-between gap-2 w-1/6 dental-icons">
              <Image src={icon.image} alt={icon.title} className="w-1/2" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold text-2xl text-dark">{icon.title}</h2>
                <p className="font-bold text-xl text-secondary">{icon.subtext}</p>
              </div>
            </Link>
          ))}
        </div>
        <h2 className="font-bold text-dark text-4xl py-2">WELCOME TO HENTGES DENTAL</h2>
        <p className="font-bold text-center text-xl px-20">Healthy smiles for healthy families start with professional family dentistry. At Hentges Dental, your bright, healthy smile is our top priority. Of course, you'll only smile if you're as happy with our service as you are with our dental treatment. That's why we take the time to listen to your needs and concerns. Not only do we listen to your concerns, but we use gentle, efficient cleaning techniques.</p>
        <button className="button-1 font-bold text-2xl my-4"><Link href="/about">Learn More</Link></button>
        <div className="flex flex-row items-center justify-center gap-2">
          {officePics.map((pic, index) => (
            <Image key={index} src={pic} alt="Office" className="w-1/4" />
          ))}
        </div>
      </div>

      <div id="great-experience" className="flex flex-col items-center justify-center text-primary w-full">
        <Image
          src={water}
          alt="Water landscape"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex items-center justify-evenly gap-2 w-full bg-secondary opacity-90 p-4">
          <div className="flex flex-col justify-center gap-2 w-3/4">
            <h2 className="font-bold text-6xl">ALWAYS A GREAT EXPERIENCE</h2>
            <p className="font-bold text-2xl">At Hentges Dental, we make sure you have a great experience every time you come in. We use the latest technology and techniques to ensure you have a great experience. We also make sure you have a great experience every time you come in.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-row items-center justify-center gap-2">
              {socialIcons.map((icon, index) => (
                <Image key={index} src={icon} alt="Social Icon" className="w-1/3" />
              ))}
            </div>
            <Link href="/reviews">READ MORE REVIEWS</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-primary text-quaternary p-4 w-full">
        <Image src={DrHentgesAndFamilySmall2} alt="Dr. Hentges and Family" className="w-1/3" />
        <div className="flex flex-col gap-6 w-2/3 p-4">
          <h2 className="font-bold text-6xl">Dr. Hentges and Family</h2>
          <p className="font-bold text-2xl">Dr. Zach Hentges is a dedicated and experienced dentist with over 10 years of practice. He grew up in Mesa, attended Mesa High School and graduated from Arizona State University before earning his dental degree from Midwestern University. He is married and a proud father of four children. In his free time, Dr. Hentges enjoys playing sports with his kids and wakeboarding. Dr. Hentges is committed to providing the same high-quality care and friendly service that you've come to expect at Christensen Family Dentistry. I'm confident that you will find him to be a caring and communicative provider who truly understands the needs of our community.</p>
        </div>
      </div>
    </div>
  );
}
