const Router = require('koa-router');
const router = new Router();
const dataFetch = require('./controller/dataFect')

// mock data provided
router.get('/', dataFetch.get)

module.exports = router