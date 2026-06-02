"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
(0, globals_1.test)('hello world endpoint returns 200 and text', async () => {
    const response = await (0, supertest_1.default)(app_1.default.callback()).get('/');
    (0, globals_1.expect)(response.status).toBe(200);
    (0, globals_1.expect)(response.text).toBe('Hello World!');
});
//# sourceMappingURL=app.test.js.map