import ContentDisplay from "../../components/ContentDisplay";
import patientOnComputer from "../../public/images/patient-on-computer.jpg";

export const metadata = {
    title: "Financial & Insurance | Hentges Dental",
    description: "Hentges Dental understands that the financial side of dental treatment can become confusing at times. Visit our website for more info or call today.",
};

export default function FinancialAndInsurance() {
    const title = "FINANCIAL AND INSURANCE";

    const content = [
        { heading: '', text: ["At Hentges Dental we pride ourselves on providing safe, effective, and affordable treatment for every member of the family. We understand that the financial side of dental treatment can become confusing at times. To make things easier for you, we have fostered working relationships with the top insurance companies. We also offer discount programs and payment systems for qualifying patients. Above all else, we want you to have a clear understanding of your financial and insurance options, as well as your patient responsibilities."], imgSrc: patientOnComputer },
        { heading: 'INSURANCE AND PATIENT CO-PAYMENTS', text: ["Dental insurance can play a significant role in your treatment fees. This is why it’s important to properly fill out your new patient paperwork with any insurance information. Submitting your paperwork in advance allows us to prepare your benefit materials before you receive treatment. This includes any fees and co-payments dictated by your insurance policy. We are happy to work with your insurance provider and answer any questions you may have in regards to your policy."] },
        { heading: '', text: ["When working with insurance, it is important to note that you are solely responsible for fees and co-payments. Our team is happy to assist you when filing a dental or medical claim, but we ask that you follow our financial policy when payment is due. Talk with our staff during your consultation to learn more about our financial policy."] },
        { heading: 'APPOINTMENTS AND CONSULTATIONS', text: ["If you are a first-time patient, we will ask you to schedule a consultation visit. During your consultation Dr. Zach Hentges will perform a comprehensive exam and review your dental and medical histories. Most regular appointments consist of a checkup and professional cleaning. If we notice any protentional instances of decay, damage, or gum disease we may recommend additional treatment. Once we develop an appropriate treatment plan, our front office team will provide you with a detailed list of fees. We can also provide an estimate of out-of-pocket fees based on your insurance policy."] },
        { heading: '', text: ["There is a $25 no-show fee to any appointment that is missed or cancelled within 24 hours of the set appointment time."] },
        { heading: 'SCHEDULE YOUR APPOINTMENT TODAY!', text: [<>If you are interested in learning more about our services, please call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a>, and schedule your appointment today!</>] }
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


