import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'
import { useState } from 'react'


function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm token={token} setToken={setToken} className="signUp"/>
      <br/>
      <br/>
      <Authenticate token={token} setToken={setToken} className="authenticate"/>
    </>
  )
}

export default App
