import React,{ useState,useEffect } from 'react'

import './App.css'

function App() {
  const [politicians, setPoliticians] = useState([])
const [searchTerm, setSearchTerm]=useState("")
  useEffect(()=>{
    fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
    .then((res)=>res.json())
    .then((data)=>setPoliticians(data))
    .catch((error)=>console.error("errore"))
  },[]);
  const filteredPoliticians=politicians.filter((p)=>
  p.name.toLowerCase().includes(searchTerm.toLowerCase())||
  p.biography.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
     <div>
      <h1>lista politici</h1>
      <input
       type="text" 
       placeholder='cerca'
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPoliticians.map((politician)=>(
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
