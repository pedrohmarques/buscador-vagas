import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/**', // Garante permissão para as pastas de imagens de perfil
      },
    ],
  },
};

export default nextConfig;
