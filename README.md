## Stylelint

### Справка

* [Getting started](https://github.com/stylelint/stylelint/blob/HEAD/docs/user-guide/get-started.md)

### Установка

`npm install --save-dev stylelint stylelint-config-standard-scss stylelint-order stylelint-config-recess-order`

### Конфигурация

* [.stylelintrc.json](.stylelintrc.json)
* [.stylelintignore](.stylelintignore)

### Запуск

`npm run stylelint`

## ESLint

### Установка

`npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import @babel/core @babel/eslint-parser`

`@babel/core` и `@babel/eslint-parser` необходимы при использовании Babel, при отстутствии файла конфигурации Babel
в `.eslintrc.json` указываем `parserOptions.requireConfigFile: false`.

### Конфигурация

* [.eslintrc.json](.eslintrc.json)
* [.eslintignore](.eslintignore)

### Запуск

`npm run eslint`

## Полезные ссылки

* [Шаблоны Glob](https://github.com/isaacs/node-glob#glob-primer)
