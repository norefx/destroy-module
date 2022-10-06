module.exports = {
  ...require(`./jest.config`),
  coverageDirectory: `<rootDir>../../coverage`,
  globals: { 'ts-jest': { tsconfig: `<rootDir>tsconfig.spec.json` } },
  setupFilesAfterEnv: [`<rootDir>../../jest.setup.ts`],
};
