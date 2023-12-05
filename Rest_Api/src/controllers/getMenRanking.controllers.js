import { menRanking } from "../models/men.model.js";

 const findOneRank =  async(req,res) => {
   try {
      const _id = req.params.id;
      const getRanking = await menRanking.findById(_id);
      res.status(200).send(getRanking);
   } catch (error) {
      res.send(404, error);
      console.log("Error during getRanking",+error);
   }
}

export default findOneRank;