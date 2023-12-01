import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

import petsRouter from "./routers/pets.router.js"

app.use("/pet",petsRouter);

export default app;