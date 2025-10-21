/** @type {import('next').NextConfig} */
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    images: {
        qualities: [75, 85, 95, 100],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
