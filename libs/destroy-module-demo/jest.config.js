module.exports = {
  ...require(`../../jest.base.config`),
  globals: { 'ts-jest': { tsConfig: `<rootDir>tsconfig.spec.json` } },
};
