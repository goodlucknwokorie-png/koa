import request from "supertest";
import app from "../src/app";
import { pool } from "../src/db";

afterAll(async () => {
  await pool.end();
});

test("GET /coins returns a list of coins from the database", async () => {
  const response = await request(app.callback()).get("/coins");

  expect(response.status).toBe(200);

  expect(Array.isArray(response.body)).toBe(true);

  if (response.body.length > 0) {
    const sampleCoin = response.body[0];

    expect(sampleCoin).toHaveProperty("id");
    expect(sampleCoin.id).toBe(1);

    expect(sampleCoin).toHaveProperty("name");
    expect(sampleCoin.name).toBe("Assemble");
  }
});
