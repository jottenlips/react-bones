// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };
const path = require('path');

const currentDir = __dirname;

const config = {
  watchFolders: [
    // To allow finding files outside mobile
    path.resolve(currentDir, '..'),
  ],

  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(currentDir, 'node_modules/react-native'),
      'react-spring': path.resolve(currentDir, 'node_modules/react-spring'),
      // 'react-navigation': path.resolve(
      //   currentDir,
      //   'node_modules/react-navigation',
      // ),
      // 'react-native-vector-icons': path.resolve(
      //   currentDir,
      //   'node_modules/react-native-vector-icons',
      // ),
      // '@babel/runtime': path.resolve(currentDir, 'node_modules/@babel/runtime'),
    },
  },
};

module.exports = config;
