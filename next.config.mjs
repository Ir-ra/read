import path from "path";
import { fileURLToPath } from "url";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "book-store-api-tc.s3.amazonaws.com",
      },
    ],
  },

  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(dirname);
    return config;
  },
};

export default nextConfig;
