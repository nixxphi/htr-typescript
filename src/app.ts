import express, { Express } from 'express';
import mainMiddleware from './middlewares/main.middleware.ts';

const app: Express = express();

mainMiddleware(app);

export default app;
