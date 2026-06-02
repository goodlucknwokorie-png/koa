"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const app = new koa_1.default();
const router = new router_1.default();
router.get('/', (ctx) => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());
if (process.env.NODE_ENV !== 'test') {
    app.listen(8080, () => {
        console.log('Server running on http://localhost:8080');
    });
}
exports.default = app;
//# sourceMappingURL=app.js.map