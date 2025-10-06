import Image from "next/image";

export default function ContentDisplay({ pageTitle, content }) {
    return (
        <div className="p-12 md:w-4/5 lg:w-2/3 w-11/12 self-center rounded-2xl flex flex-col justify-center bg-primary">
            <h1 className="text-6xl font-bold text-secondary pb-4">{pageTitle}</h1>
            {content.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-4 w-full">
                    {item.heading && <h2 className="text-4xl font-bold w-full">{item.heading}</h2>}
                    <div className="w-full">
                        {item.imgSrc && (
                            <Image
                                src={item.imgSrc}
                                alt={item.heading}
                                title={item.heading}
                                className="w-1/4 float-right m-2 p-1 object-cover"
                            />
                        )}
                        {item.text.map((text, index) => (
                            <p key={index} className="text-2xl text-wrap pb-4">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}