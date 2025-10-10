import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Dental Bridge | Mesa, AZ | Hentges Dental",
    description: "Replace missing teeth with custom dental bridges in Mesa, AZ. Restores your smile & bite function with natural-looking bridges. Call (480) 964-2131.",
    keywords: "dental bridges Mesa AZ, tooth replacement Mesa, missing teeth Mesa, dental bridge Mesa, bridge dentist Mesa, replace missing teeth Mesa",
};

export default function DentalBridge() {

    const title = "DENTAL BRIDGE";

    const content = [
        { heading: "", text: ["Tooth loss can result from a variety of causes, including dental trauma, advanced tooth decay, or gum disease. If you’re missing one or more teeth, you're not alone. It's important to understand your options for tooth replacement. Dental bridges are a proven solution for restoring a complete, natural-looking smile. At Hentges Dental, we’re here to help you learn how dental bridges work and how they can benefit your oral health."] },
        { heading: "WHAT ARE DENTAL BRIDGES?", text: ["A dental bridge is a restorative dental treatment designed to replace one or more missing teeth, helping you regain the function and appearance of your smile. Dental bridges are especially helpful for patients who have difficulty chewing or speaking due to missing teeth. There are several types of dental bridges, but the most common is the traditional bridge, which is used when there are healthy teeth on either side of the gap. This type of bridge uses dental crowns placed on the adjacent teeth (called abutment teeth) to support one or more artificial teeth (pontics) in between. Traditional bridges are often recommended for replacing missing molars or back teeth."] },
        { heading: "", text: ["Other types of dental bridges are available to address different needs. For example, a cantilever bridge is used when there is only one adjacent tooth next to the gap, making it a good option for replacing front teeth. Additionally, implant-supported bridges can be used when multiple teeth are missing, anchoring the bridge to dental implants for added stability. No matter the type, dental bridges are custom-made to blend seamlessly with your natural teeth, restoring both function and aesthetics."] },
        { heading: "WHY WOULD I NEED A BRIDGE?", text: ["Tooth loss can happen for many reasons, such as accidental injury, severe tooth decay, or advanced periodontal (gum) disease. When a tooth is lost, it’s important to replace it promptly to maintain your oral health and prevent further complications."] },
        { heading: "", text: [<>If you are missing teeth, replacing them is crucial to protect your remaining teeth and jawbone. Gaps left by missing teeth can cause neighboring teeth to shift out of alignment, leading to bite problems and increased risk of further tooth loss. Over time, missing teeth can also contribute to bone loss in the jaw. Dental bridges offer a reliable way to restore your smile, improve your ability to chew and speak, and support your long-term oral health. To learn more about dental bridges in Mesa, AZ, or to schedule a consultation, contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>.</>] },
    ]


    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


