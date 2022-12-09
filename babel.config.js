module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
            ],
            alias: {
              '@boilerplate': './src',
            },
          },
        ],
        'react-native-reanimated/plugin',
      ],
    },
    production: {
      plugins: [
        'transform-remove-console',
        [
          'module-resolver',
          {
            root: ['./'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
            ],
            alias: {
              '@boilerplate': './src',
            },
          },
        ],
        'react-native-reanimated/plugin',
      ],
    },
  },
};
