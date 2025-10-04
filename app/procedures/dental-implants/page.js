import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Dental Implants | Mesa, AZ | Hentges Dental",
    description: "Dental implants are a permanent solution for missing teeth. They are made of titanium and are placed in the jawbone to replace the root of the tooth. Dental implants are a great solution for restoring both function and aesthetics to your smile. Call today!",
};

export default function DentalImplants() {

    const title = "DENTAL IMPLANTS";

    const content = [
        {
            heading: "",
            text: [
                "Missing teeth can impact your confidence, oral health, and ability to enjoy your favorite foods. If you’re searching for a lasting solution to restore your smile, dental implants are one of the most advanced and effective options available. At Hentges Dental in Mesa, AZ, we’re here to help you rediscover a complete, natural-looking smile with dental implants."
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
            heading: "",
            text: [
                <>Other options for replacing missing teeth include <Link href="/procedures/dental-bridge" className="text-tertiary hover:underline">bridges</Link> and <Link href="/procedures/dentures" className="text-tertiary hover:underline">partial dentures</Link>.</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


