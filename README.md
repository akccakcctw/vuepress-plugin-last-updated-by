# @akccakcctw/vuepress-plugin-last-updated-by

> vuepress plugin to display last author of files

[![Npm build badge](https://img.shields.io/npm/v/@akccakcctw/vuepress-plugin-last-updated-by.svg?style=flat-square)](https://www.npmjs.com/package/@akccakcctw/vuepress-plugin-last-updated-by)

## Install 

```sh
$ npm install -D @akccakcctw/vuepress-plugin-last-updated-by
```

## Usage

Add `@akccakcctw/vuepress-plugin-last-updated-by` to `plugins` in your vuepress **config.js**.

```javascript
// config.js

module.exports = {
  plugins: [
    '@akccakcctw/vuepress-plugin-last-updated-by', // add this line
  ],
}
```

It will add `lastUpdatedBy` to your `$page`, can be access like

```javascript
console.log($page.lastUpdatedBy); // "akccakcctw"
```
