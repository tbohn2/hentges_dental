import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Porcelain Crowns | Mesa, AZ",
    description: "Restore damaged teeth with beautiful porcelain crowns. Natural-looking, durable dental crowns at Hentges Dental in Mesa, AZ.",
};

export default function PorcelainCrowns() {
    const title = "PORCELAIN CROWNS";

    const content = [
        {
            heading: "",
            text: [
                "At Hentges Dental, we offer porcelain crowns—custom-made dental restorations that completely cover damaged or weakened teeth, restoring their strength, function, and appearance. These durable, natural-looking crowns are crafted from high-quality porcelain materials that closely mimic the appearance of natural tooth enamel."
            ]
        },
        {
            heading: "WHAT ARE PORCELAIN CROWNS?",
            text: [
                "Porcelain crowns are tooth-shaped caps that are permanently cemented over existing teeth or dental implants. They're designed to match the color, shape, and size of your natural teeth, providing both functional and aesthetic benefits. Modern porcelain materials are incredibly strong and can withstand the forces of normal chewing and biting."
            ]
        },
        {
            heading: "WHEN ARE PORCELAIN CROWNS RECOMMENDED?",
            text: [
                "• Severely decayed teeth that can't be restored with fillings",
                "• Cracked or fractured teeth",
                "• Teeth with large, old fillings",
                "• Teeth that have undergone root canal treatment",
                "• Cosmetic improvements for misshapen or discolored teeth",
                "• To anchor dental bridges",
                "• To cover dental implants"
            ]
        },
        {
            heading: "TYPES OF PORCELAIN CROWNS",
            text: [
                "• All-Porcelain Crowns: Made entirely from porcelain, offering the most natural appearance",
                "• Porcelain-Fused-to-Metal (PFM): Strong metal base with porcelain overlay",
                "• Zirconia Crowns: Extremely durable, metal-free option",
                "• E-max Crowns: High-strength lithium disilicate porcelain",
                "• Same-Day Crowns: Created using CAD/CAM technology in a single visit"
            ]
        },
        {
            heading: "THE CROWN PLACEMENT PROCESS",
            text: [
                "Getting a porcelain crown typically requires two visits. During your first appointment, Dr. Zach Hentges prepares the tooth, takes impressions, and places a temporary crown. Your custom crown is then created in our dental laboratory. At your second visit, we remove the temporary crown and permanently cement your new porcelain crown in place."
            ]
        },
        {
            heading: "BENEFITS OF PORCELAIN CROWNS",
            text: [
                "Porcelain crowns offer numerous advantages, including excellent durability (often lasting 10-15 years or more), natural appearance that blends seamlessly with your smile, and the ability to restore both function and aesthetics. They're also biocompatible, meaning they won't cause allergic reactions, and they resist staining better than natural teeth."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to restore your damaged tooth with a beautiful porcelain crown? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your consultation and learn more about your crown options.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/porcelain-crowns" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


