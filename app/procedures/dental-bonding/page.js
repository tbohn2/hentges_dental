import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Dental Bonding | Mesa, AZ",
    description: "Quick, affordable dental bonding in Mesa, AZ repairs chips, cracks & gaps. Tooth-colored composite resin for natural-looking restorations. Call (480) 964-2131.",
    keywords: "dental bonding Mesa AZ, tooth bonding Mesa, composite bonding Mesa, chipped tooth Mesa, cracked tooth Mesa, cosmetic bonding Mesa",
};


export default function DentalBonding() {
    const title = "DENTAL BONDING";

    const content = [
        {
            heading: "",
            text: [
                "Dental bonding is a versatile cosmetic dentistry procedure that can quickly and comfortably address a variety of minor dental imperfections. Using a tooth-colored composite resin, Dr. Zach Hentges carefully matches the shade to your natural teeth and apply it to the areas that need improvement. The process is minimally invasive and typically pain-free. If you are considering teeth whitening, it’s best to do so before bonding, as the resin will not change color with future whitening treatments."
            ]
        },
        {
            heading: "",
            text: [
                "Cosmetic dental bonding can repair chipped or cracked teeth, close small gaps (such as spaces between front teeth), cover worn enamel, and even improve the color and shape of your teeth for a more uniform smile. Whether you’ve experienced a minor accident, have enamel erosion from grinding, or simply want to enhance your smile, dental bonding offers a fast and affordable solution."
            ]
        },
        {
            heading: "",
            text: [
                "If you’re looking for an effective way to improve the appearance of your teeth, contact Hentges Dental in Mesa, AZ at (480) 964-2131. Our team is happy to answer your questions about dental bonding and help you schedule a consultation to achieve a beautiful, confident smile."
            ]
        },
    ]


    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/dental-bonding" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


