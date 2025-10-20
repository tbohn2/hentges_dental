import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Teeth Whitening | Mesa, AZ",
    description: "Professional teeth whitening in Mesa, AZ brightens your smile safely & effectively. In-office & take-home whitening treatments. Get dramatic results. Call (480) 964-2131.",
    keywords: "teeth whitening Mesa AZ, professional whitening Mesa, in-office whitening Mesa, take-home whitening Mesa, bright smile Mesa, whitening dentist Mesa",
};

export default function TeethWhitening() {
    const title = "TEETH WHITENING";

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dr. Zach Hentges - Teeth Whitening",
        "description": "Professional teeth whitening treatment to brighten and whiten teeth safely and effectively",
        "url": "https://hentgesdental.com/procedures/teeth-whitening",
        "image": "https://hentgesdental.com/images/tooth-sparkle.svg",
        "procedureType": "Cosmetic Dentistry",
        "bodyLocation": "Teeth",
        "preparation": "Consultation, dental cleaning, shade assessment",
        "followup": "Maintenance treatments as needed",
        "possibleComplications": "Temporary sensitivity, gum irritation",
        "outcome": "Brighter, whiter smile with improved appearance",
        "howPerformed": "Professional whitening gel applied to teeth, activated with special light or custom trays for home use",
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
        "cost": "Varies by treatment type",
        "duration": "1-2 weeks for take-home, 1-2 hours for in-office"
    };

    const content = [
        {
            heading: "",
            text: [
                "Professional teeth whitening is one of the most popular cosmetic dental procedures, offering Mesa residents a safe and effective way to brighten their smiles. If you're looking for the best teeth whitening dentist in Mesa AZ, Dr. Zach Hentges provides both in-office and take-home whitening treatments to help East Valley patients achieve whiter, more confident smiles that can last for years with proper care."
            ]
        },
        {
            heading: "WHY CHOOSE PROFESSIONAL TEETH WHITENING?",
            text: [
                "Professional teeth whitening offers significant advantages over over-the-counter products. Our in-office treatments with Philips ZOOM! Whitening use higher concentrations of whitening agents for faster, more dramatic results. We also provide custom-fitted trays for take-home treatments, ensuring even coverage and maximum effectiveness while protecting your gums from irritation."
            ]
        },
        {
            heading: "TYPES OF TEETH WHITENING TREATMENTS",
            text: [
                "• In-Office Whitening: Fast, dramatic results in a single visit",
                "• Take-Home Whitening: Custom trays for gradual whitening at home",
                "• Combination Treatment: In-office treatment followed by take-home maintenance",
                "• Whitening for Sensitive Teeth: Special formulations for sensitive patients",
                "• Whitening Touch-ups: Maintenance treatments to preserve results"
            ]
        },
        {
            heading: "WHAT CAUSES TOOTH DISCOLORATION?",
            text: [
                "Tooth discoloration can occur for various reasons, including consumption of dark beverages (coffee, tea, wine), smoking or tobacco use, certain medications, aging, and genetics. Some discoloration is surface-level and responds well to whitening, while deeper stains may require alternative treatments like veneers or bonding."
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING WHITENING",
            text: [
                "In-office whitening typically takes 60-90 minutes and can lighten teeth by several shades in a single visit. Take-home treatments involve wearing custom trays for 30 minutes to several hours daily for 1-2 weeks. Some patients may experience temporary sensitivity, which usually subsides within a few days and can be managed with desensitizing products."
            ]
        },
        {
            heading: "BENEFITS OF PROFESSIONAL TEETH WHITENING",
            text: [
                "Professional teeth whitening offers numerous advantages for achieving a brighter smile. It's safer than over-the-counter products, with controlled concentrations of whitening agents. Professional treatments provide faster, more dramatic results that last longer. Custom-fitted trays ensure even whitening and protect your gums from irritation. The results are predictable and can be customized to your desired shade."
            ]
        },
        {
            heading: "MAINTAINING YOUR WHITENED SMILE",
            text: [
                "To preserve your whitening results, avoid dark beverages and foods, quit smoking, maintain good oral hygiene, and consider touch-up treatments every 6-12 months. We can provide custom take-home trays for periodic maintenance and recommend whitening toothpaste to help extend your results."
            ]
        },
        {
            heading: "FREQUENTLY ASKED QUESTIONS",
            text: [
                "Q: How white can my teeth get?",
                "A: Results vary by individual, but most patients can achieve 2-8 shades lighter. We'll discuss realistic expectations during your consultation.",
                "",
                "Q: Is teeth whitening safe?",
                "A: Yes, when performed by a dental professional. We use controlled concentrations of whitening agents and protect your gums during treatment.",
                "",
                "Q: How long do whitening results last?",
                "A: Results typically last 1-3 years with proper maintenance. Avoiding staining foods and maintaining good oral hygiene helps preserve results.",
                "",
                "Q: Will whitening work on all types of stains?",
                "A: Whitening works best on extrinsic (surface) stains. Intrinsic stains or discoloration from medications may require alternative treatments like veneers.",
                "",
                "Q: How much does teeth whitening cost in Mesa, AZ?",
                "A: Costs vary by treatment type. We offer both in-office and take-home options with flexible payment plans. Contact us for pricing information."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to brighten your smile? Contact us at Hentges Dental in Mesa, Arizona at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your teeth whitening consultation and discover which treatment option is best for you.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/teeth-whitening" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


