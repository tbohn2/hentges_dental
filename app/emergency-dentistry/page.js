import ContentDisplay from "../../components/ContentDisplay";

export const metadata = {
    title: "Emergency Dentistry | Mesa, AZ | Hentges Dental",
    description: "At Hentges Dental, we provide emergency dentistry services to help you restore your smile.",
};

export default function EmergencyDentistry() {

    const title = "EMERGENCY DENTISTRY";

    const content = [
        { heading: '', text: ["A dental emergency is typically the result of trauma or injury to the face. Knowing what to do during a dental emergency can make the difference between saving and losing a tooth. Most dental emergencies require swift action and an immediate appointment. At Hentges Dental, we always leave time available for emergency appointments. The following information will help you take the necessary steps before you receive emergency treatment."] },
        { heading: "BROKEN FILLINGS", text: ["A broken filling is a minor and fairly common emergency. If you notice a broken or dislodged filling, be sure to schedule an appointment as soon as possible. A broken filling will put your tooth at risk of developing further decay. During your appointment, Dr. Zach Hentges will replace the filling to improve the structure and seal off the area from harmful bacteria."] },
        { heading: "KNOCKING OUT A TOOTH", text: ["If you or a family member knocks out a permanent tooth, there are a few steps you should take to save the tooth. The most important thing you can do is keep the tooth moist at all times. If possible, put the tooth back in the socket. You can also place the tooth in a small container of water or milk. Milk is preferred. When handling the tooth always hold it from the crown, never the root. Do not remove or scrub off any attached tissue fragments. You have the best chance of saving the tooth if you receive treatment within the hour."] },
        { heading: "CHIPPED AND BROKEN TEETH", text: ["If you chip or break a tooth, the first thing you should do is collect all the pieces. Next, you should immediately rinse out your mouth with warm water to clean the area. While a chipped tooth may not immediately constitute a dental emergency, it may worsen over time. We may suggest dental bonding or a dental crown improve the aesthetics and function of the tooth."] },
        { heading: "DENTAL PAIN AND TRAUMA", text: ["Significant pain is one of the biggest indicators that you may be in the midst of a dental emergency. Trauma and injuries as the result of sporting and other physical activities are easily preventable with a mouthguard. If you do experience trauma, you can reduce the swelling with a cold compress. Pain that seems to appear out of nowhere may be the result of tooth decay or infection. Severe toothaches may require a restorative treatment, such as a root canal."] },
        { heading: "DENTAL ABSCESSES", text: ["An abscess is typically the result of a bacterial infection near the root of a tooth. This is a serious condition that can damage your surrounding teeth or soft tissues when left untreated. If you are diagnosed with an abscess, it must be drained as soon as possible to remove the infection. In many cases, the infection is the result of decay within a tooth that spreads outside of the root. Once we remove the abscess, you may need a root canal to fully restore your oral health."] },
        { heading: "EXCESSIVE BLEEDING", text: ["Excessive bleeding is often the result of soft-tissue injuries. Soft tissue injuries include those to the tongue, cheeks, lips, and gums. To control the bleeding, you can rinse your mouth with a salt-water solution and place a moist gauze pad to the bleeding area. You can control the pain with an over-the-counter pain reliever, such as Advil or Ibuprofen. If the bleeding does not stop, be sure to schedule your appointment as soon as possible."] },
        { heading: "SCHEDULE YOUR EMERGENCY APPOINTMENT NOW!", text: [<>If you are in the midst of a dental emergency, we can help! Call <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a> to schedule your emergency appointment now!</>] },
    ]


    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}


