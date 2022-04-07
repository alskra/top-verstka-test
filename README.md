## Stylelint

### Справка

* [Stylelint](https://www.npmjs.com/package/stylelint)
* [Getting started](https://github.com/stylelint/stylelint/blob/HEAD/docs/user-guide/get-started.md)
* [Сравнение конфигов `order`](https://www.npmtrends.com/stylelint-config-idiomatic-order-vs-stylelint-config-property-sort-order-smacss-vs-stylelint-config-recess-order-vs-stylelint-config-rational-order)

### Установка

`npm install --save-dev stylelint stylelint-config-standard-scss stylelint-order stylelint-config-recess-order`

### Конфигурация

* [.stylelintrc.json](.stylelintrc.json)
* [.stylelintignore](.stylelintignore)

### Запуск

`npm run stylelint`

## ESLint

### Справка

* [ESLint](https://www.npmjs.com/package/eslint)
* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
* [When should I use @babel/eslint-parser?](https://www.npmjs.com/package/@babel/eslint-parser)

### Установка с параметрами конфигурации

Устанавливаем ESLint:

`npm install --save-dev eslint`

Настраиваем файл конфигурации:

`npm init @eslint/config`

Запуск:

`./node_modules/.bin/eslint yourfile.js`

### Установка с текущей конфигурацией

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
