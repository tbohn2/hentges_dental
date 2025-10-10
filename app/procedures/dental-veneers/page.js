import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Dental Veneers | Mesa, AZ | Hentges Dental",
    description: "Transform your smile with porcelain veneers in Mesa, AZ. Custom-made veneers correct chips, gaps, stains & imperfections. Get your dream smile. Call (480) 964-2131.",
    keywords: "dental veneers Mesa AZ, porcelain veneers Mesa, smile makeover Mesa, cosmetic veneers Mesa, perfect smile Mesa, veneer dentist Mesa",
};

export default function DentalVeneers() {
    const title = "DENTAL VENEERS";

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dr. Zach Hentges - Dental Veneers",
        "description": "Thin porcelain shells bonded to front teeth to improve appearance and correct cosmetic issues",
        "url": "https://hentgesdental.com/procedures/dental-veneers",
        "image": "https://hentgesdental.com/images/veneers.svg",
        "procedureType": "Cosmetic Dentistry",
        "bodyLocation": "Front Teeth",
        "preparation": "Consultation, tooth preparation, impressions",
        "followup": "Regular dental checkups and maintenance",
        "possibleComplications": "Sensitivity, chipping, debonding",
        "outcome": "Improved smile appearance with natural-looking results",
        "howPerformed": "Thin layer of enamel removed, custom porcelain veneers bonded to front surface of teeth",
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
        "medicalSpecialty": "Cosmetic Dentistry",
        "cost": "Varies by number of veneers",
        "duration": "2-3 weeks for completion"
    };

    const content = [
        {
            heading: "",
            text: [
                "Dental veneers are a popular cosmetic dentistry option designed to enhance the look of your teeth. If you're looking for the best cosmetic dentist in Mesa AZ, Dr. Zach Hentges uses modern techniques and quality dental labs to create your dream smile. Veneers can dramatically improve your smile by correcting imperfections and restoring both the function and beauty of your teeth."
            ]
        },
        {
            heading: "WHAT ARE VENEERS?",
            text: [
                "Veneers are thin, custom-made shells that are bonded to the front of your teeth. They are made from porcelain or composite resin and are designed to match the color, shape, and size of your natural teeth. Veneers are a versatile solution for a variety of dental concerns, including chipped or cracked teeth, gaps, uneven spacing, and stubborn discoloration."
            ]
        },
        {
            heading: "HISTORY",
            text: [
                "Concerns about the appearance of teeth have existed for centuries. If you look at classic portraits in museums, you’ll notice that people rarely smiled—often because they wanted to hide dental flaws. Even the Mona Lisa may have had teeth that were chipped, cracked, or discolored due to the limitations of dental care in her era."
            ]
        },
        {
            heading: "",
            text: [
                "The concept of dental veneers originated in Hollywood during the early days of the film industry. In the late 1920s, a dentist was asked to temporarily alter an actor’s smile for a movie role, using plastic or acrylic materials. These early veneers were not permanent, but the idea quickly caught on. Over time, dental professionals refined the technique, and porcelain veneers became the gold standard for a natural, long-lasting result. Porcelain has been trusted in dentistry for decades because it closely mimics the look and strength of real teeth."
            ]
        },
        {
            heading: "BENEFITS OF PORCELAIN VENEERS",
            text: [
                "Porcelain veneers offer numerous advantages for achieving your ideal smile. They provide a natural, translucent appearance that closely mimics real tooth enamel. Veneers are stain-resistant, so they maintain their brightness longer than natural teeth. They can correct multiple cosmetic issues simultaneously, including discoloration, gaps, chips, and minor misalignment. The procedure is minimally invasive, and results are immediate and long-lasting."
            ]
        },
        {
            heading: "CARING FOR YOUR VENEERS",
            text: [
                "Each set of veneers is custom-crafted to match your natural teeth, taking into account your skin tone, hair color, and overall appearance. The process involves gently preparing your teeth and bonding the veneers with strong dental cement. To keep your veneers looking their best, it's important to brush and floss daily and visit your dentist regularly for checkups. While veneers are durable, they aren't quite as strong as natural teeth, so avoid biting hard objects like ice or using your teeth as tools. With proper care, your porcelain veneers can provide a beautiful smile for many years."
            ]
        },
        {
            heading: "FREQUENTLY ASKED QUESTIONS",
            text: [
                "Q: How long do porcelain veneers last?",
                "A: With proper care, porcelain veneers typically last 10-15 years or longer. They're designed to be a long-term cosmetic solution.",
                "",
                "Q: Do veneers look natural?",
                "A: Yes! Porcelain veneers are designed to match your natural teeth in color, shape, and translucency. Most people can't tell the difference between veneers and natural teeth.",
                "",
                "Q: Are veneers reversible?",
                "A: The process involves removing a small amount of enamel, so it's not completely reversible. However, the amount removed is minimal and won't affect your tooth's health.",
                "",
                "Q: How much do veneers cost in Mesa, AZ?",
                "A: The cost varies depending on the number of veneers and complexity of your case. We offer payment plans and work with most insurance providers. Contact us for a personalized estimate.",
                "",
                "Q: Can veneers fix crooked teeth?",
                "A: Veneers can improve the appearance of mildly crooked teeth, but severe misalignment may require orthodontic treatment first. We'll evaluate your specific case during consultation."
            ]
        },
        {
            heading: "",
            text: [
                <>Interested in learning more about dental veneers in Mesa, AZ? Contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Our team is here to answer your questions and help you achieve the picture-perfect smile you deserve.</>
            ]
        },
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


