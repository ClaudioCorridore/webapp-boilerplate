'use strict';

const koa = require('koa');
const app = koa();
const PORT = process.env.APP_PORT;

// logger

app.use(function *(next) {
    const start = new Date();
    yield next;
    const ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(next) {
    this.body = 'Hello World';
    yield next;
});

app.listen(PORT, () => {
    console.log('Server is running on port %s', PORT);
});
