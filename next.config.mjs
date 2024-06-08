/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chiazhe-lee.netlify.app",
        port: "",
        pathname: "/assets/**",
      },
    ],
    domains: ["api.microlink.io"],
  },
};

export default nextConfig;
