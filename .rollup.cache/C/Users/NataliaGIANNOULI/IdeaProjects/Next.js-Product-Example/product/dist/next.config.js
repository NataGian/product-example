const nextConfig = {
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
//# sourceMappingURL=next.config.js.map