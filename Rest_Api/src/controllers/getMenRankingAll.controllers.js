import { menRanking } from "../models/men.model.js";

export const getRanking = async(req,res)=>{
   try {
      const ranking = await menRanking.find();
      res.send(ranking);
      
   } catch (error) {
      res.send(404,  error);
   }

}