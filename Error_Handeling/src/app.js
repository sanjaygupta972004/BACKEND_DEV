import express from 'express';

const app = express();

import connectedDb from "./db/index.js";

connectedDb()

const POTR= process.env.POTR || 5000    ;

app.listen(POTR,()=>{
console.log('listening on port '+POTR);
})      