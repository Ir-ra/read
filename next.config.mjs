import path from "path";
import { fileURLToPath } from "url";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  images: {
    domains: ["book-store-api-tc.s3.amazonaws.com"],
  },

  webpack: (config) => {
    // Добавляем псевдоним '@' для ссылки на корневую директорию проекта
    config.resolve.alias["@"] = path.resolve(dirname);

    // Возвращаем измененный конфиг
    return config;
  },
};

export default nextConfig;
