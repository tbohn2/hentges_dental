import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Root Canal Treatment | Mesa, AZ | Hentges Dental",
    description: "Save your tooth with comfortable root canal treatment. Expert endodontic care at Hentges Dental in Mesa, AZ. Pain-free, effective treatment.",
};

export default function RootCanal() {
    const title = "ROOT CANAL TREATMENT";

    const content = [
        {
            heading: "",
            text: [
                "Root canal treatment is a highly effective procedure designed to save teeth that are severely infected or damaged. Despite its reputation, modern root canal therapy, as performed at Hentges Dental in Mesa, Arizona, is usually pain-free and completed in just one or two visits. Dr. Zach Hentges uses advanced techniques and anesthesia to ensure your comfort throughout the procedure."
            ]
        },
        {
            heading: "WHAT IS A ROOT CANAL?",
            text: [
                "A root canal is a dental procedure that removes infected or damaged pulp from inside your tooth. The pulp contains nerves, blood vessels, and connective tissue. When this tissue becomes infected due to deep decay, cracks, or trauma, it can cause severe pain and lead to tooth loss if left untreated."
            ]
        },
        {
            heading: "SIGNS YOU MAY NEED A ROOT CANAL",
            text: [
                "• Severe tooth pain, especially when chewing or applying pressure",
                "• Prolonged sensitivity to hot or cold temperatures",
                "• Darkening or discoloration of the tooth",
                "• Swollen, tender gums near the affected tooth",
                "• A persistent pimple on the gums",
                "• Deep decay or a large filling",
                "• Cracked or fractured tooth",
                "• Previous dental trauma"
            ]
        },
        {
            heading: "THE ROOT CANAL PROCESS",
            text: [
                "During root canal treatment, we'll numb the area with local anesthesia, then create a small opening in the tooth to access the pulp chamber. We'll carefully remove the infected pulp, clean and disinfect the root canals, and fill them with a biocompatible material. Finally, we'll seal the tooth with a filling or crown to restore its strength and function."
            ]
        },
        {
            heading: "BENEFITS OF ROOT CANAL TREATMENT",
            text: [
                "Root canal treatment saves your natural tooth, preventing the need for extraction and replacement. It eliminates pain and infection while preserving your natural bite and appearance. The procedure has a high success rate (over 95%) and allows you to keep your natural tooth for many years with proper care."
            ]
        },
        {
            heading: "AFTERCARE AND RECOVERY",
            text: [
                "After root canal treatment, you may experience mild discomfort for a few days, which can usually be managed with over-the-counter pain medication. It's important to avoid chewing on the treated tooth until it's fully restored with a crown or filling. Good oral hygiene and regular dental visits will help ensure the long-term success of your treatment."
            ]
        },
        {
            heading: "",
            text: [
                <>Experiencing severe tooth pain? Don&apos;t wait – contact Dr. Zach Hentges at Hentges Dental in Mesa, Arizona at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your root canal consultation. We can help save your tooth and relieve your pain.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


