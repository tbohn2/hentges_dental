import ContentDisplay from "../../components/ContentDisplay";
import Link from "next/link";
import { getPublishedPosts } from "../../lib/blogData";

export const metadata = {
    title: "Hentges Dental | Dental Blog | Mesa, AZ",
    description: "Stay informed with our dental blog featuring oral health tips, dental procedures, and dental care advice from Hentges Dental in Mesa, AZ.",
    keywords: "dental blog Mesa AZ, oral health tips, dental care advice, dental procedures blog, Hentges Dental blog",
};

export const revalidate = 3600;

export default function DentalBlog() {
    const title = "DENTAL BLOG";
    const posts = getPublishedPosts();

    if (posts.length === 0) {
        const content = [
            {
                heading: "Dental Blog",
                text: [
                    "Our first article will be published soon. Check back every two weeks for new posts!"
                ]
            }
        ];
        return (
            <ContentDisplay pageTitle={title} content={content} />
        );
    }

    const content = [
        {
            heading: "Latest Articles",
            text: posts.map(p => `• ${p.title} — ${p.excerpt}`)
        }
    ];

    return (
        <div className="p-12 md:w-4/5 lg:w-2/3 w-11/12 self-center rounded-2xl flex flex-col justify-center bg-primary">
            <h1 className="md:text-6xl text-3xl font-bold text-secondary pb-4">{title}</h1>
            <div className="flex flex-col gap-4">
                {posts.map(post => (
                    <Link key={post.slug} href={`/dental-blog/${post.slug}`} className="p-4 blog-link rounded-xl">
                        <h2 className="md:text-3xl text-xl font-bold text-tertiary hover:underline">{post.title}</h2>
                        <p className="md:text-xl text-base">{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
