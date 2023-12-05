import express from 'express';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.json({
   limit:"10kb"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"))



import menRouter from "./routers/men.router.js"


app.use("/user", menRouter);



export { app };