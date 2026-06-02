import { test, expect } from '@jest/globals';
import request from 'supertest';
import app from '../src/app';

test('hello world endpoint returns 200 and text', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
});