import mongoose from "mongoose";

const menSchema = new mongoose.Schema(
   {
      ranking:{
         type:Number,
         required:true,
         unique:true
      },
      name:{
         type:String,
         required:true,
         trim:true
      },
      dob:{
         type:Date,
         required:true,
         trim:true
      },
      countery:{
         type:String,
         required:true,
         unique:true
      },
      score:{
         type:Number,
         required:true,
         unique:true
      },
      eventList:{
         type:String,
         required:true,
         unique:true,
         default:"100m",
      }
   },
   {timestamps:true}
   );

   export const menRanking = new mongoose.model("menRanking",menSchema);
