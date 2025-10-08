"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";
import Image from "next/image";
import tooth from "../public/images/tooth.png";
import { useMobile } from "../hooks/useMobile";
import MobileNav from "./MobileNav";

export default function Header() {
    const isMobile = useMobile();

    const aboutItems = [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Leo Christensen, DDS", href: "/Dr-Leo-Christensen" }, { name: "About Us", href: "/about" }, { name: "Dental Technology", href: "/dental-technology" }];
    const patientInformationItems = [{ name: "New Patient Forms", href: "/new-patient-forms" }, { name: "Financial & Insurance", href: "/financial-and-insurance" }, { name: "Patient Testimonials", href: "/patient-testimonials" }, { name: "Dental Blog", href: "/dental-blog" }];
    const servicesItems = [{ name: "Emergency Dentistry", href: "/emergency-dentistry" }, { name: "Family Dentistry", href: "/family-dentistry" }, { name: "Restorative Dentistry", href: "/restorative-dentistry" }, { name: "Cosmetic Dentistry", href: "/cosmetic-dentistry" }, { name: "Dental Procedures", href: "/dental-procedures" }];

    const navElements = [
        // <Link href="/">Home</Link>,
        <Dropdown title="About" url="/about" items={aboutItems} />,
        <Dropdown title="Patient Information" url="/patient-information" items={patientInformationItems} />,
        <Dropdown title="Services" url="/services" items={servicesItems} />,
        <Link href="/contact" className="hover:opacity-50 ease-in-out duration-300">Contact</Link>,
        <button className="button-1"><Link href="/request-appointment">Request Appointment</Link></button>,
        <button className="button-2"><Link href="">Pay Online</Link></button>
    ];

    return (
        <header className="flex flex-wrap justify-between py-2 px-4 md:px-0">
            <Link href="/" className="sm:w-auto w-2/3 md:mx-6 flex flex-row items-center justify-center gap-1 py-2 text-primary border-b-1 border-primary rounded-4xl md:self-start self-center">
                <Image src={tooth} alt="Hentges Dental" className="lg:w-1/4 md:w-1/8 w-1/12" />
                <div className="flex lg:flex-col lg:gap-0 gap-2 flex-row justify-center geist-sans text-2xl md:text-4xl font-semibold ">
                    <span className="flex items-center">Hentges</span>
                    <span className="flex items-center">Dental</span>
                </div>
            </Link>
            {isMobile ? (
                <MobileNav />
            ) : (
                <nav className="flex flex-grow py-2">
                    <ul className="flex flex-grow justify-evenly items-center font-light xl:text-2xl md:text-lg sm:text-base text-primary">
                        {navElements.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}