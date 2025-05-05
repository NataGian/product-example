'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.default = productPathConfig;
//# sourceMappingURL=next-config.js.map
