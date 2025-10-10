import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";
import dentalExam from "../../public/images/dental-exam.jpg";

export const metadata = {
    title: "Services | Hentges Dental | Mesa, AZ",
    description: "Comprehensive dental services in Mesa, AZ. Family, cosmetic, restorative & emergency dentistry. Call (480) 964-2131 for appointments.",
};

const title = "Dental Services";

const pageContent = [
    {
        heading: '',
        text: [
            "Maintaining healthy teeth and gums is essential for your overall well-being. A confident, radiant smile not only enhances your appearance but also reflects your general health. Research links oral health to systemic conditions like heart disease and diabetes, highlighting the importance of regular dental care. At Hentges Dental, we are dedicated to supporting your oral health and quality of life with a comprehensive range of dental services, including preventive, restorative, cosmetic, and emergency dentistry. If you’re seeking professional dental care in Mesa, AZ, our team is here to help you achieve optimal oral health."
        ]
    },
    {
        heading: 'Family Dentistry',
        text: [
            "Our family dentistry services are designed to care for patients of all ages, from young children to seniors. We believe in building lifelong relationships with our patients and providing gentle, personalized dental care for every member of your family. Routine dental visits typically include a professional cleaning and a thorough dental exam. We may recommend oral cancer screenings for adults and fluoride treatments for children to help prevent cavities. If we detect tooth decay or gum disease, we’ll discuss restorative options to keep your smile healthy.",
            <Link key="family-dentistry-link" href='/family-dentistry' className="text-tertiary hover:underline">Learn more about our family dental services in Mesa, AZ.</Link>
        ],
        imgSrc: dentalExam
    },
    {
        heading: 'Restorative Dentistry',
        text: [
            "Restorative dentistry focuses on repairing and restoring the function and appearance of your teeth, gums, and jaw. Whether you need a dental filling for a cavity, a dental crown to strengthen a damaged tooth, or a tooth extraction for a severely compromised tooth, our team provides expert care. Tooth loss is more common than many realize, which is why we offer a variety of tooth replacement solutions, including dental bridges, dental implants, and custom dentures to help you regain a complete, healthy smile.",
            <Link key="restorative-dentistry-link" href='/restorative-dentistry' className="text-tertiary hover:underline">Explore our restorative dental treatments in Mesa, AZ.</Link>
        ]
    },
    {
        heading: 'Cosmetic Dentistry',
        text: [
            "Cosmetic dentistry at Hentges Dental combines advanced technology and artistry to enhance the beauty of your smile. Our cosmetic dental services include professional teeth whitening, porcelain crowns, dental sealants, and porcelain veneers & bonding. Teeth whitening is a popular option for quickly brightening your smile, while porcelain crowns and veneers can dramatically improve the shape, color, and alignment of your teeth. We use high-quality materials to ensure natural-looking, long-lasting results for every patient.",
            <Link key="cosmetic-dentistry-link" href='/cosmetic-dentistry' className="text-tertiary hover:underline">Discover how our cosmetic dentistry services can transform your smile.</Link>
        ]
    },
    {
        heading: 'Emergency Dentistry',
        text: [
            "Dental emergencies can happen unexpectedly, and prompt care is crucial to saving your teeth and relieving pain. If you experience a knocked-out tooth, severe toothache, cracked tooth, or other urgent dental issues, contact our office right away. Dr. Zach Hentges reserves time for emergency dental appointments to provide immediate attention when you need it most. Not all dental problems require emergency care, but if you’re in significant pain or have suffered dental trauma, don’t hesitate to reach out.",
            <Link key="emergency-dentistry-link" href='/emergency-dentistry' className="text-tertiary hover:underline">Learn what to do in a dental emergency and how we can help.</Link>
        ]
    },
    {
        heading: 'Schedule Your Appointment',
        text: [
            <>Ready to take the next step toward a healthier smile? Call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your dental appointment at Hentges Dental in Mesa, AZ today!</>
        ]
    }
]



export default function Services() {
    return (
        <ContentDisplay pageTitle={title} content={pageContent} />
    );
}


