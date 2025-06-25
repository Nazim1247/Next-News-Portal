import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://squareit.in/img/pages/news-portal.png')],
  },
}

export default nextConfig;
