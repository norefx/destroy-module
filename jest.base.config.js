/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = { ...require(`./jest.config`), globals: { 'ts-jest': { tsConfig: `<rootDir>tsconfig.spec.json` } } };
