import ContentDisplay from "../../components/ContentDisplay";
import patientOnComputer from "../../public/images/patient-on-computer.jpg";
import SEOImage from "../../components/SEOImage";

export const metadata = {
    title: "Hentges Dental | New Patient Forms | Mesa, AZ",
    description: "Download new patient forms for Hentges Dental in Mesa, AZ. Complete forms online before your appointment for faster check-in. Call (480) 964-2131.",
    keywords: "new patient forms Mesa AZ, dental forms Mesa, patient registration Mesa, dental paperwork Mesa, new patient Mesa, dental forms download Mesa",
};

const title = "New Patient Forms";

`The following forms are provided to our patients online for download. Please print and complete the forms and bring them to your appointment.

If you have questions about any of the paperwork, please give us a call at (480) 964-2131 and our staff will be happy to help you.

• 	New Patient Forms
`

const content = [
    { heading: '', text: ["Access our new patient forms online to save time at your dental appointment. Simply download, print, and fill out the forms before your visit to Hentges Dental in Mesa, AZ. Bring the completed paperwork with you to help us streamline your check-in process."] },
    { heading: '', text: [<>If you have any questions about our dental forms or need assistance, please contact our office at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Our friendly dental team is here to help!</>] },
    {
        heading: 'Download New Patient Forms', text: [
            <a key="patient-registration" href="/documents/Patient_Registration.pdf" download className="text-tertiary hover:underline">Patient Registration (PDF)</a>,
            <a key="medical-history" href="/documents/Medical_History.pdf" download className="text-tertiary hover:underline">Medical History (PDF)</a>,
            <a key="welcome-financial" href="/documents/Welcome_Financial.pdf" download className="text-tertiary hover:underline">Welcome & Financial Policy (PDF)</a>,
            <a key="hipaa" href="/documents/HIPAA.pdf" download className="text-tertiary hover:underline">HIPAA Acknowledgment (PDF)</a>
        ]
    }
]

export default function NewPatientForms() {
    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/new-patient-forms" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


