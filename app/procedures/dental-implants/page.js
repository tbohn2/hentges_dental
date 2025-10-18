import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Hentges Dental | Dental Implants | Mesa, AZ",
    description: "Permanent tooth replacement with dental implants in Mesa, AZ. Titanium implants with natural-looking crowns. Restore your smile & confidence. Call (480) 964-2131.",
    keywords: "dental implants Mesa AZ, tooth replacement Mesa, titanium implants Mesa, permanent teeth Mesa, missing teeth Mesa, implant dentist Mesa",
};

export default function DentalImplants() {

    const title = "DENTAL IMPLANTS";

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dr. Zach Hentges - Dental Implants",
        "description": "Permanent tooth replacement with titanium dental implants that restore function and appearance",
        "url": "https://hentgesdental.com/procedures/dental-implants",
        "image": "https://hentgesdental.com/images/implant.svg",
        "procedureType": "Dental Implant Surgery",
        "bodyLocation": "Mouth, Jaw",
        "preparation": "Consultation, X-rays, treatment planning",
        "followup": "Regular checkups and maintenance",
        "possibleComplications": "Infection, implant failure, nerve damage",
        "outcome": "Permanent tooth replacement with natural appearance and function",
        "howPerformed": "Titanium post surgically placed into jawbone, custom crown attached after healing period",
        "provider": {
            "@type": "DentalClinic",
            "name": "Hentges Dental",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "560 N. Stapley Dr. Suite 2",
                "addressLocality": "Mesa",
                "addressRegion": "AZ",
                "postalCode": "85203",
                "addressCountry": "US"
            },
            "telephone": "(480) 964-2131",
            "url": "https://hentgesdental.com"
        },
        "medicalSpecialty": "Oral and Maxillofacial Surgery",
        "cost": "Varies by case complexity",
        "duration": "3-6 months total treatment time"
    };

    const content = [
        {
            heading: "",
            text: [
                "Missing teeth can impact your confidence, oral health, and ability to enjoy your favorite foods. If you're searching for the best dentist in Mesa AZ for a lasting solution to restore your smile, dental implants are one of the most advanced and effective options available. At Hentges Dental in Mesa, AZ, we're here to help you rediscover a complete, natural-looking smile with dental implants."
            ]
        },
        {
            heading: "WHAT ARE DENTAL IMPLANTS?",
            text: [
                "Dental implants are a permanent tooth replacement option designed to look, feel, and function just like your natural teeth. Unlike cosmetic implants in other areas of the body, dental implants are specifically created to restore your oral health and improve your quality of life. Many of our patients share how dental implants have boosted their self-esteem, allowed them to eat comfortably, and helped them smile with confidence in photos and social situations."
            ]
        },
        {
            heading: "WHY CHOOSE DENTAL IMPLANTS?",
            text: [
                "Dental implants are the closest replacement to your real teeth. Each implant consists of a titanium post that is surgically placed into your jawbone, acting as an artificial tooth root. A custom dental crown is then attached, creating a strong, stable, and natural-looking tooth. Because implants are anchored in the jaw, they help preserve bone density and prevent the bone loss that often occurs after tooth loss. This keeps your jawbone healthy and maintains your facial structure over time."
            ]
        },
        {
            heading: "",
            text: [
                "Dental implants also support healthy gums by maintaining proper blood flow and stability in your mouth. Whether you need to replace a single tooth, several teeth, or an entire arch, dental implants can be tailored to your unique needs. With customizable options, you can enjoy a smile that feels and functions like your own."
            ]
        },
        {
            heading: "THE DENTAL IMPLANT PROCEDURE",
            text: [
                "The dental implant process involves Dr. Zach Hentges placing a small post into your jawbone through a minimally invasive procedure. In some cases, a temporary tooth can be placed immediately, while in others, a short healing period is needed before the final crown is attached. Most patients find the procedure comfortable and are surprised by how straightforward it is."
            ]
        },
        {
            heading: "",
            text: [
                <>If you’re considering dental implants in Mesa, AZ, contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Our team is ready to answer your questions and help you achieve a beautiful, functional smile you’ll love to share!</>
            ]
        },
        {
            heading: "BENEFITS OF DENTAL IMPLANTS",
            text: [
                "Dental implants offer numerous advantages over traditional tooth replacement options. They provide superior stability, allowing you to eat all your favorite foods without restrictions. Unlike dentures, implants won't slip or move, giving you confidence in social situations. They also preserve your jawbone structure, preventing the facial collapse that often occurs with missing teeth. With proper care, dental implants can last a lifetime, making them a cost-effective long-term solution."
            ]
        },
        {
            heading: "FREQUENTLY ASKED QUESTIONS",
            text: [
                "Q: How long do dental implants last?",
                "A: With proper oral hygiene and regular dental checkups, dental implants can last 20-30 years or even a lifetime. They're designed to be a permanent solution for missing teeth.",
                "",
                "Q: Are dental implants painful?",
                "A: Most patients report minimal discomfort during the procedure. We use local anesthesia and sedation options to ensure your comfort. Post-operative pain is typically mild and manageable with over-the-counter pain medication.",
                "",
                "Q: How long does the dental implant process take?",
                "A: The complete process typically takes 3-6 months, including healing time. However, some patients may qualify for same-day implants depending on their specific situation and bone quality.",
                "",
                "Q: Can anyone get dental implants?",
                "A: Most healthy adults are good candidates for dental implants. We'll evaluate your oral health, bone density, and medical history during your consultation to determine if implants are right for you.",
                "",
                "Q: How much do dental implants cost in Mesa, AZ?",
                "A: The cost varies depending on your specific needs. We offer flexible payment plans and work with most insurance providers. Contact us for a personalized consultation and cost estimate."
            ]
        },
        {
            heading: "",
            text: [
                <>Other options for replacing missing teeth include <Link href="/procedures/dental-bridge" className="text-tertiary hover:underline">bridges</Link> and <Link href="/procedures/dentures" className="text-tertiary hover:underline">partial dentures</Link>.</>
            ]
        },
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


