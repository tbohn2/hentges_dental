import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Dentures | Mesa, AZ | Hentges Dental",
    description: "Custom dentures in Mesa, AZ restore your smile with natural-looking comfort. Complete and partial options available — call (480) 964-2131!",
};

export default function Dentures() {
    const title = "DENTURES";

    const content = [
        {
            heading: "",
            text: [
                <>Sometimes, due to gum disease, tooth decay, or trauma, a tooth is lost or <Link href="/procedures/tooth-extraction" className="text-tertiary hover:underline">extracted</Link>. This is not only a cosmetic issue, but it can also affect your ability to eat and speak. At Hentges Dental, we offer both complete and partial dentures to restore your smile and your confidence.</>
            ]
        },
        {
            heading: "",
            text: [
                <>Losing teeth doesn’t mean you have to live with gaps in your smile. Modern dentistry offers several solutions for missing teeth, including <Link href="/procedures/dental-implants" className="text-tertiary hover:underline">dental implants</Link>, <Link href="/procedures/dental-bridge" className="text-tertiary hover:underline">bridges</Link>, and dentures. If you’re looking for information about dentures in Mesa, AZ, our team at Hentges Dental is here to help you understand your options and restore your smile.</>
            ]
        },
        {
            heading: "COMPLETE DENTURES",
            text: [
                "Complete dentures are used when all teeth are missing. They are made from a combination of acrylic and/or metal and are designed to look natural. Complete dentures are held in place by suction or a special adhesive. They are a great solution for those who have lost all of their teeth."
            ]
        },
        {
            heading: "PARTIAL DENTURES",
            text: [
                "Partial dentures are used when only some teeth are missing. At Hentges Dental, we offer partial dentures in metal or flexable acrylic. The partial dentures are held in place by clasps that attach to the remaining teeth, giving stability for eating and speaking."
            ]
        },
        {
            heading: "WHY CHOOSE DENTURES?",
            text: [
                "Dentures have been used for centuries to help people regain the ability to eat, speak, and smile with confidence after tooth loss. In the past, poor oral hygiene and lack of dental care meant many people lost their teeth at a young age. Without teeth, daily activities like eating and speaking became difficult. Dentures were created to restore these essential functions and improve appearance, helping people feel more comfortable and confident."
            ]
        },
        {
            heading: "",
            text: [
                "Today’s dentures are much more advanced than those of the past. While early dentures were made from materials like ivory, animal teeth, or metals, modern dentures are lightweight, durable, and designed to look natural. Dentures continue to provide the same benefits: allowing you to eat, speak, and smile without worry."
            ]
        },
        {
            heading: "HOW DOES THE DENTURE FITTING PROCESS WORK?",
            text: [
                "At Hentges Dental, we use dental impressions, x-rays, and photos to create custom dentures that fit comfortably and look natural. Most dentures have an acrylic base with porcelain or resin teeth.",
                "Dr. Zach Hentges will examine your mouth and take dental impressions and multiple measurements. These impressions are used to create a model of your mouth. This model is then used to create the dentures. The denture is then tried on and adjusted as needed.",

            ]
        },
        {
            heading: "",
            text: [
                <>If you’re struggling with missing teeth, you don’t have to face it alone. Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule a consultation. We’ll help you find the best denture solution to restore your smile and your confidence.</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


