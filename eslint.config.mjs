import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

// https://eslint.org/docs/latest/use/configure/configuration-files
// https://eslint.org/docs/latest/use/command-line-interface
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['*.ts'],
    // 默认没有格式化相关规则，可以在这里添加
    rules: {
      'no-console': 2,
    },
    env: {
      browser: true,
      node: true,
    },
  },
];
