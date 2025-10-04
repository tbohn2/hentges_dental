import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Denture Repair | Mesa, AZ | Hentges Dental",
    description: "Restore your dentures with our repair service in Mesa, AZ. We fix cracks, wear, and damage so you can enjoy a natural-looking, functional smile. Call today!",
};

export default function DentureRepair() {
    const title = "DENTURES REPAIR";

    const content = [
        {
            heading: "",
            text: [
                "Accidents happen, and sometimes your dentures can get damaged. At Hentges Dental, we offer denture repair to fix your dentures to their original shape and function. This service is ideal for those who have experienced wear, cracks, or damage to their dentures, ensuring a natural-looking and functional smile."
            ]
        },
        {
            heading: "SAME-DAY DENTURES REPAIR",
            text: [
                "At Hentges Dental, many repairs can be completed in a single day. This is a great option for those who need to get their dentures repaired quickly. The process typically involves leaving the denture with us in the morning. After the denture is repaired, the patient returns to the office to pick up their new denture in the afternoon."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to restore your dentures? Contact our office in Mesa, Arizona at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment and learn more about our denture repair service.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


