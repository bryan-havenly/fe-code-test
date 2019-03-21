const bodyParser = require('koa-bodyparser');
const config     = require('./webpack/webpack.config.dev.js');
const graphqlApi = require('./graphql');
const Koa        = require('koa');
const koaWebpack = require('koa-webpack');
const renderApp  = require('./renderApp');

const app = new Koa();

app.use(bodyParser());
app.use(graphqlApi());

koaWebpack({
  config,
  hotClient : { port : 36625 },
}).then((webpackMiddleware) => {
  app.use(webpackMiddleware);
  app.use(renderApp());
});

app.listen(9001, '0.0.0.0', () => {
  console.log('Listening on http://localhost:9000');
});
