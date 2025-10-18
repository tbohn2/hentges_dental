import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Digital Radiography | Mesa, AZ",
    description: "Digital radiography offers advanced dental x-rays with less radiation, faster results, and improved diagnostics. Discover the benefits of digital dental x-rays at Hentges Dental in Mesa, AZ.",
};

export default function DigitalRadiography() {
    const title = "DIGITAL RADIOGRAPHY";

    const content = [
        {
            heading: "",
            text: [
                "At Hentges Dental, we are committed to providing our patients with the latest advancements in dental technology. One of the most significant innovations in modern dentistry is digital radiography, also known as digital dental x-rays. This technology allows us to capture highly detailed images of your teeth, gums, and jaw with greater speed, accuracy, and safety than traditional film x-rays."
            ]
        },
        {
            heading: "WHAT IS DIGITAL RADIOGRAPHY?",
            text: [
                "Digital radiography uses electronic sensors instead of traditional photographic film to capture x-ray images. These digital sensors instantly transmit the images to a computer, allowing our dental team to view, enhance, and share your x-rays within seconds. This process not only streamlines your dental visit but also provides clearer images for more precise diagnosis and treatment planning."
            ]
        },
        {
            heading: "BENEFITS OF DIGITAL DENTAL X-RAYS",
            text: [
                "• Reduced Radiation Exposure: Digital x-rays require up to 90% less radiation than conventional film x-rays, making them a safer choice for patients of all ages.",
                "• Immediate Results: Images are available instantly, so you spend less time waiting and more time discussing your dental health with your dentist.",
                "• Enhanced Image Quality: Digital x-rays can be enlarged, sharpened, and colorized, helping us detect even the smallest dental issues early.",
                "• Environmentally Friendly: Digital technology eliminates the need for chemical processing and film, reducing waste and environmental impact.",
                "• Easy Storage & Sharing: Your digital x-rays are securely stored in your electronic dental record and can be easily shared with specialists or insurance providers if needed."
            ]
        },
        {
            heading: "WHY ARE DENTAL X-RAYS IMPORTANT?",
            text: [
                "Dental x-rays are a vital part of preventive and diagnostic dental care. They help us identify problems that may not be visible during a routine exam, such as cavities between teeth, bone loss, impacted teeth, infections, and abnormalities in the jaw. Early detection with digital radiography allows for more effective and less invasive treatment, helping you maintain a healthy smile."
            ]
        },
        {
            heading: "WHAT TO EXPECT DURING YOUR DIGITAL X-RAY",
            text: [
                "Having digital dental x-rays taken is quick and comfortable. Our team will position a small sensor in your mouth, and within seconds, the image will appear on our computer screen. There’s no need to wait for film to develop, and the process is safe for both children and adults."
            ]
        },
        {
            heading: "",
            text: [
                <>If you have questions about digital radiography or want to schedule your next dental exam in Mesa, AZ, contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. We’re dedicated to providing you with the safest, most advanced dental care available.</>
            ]
        },
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}
