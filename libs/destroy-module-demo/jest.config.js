module.exports = {
  ...require(`../../jest.base.config`),
  globals: { 'ts-jest': { tsconfig: `libs/ngx-destroy-module-demo/tsconfig.spec.json` } },
};
