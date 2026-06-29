/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve images as-is — avoids the optimizer writing to a full system drive.
    unoptimized: true,
  },
};

export default nextConfig;
