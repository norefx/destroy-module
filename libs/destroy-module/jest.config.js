module.exports = {
  ...require(`../../jest.base.config`),
  globals: { 'ts-jest': { tsConfig: `<rootDir>libs/destroy-module/tsconfig.spec.json` } },
};
