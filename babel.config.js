module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Use apenas este preset para projetos Expo
    plugins: ['react-native-reanimated/plugin'], // Mantenha o plugin para animações
  };
};
