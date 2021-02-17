const path = require("path");

module.exports = {
  stories: ["../src/stories/*.stories.mdx", "../src/stories/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "react-native$": "react-native-web",
      "@storybook/react-native": "@storybook/react",
      "react-spring/native$": "react-spring/web",
    };
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];
    return config;
  },
};
