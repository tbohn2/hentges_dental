import { getPublishedPosts } from "../../lib/blogData";

export async function GET() {
    const baseUrl = 'https://hentgesdental.com';

    // Define all pages with their priorities and change frequencies
    const pages = [
        // Main pages (high priority)
        { url: '', priority: '1.0', changefreq: 'weekly', lastmod: "2025-10-10" },
        { url: '/about', priority: '0.9', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/services', priority: '0.9', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/contact', priority: '0.9', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/request-appointment', priority: '0.9', changefreq: 'monthly', lastmod: "2025-10-10" },

        // Service category pages (high priority)
        { url: '/family-dentistry', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/cosmetic-dentistry', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/restorative-dentistry', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/emergency-dentistry', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },

        // Doctor pages (high priority)
        { url: '/Dr-Zach-Hentges', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/Dr-Leo-Christensen', priority: '0.7', changefreq: 'monthly', lastmod: "2025-10-10" },

        // Location pages (high priority for local SEO)
        { url: '/locations/tempe', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/locations/chandler', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/locations/gilbert', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/locations/apache-junction', priority: '0.8', changefreq: 'monthly', lastmod: "2025-10-10" },

        // Patient information pages (medium-high priority)
        { url: '/patient-information', priority: '0.7', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/patient-testimonials', priority: '0.7', changefreq: 'weekly', lastmod: "2025-10-10" },
        { url: '/new-patient-forms', priority: '0.7', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/financial-and-insurance', priority: '0.7', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/dental-blog', priority: '0.6', changefreq: 'weekly', lastmod: "2025-10-10" },

        // Procedure pages (medium priority)
        { url: '/procedures/dental-implants', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-veneers', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-crown', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/teeth-whitening', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/root-canal', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-bridge', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dentures', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-cleaning', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-exam', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-filling', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dental-bonding', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/porcelain-crowns', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/inlays-and-onlays', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/tooth-extraction', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/wisdom-tooth-extractions', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/dentistry-for-kids', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/denture-repair', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/periodontal-care', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/periodontal-maintenance', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/oral-cancer-screening', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/tmj', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/sleep-apnea', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/oral-appliance-therapy', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/night-mouthguard', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/sports-mouthguard', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/laser-dentistry', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/digital-radiography', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/procedures/all-on-4', priority: '0.6', changefreq: 'monthly', lastmod: "2025-10-10" },

        // Technology and information pages (medium priority)
        { url: '/dental-technology', priority: '0.5', changefreq: 'monthly', lastmod: "2025-10-10" },
        { url: '/dental-procedures', priority: '0.5', changefreq: 'monthly', lastmod: "2025-10-10" },

        // Legal and policy pages (lower priority)
        { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly', lastmod: "2025-10-10" },
        { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly', lastmod: "2025-10-10" },
        { url: '/accessibility', priority: '0.3', changefreq: 'yearly', lastmod: "2025-10-10" },
    ];

    const blogUrls = getPublishedPosts().map(post => ({
        url: `/dental-blog/${post.slug}`,
        priority: '0.5',
        changefreq: 'weekly',
        lastmod: post.publishedAt,
    }));

    const allUrls = [...pages, ...blogUrls];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
