const DEVICE = process.env.DEVICE || "responsive";

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: DEVICE !== "responsive" ? `/_${DEVICE}` : undefined,
  distDir: process.env.BUILD_DIR || "out",
  output: "export",
  trailingSlash: true,
  env: {
    DEVICE,
  },
};

module.exports = nextConfig;
