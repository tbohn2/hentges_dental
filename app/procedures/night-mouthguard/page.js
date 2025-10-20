import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Night Mouthguard | Mesa, AZ",
    description: "Protect your teeth from grinding and clenching with custom night mouthguards. Get relief from TMJ and bruxism at Hentges Dental in Mesa, AZ.",
};

export default function NightMouthguard() {
    const title = "NIGHT MOUTHGUARD";

    const content = [
        {
            heading: "",
            text: [
                "At Hentges Dental in Mesa, Arizona, Dr. Zach Hentges creates custom night mouthguards, also known as occlusal guards or bite splints, to protect your teeth from the damaging effects of grinding and clenching during sleep. These devices provide a protective barrier between your upper and lower teeth, preventing wear, fractures, and other dental problems caused by bruxism."
            ]
        },
        {
            heading: "WHAT IS BRUXISM?",
            text: [
                "Bruxism is the medical term for grinding, gnashing, or clenching your teeth. This condition can occur during the day (awake bruxism) or at night (sleep bruxism), with sleep bruxism being more common and often more severe. Many people are unaware they grind their teeth until a dentist notices signs of wear or a partner reports hearing grinding sounds at night."
            ]
        },
        {
            heading: "SIGNS YOU MAY NEED A NIGHT MOUTHGUARD",
            text: [
                "• Worn, flattened, or chipped teeth",
                "• Increased tooth sensitivity",
                "• Jaw pain or soreness upon waking",
                "• Headaches, especially in the morning",
                "• Ear pain or ringing in the ears",
                "• Sleep disruption for you or your partner",
                "• Loose or shifting teeth",
                "• Damage to dental restorations"
            ]
        },
        {
            heading: "TYPES OF NIGHT MOUTHGUARDS",
            text: [
                "Custom-made night mouthguards are the gold standard for bruxism treatment. These appliances are created from impressions of your teeth and are designed to fit your mouth perfectly. They're typically made from durable materials like hard acrylic or soft silicone, depending on your specific needs and grinding severity."
            ]
        },
        {
            heading: "BENEFITS OF CUSTOM NIGHT MOUTHGUARDS",
            text: [
                "Custom night mouthguards offer superior protection compared to over-the-counter options. They provide optimal fit and comfort, ensuring you'll actually wear them consistently. These devices distribute bite forces evenly, reduce muscle tension, and can help alleviate TMJ symptoms. With proper care, a custom mouthguard can last several years."
            ]
        },
        {
            heading: "",
            text: [
                <>Think you might be grinding your teeth at night? Contact our office in Mesa, Arizona at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule an evaluation and learn how a custom night mouthguard can protect your smile.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/night-mouthguard" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


