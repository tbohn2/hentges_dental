import ContentDisplay from "../../../components/ContentDisplay";
import SEOImage from "../../../components/SEOImage";
import { getPostBySlug, isPublished, getPublishedPosts } from "../../../lib/blogData";

export const dynamicParams = true;
export const revalidate = 3600; // revalidate hourly so bi-weekly posts publish on time

export async function generateStaticParams() {
    return getPublishedPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const parameters = await params;

    const post = getPostBySlug(parameters.slug);
    if (!post || !isPublished(post)) {
        return {
            title: "Article Not Found | Hentges Dental",
            robots: "noindex, follow",
        };
    }
    return {
        title: `${post.title} | Hentges Dental`,
        description: post.excerpt,
        // openGraph: {
        //     title: `${post.title} | Hentges Dental`,
        //     description: post.excerpt,
        //     type: "article",
        //     images: post.heroImg ? [post.heroImg] : undefined,
        // },
    };
}

export default async function BlogArticle({ params }) {
    const parameters = await params;
    const post = getPostBySlug(parameters.slug);
    if (!post || !isPublished(post)) {
        return (
            <div className="p-12 md:w-4/5 lg:w-2/3 w-11/12 self-center rounded-2xl flex flex-col justify-center bg-primary">
                <h1 className="md:text-6xl text-3xl font-bold text-secondary pb-4">Article Not Found</h1>
                <p className="md:text-2xl text-base">This article is unavailable or not yet published.</p>
            </div>
        );
    }

    const content = [
        {
            heading: post.title,
            imgSrc: post.heroImg,
            text: post.content,
        },
    ];

    const canonical = `https://hentgesdental.com/dental-blog/${post.slug}`;
    const articleLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.heroImg ? [`https://hentgesdental.com${post.heroImg}`] : undefined,
        datePublished: post.publishedAt,
        author: {
            "@type": "Organization",
            name: "Hentges Dental",
        },
        publisher: {
            "@type": "Organization",
            name: "Hentges Dental",
            logo: {
                "@type": "ImageObject",
                url: "https://hentgesdental.com/og-logo.png",
            },
        },
        mainEntityOfPage: canonical,
    };

    return (
        <>
            <link rel="canonical" href={canonical} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <ContentDisplay pageTitle="DENTAL BLOG" content={content} />
        </>
    );
}


