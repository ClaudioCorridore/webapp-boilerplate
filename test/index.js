const test = require('ava');
const superagent = require('supertest-as-promised');
const app = require('../src/index');

function request() {
    return superagent(app.listen());
}

test('get:Success', async t => {
    t.plan(2);

    const res = await request()
           .get('/');

    t.is(res.status, 200);
    t.is(res.text, 'Hello World');
});
