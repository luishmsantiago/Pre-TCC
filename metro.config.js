/**
 * Metro configuration for React Native
 * https://github.com/facebook/metro
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;