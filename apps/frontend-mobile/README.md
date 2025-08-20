watchFolders

Metro watches the shared package so any changes in packages/shared/src automatically reload in Expo.

extraNodeModules / symlink resolution

Ensures imports like @masjidmunchies/shared/* resolve correctly even though the package is outside node_modules.

Compatible with TypeScript 4.9.5 and your Turbo monorepo setup.