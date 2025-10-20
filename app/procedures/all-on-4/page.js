import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Hentges Dental | All-on-4® Dental Implants | Mesa, AZ",
    description: "All-on-4 dental implants in Mesa, AZ replace full arch with 4 implants. Secure, natural-looking dentures. Call (480) 964-2131 today!",
};

export default function AllOn4() {
    const title = "ALL-ON-4® DENTURE TREATMENT";

    const content = [
        { heading: "", text: ["Dental implants are a leading solution for tooth replacement, offering a permanent and natural-feeling alternative to missing teeth. Whether you need to replace a single tooth or a full arch, dental implants can restore both function and aesthetics to your smile."] },
        { heading: "", text: ["For patients who need to replace an entire set of teeth, the All-on-4® dental implant technique is a highly effective and efficient option. Using just four strategically placed implants, this advanced procedure can support a full arch of prosthetic teeth, restoring your ability to eat, speak, and smile with confidence. At Hentges Dental, we offer a range of dental implant solutions to help you achieve a healthy, beautiful smile."] },
        { heading: "WHAT IS ALL-ON-4® AND HOW DOES IT WORK?", text: ["All-on-4® dental implants use four titanium posts that are surgically placed into the jawbone. These implants act as secure anchors for a custom-made set of replacement teeth. Once the implants have integrated with your bone, they provide a stable foundation for a full arch prosthesis—typically with two implants at the front and two angled at the back for maximum support."] },
        { heading: "", text: ["Because only four implants are needed per arch, the All-on-4® approach is less invasive and more cost-effective than traditional methods that require more implants, such as All-on-6. This makes it an excellent choice for full-mouth restoration."] },
        { heading: "LONGEVITY", text: ["All-on-4® dental implants are designed to be long-lasting, often providing 25 years or more of reliable function with proper care. Like natural teeth, their longevity depends on good oral hygiene. Brush with a low-abrasion toothpaste to protect the porcelain, and use floss threaders or specialized implant floss to keep the area clean—these tools are ideal for implants and help prevent debris buildup. Regular dental checkups are also important to maintain your new smile."] },
        { heading: "COST", text: ["Investing in All-on-4® dental implants is a long-term solution for tooth loss. The cost typically ranges from $25,000 to $35,000 per arch, depending on individual needs and treatment complexity. Many dental insurance plans offer coverage for implant procedures. Patients who have transitioned from traditional dentures to All-on-4® often report a dramatic improvement in comfort, confidence, and quality of life."] },
        { heading: "SCHEDULE A CONSULTATION FOR DENTAL IMPLANTS", text: [<>If you’re ready to restore your smile with All-on-4® dental implants in Mesa, AZ, the team at Hentges Dental is here to help. Call us today at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your consultation and take the first step toward a healthier, more confident you.</>] },
    ]

    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/procedures/all-on-4" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


