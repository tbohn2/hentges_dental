import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Emergency Dentistry | Mesa, AZ | Hentges Dental",
    description: "At Hentges Dental, we provide emergency dentistry services to help you restore your smile.",
};

export default function EmergencyDentistry() {

    const title = "EMERGENCY DENTISTRY";

    const content = [
        {
            heading: '',
            text: [
                "Dental emergencies in Mesa, AZ can happen suddenly, often due to accidents, injuries, or trauma to the mouth or face. Acting quickly during a dental emergency can be the key to saving your tooth and preventing further complications. At Hentges Dental, we reserve time each day for emergency dental appointments to ensure you get the urgent care you need. Below are some essential tips to help you handle common dental emergencies until you can see our emergency dentist."
            ]
        },
        {
            heading: "BROKEN FILLINGS",
            text: [
                "A broken or lost dental filling is a frequent dental emergency. If you notice your filling has come loose or fractured, contact our Mesa dental office right away. Leaving a tooth exposed can lead to further decay or sensitivity. Dr. Zach Hentges can quickly restore your tooth with a new filling, protecting it from bacteria and restoring its strength."
            ]
        },
        {
            heading: "KNOCKED-OUT TOOTH",
            text: [
                "If a permanent tooth is knocked out, immediate action is crucial for the best chance of saving it. Keep the tooth moist at all times—ideally, place it gently back in the socket without touching the root, or store it in a container of milk (preferred) or water. Avoid scrubbing the tooth or removing any attached tissue. Seek emergency dental care within an hour for the highest likelihood of successful reimplantation."
            ]
        },
        {
            heading: "CHIPPED OR BROKEN TEETH",
            text: [
                "For a chipped or broken tooth, collect any fragments and rinse your mouth with warm water to clean the area. Even if the damage seems minor, it’s important to have it evaluated by a dentist, as small chips can worsen over time. Depending on the severity, we may recommend dental bonding or a dental crown to restore your tooth’s appearance and function."
            ]
        },
        {
            heading: "DENTAL PAIN & TRAUMA",
            text: [
                "Severe tooth pain or oral trauma are common reasons to seek emergency dental care. Sports injuries and accidents can often be prevented with a custom mouthguard, but if you experience trauma, use a cold compress to reduce swelling. Sudden toothaches may signal infection or decay and could require treatments like a root canal. Don’t ignore persistent or severe dental pain—contact our office for prompt evaluation."
            ]
        },
        {
            heading: "DENTAL ABSCESS",
            text: [
                "A dental abscess is a serious infection near the root of a tooth or in the gums, and requires immediate attention. Left untreated, an abscess can damage surrounding teeth and tissue. If you suspect an abscess, it’s important to see an emergency dentist as soon as possible for drainage and treatment. Often, a root canal may be needed to fully resolve the infection and restore your oral health."
            ]
        },
        {
            heading: "EXCESSIVE BLEEDING",
            text: [
                "Uncontrolled bleeding in the mouth is often due to injuries to the gums, lips, cheeks, or tongue. Rinse gently with a saltwater solution and apply a clean, moist gauze pad to the area. Over-the-counter pain relievers like ibuprofen can help manage discomfort. If bleeding persists, contact Hentges Dental in Mesa immediately for emergency dental care."
            ]
        },
        {
            heading: "SCHEDULE YOUR EMERGENCY APPOINTMENT NOW!",
            text: [
                <>If you’re experiencing a dental emergency in Mesa, AZ, don’t wait—call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> to schedule your emergency dental appointment with Hentges Dental right away!</>
            ]
        },
    ]


    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


