import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import authRouter from "./routes/auth/authRoutes.js";
import articulosRouter from './routes/articulos/articulosRoutes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Length,X-Knowledge',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

const port = 3000;

app.use('/auth', authRouter);
app.use('/articulos', articulosRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
