import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Hentges Dental | Patient Information | Mesa, AZ",
    description: "Complete patient resources for Hentges Dental in Mesa, AZ. New patient forms, insurance info, testimonials & dental care tips. Call (480) 964-2131.",
    keywords: "patient information Mesa AZ, dental resources Mesa, new patient info Mesa, dental care tips Mesa, patient resources Mesa, dental information Mesa",
};

const title = "Patient Information";

const pageContent = [
    {
        heading: '',
        text: [
            <>Choosing the right dentist in Mesa, AZ is an important decision for you and your family. At Hentges Dental, we strive to make your transition as smooth as possible. We know new dental patients often have questions about oral health, dental services, and what to expect at their first visit. The resources below are designed to help you get familiar with our dental practice and start your journey toward a healthier, more confident smile.</>
        ]
    },
    {
        heading: 'Helpful Resources',
        text: [
            'Preparation and knowledge are key to a positive dental experience. Before your dental appointment, we recommend exploring these helpful links:'
        ]
    },
    {
        heading: '',
        text: [
            <Link key="new-patient-forms" href='/new-patient-forms' className="text-tertiary hover:underline">New Patient Forms</Link>,
            <Link key="financial-insurance" href='/financial-and-insurance' className="text-tertiary hover:underline">Financial & Insurance</Link>,
            <Link key="patient-testimonials" href='/patient-testimonials' className="text-tertiary hover:underline">Patient Testimonials</Link>,
            <Link key="dental-blog" href='/dental-blog' className="text-tertiary hover:underline">Dental Blog</Link>
        ]
    },
    {
        heading: 'Book Your Dental Appointment',
        text: [
            <>Still have questions about our dental office or services? Our friendly team is here to assist you. The best way to get to know us is to visit in person—call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your dental appointment at Hentges Dental today!</>
        ]
    },
]

export default function PatientInformation() {
    return (
        <ContentDisplay pageTitle={title} content={pageContent} />
    );
}


