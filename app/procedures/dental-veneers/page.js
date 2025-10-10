import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Dental Veneers | Mesa, AZ | Hentges Dental",
    description: "Porcelain veneers in Mesa, AZ transform your smile. Custom-made shells correct chips, gaps & stains. Call (480) 964-2131 for consultation.",
};

export default function DentalVeneers() {
    const title = "DENTAL VENEERS";

    const content = [
        {
            heading: "",
            text: [
                "Dental veneers are a popular cosmetic dentistry option designed to enhance the look of your teeth. Dr. Zach Hentges uses modern techniques and quality dental labs to create your dream smile. Veneers can dramatically improve your smile by correcting imperfections and restoring both the function and beauty of your teeth."
            ]
        },
        {
            heading: "WHAT ARE VENEERS?",
            text: [
                "Veneers are thin, custom-made shells that are bonded to the front of your teeth. They are made from porcelain or composite resin and are designed to match the color, shape, and size of your natural teeth. Veneers are a versatile solution for a variety of dental concerns, including chipped or cracked teeth, gaps, uneven spacing, and stubborn discoloration."
            ]
        },
        {
            heading: "HISTORY",
            text: [
                "Concerns about the appearance of teeth have existed for centuries. If you look at classic portraits in museums, you’ll notice that people rarely smiled—often because they wanted to hide dental flaws. Even the Mona Lisa may have had teeth that were chipped, cracked, or discolored due to the limitations of dental care in her era."
            ]
        },
        {
            heading: "",
            text: [
                "The concept of dental veneers originated in Hollywood during the early days of the film industry. In the late 1920s, a dentist was asked to temporarily alter an actor’s smile for a movie role, using plastic or acrylic materials. These early veneers were not permanent, but the idea quickly caught on. Over time, dental professionals refined the technique, and porcelain veneers became the gold standard for a natural, long-lasting result. Porcelain has been trusted in dentistry for decades because it closely mimics the look and strength of real teeth."
            ]
        },
        {
            heading: "CARING FOR YOUR VENEERS",
            text: [
                "Each set of veneers is custom-crafted to match your natural teeth, taking into account your skin tone, hair color, and overall appearance. The process involves gently preparing your teeth and bonding the veneers with strong dental cement. To keep your veneers looking their best, it’s important to brush and floss daily and visit your dentist regularly for checkups. While veneers are durable, they aren’t quite as strong as natural teeth, so avoid biting hard objects like ice or using your teeth as tools. With proper care, your porcelain veneers can provide a beautiful smile for many years."
            ]
        },
        {
            heading: "",
            text: [
                <>Interested in learning more about dental veneers in Mesa, AZ? Contact Hentges Dental at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a>. Our team is here to answer your questions and help you achieve the picture-perfect smile you deserve.</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


