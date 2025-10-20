import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | Periodontal Maintenance | Mesa, AZ",
    description: "Maintain healthy gums with regular periodontal maintenance. Prevent gum disease recurrence with professional care at Hentges Dental in Mesa, AZ. Call today!",
};

export default function PeriodontalMaintenance() {
    const title = "PERIODONTAL MAINTENANCE";

    const content = [
        {
            heading: "",
            text: [
                "At Hentges Dental, we offer periodontal maintenance—an ongoing program designed to prevent the recurrence of gum disease after initial treatment. This specialized care helps maintain the health of your gums and supporting structures, ensuring that the progress made during periodontal treatment is preserved long-term."
            ]
        },
        {
            heading: "WHAT IS PERIODONTAL MAINTENANCE?",
            text: [
                "Periodontal maintenance is a specialized cleaning program that goes beyond routine dental cleanings. It involves more frequent visits (typically every 3-4 months) and includes deep cleaning of the gum pockets, removal of plaque and tartar from below the gumline, and monitoring of your gum health to prevent disease recurrence."
            ]
        },
        {
            heading: "WHO NEEDS PERIODONTAL MAINTENANCE?",
            text: [
                "• Patients who have completed periodontal treatment",
                "• Individuals with a history of gum disease",
                "• Patients with deep gum pockets",
                "• Those with bone loss around teeth",
                "• People with systemic conditions that affect gum health",
                "• Patients with a family history of periodontal disease"
            ]
        },
        {
            heading: "WHAT HAPPENS DURING MAINTENANCE VISITS?",
            text: [
                "During your periodontal maintenance visits, we'll measure your gum pockets to monitor healing, remove plaque and tartar from above and below the gumline, polish your teeth, and check for any signs of disease recurrence. We'll also review your home care routine and make recommendations for maintaining optimal oral health between visits."
            ]
        },
        {
            heading: "BENEFITS OF PERIODONTAL MAINTENANCE",
            text: [
                "Regular periodontal maintenance helps prevent the recurrence of gum disease, protects your investment in periodontal treatment, and maintains the health of your gums and supporting bone. It also allows us to catch any new problems early, when they're easier to treat. This proactive approach helps preserve your natural teeth and overall oral health."
            ]
        },
        {
            heading: "HOME CARE BETWEEN VISITS",
            text: [
                "Effective home care is crucial for the success of periodontal maintenance. We'll work with you to develop a personalized routine that may include special toothbrushes, flossing techniques, antimicrobial rinses, or other tools to help control bacterial growth. Consistent home care significantly improves the outcomes of your maintenance program."
            ]
        },
        {
            heading: "",
            text: [
                <>Ready to protect your gum health with periodontal maintenance? Contact our office in Mesa, AZ at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your maintenance visit and learn how we can help preserve your periodontal health.</>
            ]
        },
    ];

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/periodontal-maintenance" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


