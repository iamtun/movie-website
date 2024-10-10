### Movie Website

#### 1. Config commit with husky:
- Install husky: `npx husky-init && yarn`
- Add dependencies: `yarn add -D @commitlint/config-conventional @commitlint/cli`
- Create file: `commitlint.config.js`
  ```js
    module.exports = { extends: ['@commitlint/config-conventional'] };
  ```
- Config husky to check commit: `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

#### 2. Config format code:
- create file: `.prettierrc` and config format (note: install extension Prettier)
  ```json
    {
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "semi": true,
        "experimentalTernaries": false,
        "singleQuote": false,
        "jsxSingleQuote": false,
        "quoteProps": "as-needed",
        "trailingComma": "all",
        "singleAttributePerLine": false,
        "htmlWhitespaceSensitivity": "css",
        "vueIndentScriptAndStyle": false,
        "proseWrap": "preserve",
        "insertPragma": false,
        "printWidth": 80,
        "requirePragma": false,
        "tabWidth": 2,
        "useTabs": true,
        "embeddedLanguageFormatting": "auto",
        "cursorOffset": 0
    }
  ```

#### 3. API data:
- download file json & import to postman in folder: `assets/api`