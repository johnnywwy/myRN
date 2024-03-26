module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@/utils": "./src/utils",
          "@/pages": "./src/Pages",
          "@/assets": "./src/assets",
          "@/components": "./src/components",
          "@/config": "./src/config",
          "@/navigator": "./src/navigator",
          "@/models": "./src/models",
          "@/assets": "./src/assets",
        },
      },
    ],
  ],

};
