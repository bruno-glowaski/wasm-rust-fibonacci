const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true, layers: true };
    config.module.rules.push({
      parser: {
        worker: ["WorkerConfig", "..."],
      },
    });
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "../rust"),
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
