/** @type {import('next').NextConfig} */
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    headers: async () => [
        {
            source: '/_next/image(.*)',
            headers: [
                { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
            ],
        },
    ],
    images: {
        qualities: [60, 75, 85, 95, 100],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 348, 384, 421, 512],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hentgesdental.com',
            },
        ],
    },
    trailingSlash: false,
    compress: true,
    poweredByHeader: false,
    generateEtags: false,

    async redirects() {
        return [
            { source: '/index', destination: '/', permanent: true },
            { source: '/index.html', destination: '/', permanent: true },
            { source: '/index.php', destination: '/', permanent: true }
        ];
    },

};

export default nextConfig;
