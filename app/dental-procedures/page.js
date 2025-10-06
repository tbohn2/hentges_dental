import Link from "next/link";

export const metadata = {
    title: "Dental Procedures | Mesa, AZ | Hentges Dental",
    description: "Looking for a dentist in Mesa, AZ? Look no further! Hentges Dental offers dental services for the whole family. Check out our Dental Procedures!",
};

export default function DentalProcedures() {

    const articles = [
        { name: "All-on-4 Dentures", link: "/procedures/all-on-4" },
        { name: "Dental Bonding", link: "/procedures/dental-bonding" },
        { name: "Dental Bridge", link: "/procedures/dental-bridge" },
        { name: "Dental Cleaning", link: "/procedures/dental-cleaning" },
        { name: "Dental Crown", link: "/procedures/dental-crown" },
        { name: "Dental Exam", link: "/procedures/dental-exam" },
        { name: "Dental Filling", link: "/procedures/dental-filling" },
        { name: "Dental Implants", link: "/procedures/dental-implants" },
        { name: "Dental Veneers", link: "/procedures/dental-veneers" },
        { name: "Dentistry for Kids", link: "/procedures/dentistry-for-kids" },
        { name: "Denture Repair", link: "/procedures/denture-repair" },
        { name: "Dentures", link: "/procedures/dentures" },
        { name: "Digital Radiography", link: "/procedures/digital-radiography" },
        { name: "Inlays and Onlays", link: "/procedures/inlays-and-onlays" },
        { name: "Laser Dentistry", link: "/procedures/laser-dentistry" },
        { name: "Night Mouthguard", link: "/procedures/night-mouthguard" },
        { name: "Oral Appliance Therapy", link: "/procedures/oral-appliance-therapy" },
        { name: "Oral Cancer Screening", link: "/procedures/oral-cancer-screening" },
        { name: "Periodontal Care", link: "/procedures/periodontal-care" },
        { name: "Periodontal Maintenance", link: "/procedures/periodontal-maintenance" },
        { name: "Porcelain Crowns", link: "/procedures/porcelain-crowns" },
        { name: "Root Canal", link: "/procedures/root-canal" },
        { name: "Sleep Apnea Treatment", link: "/procedures/sleep-apnea" },
        { name: "Sports Mouthguard", link: "/procedures/sports-mouthguard" },
        { name: "Teeth Whitening", link: "/procedures/teeth-whitening" },
        { name: "TMJ Issues", link: "/procedures/tmj" },
        { name: "Tooth Extractions", link: "/procedures/tooth-extraction" },
        { name: "Wisdom Tooth Extractions", link: "/procedures/wisdom-tooth-extractions" },
    ]

    return (
        <div className="flex flex-wrap items-center justify-evenly gap-4 bg-primary py-12 w-2/3 self-center rounded-2xl">
            <h1 className="text-4xl font-bold text-secondary w-full text-center">DENTAL PROCEDURES</h1>
            {articles.map((article) => (
                <button key={article.name} className="button-3 w-1/4 text-center">
                    <Link href={article.link} className="text-2xl font-bold">{article.name}</Link>
                </button>
            ))}
        </div>
    );
}
