module.exports = {
  ...require(`./jest.config`),
  testMatch: [
    '**/libs/destroy-module/**/__tests__/**/*.+(ts|js)?(x)',
    '**/libs/destroy-module/**/+(*.)+(spec|test).+(ts|js)?(x)',
  ],
};
