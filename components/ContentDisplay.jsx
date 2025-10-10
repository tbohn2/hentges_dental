import SEOImage from "./SEOImage";

export default function ContentDisplay({ pageTitle, content }) {
    return (
        <div className="p-12 md:w-4/5 lg:w-2/3 w-11/12 self-center rounded-2xl flex flex-col justify-center bg-primary">
            <h1 className="md:text-6xl text-3xl font-bold text-secondary pb-4">{pageTitle}</h1>
            {content.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-4 w-full">
                    {item.heading && <h2 className="md:text-4xl text-2xl font-bold w-full">{item.heading}</h2>}
                    <div className="w-full">
                        {item.imgSrc && (
                            <SEOImage
                                src={item.imgSrc}
                                alt={item.heading ? `${item.heading} - Hentges Dental Mesa, Arizona` : `${pageTitle} - Hentges Dental`}
                                title={item.heading || pageTitle}
                                width={400}
                                height={300}
                                className="md:w-1/4 w-5/6 md:float-right float-center m-2 p-1 object-cover"
                                sizes="(max-width: 768px) 80vw, 25vw"
                            />
                        )}
                        {item.text.map((text, index) => (
                            <p key={index} className="md:text-2xl text-base text-wrap pb-4">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}