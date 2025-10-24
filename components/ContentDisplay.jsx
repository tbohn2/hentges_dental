import SEOImage from "./SEOImage";

export default function ContentDisplay({ pageTitle, content }) {
    return (
        <div className="quicksand my-2 p-8 md:p-12 md:w-4/5 lg:w-2/3 w-11/12 self-center rounded-2xl flex flex-col justify-center bg-primary">
            <h1 className="geist-sans xl:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold text-secondary pb-4">{pageTitle}</h1>
            {content.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-4 w-full">
                    {item.heading && <h2 className="geist-sans xl:text-4xl lg:text-3xl sm:text-2xl xs:text-xl text-lg font-semibold w-full">{item.heading}</h2>}
                    <div className="w-full">
                        {item.imgSrc && (
                            <SEOImage
                                src={item.imgSrc}
                                alt={item.heading ? `${item.heading} - Hentges Dental Mesa, Arizona` : `${pageTitle} - Hentges Dental`}
                                title={item.heading || pageTitle}
                                width={400}
                                height={300}
                                className="md:w-1/3 w-5/6 md:float-right float-center m-2 p-1 object-cover"
                                sizes="(max-width: 768px) 80vw, 33vw"
                            />
                        )}
                        {item.text.map((text, index) => {
                            // Check if the text is a React element (like ul, li, etc.)
                            if (typeof text === 'object' && text !== null) {
                                return (
                                    <div key={index} className="font-medium lg:text-2xl md:text-xl text-base text-wrap pb-4">
                                        {text}
                                    </div>
                                );
                            }
                            // Regular text content
                            return (
                                <p key={index} className="font-medium lg:text-2xl xs:text-xl text-base text-wrap pb-4">
                                    {text}
                                </p>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}