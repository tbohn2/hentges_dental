import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Cosmetic Dentistry | Mesa, AZ | Hentges Dental",
    description: "At Hentges Dental, we provide cosmetic dentistry services to help you improve your smile. Call us today!",
};

export default function CosmeticDentistry() {
    const title = "COSMETIC DENTISTRY";

    const content = [
        { heading: '', text: ["Cosmetic dentistry has skyrocketed in popularity over the past few decades. At Hentges Dental, we specialize in several cosmetic services aimed at improving the appearance of your teeth and overall smile. From minor cosmetic changes to full-tooth restorations, we have got you covered!"] },
        { heading: <Link href='/procedures/teeth-whitening' className="text-tertiary hover:underline">TEETH WHITENING</Link>, text: ["One of the most common complaints we receive involves the brightness of our patients’ smiles. For this reason, we offer professional teeth whitening treatment. Teeth whitening is one of the most basic and cost-effective ways to improve your smile.", "As we get older, our teeth pick up stains from certain foods, drinks, medications, and personal habits. These stains, also known as extrinsic stains, are easy to remove with a bleaching solution. However, many store-bought bleaching products leave people dissatisfied with the results. Because we are trained professionals, we use a bleaching agent with a much higher concentration than store-bought alternatives. Our whitening treatment could make your teeth up to eight shades brighter in just a single appointment!"] },
        { heading: <Link href='/procedures/dental-crown' className="text-tertiary hover:underline">PORCELAIN CROWNS</Link>, text: ["A dental crown is a tooth-shaped cap that completely covers the visible portion of a damaged or decayed tooth. In previous years, a dental crown was fabricated using a gold or silver amalgam. These days, porcelain is usually the material of choice. Porcelain is a ceramic compound that mimics the light-reflective properties of natural enamel. It can also be textured and color-matched to your existing teeth. Thanks to porcelain and other ceramics, crowns can also be used to fix the aesthetics of an unsightly tooth."] },
        { heading: <Link href='/procedures/crowns-cerec' className="text-tertiary hover:underline">CEREC CROWNS</Link>, text: ["With CEREC crowns, we can make your crown right in our office. We take pictures of your tooth, and create a 3D model that we can use to make a crown for you while you’re here. The crown is the same porcelain over metal you would expect from a traditional crown - but in less time than a traditional crown takes."] },
        { heading: <Link href='/procedures/dental-veneers' className="text-tertiary hover:underline">DENTAL VENEERS</Link>, text: ["A dental veneer is a razor-thin shell that is bonded to the front surface of a tooth. Like our dental crowns, our veneers are typically made from porcelain. Veneers can be used to fix teeth that are severely discolored, worn down, chipped or broken, misaligned, uneven, irregularly shaped, or even gapped. During the procedure, we have to remove a small amount of enamel to accommodate the thickness of the veneer. For this reason, the veneer procedure is considered irreversible."] },
        { heading: <Link href='/procedures/dental-bonding' className="text-tertiary hover:underline">DENTAL BONDING</Link>, text: ["Patients looking for a less-invasive and more cost-effective solution may benefit from dental bonding. Dental bonding involves the application of composite resin, a putty-like material, to the surface of an aesthetically displeasing tooth. For example, dental bonding is an excellent solution for minor chips or cracks. During the procedure, the composite resin will be color-matched to the existing shade of your enamel, making it virtually indistinguishable from the rest of your tooth."] },
        { heading: <Link href='/procedures/snap-on-smile' className="text-tertiary hover:underline">SNAP-ON SMILE</Link>, text: ["The Snap-On-Smile is made from a thin but very strong dental resin that looks just like your natural teeth. It fits right over your own teeth to give you a beautiful, natural-looking smile - even if you have stains, chips, gaps or missing teeth."] },
        { heading: 'SCHEDULE YOUR CONSULTATION', text: [<>If you are unsatisfied with the current state of your smile, you may qualify for cosmetic dentistry! Call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> to schedule your consultation now!</>] }
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


