import type {NextConfig} from "next";

const productPathConfig: NextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/lib': './lib',
            '@/components': './components'
        };
        return config;
    },
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

export default productPathConfig;
