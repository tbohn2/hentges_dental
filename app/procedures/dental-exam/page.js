import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Hentges Dental | Dental Exam | Mesa, AZ",
    description: "A dental exam is a routine examination of your teeth, gums, and mouth. It is used to detect early signs of tooth decay, gum disease, and other oral health problems. Call today!",
};

export default function DentalExam() {
    const title = "DENTAL EXAM";

    const content = [
        {
            heading: "",
            text: [
                "When was the last time you had a dental exam? Your smile is one of the first things people notice, and maintaining healthy teeth and gums is essential for a confident appearance. At Hentges Dental in Mesa, AZ, we believe regular dental exams are key to keeping your smile bright and healthy. Our comprehensive dental exams help many patients in the East Valley achieve optimal oral health and ensure your teeth stay strong and beautiful for years to come."
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING A DENTAL EXAM",
            text: [
                "Routine dental exams should be scheduled every six months to catch any potential issues early. During your visit, our dentists and hygienists will assess your teeth and gums to identify any signs of tooth decay, gum disease, or other oral health concerns. Depending on your needs, we may perform your dental exam before or after your professional cleaning to ensure a thorough evaluation."
            ]
        },
        {
            heading: "",
            text: [
                "A typical dental exam involves several important steps. We’ll begin by taking digital x-rays to monitor changes in your teeth and jaw over time—these are quick, comfortable, and safe. Next, Dr. Zach Hentges will visually inspect your teeth, gums, tongue, palate, and the inside of your cheeks using a small mirror and specialized tools."
            ]
        },
        {
            heading: "WHAT WE CHECK FOR DURING YOUR EXAM",
            text: [
                <>After your cleaning, Dr. Hentges will perform a detailed examination of your entire mouth. Using dental instruments and mirrors, he checks each tooth and your gum tissue for three main concerns. First, he looks for cavities and tooth decay, which can lead to pain and infection if left untreated. Next, he assess your gums for signs of <Link href="/procedures/periodontal-care" className="text-tertiary hover:underline">periodontal (gum) disease</Link>, which can cause tooth loss if not addressed. Finally, he screens for unusual lumps, bumps, or spots that could indicate early stages of <Link href="/procedures/oral-cancer-screening" className="text-tertiary hover:underline">oral cancer</Link>—early detection is crucial for successful treatment.</>
            ]
        },
        {
            heading: "",
            text: [
                <>Our goal is to help you maintain excellent oral health and catch any issues as soon as possible. If you have questions about dental exams or want to schedule your next appointment, contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Our friendly team is ready to help you feel confident about your oral health!</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


