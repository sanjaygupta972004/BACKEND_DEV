import db from "../db/loacalData.js"

const getItems =(id)=>{
try {
        const pet = db.pets?.find(pet => pet?.id===id);
        return pet
} catch (error) {
       console.log("Error getting",error); 
       throw error ;
}
}

const listItems = ()=>{
return db?.pets
}

const editItems = (id,data)=>{
   try {
        const index = db.pets?.findIndex(pet => pet.id==id)
   if(index==-1) return "pet is not available"

   db.pets[index] = data;

   return db.pets[index];
   }
    catch (error) {
        console.log("Error getting",error);
   }
}

const deleteItems = (id)=>{
try {
        const index = db.pets?.findIndex(pet => pet.id==id)
        if(index==-1) return "pet is not available"
        db.pets?.splice(index,1);
        return db.pets
        
} catch (error) {
 console.log("Error deleting",error);       
}
}

const addItems = (data)=>{
try {
        const newPost = {id:db.pets.length + 1,...data};
        return db.pets?.push(newPost)
} catch (error) {
     Console.error("Error due to adding item",error);   
}
}

export { addItems, deleteItems,editItems,getItems, listItems} 
