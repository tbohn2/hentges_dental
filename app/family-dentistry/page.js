import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Family Dentistry | Hentges Dental",
    description: "At Hentges Dental, we provide family dentistry services to help you and your family maintain excellent oral health. Call us today!",
};

const title = "FAMILY DENTISTRY";

const content = [
    { heading: '', text: ["At Hentges Dental, we pride ourselves on treating every member of the family. Family dentistry is focused on preventing potential complications, rather than treating them. If you and your family are in need of professional dental services, we can help!"] },
    { heading: 'CLEANINGS, EXAMS, AND ORAL CANCER SCREENINGS', text: ["The American Dental Association (ADA) recommends a routine check-up up roughly twice a year. A routine appointment with Dr. Zach Hentges will typically include a professional cleaning and a detailed examination of your teeth, gums, and other oral tissues. We may also recommend an oral cancer screening for our older patients."] },
    { heading: <Link href='/procedures/dentistry-for-kids' className="text-tertiary hover:underline">DENTISTRY FOR KIDS</Link>, text: ["Professional dental care is a crucial part of your child's oral health. Be sure to schedule your child's first appointment by the time their first teeth erupt, or before their first birthday. Scheduling regular appointments allows us to monitor the development of their oral health. Developmental problems are easier to treat in the beginning stages."] },
    { heading: "", text: 'AS YOUR CHILD GROWS OLDER, WE CAN ESTABLISH A STRONG FOUNDATION FOR THEIR ORAL HEALTH, ONE THAT WILL ENSURE A LIFETIME OF HEALTHY, BEAUTIFUL TEETH.', text: [] },
    { heading: <Link href='/procedures/periodontal-care' className="text-tertiary hover:underline">PERIODONTAL CARE</Link>, text: ["Your periodontal (gum) tissues are just as important as your teeth. Periodontal disease is the leading cause of tooth loss in the United States. Periodontal disease is the result of an infection in the gum tissues, connective ligaments, and eventually the alveolar bone."] },
    { heading: "MOUTHGUARDS (NIGHT) / MOUTHGUARDS (SPORT)", text: ["If you participate in physical activities that put you at risk for dental trauma or injury, we strongly recommend a sportguard. A mouthguard will protect your teeth and prevent dental emergencies. If you suffer from bruxism (teeth grinding), we may also recommend a night guard. Many patients with bruxism tend to grind their teeth during sleep. A night guard acts as a barrier that prevents enamel wear."] },
    { heading: <Link href='/procedures/sleep-apnea' className="text-tertiary hover:underline">SLEEP APNEA/ORAL APPLIANCES</Link>, text: ["If you have obstructive sleep apnea, you may benefit from an oral appliance. An oral appliance will keep your jaw in the proper position during sleep. This opens your airway and improves your breathing during sleep. With an oral appliance, you may find yourself feeling more well-rested, alert and happy, thanks to a full night's sleep. We offer several resources to learn more about What Sleep Apnea Is and which Oral Appliances can help."] },
    { heading: 'SCHEDULE AN APPOINTMENT', text: [<>To learn more about our family dentistry services call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a>, and schedule an appointment now!</>] },
]


export default function FamilyDentistry() {
    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


