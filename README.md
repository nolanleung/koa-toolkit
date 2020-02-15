# Koa Toolkit

[![npm version](https://img.shields.io/npm/v/koa-toolkit.svg?style=flat-square)](https://www.npmjs.com/package/koa-toolkit)
[![npm downloads](https://img.shields.io/npm/dm/koa-toolkit.svg?style=flat-square&label=Downloads)](https://www.npmjs.com/package/koa-toolkit)

**An opinionated, batteries-included toolset for efficient Koa API development**

`npm install koa-toolkit`

### Purpose

The **Koa Toolkit** package is intended to provide a way to get a Koa server up and running with as few lines as possible while maintaining middleware flexibility.

This package is currently under development, so PRs are welcome and encouraged!

### What's Included

Redux Toolkit includes:

- A `createServer(port, callback)` function that returns a new Koa instance with routing and body parsing middleware.
- A  `createRouter(options)` function that returns a new koa router

## Example

```js
const { createServer } = require('koa-toolkit');

const app = createServer();

app.router.get('/', async ctx => {
  ctx.body = {
    hello: 'world',
  }
})

app.listen(3000, () => {
  console.log('> Server listening!');
});

```
