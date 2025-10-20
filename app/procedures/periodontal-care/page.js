import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Periodontal Care | Mesa, AZ",
    description: "Expert gum disease treatment in Mesa, AZ with deep cleanings & periodontal care. Prevents tooth loss & maintains healthy gums. Call (480) 964-2131.",
    keywords: "periodontal care Mesa AZ, gum disease treatment Mesa, deep cleaning Mesa, periodontal disease Mesa, gum treatment Mesa, periodontist Mesa",
};

export default function PeriodontalCare() {
    const title = "PERIODONTAL CARE";

    const content = [
        {
            heading: "",
            text: [
                "Periodontal care focuses on the health of your gums and the supporting structures of your teeth. At Hentges Dental, we provide comprehensive periodontal treatment to prevent, diagnose, and treat gum disease. Healthy gums are essential for maintaining strong teeth and overall oral health."
            ]
        },
        {
            heading: "WHAT IS PERIODONTAL DISEASE?",
            text: [
                "Periodontal disease, commonly known as gum disease, is an infection of the tissues that surround and support your teeth. It begins with gingivitis, characterized by red, swollen, and bleeding gums. If left untreated, it can progress to periodontitis, which can lead to tooth loss and has been linked to serious health conditions like heart disease and diabetes."
            ]
        },
        {
            heading: "STAGES OF GUM DISEASE",
            text: [
                "• Gingivitis: The earliest stage, marked by inflammation and bleeding gums",
                "• Mild Periodontitis: Gums begin to pull away from teeth, forming pockets",
                "• Moderate Periodontitis: Deeper pockets form, bone loss begins",
                "• Advanced Periodontitis: Significant bone loss, teeth may become loose or fall out"
            ]
        },
        {
            heading: "SIGNS YOU MAY NEED PERIODONTAL CARE",
            text: [
                "• Bleeding gums during brushing or flossing",
                "• Red, swollen, or tender gums",
                "• Persistent bad breath",
                "• Receding gums or longer-looking teeth",
                "• Loose or shifting teeth",
                "• Pain when chewing",
                "• Pus between teeth and gums",
                "• Changes in bite or tooth alignment"
            ]
        },
        {
            heading: "PERIODONTAL TREATMENT OPTIONS",
            text: [
                "Our periodontal treatments range from non-surgical to surgical approaches, depending on the severity of your condition. Scaling and root planing (deep cleaning) removes plaque and tartar from below the gumline. For advanced cases, we may recommend surgical procedures like gum grafts or guided tissue regeneration to restore healthy gum tissue and bone."
            ]
        },
        {
            heading: "PREVENTING GUM DISEASE",
            text: [
                "Prevention is the best approach to periodontal health. Regular dental cleanings, proper brushing and flossing techniques, and maintaining a healthy lifestyle all contribute to gum health. We work with you to develop a personalized home care routine and may recommend antimicrobial treatments or special mouth rinses to help control bacterial growth."
            ]
        },
        {
            heading: "",
            text: [
                <>Concerned about your gum health? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your periodontal evaluation and learn how we can help you achieve and maintain healthy gums.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/periodontal-care" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


