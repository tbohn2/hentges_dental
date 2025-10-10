import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Dentist in Tempe, AZ | Hentges Dental | Serving East Valley",
    description: "Top-rated dentist serving Tempe, AZ from Mesa. Dr. Zach Hentges provides family, cosmetic & emergency dental care. Convenient East Valley location. Call (480) 964-2131.",
    keywords: "dentist Tempe AZ, Tempe dentist, East Valley dentist, family dentist Tempe, cosmetic dentist Tempe, emergency dentist Tempe, dental care Tempe AZ",
};

export default function TempeDentist() {
    const title = "DENTAL CARE FOR TEMPE, AZ RESIDENTS";

    const content = [
        {
            heading: "",
            text: [
                "Hentges Dental proudly serves Tempe, AZ residents with comprehensive dental care. Located just minutes from Tempe in Mesa, our practice offers convenient access to top-quality family, cosmetic, and emergency dental services. Dr. Zach Hentges and our experienced team are committed to providing exceptional dental care to our East Valley neighbors."
            ]
        },
        {
            heading: "CONVENIENTLY LOCATED FOR TEMPE RESIDENTS",
            text: [
                "Our Mesa dental office is strategically located to serve Tempe residents with easy access from major roads including US-60, Loop 101, and Loop 202. Whether you're coming from downtown Tempe, near Arizona State University, or the Tempe Marketplace area, our practice is just a short drive away. We understand the busy lifestyle of Tempe residents and offer flexible scheduling to accommodate your needs."
            ]
        },
        {
            heading: "COMPREHENSIVE DENTAL SERVICES FOR TEMPE FAMILIES",
            text: [
                "We provide a full range of dental services to meet the needs of Tempe families:",
                "• Family Dentistry - Preventive care, cleanings, and exams for all ages",
                "• Cosmetic Dentistry - Teeth whitening, veneers, and smile makeovers",
                "• Restorative Dentistry - Crowns, fillings, implants, and bridges",
                "• Emergency Dentistry - Same-day appointments for urgent dental needs",
                "• Pediatric Dentistry - Gentle dental care for children",
                "• Orthodontic Services - Clear aligners and traditional braces"
            ]
        },
        {
            heading: "SERVING TEMPE'S DIVERSE COMMUNITY",
            text: [
                "Tempe is home to Arizona State University, vibrant neighborhoods, and a diverse community. We're proud to serve students, families, and professionals throughout the Tempe area. Our practice understands the unique needs of Tempe residents, from busy ASU students needing convenient dental care to families looking for a trusted family dentist in the East Valley."
            ]
        },
        {
            heading: "LOCAL LANDMARKS NEAR OUR PRACTICE",
            text: [
                "Our Mesa location is conveniently situated near many Tempe landmarks and attractions:",
                "• Arizona State University - Just 15 minutes from our office",
                "• Tempe Marketplace - 10 minutes away for shopping and dining",
                "• Tempe Town Lake - 12 minutes from our practice",
                "• Phoenix Sky Harbor Airport - 20 minutes for easy access",
                "• Mill Avenue District - 15 minutes from downtown Tempe",
                "• Tempe Diablo Stadium - 8 minutes from our office"
            ]
        },
        {
            heading: "WHY TEMPE RESIDENTS CHOOSE HENTGES DENTAL",
            text: [
                "• Convenient East Valley location with easy access from Tempe",
                "• Flexible scheduling including early morning and evening appointments",
                "• Accept most major insurance plans and offer payment options",
                "• State-of-the-art technology and modern treatment options",
                "• Experienced team led by Dr. Zach Hentges",
                "• Comfortable, welcoming environment for the whole family",
                "• Emergency dental services available"
            ]
        },
        {
            heading: "SCHEDULE YOUR APPOINTMENT TODAY",
            text: [
                <>Ready to experience exceptional dental care? Contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment. We're conveniently located in Mesa to serve Tempe residents with the highest quality dental care in the East Valley.</>
            ]
        },
        {
            heading: "DIRECTIONS FROM TEMPE",
            text: [
                "From Tempe, take US-60 East to Stapley Drive. Turn right on Stapley Drive and continue north. Our office is located at 560 N. Stapley Dr., Suite 2, Mesa, AZ 85203. Free parking is available for all patients."
            ]
        }
    ];

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hentges Dental - Tempe Area",
        "description": "Top-rated dentist serving Tempe, AZ from Mesa. Dr. Zach Hentges provides family, cosmetic & emergency dental care. Convenient East Valley location.",
        "url": "https://hentgesdental.com/locations/tempe",
        "image": "https://hentgesdental.com/images/az-lake.jpg",
        "telephone": "(480) 964-2131",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "560 N. Stapley Dr. Suite 2",
            "addressLocality": "Mesa",
            "addressRegion": "AZ",
            "postalCode": "85203",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.4152",
            "longitude": "-111.8315"
        },
        "openingHours": [
            "Mo-Th 07:30-17:00"
        ],
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Insurance",
        "currenciesAccepted": "USD",
        "areaServed": [
            {
                "@type": "City",
                "name": "Tempe",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Arizona"
                }
            },
            {
                "@type": "City",
                "name": "Mesa",
                "containedInPlace": {
                    "@type": "State",
                    "name": "Arizona"
                }
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dental Services for Tempe Residents",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Family Dentistry"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Cosmetic Dentistry"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Emergency Dentistry"
                    }
                }
            ]
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
