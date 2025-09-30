import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Header() {

    const aboutItems = [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Dental Technology", href: "/Dental-Technology" }];
    const patientInformationItems = [{ name: "New Patient Forms", href: "/New-Patient-Forms" }, { name: "Financial & Insurance", href: "/Financial-Insurance" }, { name: "Patient Testimonials", href: "/Patient-Testimonials" }, { name: "Dental Blog", href: "/Dental-Blog" }];
    const servicesItems = [{ name: "Family Dentistry", href: "/Family-Dentistry" }, { name: "Restorative Dentistry", href: "/Restorative-Dentistry" }, { name: "Cosmetic Dentistry", href: "/Cosmetic-Dentistry" }, { name: "Emergency Dentistry", href: "/Emergency-Dentistry" }];

    const contactItems = [{
        href: "https://maps.app.goo.gl/KSnY73NxWP46MLpG8", name: "560 N. Stapley Dr. Mesa, AZ 85203 Suite 102", svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
    }, {
        href: "tel:(480) 964-2131", name: "(480) 964-2131", svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
        </svg>
    }];

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
        <header className="p-3 flex flex-wrap gap-2 justify-between">
            <div className="flex flex-row items-center justify-evenly w-full">
                {contactItems.map((item, index) => (
                    <div className="flex flex-row flex-nowrap items-center justify-center gap-2 w-1/2" key={index}>
                        <a href={item.href} className="flex justify-center items-center gap-2 flex-nowrap">{item.svg}{item.name}</a>
                    </div>
                ))}
            </div>
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