import ContentDisplay from "../../components/ContentDisplay";
import patientOnComputer from "../../public/images/patient-on-computer.jpg";
import Image from "next/image";

export const metadata = {
    title: "New Patient Forms | Hentges Dental",
    description: "Forms are provided to our patients online for download. Please print and complete the forms and bring them to your appointment. Call us today!",
};

const title = "New Patient Forms";

`The following forms are provided to our patients online for download. Please print and complete the forms and bring them to your appointment.

If you have questions about any of the paperwork, please give us a call at (480) 964-2131 and our staff will be happy to help you.

• 	New Patient Forms
`

const content = [
    { heading: '', text: ["The following forms are provided to our patients online for download. Please print and complete the forms and bring them to your appointment."] },
    { heading: '', text: [<>If you have questions about any of the paperwork, please give us a call at <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> and our staff will be happy to help you.</>] },
    { heading: '', text: [<a href='' className="text-tertiary hover:underline">New Patient Forms</a>] }
]

export default function NewPatientForms() {
    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


