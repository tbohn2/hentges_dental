import ContentDisplay from "../../components/ContentDisplay";
import patientOnComputer from "../../public/images/patient-on-computer.jpg";

export const metadata = {
    title: "Hentges Dental | Financial & Insurance | Mesa, AZ",
    description: "Affordable dental care in Mesa, AZ with flexible payment options. Accepts most insurance plans & offers financing. Call (480) 964-2131.",
    keywords: "dental insurance Mesa AZ, affordable dental care Mesa, dental financing Mesa, payment plans Mesa, dental insurance accepted Mesa, dental costs Mesa",
};

export default function FinancialAndInsurance() {
    const title = "FINANCIAL AND INSURANCE";

    const content = [
        {
            heading: '',
            text: [
                "At Hentges Dental, our mission is to deliver high-quality, affordable dental care for families in Mesa, AZ. We know that understanding dental insurance and payment options can sometimes feel overwhelming. To help simplify the process, we work closely with leading dental insurance providers and offer flexible payment plans and discount programs for eligible patients. Our goal is to ensure you feel confident about your dental financial options and patient responsibilities every step of the way."
            ],
            imgSrc: patientOnComputer
        },
        {
            heading: 'DENTAL INSURANCE & PATIENT CO-PAYMENTS',
            text: [
                "Dental insurance coverage can significantly impact your out-of-pocket costs for dental treatment. To maximize your benefits, please complete your new patient forms with accurate insurance details before your first visit. This allows our team to verify your coverage and provide you with a clear breakdown of any co-payments or fees required by your insurance plan. We are happy to coordinate with your insurance company and answer any questions about your dental benefits."
            ]
        },
        {
            heading: '',
            text: [
                "Please remember that patients are ultimately responsible for all treatment fees and co-payments, regardless of insurance coverage. Our staff is here to help you file dental or medical claims, but payment is expected according to our financial policy. If you have questions about our payment policies, our team will be glad to review them with you during your dental consultation."
            ]
        },
        {
            heading: 'DENTAL APPOINTMENTS & CONSULTATIONS',
            text: [
                "For new patients, we recommend scheduling a dental consultation to get started. During this visit, Dr. Zach Hentges will perform a thorough dental exam and review your medical and dental history. Most routine appointments include a dental checkup and professional teeth cleaning. If we detect any signs of tooth decay, gum disease, or dental damage, we will discuss recommended treatment options. Our front office will provide a detailed estimate of all dental fees, including an insurance-based estimate of your out-of-pocket costs."
            ]
        },
        {
            heading: '',
            text: [
                "Please note: A $25 no-show fee applies to any dental appointment missed or cancelled with less than 24 hours’ notice."
            ]
        },
        {
            heading: 'BOOK YOUR DENTAL APPOINTMENT IN MESA, AZ',
            text: [
                <>To learn more about our dental services or to schedule your next appointment, call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> today. We look forward to helping you achieve a healthy, confident smile!</>
            ]
        }
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


