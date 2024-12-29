import { useState } from 'react'
import './App.css'

import { FaEye, FaEyeSlash } from "react-icons/fa";

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <form action="">
        <input type={show ? "password" : "text"} /> 
        <span onClick={() => setShow(!show)}>
          {
            show ? <FaEye /> : <FaEyeSlash />
          }
        </span>
      </form>
    </>
  )
}

export default App
