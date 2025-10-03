import ContentDisplay from "../../components/ContentDisplay";
import Image from "next/image";
import thumbsUp from "../../public/images/thumbs-up.jpg";

export const metadata = {
    title: "Patient Testimonials | Mesa, AZ | Hentges Dental",
    description: "Read what our patients have to say about their experience at Hentges Dental. Call us today!",
};

export default function PatientTestimonials() {
    const title = "PATIENT TESTIMONIALS";

    const content = [
        { heading: 'WE LOVE TO HEAR FROM YOU!', text: [<>We love hearing from our patients, take a moment to leave us a review on <a href="https://www.google.com/maps/place/Christensen+Family+Dentistry/@33.4259409,-111.8054747,15z/data=!4m2!3m1!1s0x0:0x374a353f4672cf6f?sa=X&ved=2ahUKEwifhLnC_4jmAhXgJzQIHQhMBBIQ_BIwCnoECAwQCA" className="text-tertiary hover:underline">Google</a></>] },
    ]

    const reviews = [
        { name: "Pih L.", review: "I am a new patient. It’s a very nice facility! Dr. Hentges and staff are personal, kind and competent, he fixed my problems fast and efficiently. Great first experience!" },
        { name: "Teresa E.", review: "I came here for a 2nd option and was so scared it would be the same information. As soon as I got here they greeted me and I filled out a few minutes of paperwork and I was in to see Dr. Hentges. He took a couple of X-rays and within a few minutes he was explaining everything. He got right to the point and was very knowledgeable about my situation and referred me to a periodontist to get the exact professional I personally needed. Dr. Hentges was calm and confident gentle and reassuring. I will be bringing the family here from now on. Thank you Dr. Hentges your the best dentist I have ever been to and look forward to coming to you for all my family's dental needs." },
        { name: "Lillie D.", review: "I don't think I've ever had a more thorough teeth cleaning. Everything from scheduling to cleaning to diagnosis was quick and done efficiently. Everyone is kind and willing to help. Love it!" },
        { name: "Colette C.", review: "Amazing experience. I go every 6 months. He is honest and a wonderful dentist and man. Their office is efficient and clean and very personable. I recommend everyone to go to him. I love their hygienist and staff. They are efficient and always remember who I am. The front desk is always happy and considerate especially Leslie and the new Dr. Zack [sic] is very good. The hygienist is so good and never makes me feel uncomfortable" }
    ]

    return (
        <div className="bg-primary">
            <ContentDisplay pageTitle={title} content={content} />
            {reviews.map((review, index) => (
                <div key={index} className="flex flex-wrap gap-4 justify-between w-full p-8 bg-tertiary text-primary">
                    <h2 className="text-4xl font-bold w-1/5 border-r-4 border-primary">{review.name}</h2>
                    <p className="text-2xl text-wrap font-semibold w-1/2">"{review.review}"</p>
                    <div className="flex flex-row items-start gap-1 w-1/5">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="#FFD700"
                                viewBox="0 0 24 24"
                                className="inline-block"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}


