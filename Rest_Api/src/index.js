import dotenv from "dotenv";
import {app} from "./app.js"
import {DbConnection} from "./dataBase/index.js";


dotenv.config({
   path: "./.env"
});



DbConnection()
.then(()=>{
 try {
   app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
   });
 } catch (error) {
      console.log(`Server is not running on port ${process.env.PORT ||300});`);
      throw new Error
 }

})




