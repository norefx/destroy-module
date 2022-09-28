module.exports = {
  ...require(`../../jest.base.config`),
  globals: { 'ts-jest': { tsconfig: `<rootDir>/tsconfig.spec.json` } },
};
