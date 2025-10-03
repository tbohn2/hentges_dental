import Link from "next/link";
import Dropdown from "./Dropdown";
import Image from "next/image";
import tooth from "../public/images/tooth.png";

export default function Header() {

    const aboutItems = [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Leo Christensen, DDS", href: "/Dr-Leo-Christensen" }, { name: "About Us", href: "/about" }, { name: "Dental Technology", href: "/dental-technology" }];
    const patientInformationItems = [{ name: "New Patient Forms", href: "/new-patient-forms" }, { name: "Financial & Insurance", href: "/financial-and-insurance" }, { name: "Patient Testimonials", href: "/patient-testimonials" }, { name: "Dental Blog", href: "/dental-blog" }];
    const servicesItems = [{ name: "Emergency Dentistry", href: "/emergency-dentistry" }, { name: "Family Dentistry", href: "/family-dentistry" }, { name: "Restorative Dentistry", href: "/restorative-dentistry" }, { name: "Cosmetic Dentistry", href: "/cosmetic-dentistry" }, { name: "Dental Procedures", href: "/dental-procedures" }];

    const navElements = [
        <Link href="/">Home</Link>,
        <Dropdown title="About" url="/about" items={aboutItems} />,
        <Dropdown title="Patient Information" url="/patient-information" items={patientInformationItems} />,
        <Dropdown title="Services" url="/services" items={servicesItems} />,
        <Link href="/contact">Contact</Link>,
        <button className="button-1"><Link href="/request-appointment">Request Appointment</Link></button>,
        <button className="button-2"><Link href="">Pay Online</Link></button>
    ];

    return (
        <header className="flex flex-wrap gap-2 justify-between">
            <Link href="/" className="flex flex-row items-center justify-center gap-1 w-1/5 py-2 text-dark rounded-2xl">
                <Image src={tooth} alt="Hentges Dental" className="w-1/4" />
                <div className="flex flex-col justify-center geist-sans">
                    <span className="text-4xl font-bold flex items-center">Hentges</span>
                    <span className="text-4xl font-bold flex items-center">Dental</span>
                </div>
            </Link>
            <nav className="flex flex-grow py-2">
                <ul className="flex flex-grow justify-evenly items-center font-bold text-xl text-primary">
                    {navElements.map((element, index) => (
                        <li key={index} className="hover:underline">{element}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}