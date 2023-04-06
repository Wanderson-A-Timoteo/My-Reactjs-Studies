import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  const aumentar = () => {
    setCount(count + 1);
  }

  const diminuir = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">      
      <h1>Contador</h1>
      <div className="card">
        <button onClick={diminuir}> - </button>          
          {count}          
        <button onClick={aumentar}> + </button>        
      </div>      
    </div>
  )
}
export default App;
