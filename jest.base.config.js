/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...require(`./jest.config`),
  globals: { 'ts-jest': { tsconfig: `<rootDir>tsconfig.spec.json` } },
  setupFilesAfterEnv: [`<rootDir>jest.setup.ts`],
};
