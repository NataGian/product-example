const productPathConfig = {
    webpack: (config) => {
        config.resolve.alias = Object.assign(Object.assign({}, config.resolve.alias), { '@/lib': './lib', '@/components': './components' });
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

export { productPathConfig as default };
//# sourceMappingURL=next-config.js.map
