import React,{memo}from "react";

const PoliticianCard=memo(({politician})=>{
    console.log("Rendering:",politician.name);
    return(
        <li>
            <p><strong>Nome:</strong> {politician.name}</p>
      <p><strong>Posizione:</strong> {politician.position}</p>
      <p><strong>Biografia:</strong> {politician.biography}</p>
      <img src={politician.image} alt={politician.name} width="100" />
        </li>
    )
})
export default PoliticianCard