/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/about',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
