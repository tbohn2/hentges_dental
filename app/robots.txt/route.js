export async function GET() {
    const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://hentgesdental.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow admin or private areas (if any exist in the future)
# Disallow: /admin/
# Disallow: /private/

# Allow all search engines to crawl the site
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
