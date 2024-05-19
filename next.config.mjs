import path from "path";
import { fileURLToPath } from "url";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/v1/products",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, DELETE, PATCH, POST, PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, current-page, page-items, total-pages, total-count",
          },
        ],
      },
    ];
  },
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
