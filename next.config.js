/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "cleanupIDs",
                                    active: false,
                                },
                            ],
                        },
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: "file-loader",
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
