import ContentDisplay from "../../components/ContentDisplay";
import Image from "next/image";
import dentalXray from "../../public/images/dental-xray.jpg";
import panoramicMachine from "../../public/images/panoramic-machine.jpg";

export const metadata = {
    title: "Hentges Dental | Dental Technology | Mesa, AZ",
    description: "At Hentges Dental in Mesa, AZ, we use cutting-edge dental technology to provide you with safe, fast, and effective results! Call today!",
};

export default function DentalTechnology() {

    const title = "Dental Technology";

    const content = [
        {
            heading: "Intraoral Camera",
            text: [
                "Our intraoral camera is a small, wand-shaped device that captures high-resolution images inside your mouth. This advanced dental technology allows us to take detailed pictures of your teeth and gums in real time, providing a clear view for both diagnosis and patient education. Digital impressions created with the intraoral camera are especially helpful for procedures like same-day dental crowns."
            ]
        },
        {
            heading: "Digital X-ray",
            text: [
                "We utilize digital x-ray technology at Hentges Dental for safer, faster, and more precise dental imaging. Unlike traditional film x-rays, digital x-rays produce images instantly and with significantly less radiation exposure. If a retake is needed, we can do so immediately. Digital x-rays help us thoroughly evaluate your teeth, roots, and jawbone, supporting accurate diagnosis and effective treatment planning."
            ],
            imgSrc: dentalXray
        },
        {
            heading: "Diagnodent Laser",
            text: [
                "The Diagnodent laser is a cutting-edge tool for early cavity detection. By measuring laser fluorescence within your tooth structure, this technology helps us identify even the smallest areas of decay on the biting surfaces of your teeth. Early detection with the Diagnodent laser allows for prompt, minimally invasive treatment and helps preserve healthy tooth enamel."
            ]
        },
        {
            heading: "Soft Tissue Laser",
            text: [
                "Our soft tissue laser technology enables us to perform precise gum treatments with minimal discomfort. The laser can cut and cauterize tissue at the same time, which reduces bleeding, swelling, and recovery time. We use soft tissue lasers for procedures such as periodontal therapy, gum contouring, and crown lengthening, as well as to promote healthy tissue regeneration around your teeth."
            ]
        },
        {
            heading: "3D Imaging",
            text: [
                "3D dental imaging provides Dr. Zach Hentges with a comprehensive, three-dimensional view of your teeth, gums, and jaw. This advanced diagnostic tool enhances our ability to detect dental issues, plan treatments, and achieve optimal results. 3D imaging is valuable for cosmetic dentistry, restorative procedures, orthodontics, and dental implant placement."
            ]
        },
        {
            heading: "Cone Beam CT Scan",
            text: [
                "A cone beam CT scan delivers a detailed 3D image of your teeth, jawbone, nerves, and surrounding structures in a single scan. We recommend cone beam CT imaging when standard x-rays are not sufficient for diagnosis or treatment planning. This technology is especially useful for dental implant planning, evaluating TMJ disorders, assessing bone quality, and identifying tumors or other abnormalities."
            ],
            imgSrc: panoramicMachine
        },
        {
            heading: "Schedule Your Appointment",
            text: [
                <>Experience the benefits of advanced dental technology at Hentges Dental. Call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to book your appointment and receive top-quality dental care in Mesa, AZ!</>
            ]
        }
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


