module.exports = {
  ...require(`./jest.config`),
  coverageDirectory: `<rootDir>../../coverage`,
  setupFilesAfterEnv: [`<rootDir>../../jest.setup.ts`],
};
