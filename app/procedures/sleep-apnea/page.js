import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Sleep Apnea Treatment | Mesa, AZ",
    description: "Treat sleep apnea with custom oral appliances. Non-invasive sleep apnea treatment at Hentges Dental in Mesa, AZ. Improve your sleep quality.",
};

export default function SleepApnea() {
    const title = "SLEEP APNEA TREATMENT";

    const content = [
        {
            heading: "",
            text: [
                "Sleep apnea is a serious sleep disorder that affects millions of people, causing repeated breathing interruptions during sleep. At Hentges Dental, we offer custom oral appliance therapy as a comfortable, non-invasive alternative to CPAP machines for treating mild to moderate sleep apnea."
            ]
        },
        {
            heading: "WHAT IS SLEEP APNEA?",
            text: [
                "Sleep apnea occurs when your breathing repeatedly stops and starts during sleep. The most common type, obstructive sleep apnea (OSA), happens when throat muscles relax and block your airway. This can lead to fragmented sleep, daytime fatigue, and serious health complications if left untreated."
            ]
        },
        {
            heading: "SIGNS AND SYMPTOMS OF SLEEP APNEA",
            text: [
                "• Loud, chronic snoring",
                "• Gasping or choking during sleep",
                "• Frequent awakenings throughout the night",
                "• Morning headaches",
                "• Excessive daytime sleepiness",
                "• Difficulty concentrating",
                "• Irritability and mood changes",
                "• High blood pressure"
            ]
        },
        {
            heading: "HOW ORAL APPLIANCES TREAT SLEEP APNEA",
            text: [
                "Custom oral appliances work by gently repositioning your lower jaw forward during sleep, which helps keep your airway open. This prevents the tongue and soft tissues from collapsing into the throat, reducing or eliminating sleep apnea episodes. These devices are comfortable, portable, and easy to maintain."
            ]
        },
        {
            heading: "BENEFITS OF ORAL APPLIANCE THERAPY",
            text: [
                "Oral appliances offer several advantages over CPAP therapy, including greater comfort, portability for travel, no noise or electricity required, and easier maintenance. Many patients find them more comfortable to wear and are more likely to use them consistently. They're also covered by most dental insurance plans."
            ]
        },
        {
            heading: "WHO IS A GOOD CANDIDATE?",
            text: [
                "Ideal candidates for oral appliance therapy include those with mild to moderate sleep apnea, patients who cannot tolerate CPAP therapy, and people who travel frequently. A thorough evaluation, including a sleep study, helps determine if oral appliance therapy is the right treatment option for your specific needs."
            ]
        },
        {
            heading: "",
            text: [
                <>Struggling with sleep apnea? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your consultation and learn how oral appliance therapy can improve your sleep and overall health.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


