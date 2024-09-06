/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      parser: {
        worker: ["WorkerConfig", "..."],
      },
    });
    return config;
  },
};

module.exports = nextConfig;
