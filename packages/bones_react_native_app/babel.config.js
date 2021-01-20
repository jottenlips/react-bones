module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  alias: {
    react: require.resolve('react', {
      paths: [path.join(__dirname, './')],
    }),
    '^react-native$': require.resolve('react-native', {
      paths: [path.join(__dirname, './')],
    }),
    '^react-native/(.+)': ([, name]) =>
      require.resolve(`react-native/${name}`, {
        paths: [path.join(__dirname, './')],
      }),
    // '^@react-navigation/(.+)': ([, name]) =>
    //   require.resolve(`@react-navigation/${name}`, {
    //     paths: [path.join(__dirname, './')],
    //   }),
    '^react-spring/(.+)': ([, name]) =>
      require.resolve(`react-spring/${name}`, {
        paths: [path.join(__dirname, './')],
      }),
  },
};
