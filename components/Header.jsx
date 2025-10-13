"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";
import SEOImage from "./SEOImage";
import tooth from "../public/images/tooth.png";
import { useMobile } from "../hooks/useMobile";
import MobileNav from "./MobileNav";

export default function Header() {
    const isMobile = useMobile();

    const aboutItems = [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Leo Christensen, DDS", href: "/Dr-Leo-Christensen" }, { name: "About Us", href: "/about" }, { name: "Dental Technology", href: "/dental-technology" }];
    const patientInformationItems = [{ name: "Patient Information", href: "/patient-information" }, { name: "New Patient Forms", href: "/new-patient-forms" }, { name: "Financial & Insurance", href: "/financial-and-insurance" }, { name: "Patient Testimonials", href: "/patient-testimonials" }, { name: "Dental Blog", href: "/dental-blog" }];
    const servicesItems = [{ name: "Emergency Dentistry", href: "/emergency-dentistry" }, { name: "Family Dentistry", href: "/family-dentistry" }, { name: "Restorative Dentistry", href: "/restorative-dentistry" }, { name: "Cosmetic Dentistry", href: "/cosmetic-dentistry" }, { name: "Procedures List", href: "/dental-procedures" }];

    const navElements = [
        // <Link href="/" className="hover:opacity-50 ease-in-out duration-300">Home</Link>,
        <Dropdown title="About" items={aboutItems} />,
        <Dropdown title="Resources" items={patientInformationItems} />,
        <Dropdown title="Services" items={servicesItems} />,
        <Link href="/contact" className="hover:opacity-50 ease-in-out duration-300">Contact</Link>,
        <button className="button-1"><Link href="/request-appointment">Request Appointment</Link></button>,
        <button className="button-2"><Link href="">Pay Online</Link></button>
    ];

    return (
        <header className="flex flex-wrap justify-between py-4 px-4 lg:px-0">
            <Link href="/" className="w-auto md:mx-6 flex flex-row items-center justify-center gap-1 px-4 text-primary border-b-1 border-primary rounded-4xl md:self-start self-center">
                <SEOImage
                    src={tooth}
                    alt="Hentges Dental logo - Tooth icon representing family dentistry in Mesa, Arizona"
                    title="Hentges Dental Logo"
                    width={48}
                    height={48}
                    className="lg:w-1/4 md:w-1/8 w-1/12"
                    priority={true}
                    sizes="(max-width: 768px) 8vw, 4vw"
                />
                <div className="flex lg:flex-col lg:gap-0 gap-2 flex-row justify-center geist-sans text-3xl md:text-4xl font-semibold ">
                    <span className="flex items-center">Hentges</span>
                    <span className="flex items-center">Dental</span>
                </div>
            </Link>
            {isMobile ? (
                <MobileNav />
            ) : (
                <nav className="flex flex-grow py-2">
                    <ul className="flex flex-grow flex-wrap justify-evenly items-center font-light xl:text-2xl md:text-lg sm:text-base text-primary">
                        {navElements.map((element, index) => (
                            <li className="md:text-xl xl:text-2xl" key={index}>{element}</li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}