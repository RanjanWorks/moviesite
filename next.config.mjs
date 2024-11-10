/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
    images: {
        domains: ['via.placeholder.com', 'image.tmdb.org'], // Add any other external image domains here
      },
};

export default nextConfig;
