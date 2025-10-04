import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Dental Cleaning | Mesa, AZ | Hentges Dental",
    description: "Regular dental cleanings are essential for maintaining good oral health. Our experienced dental team provides comprehensive cleaning services to remove plaque, tartar, and bacteria from your teeth, preventing cavities, gum disease, and bad breath. Call today!",
};

export default function DentalCleaning() {
    const title = "DENTAL CLEANING";

    const content = [
        {
            heading: "",
            text: [
                "Do you feel anxious about visiting the dentist? You’re not alone—studies show that up to 75% of Americans experience some level of dental anxiety, and around 15% avoid dental appointments altogether due to fear. Skipping regular dental cleanings can put your oral health and overall well-being at risk. At Hentges Dental in Mesa, AZ, we want to help you feel comfortable by walking you through what to expect during a professional dental cleaning, so you can maintain a healthy smile with confidence."
            ]
        },
        {
            heading: "INITIAL ORAL EXAM",
            text: [
                "Your dental cleaning begins with a thorough examination of your teeth, gums, and mouth using a small mirror. This allows our dental team to check for signs of gum disease, tooth decay, and any unusual spots or lesions in your oral tissues. Early detection is key to preventing more serious dental problems."
            ]
        },
        {
            heading: "PLAQUE AND TARTAR REMOVAL",
            text: [
                "Next, we carefully remove plaque and tartar buildup from your teeth and along the gumline using specialized dental instruments. If you brush and floss regularly, this step is usually quick and comfortable. Even if it takes a little longer, the process should not be painful and is essential for preventing cavities and gum disease."
            ]
        },
        {
            heading: "PROFESSIONAL TEETH CLEANING",
            text: [
                "Once your teeth are free of plaque and tartar, we polish them with a gentle abrasive paste or baking soda solution to remove surface stains and leave your smile feeling fresh and clean. This step is painless, and many patients enjoy the smooth, clean feeling afterward."
            ]
        },
        {
            heading: "FLOSSING AND ORAL HYGIENE EDUCATION",
            text: [
                "We’ll floss between your teeth to check for signs of gum inflammation or bleeding, which can indicate early gum disease (gingivitis). Our team will also demonstrate proper flossing techniques to help you maintain excellent oral hygiene at home. Throughout the cleaning, you’ll rinse your mouth to remove any debris."
            ]
        },
        {
            heading: "OPTIONAL FLUORIDE TREATMENT & FINAL CHECK",
            text: [
                "A fluoride treatment may be applied to help strengthen your enamel and protect against cavities. Afterward, we’ll perform a comprehensive dental exam and oral cancer screening. Your dentist will discuss your oral health and provide personalized recommendations to keep your teeth and gums healthy. Untreated tooth decay and gum disease can lead to serious health issues, including heart disease, diabetes complications, and stroke, so preventive care is vital."
            ]
        },
        {
            heading: "",
            text: [
                <>If dental cleanings make you nervous, reach out to Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. We’re here to answer your questions and help you feel at ease. Schedule your dental cleaning in Mesa, AZ today—you might be surprised at how comfortable and positive your visit can be!</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


