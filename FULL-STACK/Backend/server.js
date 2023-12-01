import express from 'express'


const app = express();

const port=process.env.PORT || 3000;

// app.get('/', (req, res) =>{
//      res.send("server starting")
// });

app.get('/api/jokes', (req, res) => {
 const jokes=[
     {
          id:1,
          title:"first joke",
          content:"this is a first joke"
     },
     {
          id:1,
          title:"second joke",
          content:"this is a vip joke"
     },
     {
          id:1,
          title:"third joke",
          content:"this is a invalid joke"
     },
 ]

 res.send(jokes)
});

app.listen(port,()=>{
     console.log("server listening on port")
})
