import ReviewCarousel from "../../components/ReviewCarousel";

export const metadata = {
    title: "Patient Testimonials | Mesa, AZ | Hentges Dental",
    description: "Read real patient reviews & testimonials about Hentges Dental in Mesa, AZ. See why patients choose us for their dental care. Call (480) 964-2131.",
    keywords: "patient reviews Mesa AZ, dental testimonials Mesa, Hentges Dental reviews, dentist reviews Mesa, patient feedback Mesa, dental practice reviews Mesa",
};

export default function PatientTestimonials() {
    const reviews = [
        { name: "Colette C.", review: "Amazing experience. I go every 6 months. He is honest and a wonderful dentist and man. Their office is efficient and clean and very personable. I recommend everyone to go to him. I love their hygienist and staff. They are efficient and always remember who I am. The front desk is always happy and considerate especially Leslie and the new Dr. Zack [sic] is very good. The hygienist is so good and never makes me feel uncomfortable" },
        { name: "Pih L.", review: "I am a new patient. It’s a very nice facility! Dr. Hentges and staff are personal, kind and competent, he fixed my problems fast and efficiently. Great first experience!" },
        { name: "Lillie D.", review: "I don't think I've ever had a more thorough teeth cleaning. Everything from scheduling to cleaning to diagnosis was quick and done efficiently. Everyone is kind and willing to help. Love it!" },
        { name: "Teresa E.", review: "I came here for a 2nd option and was so scared it would be the same information. As soon as I got here they greeted me and I filled out a few minutes of paperwork and I was in to see Dr. Hentges. He took a couple of X-rays and within a few minutes he was explaining everything. He got right to the point and was very knowledgeable about my situation and referred me to a periodontist to get the exact professional I personally needed. Dr. Hentges was calm and confident gentle and reassuring. I will be bringing the family here from now on. Thank you Dr. Hentges your the best dentist I have ever been to and look forward to coming to you for all my family's dental needs." },
    ]

    return (
        <div className="bg-primary w-full p-12 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-6xl font-bold text-secondary w-full text-center">PATIENT TESTIMONIALS</h1>
            <p className="text-2xl text-wrap font-semibold w-full text-center">We love hearing from our patients, take a moment to leave us a review on <a href="https://www.google.com/maps/place/Christensen+Family+Dentistry/@33.4259409,-111.8054747,15z/data=!4m2!3m1!1s0x0:0x374a353f4672cf6f?sa=X&ved=2ahUKEwifhLnC_4jmAhXgJzQIHQhMBBIQ_BIwCnoECAwQCA" className="text-tertiary hover:underline">Google</a></p>
            <p className="text-2xl text-wrap font-semibold w-full text-center pb-4">Thank you for your feedback!</p>
            <ReviewCarousel reviews={reviews} />
        </div>
    );
}


