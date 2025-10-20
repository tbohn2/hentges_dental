import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";

export const metadata = {
    title: "Hentges Dental | Restorative Dentistry | Mesa, AZ",
    description: "Expert restorative dentistry in Mesa, AZ repairs damaged teeth with crowns, fillings, implants & bridges. Restores function & beauty. Call (480) 964-2131.",
    keywords: "restorative dentistry Mesa AZ, dental crowns Mesa, dental fillings Mesa, dental implants Mesa, dental bridges Mesa, tooth repair Mesa",
};

export default function RestorativeDentistry() {
    const title = "RESTORATIVE DENTISTRY";

    const content = [
        { heading: '', text: ["Restore your smile and oral health with comprehensive restorative dentistry at Hentges Dental in Mesa, AZ. Our experienced team offers a full range of dental restoration services to repair damaged teeth, replace missing teeth, and help you regain confidence in your smile."] },
        { heading: <Link href='/procedures/dental-filling' className="text-tertiary hover:underline">DENTAL FILLINGS</Link>, text: ["We use tooth-colored composite resin dental fillings to repair cavities and minor tooth decay. These fillings are custom-matched to your natural tooth shade, blending seamlessly for a virtually invisible restoration and long-lasting protection."] },
        { heading: <Link href='/procedures/dental-crown' className="text-tertiary hover:underline">DENTAL CROWNS</Link>, text: ["Dental crowns are custom-made caps that restore the strength, function, and appearance of teeth that are cracked, broken, or severely decayed. Our porcelain crowns are designed for a natural look and are securely bonded to your prepared tooth for lasting results."] },
        { heading: <Link href='/procedures/dental-bridge' className="text-tertiary hover:underline">DENTAL BRIDGES</Link>, text: ["Dental bridges are used to replace one or more missing teeth, filling gaps and preventing shifting of your remaining teeth. Traditional bridges are anchored by crowns on neighboring teeth, while implant-supported bridges offer a stable, long-term solution for multiple missing teeth."] },
        { heading: <Link href='/procedures/dental-implants' className="text-tertiary hover:underline">DENTAL IMPLANTS</Link>, text: ["Dental implants are titanium posts surgically placed in the jawbone to act as artificial tooth roots. Implants provide a strong foundation for crowns, bridges, or dentures, and are considered the gold standard for permanent tooth replacement due to their durability and natural feel."] },
        { heading: <Link href='/procedures/all-on-4' className="text-tertiary hover:underline">ALL-ON-4® TREATMENT</Link>, text: ["The All-on-4® treatment concept allows us to replace a full arch of teeth using just four strategically placed dental implants. This innovative approach maximizes bone support and provides a secure, natural-looking set of teeth—often in a single day."] },
        { heading: <Link href='/procedures/dentures' className="text-tertiary hover:underline">DENTURES: COMPLETE AND PARTIAL</Link>, text: ["We offer both complete and partial dentures to restore your smile if you are missing several or all of your teeth. Our custom-fit dentures are designed for comfort, function, and a natural appearance, helping you eat, speak, and smile with confidence."] },
        { heading: <Link href='/procedures/same-day-dentures' className="text-tertiary hover:underline">SAME-DAY DENTURES</Link>, text: ["With same-day dentures, you can leave our office with a new smile in just one visit. These immediate dentures are crafted and fitted on the same day as your tooth extraction, so you never have to go without teeth."] },
        { heading: <Link href='/procedures/inlays-and-onlays' className="text-tertiary hover:underline">INLAYS & ONLAYS</Link>, text: ["Dental inlays and onlays are custom restorations used when a cavity is too large for a filling but not extensive enough for a crown. Inlays fit within the biting surface of the tooth, while onlays cover one or more cusps, preserving as much healthy tooth structure as possible."] },
        { heading: <Link href='/procedures/tooth-extraction' className="text-tertiary hover:underline">TOOTH EXTRACTION</Link>, text: ["We perform both simple and surgical tooth extractions when a tooth is severely damaged, decayed, or impacted. Extractions may be necessary to prevent infection, relieve pain, or prepare for restorative treatments such as implants or dentures."] },
        { heading: <Link href='/procedures/root-canal' className="text-tertiary hover:underline">ROOT CANAL THERAPY</Link>, text: ["Root canal therapy is performed to save a tooth with infected or inflamed pulp. We remove the infection, clean and seal the root canals, and restore the tooth with a crown for long-term function and comfort."] },
        { heading: <Link href='/procedures/tmj' className="text-tertiary hover:underline">TMJ</Link>, text: ["TMJ (temporomandibular joint) disorders can cause jaw pain, headaches, and difficulty chewing. Our restorative dental team offers TMJ treatments to relieve discomfort and restore healthy jaw function."] },
        { heading: <Link href='/procedures/periodontal-maintenance' className="text-tertiary hover:underline">PERIODONTAL MAINTENANCE</Link>, text: ["For patients with a history of gum disease, periodontal maintenance is essential. We provide deep cleanings and ongoing care every three to four months to help keep your gums healthy and prevent recurrence of periodontal disease."] },
        { heading: 'SCHEDULE AN APPOINTMENT', text: [<>Ready to restore your smile? Call <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your restorative dentistry appointment at Hentges Dental in Mesa, AZ today!</>] }
    ]


    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/restorative-dentistry" />
            <ContentDisplay pageTitle={title} content={content} />
        </>
    );
}


