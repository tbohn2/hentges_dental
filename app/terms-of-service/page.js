import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Terms of Service | Hentges Dental",
    description: "Read the terms and conditions for using Hentges Dental's website and services.",
};

export default function TermsOfService() {
    const title = "TERMS OF SERVICE";

    const content = [
        {
            heading: "Acceptance of Terms",
            text: [
                "By accessing and using the Hentges Dental website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
            ]
        },
        {
            heading: "Use License",
            text: [
                "Permission is granted to temporarily download one copy of the materials on Hentges Dental's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
                "• Modify or copy the materials",
                "• Use the materials for any commercial purpose or for any public display",
                "• Attempt to reverse engineer any software contained on the website",
                "• Remove any copyright or other proprietary notations from the materials"
            ]
        },
        {
            heading: "Appointment Scheduling",
            text: [
                "When you request an appointment through our website:",
                "• All appointment requests are subject to availability",
                "• We will contact you to confirm your appointment",
                "• You may be required to provide additional information or complete forms before your appointment",
                "• Cancellation policies apply as outlined in our office policies",
                "• We reserve the right to reschedule or cancel appointments due to unforeseen circumstances"
            ]
        },
        {
            heading: "Medical Information Disclaimer",
            text: [
                "The information on this website is for general informational purposes only and is not intended as medical advice. It should not be used to:",
                "• Diagnose or treat any health condition",
                "• Replace professional medical advice",
                "• Make decisions about your dental health without consulting a qualified dentist",
                "Always consult with a qualified healthcare professional for proper diagnosis and treatment of any dental or medical condition."
            ]
        },
        {
            heading: "User Responsibilities",
            text: [
                "When using our website, you agree to:",
                "• Provide accurate and complete information when requesting appointments",
                "• Not use the website for any unlawful purpose",
                "• Not attempt to gain unauthorized access to any part of the website",
                "• Not interfere with the proper functioning of the website",
                "• Respect the privacy and rights of other users"
            ]
        },
        {
            heading: "Privacy and Data Collection",
            text: [
                "We collect the following information when you request an appointment:",
                "• Name and contact information (phone number, email address)",
                "• Appointment type and preferences",
                "• Preferred contact method",
                "This information is used solely for scheduling and communication purposes. Please review our Privacy Policy for detailed information about how we handle your data."
            ]
        },
        {
            heading: "Limitation of Liability",
            text: [
                "In no event shall Hentges Dental or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hentges Dental's website, even if Hentges Dental or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
            ]
        },
        {
            heading: "Accuracy of Materials",
            text: [
                "The materials appearing on Hentges Dental's website could include technical, typographical, or photographic errors. Hentges Dental does not warrant that any of the materials on its website are accurate, complete, or current. Hentges Dental may make changes to the materials contained on its website at any time without notice. However, Hentges Dental does not make any commitment to update the materials."
            ]
        },
        {
            heading: "Links to Third-Party Sites",
            text: [
                "Our website may contain links to third-party websites that are not owned or controlled by Hentges Dental. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Hentges Dental shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites."
            ]
        },
        {
            heading: "Modifications",
            text: [
                "Hentges Dental may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
            ]
        },
        {
            heading: "Governing Law",
            text: [
                "These terms and conditions are governed by and construed in accordance with the laws of Arizona and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."
            ]
        },
        {
            heading: "Contact Information",
            text: [
                "If you have any questions about these Terms of Service, please contact us:",
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
