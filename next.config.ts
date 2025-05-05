import type {NextConfig} from "next";
import type {RuleSetRule} from "webpack";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ];
    },
    webpack: (config) => {
        const rules = config.module?.rules as RuleSetRule[];
        const cssRule = rules.find(
            (rule: RuleSetRule) => rule.test instanceof RegExp && rule.test.test('.css')
        );

        if (cssRule) {
            if (cssRule.exclude) {
                delete cssRule.exclude;
            }
        }

        return config;
    },
    experimental: {
        externalDir: true,
    },
};

export default nextConfig;
