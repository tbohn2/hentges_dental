import ContentDisplay from "../../components/ContentDisplay";
import DrLeoChristensenFamily from "../../public/images/Dr-Leo-Christensen-and-Family.jpg";
import DrHentgesAndFamily from "../../public/images/DrHentgesAndFamilySmall2.jpg";

export const metadata = {
    title: "Dr. Leo Christensen, DDS | Hentges Dental | Mesa, AZ",
    description: "Dr. Leo Christensen, former owner of Christensen Family Dentistry in Mesa, AZ. Now, he introduces Dr. Zach Hentges to the practice.",
};

const title = "Dr. Leo Christensen";

const pageContent = [
    {
        heading: "NEW BEGINNINGS",
        text: ["Dear Friends,",
            "Since I was a teenager, my dream has been to live on a farm and be a small-town dentist. I tried to pursue this right after dental school in Indiana, but the timing wasn't right. I found my way back to Mesa, the city that raised me, where I've lived, worked, and served for the past 14 years.",
            "We love this community deeply, but my heart has always been pulled towards that dream. I thought I could work my way to retirement and then finally live it. However, I realized I don't want to wait until I'm 60, too tired, and too late to do what I truly want.",
            "About a year ago, my family and I bought a small homestead in Coalville, Utah. I considered commuting back and forth weekly, but I can't imagine my life separated from my wonderful wife of 20 amazing years and our 7 great kids.",
            "That said, I never wanted to just leave my family, friends (many of whom are patients), and the best dental team I've ever had in my 14 years of practice. As stressful as this decision has been, I've found a great replacement who shares the same values and commitment to quality dentistry. He is also from Mesa.",
        ], imgSrc: DrLeoChristensenFamily
    },
    {
        heading: "MEET DR. ZACH HENTGES",
        text: ["Dr. Zach Hentges is a dedicated and experienced dentist with over 10 years of practice. He grew up in Mesa, attended Mesa High School, and graduated from Arizona State University before earning his dental degree from Midwestern University. He is married and a proud father of four children. In his free time, Dr. Hentges enjoys playing sports with his kids and wakeboarding.",
            "Dr. Hentges is committed to providing the same high-quality care and friendly service that you've come to expect at Christensen Family Dentistry. I'm confident that you will find him to be a caring and communicative provider who truly understands the needs of our community.",
            "Thank you for being a part of this journey with me. I am grateful for the trust and relationships we've built over the years. I am excited for this new chapter and confident that you are in great hands with Dr. Hentges.",
            "Warm regards,",
            "Dr. Leo Christensen",
        ], imgSrc: DrHentgesAndFamily
    }
]

export default function DrLeoChristensen() {
    return (
        <ContentDisplay pageTitle={title} content={pageContent} />
    );
}