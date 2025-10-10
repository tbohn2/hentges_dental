import ContentDisplay from "../../components/ContentDisplay";
import drHentgesAndFamily from "../../public/images/DrHentgesAndFamilySmall2.jpg";

export const metadata = {
    title: "Dr. Zach Hentges | Mesa, AZ Dentist | Hentges Dental",
    description: "Meet Dr. Zach Hentges, experienced Mesa dentist with 10+ years practice. ASU & Midwestern University graduate. Call (480) 964-2131.",
};

const title = "DR. ZACH HENTGES";

const pageContent = [
    {
        heading: "",
        text: ["Dr. Zach Hentges is a dedicated and experienced dentist with over 10 years of practice. He grew up in Mesa, attended Mesa High School and graduated from Arizona State University before earning his dental degree from Midwestern University. He is married and a proud father of four children. In his free time, Dr. Hentges enjoys playing sports with his kids and wakeboarding. Dr. Hentges is committed to providing the same high-quality care and friendly service that you've come to expect at Christensen Family Dentistry. I'm confident that you will find him to be a caring and communicative provider who truly understands the needs of our community."],
        imgSrc: drHentgesAndFamily
    }
]

export default function DrZachHentges() {
    return (
        <ContentDisplay pageTitle={title} content={pageContent} />
    );
}


