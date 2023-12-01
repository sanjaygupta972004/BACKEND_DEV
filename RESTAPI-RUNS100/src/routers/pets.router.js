import { Router} from 'express'

const router = Router()

import { addPet, deletePet, editpet, listPet, getPet} from '../controllers/pets.controller.js'

router.get("/:id",getPet);

router.get("/",listPet);

router.post("/",addPet);

router.put("/:id",editpet);

router.delete("/:id",deletePet);


export default router