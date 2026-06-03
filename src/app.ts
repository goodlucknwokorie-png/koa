import Koa from "koa";
import Router from "@koa/router";
import { query } from "./db";

const app = new Koa();
const router = new Router();

router.get("/", (ctx: Koa.Context) => {
  ctx.body = "Hello World!";
});

router.get("/coins", async (ctx) => {
  try {
    const result = await query('SELECT * FROM "coins".coins ORDER BY id ASC');

    ctx.status = 200;
    ctx.body = result.rows;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "Internal Server Error" };
  }
});

app.use(router.routes());

if (process.env.NODE_ENV !== "test") {
  app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
  });
}

export default app;
