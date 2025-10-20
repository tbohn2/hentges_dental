"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (!isOpen) return;

        function handleClickOutside(event) {
            const dropdown = document.querySelector('.mobile-dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const mobileNavElements = [
        { name: "Home", href: "/" },
        { name: "Request Appointment", href: "/request-appointment" },
        { name: "About", href: "/about", subitems: [{ name: "Zach Hentges, DMD", href: "/Dr-Zach-Hentges" }, { name: "Leo Christensen, DDS", href: "/Dr-Leo-Christensen" }, { name: "About Us", href: "/about" }, { name: "Dental Technology", href: "/dental-technology" }] },
        { name: "Patient Information", href: "/patient-information", subitems: [{ name: "New Patient Forms", href: "/new-patient-forms" }, { name: "Financial & Insurance", href: "/financial-and-insurance" }, { name: "Patient Testimonials", href: "/patient-testimonials" }, { name: "Dental Blog", href: "/dental-blog" }] },
        { name: "Services", href: "/services", subitems: [{ name: "Emergency Dentistry", href: "/emergency-dentistry" }, { name: "Family Dentistry", href: "/family-dentistry" }, { name: "Restorative Dentistry", href: "/restorative-dentistry" }, { name: "Cosmetic Dentistry", href: "/cosmetic-dentistry" }, { name: "Dental Procedures", href: "/dental-procedures" }] },
        { name: "Contact", href: "/contact" },
        { name: "Pay Online", href: "https://api.ipospays.com/v1/sl/Vm-KB_131124125929" }
    ];

    return (
        <div className="mobile-dropdown z-50 self-center relative me-4">
            <span className="text-3xl cursor-pointer text-primary" onClick={() => setIsOpen(!isOpen)}>☰</span>
            <ul className={`absolute right-0 top-full mt-2 w-64 border-2 border-tertiary z-51 divide-y-2 text-tertiary ${isOpen ? "block" : "hidden"}`}>
                {mobileNavElements.map((item, index) => (
                    <li className="whitespace-nowrap inline-block bg-primary w-full" key={item.name}>
                        {item.subitems ? (
                            <div className="w-full px-1 py-2 flex flex-row items-center justify-between cursor-pointer">
                                <Link href={item.href} className="w-full pr-2 border-e border-tertiary active:bg-tertiary active:text-primary">{item.name}</Link>
                                <span onClick={() => setOpenIndex(openIndex === index ? null : index)} className={`px-2 transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>︾</span>
                            </div>
                        ) : (
                            <Link href={item.href} className="block w-full px-1 py-2 active:bg-tertiary active:text-primary">{item.name}</Link>
                        )}
                        {item.subitems && (
                            <ul className={`z-10 border-t-2 border-tertiary divide-y-2 text-tertiary ${openIndex === index ? "block" : "hidden"}`}>
                                {item.subitems.map((subitem) => (
                                    <li className="whitespace-nowrap float-right inline-block bg-primary w-full" key={subitem.name}>
                                        <Link href={subitem.href} className="block w-full px-1 py-2 active:bg-tertiary active:text-primary">{subitem.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}