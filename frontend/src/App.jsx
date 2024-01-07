import { useEffect, useState } from "react"
import axios from "axios";

function App() {

  const [jokes,setJokes]=useState([]);

  useEffect(() => {
    
    axios.get('/api/jokes').then((response)=>{
      setJokes(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    ;
  
   
  }, [])
  
  
 

  return (
    <>

    <h1>nishan singh</h1>
    <p>JOKES: {jokes.length}</p>
    {
      jokes?.map((curr)=>{
        return (
          <div key={curr.id}>
            <h3>{curr.title}</h3>
            <p>{curr.content}</p>
          </div>

        );
      })
    }

    </>
  )
}

export default App
