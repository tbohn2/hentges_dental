import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Dental Crown | Mesa, AZ",
    description: "Custom dental crowns in Mesa, AZ restore damaged teeth with porcelain caps. Strengthens & protects your smile with natural-looking crowns. Call (480) 964-2131.",
    keywords: "dental crowns Mesa AZ, porcelain crowns Mesa, tooth restoration Mesa, damaged teeth Mesa, crown dentist Mesa, tooth cap Mesa",
};

export default function DentalCrown() {
    const title = "DENTAL CROWN";

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dr. Zach Hentges - Dental Crown",
        "description": "Custom-made cap that covers and protects damaged or weakened teeth",
        "url": "https://hentgesdental.com/procedures/dental-crown",
        "image": "https://hentgesdental.com/images/crown.svg",
        "procedureType": "Restorative Dentistry",
        "bodyLocation": "Teeth",
        "preparation": "Tooth preparation, impressions, temporary crown placement",
        "followup": "Regular dental checkups and maintenance",
        "possibleComplications": "Sensitivity, crown loosening, need for replacement",
        "outcome": "Restored tooth function and appearance with protection",
        "howPerformed": "Tooth shaped and prepared, custom crown fabricated and cemented over prepared tooth",
        "provider": {
            "@type": "DentalClinic",
            "name": "Hentges Dental",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "560 N. Stapley Dr. Suite 2",
                "addressLocality": "Mesa",
                "addressRegion": "AZ",
                "postalCode": "85203",
                "addressCountry": "US"
            },
            "telephone": "(480) 964-2131",
            "url": "https://hentgesdental.com"
        },
        "medicalSpecialty": "Restorative Dentistry",
        "cost": "Varies by material and complexity",
        "duration": "2-3 weeks for completion"
    };

    const content = [
        {
            heading: "",
            text: [
                "A dental crown is a custom-crafted restoration designed to cover and protect a damaged or weakened tooth. If you're looking for the best restorative dentist in Mesa AZ, Dr. Zach Hentges provides expert crown placement. By encasing the entire visible portion of the tooth, a dental crown restores its strength, shape, and natural appearance. Dental crowns are an excellent option for improving both the function and aesthetics of your smile."
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
            heading: "BENEFITS OF DENTAL CROWNS",
            text: [
                "Dental crowns offer numerous advantages for restoring damaged teeth. They provide superior protection, preventing further damage and decay. Crowns restore full chewing function, allowing you to eat all your favorite foods comfortably. They also improve the appearance of damaged or discolored teeth, giving you a natural, attractive smile. Modern porcelain crowns are virtually indistinguishable from natural teeth, providing both strength and aesthetics."
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING A DENTAL CROWN PROCEDURE",
            text: [
                "Getting a dental crown is a straightforward process. After removing decay, fractures, and/or old fillings and preparing the tooth, Dr. Hentges will take an impression of your tooth to create a custom crown that fits perfectly. He then will place a temporary crown to protect it. Most crowns are made from porcelain fused to metal for added durability and a natural look. The crown is carefully matched to the color of your existing teeth, so it blends seamlessly with your smile. Once your permanent crown is ready, it is cemented in place, restoring your tooth's function and appearance."
            ]
        },
        {
            heading: "FREQUENTLY ASKED QUESTIONS",
            text: [
                "Q: How long do dental crowns last?",
                "A: With proper care, dental crowns typically last 10-15 years or longer. The lifespan depends on your oral hygiene habits and regular dental checkups.",
                "",
                "Q: Are dental crowns painful?",
                "A: The procedure is performed under local anesthesia, so you shouldn't feel pain during the process. Some mild sensitivity may occur after the procedure, but this usually subsides quickly.",
                "",
                "Q: How long does it take to get a crown?",
                "A: The process typically takes two visits. During the first visit, we prepare the tooth and take impressions. The second visit, usually 1-2 weeks later, involves placing the permanent crown.",
                "",
                "Q: Can I eat normally with a crown?",
                "A: Yes! Once your crown is placed, you can eat normally. Crowns are designed to restore full chewing function and are as strong as natural teeth.",
                "",
                "Q: How much do dental crowns cost in Mesa, AZ?",
                "A: The cost varies depending on the material and complexity of your case. We offer payment plans and work with most insurance providers. Contact us for a personalized estimate."
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
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/dental-crown" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


