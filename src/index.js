'use strict';

const koa = require('koa');
const logger = require('koa-logger');
const app = koa();
const routeMain = require('./routes/main');
const PORT = process.env.APP_PORT;

app
    .use(logger())
    .use(routeMain.routes())
    .use(routeMain.allowedMethods());

// response

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('Listening on port', PORT);
    });
} else {
    module.exports = app;
}
