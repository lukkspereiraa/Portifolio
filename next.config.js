/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["us-west-2.graphassets.com"], // Adiciona o domínio permitido
  },
};

module.exports = nextConfig;
