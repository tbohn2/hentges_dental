import Image from "next/image";
import office5 from "../../public/images/office5.jpg";

export default function About() {
    return (
        <div className="p-8 flex flex-col justify-center bg-primary">
            <div className="flex flex-row md:flex-nowrap sm:flex-wrap justify-center gap-4 w-full pb-4">
                <div className="flex flex-col flex-grow gap-4 w-full h-full">
                    <h1 className="text-6xl font-bold text-secondary">ABOUT US</h1>
                    <p className="text-2xl py-4">Above all else, we here at Hentges Dental want our patients to maintain healthy, bright, and beautiful smiles! Next to that, we want our patients to feel comfortable and content during their appointments with us. Both of these goals begin with patient education! Staying informed can help you better understand the tenants of good oral health, prevent potential problems, and reveal why certain treatments are necessary.</p>
                </div>
                <Image src={office5} alt="Hentges Dental Office" title="Hentges Dental Office" className="w-1/3" />
            </div>
            <div className="flex flex-col justify-center gap-8 w-full">
                <h2 className="text-4xl font-bold text-quaternary">Your Doctor, Your Team, and Our Technology</h2>
                <p className="text-2xl">Even with a strong at-home oral hygiene regimen, regular appointments with our office are vital to your oral health. If you are new to our practice, you may have a few questions about Dr. Zach Hentges, our team, and our services. The best way to learn more is a consultation appointment. In the meantime, the following information can help you become better acquainted with our top-notch care.</p>
                <p className="text-2xl">Dr. Zach Hentges and the members of our team are dedicated to serving our community with advanced treatments and comprehensive education. We believe that professional dentistry should not just enhance your smile, it should also improve your overall well-being. Recent studies have shown an intrinsic relationship between your oral, bodily, and mental health.</p>
                <p className="text-2xl">Our experience and expertise, along with our use of advanced technologies and techniques establishes a higher level of care. Cutting-edge technology has resulted in procedures that are safer, faster, more comfortable, and more effective than ever before. If you would like to learn more about our practice and our procedures, our team is happy to help!</p>
            </div>
        </div >
    );
}