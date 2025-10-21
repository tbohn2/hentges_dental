import Link from "next/link";
import SEOImage from "../components/SEOImage";
import logo from "../public/images/og-logo.png";

export const metadata = {
    title: "404 - Page Not Found | Hentges Dental",
    description: "The page you&apos;re looking for doesn&apos;t exist. Return to Hentges Dental homepage for dental services in Mesa, AZ.",
    robots: "noindex, nofollow"
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 bg-primary/95 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl border border-white/20 text-secondary max-w-2xl w-full">
            <SEOImage
                src={logo}
                alt="Hentges Dental logo - 404 error"
                title="404 Error - Hentges Dental"
                className="xs:w-1/2 w-full rounded-lg"
            />

            <div className="text-center">
                <h1 className="font-bold text-6xl md:text-8xl text-tertiary mb-4">404</h1>
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">Page Not Found</h2>
                <p className="text-lg md:text-xl text-secondary/80 mb-8">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
                <Link
                    href="/"
                    className="button button-3 text-lg font-semibold"
                >
                    Return Home
                </Link>
                <Link
                    href="/request-appointment"
                    className="button button-2 text-lg font-semibold"
                >
                    Book Appointment
                </Link>
            </div>

            <div className="text-center mt-6">
                <p className="text-sm text-secondary/70 mb-2">
                    Need help finding what you&apos;re looking for?
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <Link href="/services" className="hover:text-tertiary underline transition-colors">
                        Our Services
                    </Link>
                    <Link href="/contact" className="hover:text-tertiary underline transition-colors">
                        Contact Us
                    </Link>
                    <Link href="/patient-information" className="hover:text-tertiary underline transition-colors">
                        Patient Information
                    </Link>
                </div>
            </div>
        </div>
    );
}
