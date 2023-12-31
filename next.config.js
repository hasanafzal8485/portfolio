const withPWA = require('next-pwa');
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
});
const withPlugins = require('next-compose-plugins');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' unpkg.com 'unsafe-eval' 'unsafe-inline' *.hasan-afzal.vercel.app *.tagmanager.google.com *.googletagmanager.com;
  child-src 'self' 'unsafe-inline' *.youtube.com *.google.com *.twitter.com;
  style-src 'self' unpkg.com 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'self';
  connect-src *;
  font-src 'self' fonts.gstatic.com;
`;

const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, ''),
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    {
        key: 'X-Frame-Options',
        value: 'ALLOW',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    // Opt-out of Google FLoC: https://amifloced.org/
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
];

const mdx = withMDX({
    pageExtensions: ['js', 'jsx'],
    webpack5: true,
    images: {
        domains: ['i.scdn.co', 'user-images.githubusercontent.com', 'res.cloudinary.com'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    }
});

const pwa = withPWA(
    {
        pwa: {
            dest: 'public',
            register: true,
            skipWaiting: true,
            disable: process.env.NODE_ENV === 'development',
        }
    }
)

module.exports = withPWA(
    {
        pwa: {
            dest: 'public',
            register: true,
            skipWaiting: true,
            disable: process.env.NODE_ENV === 'development',
        },
        pageExtensions: ['js', 'jsx'],
        webpack5: true,
        images: {
            domains: ['i.scdn.co', 'user-images.githubusercontent.com', 'res.cloudinary.com'],
        },
        async headers() {
            return [
                {
                    source: '/(.*)',
                    headers: securityHeaders,
                },
            ];
        }
    },

);
