import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState("")

const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value)
}

  return (
    <div className="App">
      Nome:
      <input type="text" name="nome" id="" value={name} onChange={handleName} />
      <hr />
      Seu nome é: {name}
    </div>
  )
}

export default App
