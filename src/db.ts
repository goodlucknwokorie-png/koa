import 'dotenv/config';
import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.PG_HOST,
  port: 25060,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
});

export const query = async (text: string, params?: any[]): Promise<QueryResult> => {
  try {
    const res = await pool.query(text, params);

    return res;
  } catch (error) {
    console.error('Database query error:', error);

    throw error;
  }
};

export { pool };