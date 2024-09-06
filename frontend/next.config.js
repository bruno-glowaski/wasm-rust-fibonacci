/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true, layers: true };
    config.module.rules.push({
      parser: {
        worker: ["WorkerConfig", "..."],
      },
    });
    return config;
  },
};

module.exports = nextConfig;
