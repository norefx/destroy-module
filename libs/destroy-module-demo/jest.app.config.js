module.exports = {
  ...require(`./jest.config`),
  testMatch: [
    '**/libs/destroy-module-demo/**/__tests__/**/*.+(ts|js)?(x)',
    '**/libs/destroy-module-demo/**/+(*.)+(spec|test).+(ts|js)?(x)',
  ],
};
