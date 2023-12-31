/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ],
  },
  publicRuntimeConfig: {
    SOCIAL_URLS: {
      TWITTER: 'https://twitter.com/anandsan_',
      LINKEDIN: 'https://www.linkedin.com/in/anandsandilya/',
      INSTAGRAM: 'https://www.instagram.com/anandsan_/',
      GITHUB: 'https://github.com/anand-san',
    },
  },
};

module.exports = nextConfig;
