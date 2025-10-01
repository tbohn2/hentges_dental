import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Patient Information | Hentges Dental",
    description: "If you have any questions about our practice, our team is standing by to help! The best way to learn more is always in person, call for an appointment.",
};

const title = "Patient Information";

const pageContent = [
    { heading: '', text: [<>At Hentges Dental, we understand that finding a new dentist can be a difficult and important task. Our goal is to make this process easier! Most people have questions and concerns when it comes to protecting their family’s oral health. The following information is designed to help our new patients better understand our practice, and take the first steps toward a healthier, more beautiful smile!</>] },
    { heading: 'Helpful Links', text: ['A great dental experience begins with preparation and education. Before your appointment, you may find it helpful to review the following pages:'] },
    { heading: '', text: [<><Link href='/new-patient-forms' className="text-tertiary hover:underline">New Patient Forms</Link></>, <Link href='/financial-insurance' className="text-tertiary hover:underline">Financial & Insurance</Link>, <Link href='/patient-testimonials' className="text-tertiary hover:underline">Patient Testimonials</Link>, <Link href='/dental-blog' className="text-tertiary hover:underline">Dental Blog</Link>] },
    { heading: 'Schedule Your Appointment', text: ['If you have any other questions about our practice, our team is standing by to help! Of course, the best way to learn more is always in person. Call (480) 964-2131 to schedule your appointment today!'] },
]

export default function PatientInformation() {
    return (
        <ContentDisplay pageTitle={title} content={pageContent} />
    );
}


