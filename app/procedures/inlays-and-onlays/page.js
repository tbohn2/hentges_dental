import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Inlays and Onlays | Mesa, AZ",
    description: "Inlays and onlays are custom-made dental restorations that repair damaged teeth. Learn about these conservative treatment options at Hentges Dental in Mesa, AZ.",
};

export default function InlaysAndOnlays() {
    const title = "INLAYS AND ONLAYS";

    const content = [
        {
            heading: "",
            text: [
                "At Hentges Dental in Mesa, Arizona, we specialize in creating custom inlays and onlays that provide a conservative alternative to dental crowns. These precision-crafted restorations are designed to repair teeth that have moderate damage or decay, offering both strength and aesthetics while preserving more of your natural tooth structure."
            ]
        },
        {
            heading: "WHAT ARE INLAYS AND ONLAYS?",
            text: [
                "Inlays and onlays are indirect restorations, meaning they are created in a dental laboratory and then bonded to your tooth. An inlay fits within the cusps (bumps) of your tooth, while an onlay extends over one or more cusps. Both are made from durable materials like porcelain or composite resin and are color-matched to blend seamlessly with your natural teeth."
            ]
        },
        {
            heading: "WHEN ARE INLAYS AND ONLAYS RECOMMENDED?",
            text: [
                "• Moderate tooth decay that is too extensive for a filling but doesn't require a full crown",
                "• Cracked or fractured teeth that need structural reinforcement",
                "• Teeth with large, old fillings that need replacement",
                "• Cosmetic improvements for teeth with minor imperfections",
                "• Conservative restoration that preserves healthy tooth structure"
            ]
        },
        {
            heading: "THE INLAY/ONLAY PROCESS",
            text: [
                "The process typically requires two visits to our Mesa dental office. During your first appointment, Dr. Hentges prepares the tooth and takes impressions that are sent to our trusted dental laboratory. A temporary restoration protects your tooth while your custom inlay or onlay is being crafted. At your second visit, we remove the temporary restoration and permanently bond your new restoration in place."
            ]
        },
        {
            heading: "BENEFITS OF INLAYS AND ONLAYS",
            text: [
                "Inlays and onlays offer several advantages over traditional fillings and crowns. They provide superior strength and durability, often lasting 10-15 years or longer. The custom fit ensures optimal comfort and function, while the natural appearance maintains your smile's aesthetics. Most importantly, they preserve more of your natural tooth structure compared to crowns."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to restore your damaged tooth with a custom inlay or onlay? Contact our office in Mesa, Arizona at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your consultation and learn more about these conservative treatment options available to East Valley residents.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/inlays-and-onlays" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


