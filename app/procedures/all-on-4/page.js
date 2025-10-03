import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "All-on-4 | Dental Implants | Mesa, AZ | Hentges Dental",
    description: "All-on-4 is a complete denture that is supported by dental implants, effectively replacing an entire set of teeth. Call us today to findout if you are a candidate!",
};

export default function AllOn4() {
    const title = "ALL-ON-4 TREATMENT CONCEPT";

    const content = [
        { heading: "", text: ["For tooth restoration, there are multiple options available—one of those options being implants. The popularity of these permanent prosthetic teeth has been going up because of their ability to replicate the feeling and experience of natural teeth. You can get implants for either replacing one tooth or an entire set."] },
        { heading: "", text: ["When it comes to replacing an entire set of teeth, all-on-4 implants have become an efficient and highly effective option for restoring a person’s ability to chew and show off a beautiful smile. Just 4 implants are needed to achieve these results thanks to the incredible advances in technology. We at Christensen Family Dentistry provide a variety of treatment types for people looking to restore their smile!"] },
        { heading: "WHAT ALL-ON-4 IMPLANTS ARE AND HOW THEY WORK", text: ["To understand what all on 4 implants are, we have to understand how implants work. A dental implant comprises a titanium rod that is placed in the jawbone. This rod acts as an abutment tooth, meaning this is where the prosthetic teeth are attached. Once the jawbone bonds with these implants they are rock-solid which allows them to hold on to an entire arching row of prosthetic teeth with just 2 on either side."] },
        { heading: "", text: ["Just 4 implants are needed to complete a set of all-on-4’s making them an incredibly efficient form of dental implants if you must restore an entire mouth. And because few implants are used for this procedure, there are also cost benefits over the all-on-6 form of dental implants."] },
        { heading: "LONGEVITY", text: ["Because implants mimic real teeth as much as possible by utilizing the jawbone for support and strong porcelain for the prosthetic teeth themselves, they are incredibly durable and can last you at least 25 years or more if proper care is taken. Much like natural teeth, the longevity of implants ultimately comes down to oral care. Implants are cleaned similarly to natural teeth - just ensure that the toothpaste you use has the lowest abrasion possible as high abrasive toothpaste such as ones advertised as whitening pastes can damage the porcelain. For flossing, floss threaders are highly recommended. This is due to the fact that they are tailore-made for implants and braces. Regular dental floss can end up leaving strands and particles behind."] },
        { heading: "COST", text: ["All-on-4 implants are a long-term investment and are typically covered by insurance. Depending on many factors, all on 4 implants can range anywhere from $25,000 to $35,000. That sounds like a lot, but the benefit of implants is that they can be treated like real teeth in day-to-day life because they are permanent. We have had patients switch to all-on-4s from dentures and raved about the improvement it has had on their life."] },
        { heading: "TALK TO US ABOUT TOOTH RESTORATION OPTIONS", text: [<>If you are in need of a new smile, we are more than happy to help at Hentges Dental! If you would like to contact us and take the leap towards a better quality of life, you can call our office at <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> to begin the process.</>] },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


