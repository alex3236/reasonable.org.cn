/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'q1.qlogo.cn',
                port: '',
                pathname: '/g/**',
            },
        ],
    },
};

export default nextConfig;
