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
            {
                source: '/reload',
                destination: '/laskkyl',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
