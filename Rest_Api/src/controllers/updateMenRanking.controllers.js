import { menRanking } from "../models/men.model.js"
export const updateRanking = async(req,res)=>{
try {
   const _id = req.params.id;
   const upadateRanking = await menRanking.findByIdAndUpdate(
      _id, req.body,
      {
      new:true,
   }
   )
   res.status(200).json(upadateRanking);
} catch (error) {
   res.send(404, error);
   console.log("Error during UpadateRanking",+error);
}
}