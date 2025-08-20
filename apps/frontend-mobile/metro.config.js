const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Include the shared package in Metro’s watch folders
config.watchFolders = [
  path.resolve(__dirname, "../../packages/shared")
];

// Tell Metro to resolve symlinks (needed for monorepo)
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) =>
      path.join(__dirname, "node_modules", name)
  }
);

module.exports = config;
