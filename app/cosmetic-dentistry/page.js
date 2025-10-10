import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Cosmetic Dentistry | Mesa, AZ | Hentges Dental",
    description: "Cosmetic dentistry in Mesa, AZ transforms your smile. Whitening, veneers, crowns & more. Call (480) 964-2131 for consultation.",
};

export default function CosmeticDentistry() {
    const title = "COSMETIC DENTISTRY";

    const content = [
        {
            heading: '', text: [
                "Cosmetic dentistry is more popular than ever, helping countless patients achieve the beautiful, confident smiles they desire. At Hentges Dental in Mesa, AZ, we offer a full range of cosmetic dental services designed to enhance the look of your teeth and boost your self-esteem. Whether you’re interested in subtle improvements or a complete smile makeover, our team is here to help you reach your goals."
            ]
        },
        {
            heading: <Link href='/procedures/teeth-whitening' className="text-tertiary hover:underline">TEETH WHITENING</Link>, text: [
                "Many patients come to us hoping for a brighter, whiter smile. Our professional teeth whitening treatments deliver dramatic results that over-the-counter products simply can’t match. Everyday habits, certain foods and drinks, medications, and aging can all cause tooth discoloration. Our in-office whitening uses powerful, safe bleaching agents that can lighten your teeth by several shades in just one visit, giving you a noticeably whiter smile."
            ]
        },
        {
            heading: <Link href='/procedures/dental-crown' className="text-tertiary hover:underline">PORCELAIN CROWNS</Link>, text: [
                "Porcelain dental crowns are custom-made caps that restore the shape, strength, and appearance of damaged or decayed teeth. Unlike older metal crowns, today’s porcelain crowns are crafted to look just like your natural teeth, reflecting light and matching your unique tooth color. Crowns are a great solution for restoring both function and aesthetics to your smile."
            ]
        },
        {
            heading: <Link href='/procedures/crowns-cerec' className="text-tertiary hover:underline">CEREC CROWNS</Link>, text: [
                "With CEREC technology, we can design and create your custom dental crown right here in our Mesa office—often in a single appointment. Using digital imaging, we capture a precise 3D model of your tooth and craft a high-quality porcelain crown on-site. This means you get the same durable, natural-looking results as a traditional crown, but with less waiting and fewer visits."
            ]
        },
        {
            heading: <Link href='/procedures/dental-veneers' className="text-tertiary hover:underline">DENTAL VENEERS</Link>, text: [
                "Dental veneers are ultra-thin porcelain shells that are bonded to the front of your teeth to correct a variety of cosmetic concerns. Veneers can transform teeth that are stained, chipped, worn, uneven, misaligned, or have gaps. The process involves removing a small amount of enamel to ensure a perfect fit and natural look. Veneers are a long-lasting way to achieve a flawless, radiant smile."
            ]
        },
        {
            heading: <Link href='/procedures/dental-bonding' className="text-tertiary hover:underline">DENTAL BONDING</Link>, text: [
                "Dental bonding is a quick, affordable cosmetic treatment that can repair minor imperfections such as chips, cracks, or gaps. We apply a tooth-colored composite resin to the affected area, sculpt it for a seamless appearance, and harden it with a special light. The result is a natural-looking restoration that blends beautifully with your existing teeth."
            ]
        },
        {
            heading: <Link href='/procedures/snap-on-smile' className="text-tertiary hover:underline">SNAP-ON SMILE</Link>, text: [
                "Snap-On Smile is a removable dental appliance made from strong, thin resin that fits comfortably over your natural teeth. It instantly gives you a full, attractive smile—even if you have stains, chips, gaps, or missing teeth. Snap-On Smile is a non-invasive, affordable way to achieve a dramatic cosmetic improvement without permanent dental work."
            ]
        },
        {
            heading: 'SCHEDULE YOUR CONSULTATION', text: [
                <>Ready to love your smile? Discover your cosmetic dentistry options at Hentges Dental. Call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> to book your cosmetic consultation today!</>
            ]
        }
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


