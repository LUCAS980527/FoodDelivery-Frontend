/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fs2.tvoydnevnik.com",
        pathname: "/api2/**",
      },
    ],
  },
};

export default nextConfig;
