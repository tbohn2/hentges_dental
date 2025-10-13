import { NextResponse } from "next/server";
import { getPublishedPosts, getPostBySlug } from "../../../lib/blogData";

export const revalidate = 3600; // revalidate every hour

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.max(1, parseInt(limitParam, 10) || 0) : undefined;

    if (slug) {
        const post = getPostBySlug(slug);
        if (!post) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        // Only return if published
        const published = getPublishedPosts().find((p) => p.slug === slug);
        if (!published) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        return NextResponse.json(published, { status: 200 });
    }

    let posts = getPublishedPosts();
    if (limit && Number.isFinite(limit)) {
        posts = posts.slice(0, limit);
    }

    return NextResponse.json(posts, { status: 200 });
}


