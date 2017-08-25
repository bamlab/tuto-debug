const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = new koaRouter();

router.get('/', ctx => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);

console.log('Server is up and running');
