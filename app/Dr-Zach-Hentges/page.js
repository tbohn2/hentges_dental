import ContentDisplay from "../../components/ContentDisplay";
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
        text: ["Dr. Zach Hentges is a dedicated and experienced dentist with over 10 years of practice. He grew up in Mesa, attended Mesa High School and graduated from Arizona State University before earning his dental degree from Midwestern University. He is married and a proud father of four children. In his free time, Dr. Hentges enjoys playing sports with his kids and wakeboarding. Dr. Hentges is committed to providing the same high-quality care and friendly service that you've come to expect at Christensen Family Dentistry. I'm confident that you will find him to be a caring and communicative provider who truly understands the needs of our community."],
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={pageContent} />
        </>
    );
}


