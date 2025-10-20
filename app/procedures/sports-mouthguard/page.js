import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Sports Mouthguards | Mesa, AZ",
    description: "Protect your teeth during sports with custom sports mouthguards. Professional-grade protection at Hentges Dental in Mesa, AZ.",
};

export default function SportsMouthguard() {
    const title = "SPORTS MOUTHGUARDS";

    const content = [
        {
            heading: "",
            text: [
                "Sports mouthguards are essential protective equipment for athletes of all ages and skill levels. At Hentges Dental, we create custom-fitted sports mouthguards that provide superior protection compared to store-bought options. These appliances help prevent dental injuries, concussions, and other oral trauma during athletic activities."
            ]
        },
        {
            heading: "WHY CUSTOM SPORTS MOUTHGUARDS?",
            text: [
                "Custom sports mouthguards offer significant advantages over over-the-counter options. They're precisely fitted to your teeth, providing maximum protection and comfort. Custom mouthguards stay in place better, don't interfere with breathing or speech, and are made from high-quality materials that last longer and provide better shock absorption."
            ]
        },
        {
            heading: "SPORTS THAT REQUIRE MOUTHGUARDS",
            text: [
                "• Football and rugby",
                "• Basketball and soccer",
                "• Hockey and lacrosse",
                "• Boxing and martial arts",
                "• Wrestling and gymnastics",
                "• Baseball and softball",
                "• Skateboarding and BMX",
                "• Any contact or collision sport"
            ]
        },
        {
            heading: "TYPES OF SPORTS MOUTHGUARDS",
            text: [
                "We offer several types of sports mouthguards to meet different needs. Stock mouthguards are pre-formed but offer limited protection. Boil-and-bite mouthguards can be customized at home but may not fit perfectly. Custom mouthguards are professionally made from impressions of your teeth, providing the best fit, comfort, and protection."
            ]
        },
        {
            heading: "BENEFITS OF CUSTOM SPORTS MOUTHGUARDS",
            text: [
                "Custom sports mouthguards provide superior protection against dental injuries, reduce the risk of concussions, and are comfortable to wear for extended periods. They don't interfere with breathing or communication, stay securely in place during activity, and are made from durable materials that resist wear and tear. They also come in various colors and can be personalized."
            ]
        },
        {
            heading: "CARING FOR YOUR SPORTS MOUTHGUARD",
            text: [
                "Proper care extends the life of your sports mouthguard. Rinse it with cool water after each use, clean it with a toothbrush and mild soap, and store it in a ventilated case. Avoid exposing it to extreme heat, and bring it to your dental visits for professional cleaning. With proper care, a custom sports mouthguard can last several seasons."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to protect your smile during sports? Contact Hentges Dental in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your sports mouthguard consultation and get the protection you need.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/sports-mouthguard" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


