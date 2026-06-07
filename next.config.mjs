/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'www.wowmomo.com' },
      { protocol: 'https', hostname: 'cdn.wowhoreca.com' },
    ],
  },
};
export default nextConfig;
