import Koa from 'koa';
import Router from '@koa/router'

const app = new Koa();
const router = new Router();

router.get('/', (ctx: Koa.Context) => {
  ctx.body = 'Hello World!';
})

app.use(router.routes());

if(process.env.NODE_ENV !== 'test') {
  app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
  });
}

export default app;
