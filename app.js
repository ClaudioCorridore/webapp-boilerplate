'use strict';

const
    koa = require('koa'),
    app = koa(),
    PORT = process.env.APP_PORT;

// logger

app.use(function *(next){
    const start = new Date();
    yield next;
    const ms = new Date() - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(PORT, () => {
    console.log('Server is running on port %s', PORT);
});
