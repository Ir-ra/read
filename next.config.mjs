import path from "path";
import { fileURLToPath } from "url";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  async headers() {
    return [
      {
        // співставлення всіх API-маршрутів
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // замініть це на список довірених доменів, з яких можна зробити запити
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
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
