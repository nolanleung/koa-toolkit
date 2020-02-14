'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
const bodyparser = require('koa-bodyparser');
const koaQs = require('koa-qs');

exports.createServer = (options = {}) => {
  const app = new Koa();
  const router = new Router(options.router);
  const listen = app.listen;

  app.router = router;

  app.listen = (...options) => {
    koaQs(app);
    app.use(bodyparser(options.body));
    app.use(router.routes());
    app.use(router.allowedMethods());

    return listen.apply(app, options);
  };

  return app;
};
