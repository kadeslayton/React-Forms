import { useState } from "react";
import "./index.css";
export default function Authenticate({token}){
const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
const [dataMessage, setDataMessage] = useState(null);
async function handleClick(e){
e.preventDefault();
console.log("handleClick has fired!")
try{
const response = await fetch(("https://fsa-jwt-practice.herokuapp.com/authenticate"),{
  method: "GET",
  headers: {"Content-Type": "application/json",
            Authorization: `Bearer ${token}`}
});
const results = await response.json();
console.log(results);
setSuccessMessage(results.message)
setDataMessage(results.data.iat)
}catch(error){
  setError(error.message);
}
}

  return(
    <div>
      <h2 className="headers">Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      {dataMessage && <p>Data Username: {dataMessage}</p>}
      <button onClick={handleClick} className="grid-item">Authenticate Token!</button>
    </div>
    
  )
}