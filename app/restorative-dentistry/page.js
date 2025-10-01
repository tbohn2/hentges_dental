import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Restorative Dentistry | Mesa, AZ | Hentges Dental",
    description: "At Hentges Dental, we provide restorative dentistry services to help you restore your smile.",
};

export default function RestorativeDentistry() {
    const title = "RESTORATIVE DENTISTRY";

    const content = [
        { heading: '', text: ["At Hentges Dental, we provide restorative dentistry services to help you restore your smile."] },
        { heading: <Link href='/procedures/dental-filling' className="text-tertiary hover:underline">DENTAL FILLINGS</Link>, text: ["Dental fillings are the best way to restore minor to moderate instances of tooth decay. Most fillings these days consist of a material known as composite resin. Composite resin is an aesthetically-pleasing material that we color-match to the existing shade of your enamel. For this reason, a composite filling is virtually indistinguishable from the rest of your tooth."] },
        { heading: <Link href='/procedures/dental-crown' className="text-tertiary hover:underline">DENTAL CROWNS</Link>, text: ["A dental crown is a tooth-shaped cap that improves the structure and cosmetics of a damaged or decayed tooth. During the procedure, your tooth must be completely reshaped to accommodate the shape of the crown. Once the tooth is reshaped, we will permanently bond the crown to the enamel using a special adhesive. Many crowns are fabricated these days with porcelain, due to its unmatched aesthetics."] },
        { heading: <Link href='/procedures/dental-bridge' className="text-tertiary hover:underline">DENTAL BRIDGES</Link>, text: ["A dental bridge is a tooth replacement that typically consists of two dental crowns linked together by a pontic, or false tooth. A traditional bridge is supported by the two surrounding teeth, known as abutment teeth, that we reshape to receive the crowns. A bridge can also be supported by a series of dental implants if multiple adjacent teeth are missing. If you are missing a tooth, a bridge will prevent the remaining teeth from shifting out of their proper position."] },
        { heading: <Link href='/procedures/dental-implants' className="text-tertiary hover:underline">DENTAL IMPLANTS</Link>, text: ["A dental implant is a small titanium post that we surgically embed into the jawbone. The implant serves as the root component of a prosthetic tooth. Once the implant is in place, it will fuse to the bone during the process of osseointegration. Osseointegration allows the implant to support a restoration against the strongest forces of your bite. For this reason, dental implants are widely considered to be the next best thing to your natural teeth."] },
        { heading: <Link href='/procedures/all-on-4' className="text-tertiary hover:underline">ALL-ON-4® TREATMENT CONCEPT</Link>, text: ["All-on-4 is a complete bridge that only requires four implants. The two posteriors (back) implants are placed a precise angle to maximize the support of your jawbone. The two anterior (front) implants are placed at a vertical angle like conventional implant screws."] },
        { heading: <Link href='/procedures/dentures' className="text-tertiary hover:underline">DENTURES: COMPLETE AND PARTIAL</Link>, text: ["A denture is a removable appliance that is usually used to replace one or more missing teeth. A partial denture usually attaches to the surrounding teeth with metal clasps. A complete denture consists of a flesh-colored acrylic base that supports a complete arch of prosthetic teeth. We offer custom-fit dentures as a more comfortable, functional, and durable solution."] },
        { heading: <Link href='/procedures/same-day-dentures' className="text-tertiary hover:underline">SAME-DAY DENTURES</Link>, text: ["We would love to talk to you about the beauty of same-day dentures for your mouth. These dentures are simply amazing, especially when you can have them fitted the same day, and walk out of our offices with brand new, sparkly teeth!"] },
        { heading: <Link href='/procedures/inlays-and-onlays' className="text-tertiary hover:underline">INLAYS & ONLAYS</Link>, text: ["Inlays and onlays are ideal for areas of decay too large for a filling, but not large enough to require the placement of a dental crown. The restoration is considered an inlay if it is placed within the occlusal (bite) surface of a tooth. The restoration is considered an onlay if it extends beyond one or more of the occlusal cusps."] },
        { heading: <Link href='/procedures/tooth-extraction' className="text-tertiary hover:underline">TOOTH EXTRACTION</Link>, text: ["There are two types of tooth extractions: simple and surgical. We perform a simple extraction on a tooth that has already erupted above the gumline. We perform a surgical extraction on a tooth that has become impacted, or has yet to erupted, such as wisdom teeth. Extraction may be necessary to prevent the spread of infection and other complications."] },
        { heading: <Link href='/procedures/root-canal' className="text-tertiary hover:underline">ROOT CANAL THERAPY</Link>, text: ["A root canal is a last-ditch effort to save a tooth from extraction. We may recommend a root canal if an infection has spread to the “pulpy” center of the tooth that contains nerve endings and other connective tissues. Once the infection has been removed, we fill the canals with a rubber-like material known as gutta-percha. A tooth that has received root canal treatment typically needs to be capped with a crown."] },
        { heading: <Link href='/procedures/tmj' className="text-tertiary hover:underline">TMJ</Link>, text: ["The temporomandibular joint (TMJ), allows us to move our joint forwards, backward, and side-to-side. Any problems that prevent us from using this joint properly are known as TMD or temporomandibular joint disorders. We provide some treatments designed to alleviate any pain or discomfort associated with the TMJ."] },
        { heading: <Link href='/procedures/periodontal-maintenance' className="text-tertiary hover:underline">PERIODONTAL MAINTENANCE</Link>, text: ["Periodontal maintenance is for people with a history of periodontal disease. You may have undergone a procedure in the past to deep clean your mouth along the gum line. It is called dental scaling and root planing. Once you have undergone those procedures, you have to continue to make sure your gums are deep cleaned every three to four months."] },
        { heading: 'SCHEDULE AN APPOINTMENT', text: [<>To learn more about our restorative services call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a>, and schedule your appointment now!</>] }
    ]


    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


