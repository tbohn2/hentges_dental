import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Oral Cancer Screening | Mesa, AZ",
    description: "Early detection saves lives. Get comprehensive oral cancer screenings at Hentges Dental in Mesa, AZ. Quick, painless, and potentially life-saving.",
};

export default function OralCancerScreening() {
    const title = "ORAL CANCER SCREENING";

    const content = [
        {
            heading: "",
            text: [
                "Oral cancer screening is a crucial preventive measure that can save lives through early detection. Dr. Zach Hentges performs comprehensive oral cancer screenings as part of your routine dental examinations. These quick, painless screenings help identify potential signs of oral cancer in their earliest stages when treatment is most effective."
            ]
        },
        {
            heading: "WHAT IS ORAL CANCER?",
            text: [
                "Oral cancer can develop in any part of the mouth, including the lips, tongue, cheeks, floor of the mouth, hard and soft palate, sinuses, and throat. Early-stage oral cancer often has no symptoms, making regular screenings essential. When detected early, oral cancer has a high survival rate, but late-stage diagnosis significantly reduces treatment success."
            ]
        },
        {
            heading: "RISK FACTORS FOR ORAL CANCER",
            text: [
                "• Tobacco use (smoking, chewing, or snuff)",
                "• Heavy alcohol consumption",
                "• Human papillomavirus (HPV) infection",
                "• Excessive sun exposure (lip cancer)",
                "• Poor oral hygiene",
                "• Age (most common in people over 40)",
                "• Gender (men are twice as likely to develop oral cancer)",
                "• Family history of cancer"
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING SCREENING",
            text: [
                "Our oral cancer screening is quick, comfortable, and non-invasive. We'll examine your mouth, lips, tongue, and throat for any unusual changes, including sores, lumps, white or red patches, or other abnormalities. We may also feel for lumps in your neck and check for any changes in your voice or swallowing. The entire process takes just a few minutes."
            ]
        },
        {
            heading: "SIGNS AND SYMPTOMS TO WATCH FOR",
            text: [
                "• Sores that don't heal within two weeks",
                "• Red or white patches in the mouth",
                "• Lumps or thickening of oral tissues",
                "• Persistent sore throat or hoarseness",
                "• Difficulty chewing or swallowing",
                "• Numbness in the mouth or lips",
                "• Unexplained bleeding in the mouth",
                "• Loose teeth without apparent cause"
            ]
        },
        {
            heading: "WHY REGULAR SCREENINGS MATTER",
            text: [
                "Oral cancer screenings are particularly important because early-stage oral cancer often has no symptoms. By the time symptoms appear, the cancer may have already spread. Regular screenings allow us to detect precancerous changes and early-stage cancers when they're most treatable. We recommend annual screenings for all adults, with more frequent screenings for high-risk patients."
            ]
        },
        {
            heading: "",
            text: [
                <>Don&apos;t wait for symptoms to appear. Schedule your oral cancer screening at Hentges Dental in Mesa, AZ by calling <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Early detection could save your life.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


