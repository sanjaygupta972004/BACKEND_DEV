import  { addItems, deleteItems,editItems, listItems,getItems}  from "../models/pets.model.js"

const getPet = (req,res)=>{
     try {
        const resp = getItems(parseInt(req.params.id))
        res.status(201).json(resp);
        
     } catch (error) {
      res.status(500).json(error);  
      throw error;
     }
}

const addPet = (req,res)=>{
 
        try {
                const resp = addItems(req.body);
                res.status(201).json(resp);
        } catch (error) {
               res.status(500).json(error); 
        }
}

const editpet = (req,res)=>{
        try {
                const resp = editItems(parseInt(req.params.id),req.body)
                res.status(205).json(resp);
                
        } catch (error) {
                res.status(500).json(error);
        }
}


const listPet = (req,res)=>{
        try {
                const resp = listItems();
                res.status(200).json(resp);
        } catch (error) {
                res.status(500).json(error)
        }
}

const deletePet = (req,res)=>{
        try {
                const resp = deleteItems(parseInt(req.params.id));
                res.status(204).json(resp);
        } catch (error) {
               res.status(500).json(error) 
        }
}

export { addPet, deletePet, editpet, listPet, getPet}