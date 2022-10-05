module.exports = {
  ...require(`./jest.config`),
  globals: { 'ts-jest': { tsConfig: `<rootDir>tsconfig.spec.json` } },
  setupFilesAfterEnv: [`<rootDir>../../jest.setup.ts`],
};
