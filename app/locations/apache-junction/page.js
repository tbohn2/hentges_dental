import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Dentist in Apache Junction, AZ | Hentges Dental | East Valley Dental Care",
    description: "Trusted dentist serving Apache Junction, AZ from Mesa. Dr. Zach Hentges provides family, cosmetic & emergency dental services. Convenient East Valley location. Call (480) 964-2131.",
    keywords: "dentist Apache Junction AZ, Apache Junction dentist, East Valley dentist, family dentist Apache Junction, cosmetic dentist Apache Junction, emergency dentist Apache Junction, dental care Apache Junction AZ",
};

export default function ApacheJunctionDentist() {
    const title = "DENTAL CARE FOR APACHE JUNCTION, AZ RESIDENTS";

    const content = [
        {
            heading: "",
            text: [
                "Hentges Dental is proud to serve Apache Junction, AZ residents with exceptional dental care. Our Mesa practice provides convenient access to comprehensive family, cosmetic, and emergency dental services for our East Valley neighbors. Dr. Zach Hentges and our experienced team are dedicated to delivering the highest quality dental care to Apache Junction families."
            ]
        },
        {
            heading: "EASILY ACCESSIBLE FROM APACHE JUNCTION",
            text: [
                "Our Mesa dental office is conveniently located for Apache Junction residents with quick access via US-60 and the Superstition Freeway. Whether you're coming from downtown Apache Junction, the Gold Canyon area, or the newer developments in the Superstition Mountains region, our practice is easily reachable. We offer flexible appointment times to accommodate the diverse schedules of Apache Junction residents, from retirees to working professionals."
            ]
        },
        {
            heading: "COMPLETE DENTAL SERVICES FOR APACHE JUNCTION FAMILIES",
            text: [
                "We offer comprehensive dental services to meet all your family's needs:",
                "• Family Dentistry - Routine care, cleanings, and preventive treatments",
                "• Cosmetic Dentistry - Teeth whitening, veneers, and smile enhancements",
                "• Restorative Dentistry - Crowns, fillings, dental implants, and bridges",
                "• Emergency Dentistry - Urgent dental care when you need it most",
                "• Children's Dentistry - Specialized care for young patients",
                "• Advanced Treatments - Root canals, extractions, and oral surgery",
                "• Senior Dental Care - Specialized care for older adults"
            ]
        },
        {
            heading: "SERVING APACHE JUNCTION'S UNIQUE COMMUNITY",
            text: [
                "Apache Junction is known for its stunning desert landscapes, proximity to the Superstition Mountains, and vibrant community of outdoor enthusiasts and retirees. We're honored to serve Apache Junction residents, from active seniors enjoying their retirement to families who appreciate the area's natural beauty. Our practice is committed to providing personalized dental care that meets the diverse needs of Apache Junction's unique community."
            ]
        },
        {
            heading: "APACHE JUNCTION LANDMARKS NEAR OUR PRACTICE",
            text: [
                "Our Mesa location is conveniently positioned near many Apache Junction attractions and landmarks:",
                "• Superstition Mountains - 25 minutes from our office",
                "• Lost Dutchman State Park - 30 minutes away",
                "• Apache Junction City Center - 20 minutes from our practice",
                "• Gold Canyon Golf Resort - 25 minutes away",
                "• Apache Junction Public Library - 18 minutes from our office",
                "• Apache Junction High School - 22 minutes from our practice",
                "• Superstition Springs Center - 15 minutes from our office"
            ]
        },
        {
            heading: "WHY APACHE JUNCTION RESIDENTS TRUST HENTGES DENTAL",
            text: [
                "• Convenient East Valley location with easy Apache Junction access",
                "• Flexible scheduling including early morning and weekend appointments",
                "• Comprehensive insurance acceptance and flexible payment plans",
                "• Latest dental technology and treatment options",
                "• Experienced team with Dr. Zach Hentges at the helm",
                "• Comfortable, welcoming atmosphere for patients of all ages",
                "• Same-day emergency appointments available",
                "• Senior-friendly care with understanding of unique needs",
                "• Modern facility with patient amenities and comfort features"
            ]
        },
        {
            heading: "BOOK YOUR APPOINTMENT TODAY",
            text: [
                <>Experience the difference of exceptional dental care. Call Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment. We're conveniently located in Mesa to serve Apache Junction residents with the finest dental care in the East Valley.</>
            ]
        },
        {
            heading: "DRIVING DIRECTIONS FROM APACHE JUNCTION",
            text: [
                "From Apache Junction, take US-60 West toward Mesa. Continue on US-60 West and exit at Stapley Drive. Turn right on Stapley Drive and continue north. Our office is located at 560 N. Stapley Dr., Suite 2, Mesa, AZ 85203. Ample free parking is available for all our Apache Junction patients."
            ]
        }
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}
