import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Teeth Whitening | Mesa, AZ | Hentges Dental",
    description: "Brighten your smile with professional teeth whitening. Safe, effective whitening treatments at Hentges Dental in Mesa, AZ. Get results in one visit.",
};

export default function TeethWhitening() {
    const title = "TEETH WHITENING";

    const content = [
        {
            heading: "",
            text: [
                "Professional teeth whitening is one of the most popular cosmetic dental procedures, offering Mesa residents a safe and effective way to brighten their smiles. At Hentges Dental, Dr. Zach Hentges provides both in-office and take-home whitening treatments to help East Valley patients achieve whiter, more confident smiles that can last for years with proper care."
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
            heading: "MAINTAINING YOUR WHITENED SMILE",
            text: [
                "To preserve your whitening results, avoid dark beverages and foods, quit smoking, maintain good oral hygiene, and consider touch-up treatments every 6-12 months. We can provide custom take-home trays for periodic maintenance and recommend whitening toothpaste to help extend your results."
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
        <ContentDisplay pageTitle={title} content={content} />
    );
}


