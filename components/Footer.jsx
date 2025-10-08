import Link from "next/link";
import Image from "next/image";
import tooth from "../public/images/tooth.png";

export default function Footer() {
    return (
        <footer className="bg-secondary text-primary">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex flex-row items-center justify-start gap-2 mb-4">
                            <Image src={tooth} alt="Hentges Dental" className="w-12 h-12" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold geist-sans">Hentges</span>
                                <span className="text-2xl font-bold geist-sans">Dental</span>
                            </div>
                        </Link>
                        <p className="text-lg mb-4">
                            Your trusted family dentist in Mesa, Arizona. Providing exceptional dental care with a personal touch.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-tertiary">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mt-1 text-tertiary">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Address:</p>
                                    <p>560 N. Stapley Dr.<br />Mesa, AZ 85203</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-tertiary">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Phone:</p>
                                    <a href="tel:(480) 964-2131" className="text-primary hover:text-tertiary transition-colors">(480) 964-2131</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-tertiary">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <div>
                                    <p className="font-semibold">Email:</p>
                                    <a href="mailto:info@hentgesdental.com" className="text-primary hover:text-tertiary transition-colors">hentgesdental@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-tertiary">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-primary hover:text-tertiary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-primary hover:text-tertiary transition-colors">Services</Link></li>
                            <li><Link href="/patient-information" className="text-primary hover:text-tertiary transition-colors">Patient Information</Link></li>
                            <li><Link href="/patient-testimonials" className="text-primary hover:text-tertiary transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="text-primary hover:text-tertiary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-tertiary">Visit Us</h3>
                        <div className="w-full h-48 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.6481704760856!2d-111.80604301062473!3d33.425932075436734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba6345c8228bb%3A0x374a353f4672cf6f!2sChristensen%20Family%20Dentistry!5e0!3m2!1sen!2sus!4v1758577250768!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="mt-12 pt-8 border-t border-primary border-opacity-20">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="button-1 text-lg px-8 py-3">
                            <Link href="/request-appointment" className="text-lg px-8 py-3">Request Appointment</Link>
                        </button>
                        <button className="button-2 text-lg px-8 py-3">
                            <Link href="/contact" className="text-lg px-8 py-3">Contact Us</Link>
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-primary border-opacity-20 text-center">
                    <p className="text-primary text-opacity-80">
                        © {new Date().getFullYear()} Hentges Dental. All rights reserved. |
                        <Link href="/privacy-policy" className="ml-2 hover:text-tertiary transition-colors">Privacy Policy</Link> |
                        <Link href="/terms-of-service" className="ml-2 hover:text-tertiary transition-colors">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}