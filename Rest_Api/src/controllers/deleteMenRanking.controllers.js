import { menRanking } from "../models/men.model.js";

export const deleteMenRanking = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteRanking = await menRanking.findByIdAndDelete(_id);
    res.status(200).send({ deleteRanking, message: "successfully deleted" });
  } catch (error) {
    console.log("Error during delete an user", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
