module.exports = {
  ...require(`./jest.config`),
  coverageDirectory: `<rootDir>../../coverage`,
  globals: { 'ts-jest': { tsConfig: `<rootDir>tsconfig.spec.json` } },
  setupFilesAfterEnv: [`<rootDir>../../jest.setup.ts`],
};
