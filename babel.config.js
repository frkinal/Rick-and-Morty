module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@components': './src/components/index.ts',
          '@components/types': './src/components/types/index.ts',
          '@navigators': './src/navigators/index.ts',
          '@navigators/types': './src/navigators/types/index.ts',
          '@screens': './src/screens/index.ts',
          '@utils': './src/utils/index.ts',
          '@services': './src/api/index.ts',
          '@services/types': './src/api/types/index.ts',
          '@hooks': './src/hooks/index.ts',
          '@assets': './src/assets/index.ts',
        },
      },
    ],
  ],
};
