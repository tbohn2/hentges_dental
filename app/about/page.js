import office5 from "../../public/images/office5.jpg";
import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "About Us | Hentges Dental",
    description: `Learn about Hentges Dental (formerly Christensen Family Dentistry), your trusted family dentist in Mesa, AZ. We offer comprehensive dental care, including implants, veneers, crowns, and more.`,
};

const pageContent = [
    { heading: '', text: [<>Above all else, we here at Hentges Dental (formerly <Link href='/Dr-Leo-Christensen' className="text-tertiary hover:underline">Christensen Family Dentistry</Link>) want our patients to maintain healthy, bright, and beautiful smiles! Next to that, we want our patients to feel comfortable and content during their appointments with us. Both of these goals begin with patient education! Staying informed can help you better understand the tenants of good oral health, prevent potential problems, and reveal why certain treatments are necessary.</>], imgSrc: office5 },
    { heading: 'Your Doctor, Your Team, and Our Technology', text: ['Even with a strong at-home oral hygiene regimen, regular appointments with our office are vital to your oral health. If you are new to our practice, you may have a few questions about Dr. Zach Hentges, our team, and our services. The best way to learn more is a consultation appointment. In the meantime, the following information can help you become better acquainted with our top-notch care.'] },
    { heading: '', text: ['Dr. Zach Hentges and the members of our team are dedicated to serving our community with advanced treatments and comprehensive education. We believe that professional dentistry should not just enhance your smile, it should also improve your overall well-being. Recent studies have shown an intrinsic relationship between your oral, bodily, and mental health.'] },
    { heading: '', text: ['Our experience and expertise, along with our use of advanced technologies and techniques establishes a higher level of care. Cutting-edge technology has resulted in procedures that are safer, faster, more comfortable, and more effective than ever before. If you would like to learn more about our practice and our procedures, our team is happy to help!'] },
]


export default function About() {
    return (
        <ContentDisplay pageTitle="ABOUT US" content={pageContent} />
    );
}