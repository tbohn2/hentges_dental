import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";
import dentalExam from "../../public/images/dental-exam.jpg";

export const metadata = {
    title: "Services | Hentges Dental",
    description: "We offer a wide range of services to help you achieve and maintain a healthy, beautiful smile.",
};

const title = "Dental Services";

const pageContent = [
    { heading: '', text: ["Taking good care of your teeth and gums is an important part of life. A beautiful smile not only looks good, but it is also an indicator of your overall health. Studies have shown that systemic illnesses, such as cardiovascular disease and diabetes, are directly linked to oral health complications like periodontal (gum) disease. At Hentges Dental, our goal is to help you maintain excellent oral health and improve your overall quality of life. Our services include preventive, restorative, cosmetic, and emergency dentistry. If you are in need of any professional dental treatment, you have come to the right place!"] },
    { heading: 'Family Dentistry', text: ['A large part of our practice involves family dentistry. We take great pride in treating every member of the family, from infants to grandparents! These treatments are often simple and straightforward, designed to prevent potential problems. A routine appointment typically consists of professional cleaning and check-up exam. We may also recommend an oral cancer screening for adults, and fluoride treatment for children. If we notice any instances of tooth decay or gum disease, you may need restorative treatment.', <Link href='/family-dentistry' className="text-secondary hover:underline">Learn more about the services we offer you and your family to help prevent dental problems.</Link>], imgSrc: dentalExam },
    { heading: 'Restorative Dentistry', text: ['Restorative dentistry is designed to fix any problems you may have with your teeth, gum tissues, jaw, and bone structure. We may recommend a dental filling to correct instances of minor or moderate decay. If the damage is substantial, you may need a dental crown. A dental crown is a tooth-shaped cap that improves the function and aesthetics of the tooth. If the tooth is beyond saving, Dr. Zach Hentges will perform a tooth extraction. Tooth loss is much more common then you may think. For this reason, we offer several replacement solutions, some of which include bridges, dental implants, and dentures.', <Link href='/restorative-dentistry' className="text-secondary hover:underline">Learn more about the services we offer to help restore your beautiful smile.</Link>] },
    { heading: 'Cosmetic Dentistry', text: ['Cosmetic dentistry has grown significantly over the past few decades thanks to advancements in technology and technique. Cutting-edge equipment allows us to improve the size, shape, color, and overall appearance of an unsightly tooth. The cosmetic services we provide include teeth whitening, porcelain crowns, dental sealants, and dental veneers & bonding. Teeth whitening treatment is one of the most common procedures we perform due to its effectiveness. We may recommend a porcelain crown for both restorative and cosmetic purposes. The same is true for dental veneers. Both restorations are fabricated using porcelain because of its unmatched aesthetic value.', <Link href='/cosmetic-dentistry' className="text-secondary hover:underline">Read more about the cosmetic services we offer to brighten your smile.</Link>] },
    { heading: 'Emergency Dentistry', text: ['Knowing what to do during a dental emergency can make the difference between saving and losing a tooth. If you have knocked out a tooth, be sure to schedule an appointment as soon as possible. If your tooth is re-implanted within the hour, the chances are strong that it will reattach to the socket. Dr. Zach Hentges always leaves time open for emergency appointments. A chipped tooth, however, may not necessarily constitute a dental emergency. Severe pain is a clear indicator that you need immediate treatment. A crack or fracture may also indicate a serious problem.', <Link href='/emergency-dentistry' className="text-secondary hover:underline">Discover what constitutes a dental emergency.</Link>] },
    { heading: 'Schedule Your Appointment', text: [<>To learn more about the services we provide call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> and schedule your appointment now!</>] },
]



export default function Services() {
    return (
        <ContentDisplay pageTitle={title} content={pageContent} />
    );
}


