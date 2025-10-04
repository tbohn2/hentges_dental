import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Oral Appliance Therapy | Mesa, AZ | Hentges Dental",
    description: "Treat sleep apnea and TMJ disorders with custom oral appliances. Learn about oral appliance therapy at Hentges Dental in Mesa, AZ.",
};

export default function OralApplianceTherapy() {
    const title = "ORAL APPLIANCE THERAPY";

    const content = [
        {
            heading: "",
            text: [
                "Dr. Zach Hentges offers oral appliance therapy—a non-invasive treatment approach that uses custom-fitted dental devices to address various conditions, including sleep apnea, snoring, and temporomandibular joint (TMJ) disorders. These comfortable, removable appliances work by repositioning the jaw and tongue to improve breathing and reduce symptoms."
            ]
        },
        {
            heading: "WHAT CONDITIONS CAN ORAL APPLIANCE THERAPY TREAT?",
            text: [
                "• Obstructive sleep apnea (OSA)",
                "• Chronic snoring",
                "• TMJ disorders and jaw pain",
                "• Bruxism (teeth grinding)",
                "• Sleep-related breathing disorders",
                "• Headaches caused by jaw misalignment",
                "• Neck and shoulder pain related to jaw position"
            ]
        },
        {
            heading: "HOW DO ORAL APPLIANCES WORK?",
            text: [
                "Oral appliances work by gently repositioning your lower jaw forward, which helps keep your airway open during sleep. This forward positioning prevents the tongue and soft tissues from collapsing into the throat, reducing or eliminating snoring and sleep apnea episodes. For TMJ disorders, appliances help realign the jaw joint and reduce muscle tension."
            ]
        },
        {
            heading: "TYPES OF ORAL APPLIANCES",
            text: [
                "There are several types of oral appliances, each designed for specific conditions. Mandibular advancement devices (MADs) are the most common for sleep apnea, gently moving the lower jaw forward. Tongue retaining devices hold the tongue in place to prevent airway obstruction. TMJ appliances help stabilize the jaw joint and reduce muscle strain."
            ]
        },
        {
            heading: "BENEFITS OF ORAL APPLIANCE THERAPY",
            text: [
                "Oral appliance therapy offers numerous advantages over other treatment options. It's non-invasive, comfortable to wear, and doesn't require surgery or medication. Patients often experience improved sleep quality, reduced snoring, and relief from TMJ symptoms. The appliances are portable, easy to clean, and can be adjusted as needed."
            ]
        },
        {
            heading: "WHO IS A GOOD CANDIDATE?",
            text: [
                "Ideal candidates for oral appliance therapy include those with mild to moderate sleep apnea, chronic snoring, or TMJ disorders. A thorough evaluation, including a sleep study, helps determine if oral appliance therapy is the right treatment option. We work closely with sleep specialists to ensure the best outcomes for our patients."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to explore oral appliance therapy for better sleep and jaw health? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your consultation and learn more about this comfortable treatment option.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


