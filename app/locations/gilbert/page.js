import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Hentges Dental | Mesa Dentist Serving Gilbert & East Valley",
    description: "Hentges Dental proudly serves Gilbert, AZ residents from our Mesa office. Dr. Zach Hentges offers family, cosmetic & emergency dentistry near Gilbert. Call (480) 964-2131!",
    keywords: "dentist Gilbert AZ, Gilbert dentist, East Valley dentist, family dentist Gilbert, cosmetic dentist Gilbert, emergency dentist Gilbert, dental care Gilbert AZ",
};

export default function GilbertDentist() {
    const title = "DENTAL CARE FOR GILBERT, AZ RESIDENTS";

    const content = [
        {
            heading: "",
            text: [
                "Hentges Dental is delighted to serve Gilbert, AZ residents with outstanding dental care. Our Mesa practice offers convenient access to comprehensive family, cosmetic, and emergency dental services for our East Valley community. Dr. Zach Hentges and our experienced team are committed to providing exceptional dental care to Gilbert families."
            ]
        },
        {
            heading: "CONVENIENTLY LOCATED FOR GILBERT RESIDENTS",
            text: [
                "Our Mesa dental office is strategically positioned to serve Gilbert residents with easy access via US-60, Loop 202, and the San Tan Freeway. Whether you're coming from downtown Gilbert, the San Tan Village area, or the newer communities in southeast Gilbert, our practice is easily accessible. We understand the family-oriented lifestyle of Gilbert residents and offer flexible scheduling to accommodate busy families."
            ]
        },
        {
            heading: "COMPREHENSIVE DENTAL SERVICES FOR GILBERT FAMILIES",
            text: [
                "We provide a full spectrum of dental services to meet Gilbert families' needs:",
                "• Family Dentistry - Preventive care, cleanings, and routine exams",
                "• Cosmetic Dentistry - Teeth whitening, veneers, and smile makeovers",
                "• Restorative Dentistry - Crowns, fillings, implants, and bridges",
                "• Emergency Dentistry - Same-day appointments for urgent care",
                "• Pediatric Dentistry - Specialized care for children",
                "• Orthodontic Services - Clear aligners and traditional braces",
                "• Periodontal Care - Gum disease treatment and prevention"
            ]
        },
        {
            heading: "SERVING GILBERT'S FAMILY-FOCUSED COMMUNITY",
            text: [
                "Gilbert is known for its excellent schools, safe neighborhoods, and strong sense of community. We're proud to serve Gilbert residents, from young families in the newer developments to established families in the historic downtown area. Our practice understands the importance of family and is dedicated to providing comfortable, high-quality dental care for every member of your family."
            ]
        },
        {
            heading: "GILBERT LANDMARKS NEAR OUR PRACTICE",
            text: [
                "Our Mesa location is conveniently situated near many Gilbert attractions and community centers:",
                "• San Tan Village - 15 minutes from our office",
                "• Downtown Gilbert Heritage District - 12 minutes away",
                "• Gilbert Regional Park - 18 minutes from our practice",
                "• Freestone Park - 10 minutes away",
                "• Gilbert High School - 8 minutes from our office",
                "• Banner Gateway Medical Center - 12 minutes from our practice"
            ]
        },
        {
            heading: "WHY GILBERT FAMILIES CHOOSE HENTGES DENTAL",
            text: [
                "• Convenient East Valley location with easy Gilbert access",
                "• Family-friendly scheduling including early morning and evening appointments",
                "• Comprehensive insurance acceptance and flexible payment options",
                "• State-of-the-art dental technology and modern treatments",
                "• Experienced team led by Dr. Zach Hentges",
                "• Comfortable, welcoming environment for all ages",
                "• Emergency dental services available",
                "• Patient-centered care with a focus on family needs"
            ]
        },
        {
            heading: "SCHEDULE YOUR FAMILY'S DENTAL CARE",
            text: [
                <>Ready to experience exceptional dental care for your family? Contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment. We&apos;re conveniently located in Mesa to serve Gilbert residents with the highest quality dental care in the East Valley.</>
            ]
        },
        {
            heading: "DIRECTIONS FROM GILBERT",
            text: [
                "From Gilbert, take US-60 West to Stapley Drive. Turn left on Stapley Drive and continue north. Our office is located at 560 N. Stapley Dr., Suite 2, Mesa, AZ 85203. Free parking is available for all our Gilbert patients."
            ]
        }
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/locations/gilbert" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}
