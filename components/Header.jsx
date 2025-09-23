import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Header() {

    const aboutItems = [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Dental Technology", href: "/Dental-Technology" }];
    const patientInformationItems = [{ name: "New Patient Forms", href: "/New-Patient-Forms" }, { name: "Financial & Insurance", href: "/Financial-Insurance" }, { name: "Patient Testimonials", href: "/Patient-Testimonials" }, { name: "Dental Blog", href: "/Dental-Blog" }];
    const servicesItems = [{ name: "Family Dentistry", href: "/Family-Dentistry" }, { name: "Restorative Dentistry", href: "/Restorative-Dentistry" }, { name: "Cosmetic Dentistry", href: "/Cosmetic-Dentistry" }, { name: "Emergency Dentistry", href: "/Emergency-Dentistry" }];

    const navElements = [
        <Link href="/">Home</Link>,
        <Dropdown title="About" items={aboutItems} />,
        <Dropdown title="Patient Information" items={patientInformationItems} />,
        <Dropdown title="Services" items={servicesItems} />,
        <Link href="/contact">Contact</Link>,
        <Link href="/request-appointment">Request Appointment</Link>,
        <Link href="">Pay Online</Link>
    ];

    return (
        <header className="p-3 flex justify-between">
            <div className="text-2xl font-bold">Hentges Dental</div>
            <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-evenly">
                    {navElements.map((element, index) => (
                        <li className="text-lg" key={index}>{element}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}