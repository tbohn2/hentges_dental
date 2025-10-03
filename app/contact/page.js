import Image from "next/image";
import Link from "next/link";
import receptionPhone from "../../public/images/reception-phone.jpg";

export default function Contact() {

    const hours = [
        { day: "Monday", hours: "7:30 AM - 5:00 PM" },
        { day: "Tuesday", hours: "7:30 AM - 5:00 PM" },
        { day: "Wednesday", hours: "7:30 AM - 5:00 PM" },
        { day: "Thursday", hours: "7:30 AM - 5:00 PM" },
        { day: "Friday", hours: "Closed" },
        { day: "Saturday", hours: "Closed" },
        { day: "Sunday", hours: "Closed" },
    ];

    return (
        <div className="bg-primary w-full p-12 flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center bg-primary w-2/3 px-4">
                <h1 className="text-6xl font-bold text-secondary pb-4 w-full">CONTACT US</h1>
                <p className="text-xl text-wrap pb-4 font-semibold w-full">
                    New patients are always welcome at Hentges Dental! Contact our Mesa dental office with any questions about dental treatments, insurance, or your oral health—our knowledgeable team is here to assist you.
                </p>
                <p className="text-xl text-wrap pb-4 font-semibold w-full">You may also request an appointment through our <Link href="/request-appointment" className="text-secondary hover:underline">Online Appointment Request Form</Link>.</p>
                <div className="flex flex-col items-center justify-start gap-4 w-1/2">
                    <h2 className="text-4xl font-bold w-full">Hentges Dental</h2>
                    <p className="text-xl text-wrap pb-4 font-semibold w-full">Address: <br /> 560 N. Stapley Dr. Ste 2 <br /> Mesa, AZ 85203</p>
                    <p className="text-xl text-wrap pb-4 font-semibold w-full">Phone: <a href="tel:(480) 964-2131" className="text-secondary hover:underline">(480) 964-2131</a></p>
                    <p className="text-xl text-wrap pb-4 font-semibold w-full">Email: <a href="mailto:hentgesdental@gmail.com" className="text-secondary hover:underline">hentgesdental@gmail.com</a></p>
                </div>
                <div className="flex flex-col items-center justify-start gap-1 w-1/2">
                    <h2 className="text-4xl font-bold w-full">Hours</h2>
                    {hours.map((hour) => (
                        <p key={hour.day} className="text-xl text-wrap pb-4 font-semibold w-full">{hour.day}: {hour.hours}</p>
                    ))}
                </div>
            </div>
            <Image src={receptionPhone} alt="Receptionist on Phone" className="w-1/6 h-1/6 object-cover" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.6481704760856!2d-111.80604301062473!3d33.425932075436734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba6345c8228bb%3A0x374a353f4672cf6f!2sChristensen%20Family%20Dentistry!5e0!3m2!1sen!2sus!4v1758577250768!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-2/3 min-h-[450px]"></iframe>

        </div>
    );
}


