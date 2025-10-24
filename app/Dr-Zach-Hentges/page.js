import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";
import drHentgesAndFamily from "../../public/images/DrHentgesAndFamilySmall2.jpg";

export const metadata = {
    title: "Hentges Dental | Dr. Zach Hentges | Mesa, AZ",
    description: "Dr. Zach Hentges, DMD - Experienced family dentist in Mesa, AZ with 10+ years practice. ASU & Midwestern University graduate. Call (480) 964-2131.",
    keywords: "Dr. Zach Hentges Mesa AZ, family dentist Mesa, experienced dentist Mesa, ASU dentist, Midwestern University dentist, Mesa dentist",
};

const title = "DR. ZACH HENTGES";

const pageContent = [
    {
        heading: "",
        text: [
            <>Dr. Zach Hentges brings over a decade of dedicated dental experience to Mesa, Arizona. A Mesa native, he attended Mesa High School and graduated from Arizona State University before earning his Doctor of Dental Medicine (DMD) degree at Midwestern University. His extensive experience spans all aspects of family dentistry, from routine cleanings to complex restorative procedures, and he takes pride in getting to know each patient personally while developing treatment plans that work best for their individual needs. He is committed to providing the friendly, high-quality care that patients have come to expect at&nbsp;
                <Link href="/Dr-Leo-Christensen" className="text-secondary hover:text-tertiary underline">Christensen Family Dentistry</Link>
                , ensuring you receive attentive, communicative, and compassionate dental service as part of our community.</>,
            "Dr. Hentges is a proud husband and father of four, and his family is at the center of everything he does. He loves spending time with his kids, often in the form of outdoor activities and sports that keep the whole family active and connected. Whether it's coaching his kids' teams, playing catch in the backyard, or wakeboarding, he finds joy in creating lasting memories with his family.",
        ],
        imgSrc: drHentgesAndFamily
    }
]

export default function DrZachHentges() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Zach Hentges",
        "jobTitle": "Dentist",
        "description": "Experienced family dentist in Mesa, AZ with 10+ years practice. ASU & Midwestern University graduate.",
        "url": "https://hentgesdental.com/Dr-Zach-Hentges",
        "image": "https://hentgesdental.com/images/DrHentgesAndFamilySmall2.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "560 N. Stapley Dr. Suite 2",
            "addressLocality": "Mesa",
            "addressRegion": "AZ",
            "postalCode": "85203",
            "addressCountry": "US"
        },
        "telephone": "(480) 964-2131",
        "email": "info@hentgesdental.com",
        "alumniOf": [
            {
                "@type": "CollegeOrUniversity",
                "name": "Arizona State University"
            },
            {
                "@type": "CollegeOrUniversity",
                "name": "Midwestern University"
            }
        ],
        "worksFor": {
            "@type": "DentalClinic",
            "name": "Hentges Dental",
            "url": "https://hentgesdental.com"
        },
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "educationalLevel": "Doctor of Dental Medicine"
        },
        "knowsAbout": [
            "Family Dentistry",
            "Cosmetic Dentistry",
            "Restorative Dentistry",
            "Emergency Dentistry",
            "Dental Implants",
            "Dental Veneers",
            "Dental Crowns"
        ],
        "memberOf": {
            "@type": "Organization",
            "name": "American Dental Association"
        }
    };

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/Dr-Zach-Hentges" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={pageContent} />
        </>
    );
}


