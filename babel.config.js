module.exports = api => {
  if (api) {
    api.cache(false);
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            containers: './src/containers',
            common: './src/common',
            utils: './src/common/utils',
            store: './src/store',
            screens: './src/screens',
            navigation: './src/navigation',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
