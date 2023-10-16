/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  distDir: process.env.BUILD_DIR || 'out',
  output: "export",
  publicRuntimeConfig: {
    basePath: process.env.DEVICE ? `/_${process.env.DEVICE}` : "",
  },
  env: {
    DEVICE: process.env.DEVICE || "fallback",
  },
};

module.exports = nextConfig;
