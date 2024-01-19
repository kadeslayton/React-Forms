import { useState } from "react"
import './index.css'
export default function SignUpForm({setToken}){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(e){
    e.preventDefault();
    if(username.length > 14){
      setError("Username must be less than 15 characters!!");
    }
    else if(password.length<4){
      setError("Password must be greater than 3 characters!!")
    }
    else{
      setError(null)
      try{
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
        method: `POST`,
        body: JSON.stringify({username: username, password: password})
      });
      const results = await response.json();
      console.log(results)
      setToken(results.token);
    }catch(error){
      setError(error.message);
    }
    }
  }

  
  return(
    <>
    <h2 className="headers">Sign Up</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit} className="grid">
      <label className="grid-item">
        Username: <input 
        value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label className="grid-item">
        Password: <input 
        type="password"
        value={password} onChange={(e) => setPassword(e.target.value)}/>
        
      </label>
      <button className="grid-item">Submit</button>
    </form>
    </>
    

  )
}