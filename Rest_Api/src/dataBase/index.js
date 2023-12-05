import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";


const DbConnection = async()=>{
   try {
      const connectionInfo = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      console.log(`database host on ${connectionInfo.connection.host}`);
   } catch (error) {
      console.log(" Error during connection mongo dataBase: " + error)
      throw error
   }
}

export { DbConnection}
