const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router')

const port = 3000;




app.use(bodyParser());
app.use(router.routes())

const server = app.listen(port, () => {
    console.log(`Koa server started on port ${port}`)
})

module.exports = server;