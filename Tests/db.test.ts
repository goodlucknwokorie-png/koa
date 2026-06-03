import "dotenv/config";
import { pool } from "../src/db";

test("postgres connection response is not null", async () => {
  const client = await pool.connect();

  expect(client).not.toBeNull();

  client.release();
  await pool.end();
});
