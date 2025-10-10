import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Family Dentistry | Hentges Dental | Mesa, AZ",
    description: "Comprehensive family dentistry in Mesa, AZ for all ages. Preventive care, cleanings, exams & pediatric dentistry. Gentle, expert care. Call (480) 964-2131.",
    keywords: "family dentistry Mesa AZ, pediatric dentist Mesa, dental cleanings Mesa, preventive dental care Mesa, family dentist Mesa AZ, East Valley family dentist, North Mesa family dentist, Tempe family dentist, Chandler family dentist, Gilbert family dentist, Apache Junction family dentist",
};

const title = "FAMILY DENTISTRY";

const content = [
    {
        heading: '',
        text: [
            "At Hentges Dental, we welcome patients of all ages and are dedicated to providing comprehensive family dentistry in North Mesa, AZ and throughout the East Valley. Our focus is on proactive dental care and prevention, helping your family avoid dental issues before they start. If you're searching for a trusted family dentist serving North Mesa, Tempe, Chandler, Gilbert, and Apache Junction, our team is here to support your oral health at every stage of life."
        ]
    },
    {
        heading: 'CLEANINGS, EXAMS, AND ORAL CANCER SCREENINGS',
        text: [
            "We recommend visiting our office for a dental checkup and cleaning every six months, as advised by the American Dental Association (ADA). During your visit with Dr. Zach Hentges, you’ll receive a thorough cleaning and a comprehensive exam of your teeth, gums, and mouth. For adult patients, we may also suggest an oral cancer screening to ensure your ongoing health."
        ]
    },
    {
        heading: <Link href='/procedures/dentistry-for-kids' className="text-tertiary hover:underline">DENTISTRY FOR KIDS</Link>,
        text: [
            "Children’s dental care is essential for building a healthy smile that lasts a lifetime. We recommend bringing your child for their first dental visit when their first tooth appears or by their first birthday. Regular dental checkups help us track your child’s oral development and address any concerns early, making treatment easier and more effective."
        ]
    },
    {
        heading: "",
        text: [
            "As your child grows, we work with you to create strong oral hygiene habits and a solid foundation for lifelong dental health and confidence."
        ]
    },
    {
        heading: <Link href='/procedures/periodontal-care' className="text-tertiary hover:underline">PERIODONTAL CARE</Link>,
        text: [
            "Healthy gums are vital for a healthy smile. Gum disease (periodontal disease) is the leading cause of tooth loss in adults and develops when infection affects the gums, ligaments, and supporting bone. Our family dental team provides periodontal care to help prevent, detect, and treat gum disease, protecting your smile for years to come."
        ]
    },
    {
        heading: "MOUTHGUARDS (NIGHT) / MOUTHGUARDS (SPORT)",
        text: [
            "If you or your child play sports or grind your teeth at night (bruxism), custom mouthguards are an important part of preventive dental care. Athletic mouthguards help shield teeth from injury during physical activity, while night guards protect against enamel wear caused by grinding during sleep. Ask us about the right mouthguard for your needs."
        ]
    },
    {
        heading: <Link href='/procedures/sleep-apnea' className="text-tertiary hover:underline">SLEEP APNEA/ORAL APPLIANCES</Link>,
        text: [
            "For patients with obstructive sleep apnea, we offer oral appliances designed to keep your airway open and improve your sleep quality. These custom devices gently reposition your jaw, helping you breathe easier and wake up feeling refreshed. Learn more about how oral appliances can help manage sleep apnea and support your overall health."
        ]
    },
    {
        heading: 'SCHEDULE AN APPOINTMENT',
        text: [
            <>Ready to experience quality family dentistry in Mesa, AZ? Call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to book your appointment with Hentges Dental today!</>
        ]
    },
];


export default function FamilyDentistry() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "MedicalSpecialty",
        "name": "Family Dentistry",
        "description": "Comprehensive dental care for patients of all ages, from children to seniors, including preventive care, cleanings, and routine exams",
        "url": "https://hentgesdental.com/family-dentistry",
        "image": "https://hentgesdental.com/images/general-dentistry.svg",
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
        "medicalSpecialty": "Family Dentistry",
        "bodyLocation": "Teeth, Gums, Mouth",
        "procedure": [
            "Dental Cleanings",
            "Dental Exams",
            "Oral Cancer Screenings",
            "Fluoride Treatments",
            "Preventive Care",
            "Pediatric Dentistry"
        ],
        "audience": {
            "@type": "MedicalAudience",
            "audienceType": "All Ages"
        }
    };

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


