
import { menRanking } from "../models/men.model.js"


export const insertRanking = async(req,res)=>{
    try {
        const ranking = req.body;
        const newRanking =  await new menRanking(ranking).save();
        //const insertRanking = await newRanking.save()
        res.status(200).json(newRanking)
        console.log(newRanking)

        
    } catch (error) {
        res.send(404, error)
    }

}

