import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Wisdom Tooth Extractions | Mesa, AZ",
    description: "Safe, comfortable wisdom tooth extractions when necessary. Expert oral surgery at Hentges Dental in Mesa, AZ. Call today!",
};

export default function WisdomToothExtractions() {
    const title = "WISDOM TOOTH EXTRACTIONS";

    const content = [
        {
            heading: "",
            text: [
                "Wisdom teeth are the third molars that typically erupt between the ages of 17 and 25. They are the last teeth to erupt and are often the most difficult to clean. Many patients have chosen Dr. Zach Hentges to remove their wisdom teeth due to his expertise and care. He is a trusted dentist in Mesa, AZ and has been in practice for over 10 years. He has the experience and skill to remove wisdom teeth with ease and comfort.",
            ]
        },
        {
            heading: "WHEN ARE WISDOM TEETH EXTRACTIONS NECESSARY?",
            text: [
                "Dr. Hentges will diagnose if the wisdom teeth should be extracted by examining the patient's teeth and taking a panoramic x-ray that shows the wisdom teeth and the surrounding teeth. If the wisdom teeth are impacted, causing pain, infection, or other problems, they should be extracted. In some cases, the patient is referred to an oral surgeon for the extraction due to the complexity of the extraction.",
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING A WISDOM TEETH EXTRACTION",
            text: [
                "Wisdom teeth extractions are typically performed under local anesthesia, with the patient awake. During the procedure, Dr. Hentges will ensure the patient is comfortable and relaxed as possible during the procedure, using the most advanced techniques and equipment to ensure a successful extraction.",
            ]
        },
        {
            heading: "AFTERCARE AND RECOVERY",
            text: [
                "After the wisdom tooth extraction, the patient will need to follow the aftercare instructions provided by Dr. Hentges. This includes taking pain medication, avoiding smoking and drinking through straws, eating soft foods, and avoiding hard foods. It is normal to experience some swelling and pain after the extraction, which can be managed with icing the area for the first 24 hours (wrapped in a cold compress for 20 minutes on and 20 minutes off) and taking over-the-counter pain medication.",
            ]
        },
        {
            heading: "",
            text: [
                <>If you are experiencing pain or other problems with your wisdom teeth, don&apos;t wait to seek treatment. At Hentges Dental in Mesa, AZ, we can quickly and comfortably remove your wisdom teeth in a single visit. Call us today at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/wisdom-tooth-extractions" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}