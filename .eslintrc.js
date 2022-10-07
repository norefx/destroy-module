module.exports = {
  root: true,
  env: { es6: true },
  ignorePatterns: [`node_modules/`, `dist/`],
  plugins: [`deprecation`],
  overrides: [
    {
      files: [`*.js`],
      parserOptions: { ecmaVersion: 2018 },
      extends: [`plugin:prettier/recommended`],
      rules: { 'eol-last': `warn`, quotes: [`warn`, `backtick`] },
    },
    {
      files: [`*.ts`],
      parserOptions: { project: [`tsconfig.json`], createDefaultProgram: true },
      extends: [
        `plugin:@angular-eslint/recommended`,
        `plugin:@angular-eslint/template/process-inline-templates`,
        `plugin:@typescript-eslint/recommended`,
        `plugin:prettier/recommended`,
      ],
      rules: {
        '@angular-eslint/directive-selector': [`error`, { type: `attribute`, prefix: `dm`, style: `camelCase` }],
        '@angular-eslint/component-selector': [`error`, { type: `element`, prefix: `dm`, style: `kebab-case` }],

        '@typescript-eslint/consistent-type-assertions': [
          `warn`,
          { assertionStyle: `as`, objectLiteralTypeAssertions: `allow-as-parameter` },
        ],
        '@typescript-eslint/semi': `warn`,
        '@typescript-eslint/member-delimiter-style': `warn`,
        '@typescript-eslint/prefer-readonly': `warn`,
        '@typescript-eslint/no-unused-vars': [`warn`, { args: `all`, argsIgnorePattern: `^_` }],

        'deprecation/deprecation': `warn`,

        'eol-last': `warn`,
        quotes: [`warn`, `backtick`],
      },
    },
    { files: [`*.html`], extends: [`plugin:@angular-eslint/template/recommended`], rules: {} },
  ],
};
