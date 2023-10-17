/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  distDir: 'out',
  output: "export",
  publicRuntimeConfig: {
    basePath: process.env.DEVICE ? `/_${process.env.DEVICE}` : "",
  },
  env: {
    DEVICE: process.env.DEVICE || "fallback",
  },
};

module.exports = nextConfig;
