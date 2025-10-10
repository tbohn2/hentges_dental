import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Dental Blog | Hentges Dental | Mesa, AZ",
    description: "Stay informed with our dental blog featuring oral health tips, dental procedures, and dental care advice from Hentges Dental in Mesa, AZ.",
    keywords: "dental blog Mesa AZ, oral health tips, dental care advice, dental procedures blog, Hentges Dental blog",
};

export default function DentalBlog() {
    const title = "DENTAL BLOG";

    const content = [
        {
            heading: "Coming Soon",
            text: [
                "We're excited to announce that our dental blog is coming soon! Our team at Hentges Dental is working hard to bring you valuable content about oral health, dental procedures, and tips for maintaining a healthy smile.",
                "",
                "In the meantime, feel free to explore our website to learn more about our dental services, meet our team, and schedule your next appointment.",
                "",
                "Stay tuned for helpful articles on:",
                "• Oral health tips and best practices",
                "• Dental procedure explanations",
                "• Preventive care advice",
                "• Latest dental technology updates",
                "• Patient success stories",
                "",
                "Thank you for your patience as we prepare this valuable resource for our patients and community."
            ]
        }
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}
