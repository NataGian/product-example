import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    webpack: (config) =>
        config,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
