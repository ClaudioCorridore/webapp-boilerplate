const route = require('koa-router')();

function * show(next) {
    yield next;
    this.body = 'Hello World';
}

route
    .get('/', show);

module.exports = route;
