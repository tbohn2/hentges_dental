import ContentDisplay from "../../components/ContentDisplay";
import Image from "next/image";
import dentalXray from "../../public/images/dental-xray.jpg";
import panoramicMachine from "../../public/images/panoramic-machine.jpg";

export const metadata = {
    title: "Dental Technology | Hentges Dental",
    description: "At Hentges Dental in Mesa, AZ, we use cutting-edge dental technology to provide you with safe, fast, and effective results! Call today!",
};

export default function DentalTechnology() {

    const title = "Dental Technology";

    const content = [
        { heading: "Intraoral Camera", text: ["An intraoral camera is a handheld appliance that is shaped like a wand. The tiny camera at the tip of the appliance takes hundreds of pictures per second to capture an in-depth and accurate image of your mouth. This image is sometimes used to create a digital impression of your teeth and gums. A digital impression is particularly useful for same-day dental crowns."] },
        { heading: "Digital X-ray", text: ["In the past, most dental professionals had to use the traditional x-ray systems, which require film development. These days, we use digital x-rays due to their many benefits. A digital x-ray is safer and much quicker than its film predecessor. If the image comes out blurry, we can instantly retake a new one. Digital x-rays are a crucial diagnostic tool that helps us gain a better understanding of the inner workings of your mouth, more specifically the teeth, roots, and alveolar bone."], imgSrc: dentalXray },
        // { heading: "Same Day Crowns", text: ["Dr. Zach Hentges understands how valuable your time is, which is why we offer same-day dental crowns. This means we can prepare your tooth, take an impression, and fabricate your restoration, all within a single appointment.", "Traditional dental crowns typically require multiple appointments for multiple procedures. The data we capture with our intraoral wand is wirelessly transferred to our computer system. We then use CAD/CAM software to design your crown “chairside” as you watch in real-time. Next, this information is sent to our milling unit, which transforms a single block of porcelain into your aesthetically-pleasing restoration."] },
        { heading: "Diagnodent Laser", text: ["The diagnodent laser allows us to more effectively identify the presence of decay in the occlusal (bite) surface of a tooth. The diagnodent laser measures laser fluorescence within the mineral structure of a tooth. This allows for the detection of healthy tooth structure, as well as smooth surface dental caries (tooth decay) at their earliest stage. Early detection of tooth decay helps us effectively treat the problem before it requires a costly and invasive restoration."] },
        { heading: "Soft Tissue Laser", text: ["A soft tissue laser simultaneously cauterizes and cuts an incision in the tissue. For this reason, laser treatment may reduce bleeding, discomfort, and swelling both during and after your procedure. We may use a soft tissue laser to treat periodontal disease by removing the infected lining of the gum tissue. This allows for the regeneration of healthy tissue around the teeth. Soft tissue lasers are also effective for gum contouring and crown lengthening if you want to improve the aesthetics of your smile."] },
        { heading: "3D Imaging", text: ["3D imaging gives Dr. Zach Hentges a more comprehensive overview of your teeth and gum tissues. This allows us to better diagnose any potential problems and determine the next step in an effective treatment plan. We may utilize 3D imaging for cosmetic or restorative purposes, orthodontic treatment, and dental implants."] },
        { heading: "Cone Beam CT Scan", text: ["A cone beam CT scan is a diagnostic tool that produces a 3D representation of your teeth, gums, nerve pathways, and underlying bone structure within a single image. We typically utilize cone beam CT scans when a regular x-ray is not enough. Cone beam CT scans are ideal for surgical planning, the diagnosis of TMJ disorders and tumors, and the evaluation of bone structure and tooth orientation."], imgSrc: panoramicMachine },
        { heading: "Schedule Your Appointment", text: [<>If you want the very best in professional dental care call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a>, and schedule your appointment today!</>] }
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


