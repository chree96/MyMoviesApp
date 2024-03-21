module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];

  const plugins = [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        verbose: false,
      },
    ],
  ];

  return { presets, plugins };
};
