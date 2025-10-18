import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Privacy Policy | Mesa, AZ",
    description: "Learn about how Hentges Dental collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
    const title = "PRIVACY POLICY";

    const content = [
        {
            heading: "Information We Collect",
            text: [
                "When you use our website or request an appointment, we may collect the following types of information:",
                "• Personal Information: Name, email address, phone number, and appointment preferences",
                "• Appointment Information: Type of appointment requested, preferred contact method, and any specific concerns or needs",
                "• Website Usage: Information about how you interact with our website, including pages visited and time spent on our site",
                "• Contact Information: Address and other contact details you provide when scheduling appointments"
            ]
        },
        {
            heading: "How We Use Your Information",
            text: [
                "We use the information we collect to:",
                "• Schedule and manage your dental appointments",
                "• Communicate with you about your appointments and dental care",
                "• Send appointment reminders and follow-up communications",
                "• Provide you with information about our dental services",
                "• Improve our website and services",
                "• Comply with legal and regulatory requirements"
            ]
        },
        {
            heading: "Information Sharing",
            text: [
                "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:",
                "• With your explicit consent",
                "• To comply with legal obligations or court orders",
                "• To protect our rights, property, or safety, or that of our patients",
                "• With trusted service providers who assist us in operating our website and conducting our business (these parties are bound by confidentiality agreements)",
                "• In connection with a business transfer or acquisition"
            ]
        },
        {
            heading: "Data Security",
            text: [
                "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:",
                "• Secure data transmission using encryption",
                "• Regular security assessments and updates",
                "• Limited access to personal information on a need-to-know basis",
                "• Secure storage of sensitive information"
            ]
        },
        {
            heading: "Your Rights",
            text: [
                "You have the right to:",
                "• Access your personal information we have collected",
                "• Request correction of inaccurate or incomplete information",
                "• Request deletion of your personal information (subject to legal and business requirements)",
                "• Opt out of certain communications from us",
                "• Withdraw consent for data processing where applicable"
            ]
        },
        {
            heading: "Cookies and Tracking",
            text: [
                "Our website may use cookies and similar tracking technologies to enhance your browsing experience. These technologies help us:",
                "• Remember your preferences and settings",
                "• Analyze website traffic and usage patterns",
                "• Improve website functionality and performance",
                "You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled."
            ]
        },
        {
            heading: "Third-Party Links",
            text: [
                "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit."
            ]
        },
        {
            heading: "Children's Privacy",
            text: [
                "We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately so we can take appropriate action."
            ]
        },
        {
            heading: "Changes to This Policy",
            text: [
                "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the 'Last Updated' date. We encourage you to review this policy periodically."
            ]
        },
        {
            heading: "Contact Information",
            text: [
                "If you have any questions about this Privacy Policy or our data practices, please contact us:",
                "Hentges Dental",
                "560 N. Stapley Dr.",
                "Mesa, AZ 85203",
                "Phone: (480) 964-2131",
                "Email: hentgesdental@gmail.com"
            ]
        },
        {
            heading: "",
            text: [
                "Last Updated: October 2025"
            ]
        }
    ];

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}
