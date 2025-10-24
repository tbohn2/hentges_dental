import RequestForm from "../../components/RequestForm";
import Link from "next/link";

export const metadata = {
    title: "Hentges Dental | Request Appointment | Mesa, AZ",
    description: "Schedule your dental appointment online with Hentges Dental in Mesa, AZ. Easy online booking for emergency & routine care. New patients welcome. Call (480) 964-2131.",
    keywords: "schedule appointment Mesa AZ, dental appointment Mesa, online booking Mesa, request appointment Mesa, new patient Mesa, dental scheduling Mesa",
}


export default function RequestAppointment() {



    return (
        <>
            <link rel="canonical" href="https://hentgesdental.com/request-appointment" />
            <div className="bg-primary md:w-4/5 lg:w-2/3 w-11/12 rounded-2xl sm:p-12 p-6 flex flex-wrap justify-center">
                <h1 className="text-2xl font-bold text-secondary pb-4 w-full text-center">REQUEST APPOINTMENT</h1>
                <p className="text-xl text-center text-wrap pb-4 font-semibold w-full">Please fill out the form below to request an appointment with Hentges Dental (formerly <Link href="/Dr-Leo-Christensen" className="hover:text-secondary text-tertiary underline">Christensen Family Dentistry</Link>) in Mesa, AZ</p>
                <RequestForm />
            </div>
        </>
    );
}

