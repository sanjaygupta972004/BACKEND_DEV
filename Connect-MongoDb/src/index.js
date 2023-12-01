import express from 'express';
import mongoose from 'mongoose';

const app = express();

//const MONGO_URL = "mongodb+srv://sanjaygupta07054:videoApp2026@cluster2.fxaas8z.mongodb.net/VIDEO_APP";

const port = process.env.PORT || 3000;

( async () => {
        try {
            await mongoose.connect(`${MONGO_URL}`)
            app.on("errror", (error) => {
                console.log("ERRR: ", error);
                throw error
            })
    
            app.listen(port, () => {
                console.log(`App is listening on port ${port}`);
            })
    
        } catch (error) {
            console.error("ERROR: ", error)
            throw error
        }
    })()


const productSchema =new mongoose.Schema({
        name:String,
        price:Number,
        launchedAt:Date,
},{timestamps:true});

const Product = new mongoose.model("Products", productSchema);

const jio = new Product({
        name :"jioA",
        price :2999,
        launchedAt :new Date
})

jio.save();