import React,{ useState,useEffect } from 'react'

import './App.css'

function App() {
  const [politicians, setPoliticians] = useState([])
  useEffect(()=>{
    fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
    .then((res)=>res.json())
    .then((data)=>setPoliticians(data))
    .catch((error)=>console.error("errore"))
  },[]);

  return (
    <>
     <div>
      <h1>lista politici</h1>
      <ul>
        {politicians.map((politician)=>(
          <li key={politician.id}>
           <p>nome:{politician.name}</p>
           <p>immagine:{politician.image}</p>
           <p>posizione:{politician.position}</p>
           <p>biografia:{politician.biography}</p>

          </li>
        ))}
      </ul>
     </div>
    </>
  )
}

export default App
