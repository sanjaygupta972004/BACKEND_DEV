import mongoose from "mongoose";

const connectedDb = async()=>{
        try {
                const {connection} = await mongoose.connect("mongodb://localhost:27017/products");

                console.log(`Connected to ${connection.host}`);
                
        } catch (error) {
             console.log(`Failed to database connection ${error.message}`);   
        }
}

export default connectedDb;