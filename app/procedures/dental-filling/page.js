import ContentDisplay from "../../../components/ContentDisplay";

export const metadata = {
    title: "Dental Filling | Mesa, AZ | Hentges Dental",
    description: "Restore your smile with tooth-colored fillings in Mesa, AZ. Composite resin blends naturally with your teeth — call (480) 964-2131 today!",
};

export default function DentalFilling() {
    const title = "DENTAL FILLING";

    const content = [
        {
            heading: "",
            text: [
                "A dental filling is a common restorative dental treatment used to repair teeth that have been damaged by cavities or minor fractures. Fillings help restore the tooth’s original shape, strength, and function, while also improving the appearance of your smile. Dr. Zach Hentges uses tooth-colored composite resin fillings to repair cavities and minor tooth decay. These fillings are custom-matched to your natural tooth shade, blending seamlessly for a virtually invisible restoration and long-lasting protection."
            ]
        },
        {
            heading: "WHY DENTAL FILLINGS MATTER",
            text: [
                "Dental fillings play a crucial role in preserving your oral health. When a cavity forms due to bacteria eroding the enamel, it creates a small hole in the tooth. If left untreated, this decay can progress deeper, reaching the tooth’s pulp and nerves, which may cause pain and lead to more serious dental issues. Fillings stop the spread of decay, prevent further damage, and help maintain the integrity of your natural tooth."
            ]
        },
        {
            heading: "",
            text: [
                "Catching cavities early allows Dr. Hentges to remove the decayed portion of the tooth and place a filling, preventing the problem from worsening. The smaller the cavity, the less tooth structure needs to be removed, resulting in a stronger, healthier tooth. Our modern dental techniques focus on preserving as much of your natural tooth as possible during the filling process."
            ]
        },
        {
            heading: "TYPES OF DENTAL FILLING MATERIALS",
            text: [
                "There are several types of materials used for dental fillings. While silver amalgam fillings were once common, Dr. Hentges suggests (and many patients now prefer) composite resin fillings, which are tooth-colored and blend seamlessly with your natural teeth. Composite fillings are durable, aesthetically pleasing, and free from mercury. Advances in dental materials mean you can choose a filling that is both safe and virtually invisible."
            ]
        },
        {
            heading: "",
            text: [
                <>If you suspect you have a cavity or are experiencing tooth pain, don’t wait to seek treatment. At Hentges Dental in Mesa, AZ, we can quickly and comfortably restore your tooth with a dental filling, often in a single visit. Call us today at <a href="tel:(480) 964-2131" className="text-tertiary hover:underline">(480) 964-2131</a> to schedule your appointment.</>
            ]
        },
    ]

    return (
        <ContentDisplay pageTitle={title} content={content} />
    );
}