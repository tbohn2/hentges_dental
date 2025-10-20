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
    },
    trailingSlash: false,

    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true,
            },
            {
                source: '/index.php',
                destination: '/',
                permanent: true,
            }
        ];
    },
};

export default nextConfig;
