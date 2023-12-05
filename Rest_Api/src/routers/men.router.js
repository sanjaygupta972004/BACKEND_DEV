import express from "express";

import {insertRanking} from "../controllers/insertMenRanking.controller.js";
import { getRanking } from "../controllers/getMenRankingAll.controllers.js";
import findOneRank from "../controllers/getMenRanking.controllers.js";
import {updateRanking} from "../controllers/updateMenRanking.controllers.js";
import {deleteMenRanking} from "../controllers/deleteMenRanking.controllers.js";
const router = express.Router();


router.route("/ranking/:id").get(findOneRank)
router.route('/ranking').post(insertRanking)
router.route('/ranking').get(getRanking)
router.route('/ranking/:id').patch(updateRanking)
router.route('/ranking/:id').delete(deleteMenRanking)




export default router;