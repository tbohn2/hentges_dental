import ContentDisplay from "../../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Tooth Extraction | Mesa, AZ | Hentges Dental",
    description: "Safe, comfortable tooth extraction when necessary. Expert oral surgery at Hentges Dental in Mesa, AZ. Call today!",
};

export default function ToothExtraction() {
    const title = "TOOTH EXTRACTION";

    const content = [
        {
            heading: "",
            text: [
                <>At Hentges Dental, we strive to save and restore teeth. However, a tooth extraction is sometimes necessary when the tooth cannot be saved through other treatments. Dr. Zach Hentges performs extractions with the utmost care and comfort, using advanced techniques and anesthesia to ensure a pain-free experience. We also discuss replacement options, such as <Link href="/procedures/dental-implants" className="text-tertiary hover:underline">dental implants</Link>, <Link href="/procedures/dental-bridge" className="text-tertiary hover:underline">bridges</Link>, <Link href="/procedures/dentures" className="text-tertiary hover:underline">partial dentures</Link>, or <Link href="/procedures/dentures" className="text-tertiary hover:underline">full dentures</Link>, to maintain your oral health and smile.</>
            ]
        },
        {
            heading: "WHEN IS TOOTH EXTRACTION NECESSARY?",
            text: [
                "• Severely decayed teeth that cannot be restored",
                "• Advanced periodontal disease causing loose teeth",
                "• Impacted wisdom teeth causing pain or infection",
                "• Teeth fractured beyond repair",
                "• Overcrowded teeth requiring orthodontic treatment",
                "• Teeth damaged by trauma or injury",
                "• Preparation for dentures or dental implants",
                "• Infection that cannot be treated with root canal therapy"
            ]
        },
        {
            heading: "TYPES OF TOOTH EXTRACTIONS",
            text: [
                "Simple extractions involve removing visible teeth using specialized instruments. Surgical extractions are more complex and may be needed for impacted teeth, broken teeth, or teeth with extensive decay. We use local anesthesia for both types, and sedation options are available for patients with dental anxiety."
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING EXTRACTION",
            text: [
                "While many fear getting a tooth pulled, it is a common procedure that is often necessary to save your oral health, and Dr. Hentges will make sure you are comfortable and relaxed as possible during the procedure.", "Before the procedure, he will numb the area with local anesthesia to ensure your comfort. For simple extractions, the tooth is loosened and removed with forceps. Surgical extractions may require a small incision in the gum tissue. The entire process typically takes 30-60 minutes, and you'll be given detailed aftercare instructions."
            ]
        },
        {
            heading: "AFTERCARE AND RECOVERY",
            text: [
                "Proper aftercare is essential for healing. You'll need to bite on gauze for 30-60 minutes to control bleeding, avoid smoking and drinking through straws, eat soft foods, and take prescribed medications as directed. Most patients experience mild discomfort for a few days, which can be managed with over-the-counter pain medication."
            ]
        },
        {
            heading: "REPLACEMENT OPTIONS AFTER EXTRACTION",
            text: [
                "After tooth extraction, we'll discuss options to replace missing teeth to maintain your oral health and prevent shifting of remaining teeth. Dr. Hentges will help you choose the best solution based on your specific needs, budget, and long-term oral health goals:",
                <Link key="dental-implants" href="/procedures/dental-implants" className="text-tertiary hover:underline">Dental Implants</Link>,
                <Link key="bridges" href="/procedures/dental-bridge" className="text-tertiary hover:underline">Bridges</Link>,
                <Link key="partial-dentures" href="/procedures/dentures" className="text-tertiary hover:underline">Partial Dentures</Link>,
                <Link key="full-dentures" href="/procedures/dentures" className="text-tertiary hover:underline">Full Dentures</Link>
            ]
        },
        {
            heading: "",
            text: [
                <>Need a tooth extraction? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your consultation and learn about your treatment options.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


