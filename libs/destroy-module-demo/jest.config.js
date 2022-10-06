module.exports = {
  ...require(`../../jest.base.config`),
  globals: { 'ts-jest': { tsconfig: `<rootDir>libs/destroy-module-demo/tsconfig.spec.json` } },
};
