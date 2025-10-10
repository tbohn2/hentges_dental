import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Dental Crown | Mesa, AZ | Hentges Dental",
    description: "Dental crowns in Mesa, AZ restore damaged teeth with custom porcelain caps. Strengthen & protect your smile. Call (480) 964-2131 today!",
};

export default function DentalCrown() {
    const title = "DENTAL CROWN";

    const content = [
        {
            heading: "",
            text: [
                "A dental crown is a custom-crafted restoration designed to cover and protect a damaged or weakened tooth. By encasing the entire visible portion of the tooth, a dental crown restores its strength, shape, and natural appearance. Dental crowns are an excellent option for improving both the function and aesthetics of your smile."
            ]
        },
        {
            heading: "WHY YOU MIGHT NEED A CROWN",
            text: [
                "There are several common reasons why Dr. Zach Hentges may recommend a dental crown. Crowns are often used to save teeth that have become weakened or compromised. This can happen due to trauma—such as a sports injury or accident—or from chronic habits like bruxism (teeth grinding or clenching), which can wear down tooth structure over time. Wearing a sports mouthguard can help prevent some of these injuries, but crowns are sometimes necessary to restore teeth that have already been damaged."
            ]
        },
        {
            heading: "",
            text: [
                "Dental crowns are also used to repair teeth that have been affected by extensive tooth decay. When bacteria cause cavities that reach deep into the tooth, a crown may be needed to restore strength and prevent further infection. Gum disease (periodontal disease) can also weaken teeth, making crowns a good solution for added support. Additionally, crowns are commonly placed on teeth that are chipped, cracked, or broken—sometimes from biting down on hard foods. Crowns are also used as the final restoration for dental implants."
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING A DENTAL CROWN PROCEDURE",
            text: [
                "Getting a dental crown is a straightforward process. After removing decay, fractures, and/or old fillings and preparing the tooth, Dr. Hentges will take an impression of your tooth to create a custom crown that fits perfectly. He then will place a temporary crown to protect it. Most crowns are made from porcelain fused to metal for added durability and a natural look. The crown is carefully matched to the color of your existing teeth, so it blends seamlessly with your smile. Once your permanent crown is ready, it is cemented in place, restoring your tooth’s function and appearance."
            ]
        },
        {
            heading: "",
            text: [
                <>If you have questions about dental crowns or think you might need one, contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Our team is here to help you understand the benefits of dental crowns and how they can protect and restore your teeth. Call us today to schedule your appointment.</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


