import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | TMJ Treatment | Mesa, AZ",
    description: "Relieve TMJ pain and dysfunction with expert treatment. Custom TMJ therapy at Hentges Dental in Mesa, AZ. Get relief from jaw pain and headaches. Call today!",
};

export default function TMJ() {
    const title = "TMJ TREATMENT";

    const content = [
        {
            heading: "",
            text: [
                "TMJ (temporomandibular joint) disorders affect the jaw joint and surrounding muscles, causing pain, clicking, and limited jaw movement. At Hentges Dental, we provide comprehensive TMJ treatment to help relieve your symptoms and restore normal jaw function. Dr. Zach Hentges' approach combines conservative treatments with advanced therapies for optimal results."
            ]
        },
        {
            heading: "WHAT IS TMJ DISORDER?",
            text: [
                "TMJ disorder refers to problems with the temporomandibular joint, which connects your jawbone to your skull. This complex joint allows you to open and close your mouth, chew, and speak. When the joint or surrounding muscles become inflamed or misaligned, it can cause a variety of painful symptoms that affect your daily life."
            ]
        },
        {
            heading: "COMMON TMJ SYMPTOMS",
            text: [
                "• Jaw pain or tenderness",
                "• Clicking, popping, or grinding sounds when opening/closing mouth",
                "• Difficulty opening or closing your mouth",
                "• Locking of the jaw joint",
                "• Headaches, especially in the temples",
                "• Ear pain or ringing in the ears",
                "• Neck and shoulder pain",
                "• Facial pain or swelling"
            ]
        },
        {
            heading: "CAUSES OF TMJ DISORDER",
            text: [
                "TMJ disorders can result from various factors, including teeth grinding or clenching, jaw injury or trauma, arthritis, stress, poor posture, and misaligned teeth or bite. Some people may have a genetic predisposition to TMJ problems, while others develop symptoms due to lifestyle factors or dental issues."
            ]
        },
        {
            heading: "TMJ TREATMENT OPTIONS",
            text: [
                "Our TMJ treatment approach begins with conservative, non-invasive therapies. These may include custom oral appliances (splints or mouthguards), physical therapy exercises, stress management techniques, and lifestyle modifications. For more severe cases, we may recommend advanced treatments like Botox injections or surgical intervention."
            ]
        },
        {
            heading: "LIFESTYLE CHANGES FOR TMJ RELIEF",
            text: [
                "Simple lifestyle modifications can significantly improve TMJ symptoms. Avoid hard, chewy foods; practice stress reduction techniques; maintain good posture; avoid excessive jaw movements like gum chewing; and apply heat or cold packs to the affected area. We'll work with you to develop a personalized treatment plan that addresses your specific needs."
            ]
        },
        {
            heading: "",
            text: [
                <>Suffering from TMJ pain? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your TMJ evaluation and learn how we can help relieve your jaw pain and restore your comfort.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/tmj" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


