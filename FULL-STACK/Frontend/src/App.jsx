import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
     .then((response)=>{setJokes(response.data)})

     .catch((error)=>{
      console.log("Error: ", error)
     })
     .finally(()=>{
      console.log("Success")})
    
  });
    
  

  return (
    <>
      <h1> fullstack journey has started</h1>
      <div>
      <p> jokes:{jokes.length}</p>

      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content} </p>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default App
