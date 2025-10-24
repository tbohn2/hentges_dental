"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";
import SEOImage from "./SEOImage";
import tooth from "../public/images/tooth.png";
import MobileNav from "./MobileNav";

export default function Header() {

    const aboutItems = [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Leo Christensen, DDS", href: "/Dr-Leo-Christensen" }, { name: "About Us", href: "/about" }, { name: "Dental Technology", href: "/dental-technology" }];
    const patientInformationItems = [{ name: "Patient Information", href: "/patient-information" }, { name: "New Patient Forms", href: "/new-patient-forms" }, { name: "Financial & Insurance", href: "/financial-and-insurance" }, { name: "Patient Testimonials", href: "/patient-testimonials" }, { name: "Dental Blog", href: "/dental-blog" }];
    const servicesItems = [{ name: "Emergency Dentistry", href: "/emergency-dentistry" }, { name: "Family Dentistry", href: "/family-dentistry" }, { name: "Restorative Dentistry", href: "/restorative-dentistry" }, { name: "Cosmetic Dentistry", href: "/cosmetic-dentistry" }, { name: "Procedures List", href: "/dental-procedures" }];

    const navElements = [
        // <Link href="/" className="hover:opacity-50 ease-in-out duration-300">Home</Link>,
        <Dropdown title="About" items={aboutItems} />,
        <Dropdown title="Resources" items={patientInformationItems} />,
        <Dropdown title="Services" items={servicesItems} />,
        <Link href="/contact" className="hover:opacity-50 ease-in-out duration-300">Contact</Link>,
        <button className="button-2"><Link href="/request-appointment">Request Appointment</Link></button>,
        <button className="button-2 pay-online"><Link href="https://api.ipospays.com/v1/sl/Vm-KB_131124125929">Pay Online</Link></button>
    ];

    return (
        <header className="xl:h-[115px] lg:h-[105px] h-[75px] flex flex-wrap justify-between py-4 px-1 lg:px-4 text-primary">
            <Link href="/" className="flex flex-row items-center justify-center gap-1 px-4 border-b-1 border-primary rounded-4xl self-start self-center">
                <SEOImage
                    src={tooth}
                    alt="Hentges Dental logo - Tooth icon representing family dentistry in Mesa, Arizona"
                    title="Hentges Dental Logo"
                    width={48}
                    height={48}
                    className="lg:w-1/4 md:w-1/8 w-1/12"
                    priority={true}
                    sizes="(max-width: 768px) 8vw, 4vw"
                    quality={85}
                />
                <div className="flex lg:flex-col lg:gap-0 gap-2 flex-row justify-center geist-sans text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-semibold ">
                    <span className="flex items-center">Hentges</span>
                    <span className="flex items-center">Dental</span>
                </div>
            </Link>
            <MobileNav />
            <nav className="desktop-only flex flex-grow">
                <ul className="flex flex-grow flex-wrap justify-end gap-4 xl:gap-8 items-center font-light xl:text-2xl text-xl">
                    {navElements.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}