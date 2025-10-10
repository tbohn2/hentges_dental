import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Dentist in Chandler, AZ | Hentges Dental | East Valley Dental Care",
    description: "Premier dentist serving Chandler, AZ from Mesa. Dr. Zach Hentges offers family, cosmetic & emergency dental services. Trusted East Valley dental practice. Call (480) 964-2131.",
    keywords: "dentist Chandler AZ, Chandler dentist, East Valley dentist, family dentist Chandler, cosmetic dentist Chandler, emergency dentist Chandler, dental care Chandler AZ",
};

export default function ChandlerDentist() {
    const title = "DENTAL CARE FOR CHANDLER, AZ RESIDENTS";

    const content = [
        {
            heading: "",
            text: [
                "Hentges Dental is proud to serve Chandler, AZ residents with exceptional dental care. Our Mesa practice provides convenient access to comprehensive family, cosmetic, and emergency dental services for our East Valley neighbors. Dr. Zach Hentges and our skilled team are dedicated to delivering the highest quality dental care to Chandler families."
            ]
        },
        {
            heading: "EASILY ACCESSIBLE FROM CHANDLER",
            text: [
                "Our Mesa dental office is conveniently located for Chandler residents with quick access via Loop 101, US-60, and the 202 Freeway. Whether you're coming from downtown Chandler, the Chandler Fashion Center area, or the newer developments in south Chandler, our practice is easily reachable. We offer flexible appointment times to accommodate the busy schedules of Chandler professionals and families."
            ]
        },
        {
            heading: "COMPLETE DENTAL SERVICES FOR CHANDLER FAMILIES",
            text: [
                "We offer comprehensive dental services to meet all your family's needs:",
                "• Family Dentistry - Routine care, cleanings, and preventive treatments",
                "• Cosmetic Dentistry - Teeth whitening, veneers, and smile enhancements",
                "• Restorative Dentistry - Crowns, fillings, dental implants, and bridges",
                "• Emergency Dentistry - Urgent dental care when you need it most",
                "• Children's Dentistry - Specialized care for young patients",
                "• Advanced Treatments - Root canals, extractions, and oral surgery"
            ]
        },
        {
            heading: "SERVING CHANDLER'S GROWING COMMUNITY",
            text: [
                "Chandler is one of the fastest-growing cities in Arizona, known for its excellent schools, thriving business community, and family-friendly neighborhoods. We're honored to serve Chandler residents, from young families in the newer developments to established professionals in the downtown area. Our practice is committed to providing personalized dental care that meets the diverse needs of Chandler's vibrant community."
            ]
        },
        {
            heading: "CHANDLER LANDMARKS NEAR OUR PRACTICE",
            text: [
                "Our Mesa location is conveniently positioned near many Chandler attractions and business centers:",
                "• Chandler Fashion Center - 12 minutes from our office",
                "• Downtown Chandler - 15 minutes away",
                "• Intel Chandler Campus - 18 minutes from our practice",
                "• Wild Horse Pass Casino - 20 minutes away",
                "• Chandler Regional Medical Center - 10 minutes from our office",
                "• Tumbleweed Park - 15 minutes from our practice"
            ]
        },
        {
            heading: "WHY CHANDLER RESIDENTS TRUST HENTGES DENTAL",
            text: [
                "• Convenient East Valley location with easy Chandler access",
                "• Flexible scheduling including weekend appointments",
                "• Comprehensive insurance acceptance and flexible payment plans",
                "• Latest dental technology and treatment options",
                "• Experienced team with Dr. Zach Hentges at the helm",
                "• Family-friendly atmosphere for patients of all ages",
                "• Same-day emergency appointments available",
                "• Comfortable, modern facility with patient amenities"
            ]
        },
        {
            heading: "BOOK YOUR APPOINTMENT TODAY",
            text: [
                <>Experience the difference of exceptional dental care. Call Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment. We're conveniently located in Mesa to serve Chandler residents with the finest dental care in the East Valley.</>
            ]
        },
        {
            heading: "DRIVING DIRECTIONS FROM CHANDLER",
            text: [
                "From Chandler, take Loop 101 North to US-60 East, then exit at Stapley Drive. Turn right on Stapley Drive and continue north. Our office is located at 560 N. Stapley Dr., Suite 2, Mesa, AZ 85203. Ample free parking is available for all our Chandler patients."
            ]
        }
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}
