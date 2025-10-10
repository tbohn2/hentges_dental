import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Emergency Dentistry | Mesa, AZ | Hentges Dental",
    description: "Emergency dental care in Mesa, AZ. Same-day appointments for tooth pain, broken teeth, knocked-out teeth & dental trauma. Urgent care. Call (480) 964-2131.",
    keywords: "emergency dentist Mesa AZ, dental emergency Mesa, tooth pain Mesa, broken tooth Mesa, knocked out tooth Mesa, urgent dental care Mesa, East Valley emergency dentist, North Mesa emergency dentist, Tempe emergency dentist, Chandler emergency dentist, Gilbert emergency dentist, Apache Junction emergency dentist",
};

export default function EmergencyDentistry() {

    const title = "EMERGENCY DENTISTRY";

    const content = [
        {
            heading: '',
            text: [
                "Dental emergencies in North Mesa, AZ and throughout the East Valley can happen suddenly, often due to accidents, injuries, or trauma to the mouth or face. Acting quickly during a dental emergency can be the key to saving your tooth and preventing further complications. At Hentges Dental, we reserve time each day for emergency dental appointments to ensure you get the urgent care you need. Whether you're in North Mesa, Tempe, Chandler, Gilbert, or Apache Junction, we're here to help. Below are some essential tips to help you handle common dental emergencies until you can see our emergency dentist."
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
                <>If you're experiencing a dental emergency in Mesa, AZ, don't wait—call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your emergency dental appointment with Hentges Dental right away!</>
            ]
        },
    ]


    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "MedicalSpecialty",
        "name": "Emergency Dentistry",
        "description": "Same-day emergency dental care for tooth pain, broken teeth, knocked-out teeth, and dental trauma in Mesa, AZ",
        "url": "https://hentgesdental.com/emergency-dentistry",
        "image": "https://hentgesdental.com/images/tooth-pain.svg",
        "provider": {
            "@type": "DentalClinic",
            "name": "Hentges Dental",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "560 N. Stapley Dr. Suite 2",
                "addressLocality": "Mesa",
                "addressRegion": "AZ",
                "postalCode": "85203",
                "addressCountry": "US"
            },
            "telephone": "(480) 964-2131",
            "url": "https://hentgesdental.com"
        },
        "medicalSpecialty": "Emergency Dentistry",
        "bodyLocation": "Teeth, Mouth, Jaw",
        "procedure": [
            "Emergency Tooth Extraction",
            "Broken Tooth Repair",
            "Knocked-Out Tooth Treatment",
            "Tooth Pain Relief",
            "Dental Trauma Care",
            "Broken Filling Repair"
        ],
        "audience": {
            "@type": "MedicalAudience",
            "audienceType": "Patients with dental emergencies"
        },
        "availableService": {
            "@type": "Service",
            "name": "Same-Day Emergency Appointments",
            "description": "Urgent dental care available same day"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


