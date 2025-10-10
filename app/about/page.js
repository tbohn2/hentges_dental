import office5 from "../../public/images/office5.jpg";
import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "About Us | Hentges Dental | Mesa, AZ",
    description: "Meet Dr. Zach Hentges & our experienced dental team in Mesa, AZ. 10+ years of family & cosmetic dentistry with advanced technology. Call (480) 964-2131.",
    keywords: "about Hentges Dental, Dr. Zach Hentges Mesa AZ, family dentist Mesa, dental team Mesa AZ, experienced dentist Mesa, East Valley dentist, Tempe dentist, Chandler dentist, Gilbert dentist, Apache Junction dentist",
};

const pageContent = [
    { heading: '', text: [<>At Hentges Dental (formerly <Link href='/Dr-Leo-Christensen' className="text-tertiary hover:underline">Christensen Family Dentistry</Link>), our primary mission is helping patients achieve and maintain radiant, healthy smiles. Equally important is ensuring every patient feels relaxed and confident during their visit. We believe knowledge is power – that&apos;s why patient education is fundamental to our approach. When you understand proper oral health practices, you can prevent issues before they develop and make informed decisions about your dental care.</>], imgSrc: office5 },
    { heading: 'Working Together for Your Best Smile', text: ['While excellent home dental care is essential, professional dental visits remain crucial for optimal oral health. New patients often have questions about Dr. Zach Hentges, our experienced team, and the comprehensive services we provide. We recommend scheduling a consultation to discuss your specific needs. The information below offers insights into our practice and the exceptional care we deliver.'] },
    { heading: '', text: ['Dr. Zach Hentges and our skilled team are committed to providing exceptional dental care through innovative treatments and thorough patient education. We recognize that quality dentistry extends beyond cosmetic improvements – it significantly impacts your overall health and quality of life. Research continues to demonstrate the strong connections between oral health, systemic wellness, and mental well-being.'] },
    { heading: '', text: ['Our clinical expertise combined with state-of-the-art equipment and modern techniques enables us to deliver superior dental care. Advanced technology allows us to perform procedures that are more precise, efficient, comfortable, and successful than traditional methods. We welcome the opportunity to discuss our practice philosophy and treatment options with you during your visit.'] },
]


export default function About() {
    return (
        <ContentDisplay pageTitle="ABOUT US" content={pageContent} />
    );
}