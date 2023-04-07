import { useState } from "react";

const App = () => {

  const [clique, setClique] = useState(false);
  const [color, setColor] = useState("#FF00FF");
  const [padding, setPadding] = useState(0);

  const clicouBotao = () => {
    setClique(true);
  }

  const clicou = () => {
    setColor("#00FF00");
  }

  const clicouPadding = ()=> {
    setPadding(20);
  }

  return (
    <div>
      <h3>Estilizando inline</h3>
      <button 
        style={{
          backgroundColor: '#FF0000', 
          color: '#FFF', 
          border: '0'
        }}
      >
        Clique aqui
      </button>    

      <h3>Estilizando inline dinamicamente ex: 01</h3>
      <button 
        onClick={clicouBotao}
        style={{
          backgroundColor: clique ? '#FF0000' : '#0000FF', 
          color: '#FFF', 
          border: '0'
        }}
      >
        Clique aqui
      </button>  

      <h3>Estilizando inline dinamicamente ex: 02</h3>
      <button 
        onClick={clicou}
        style={{
          backgroundColor: color, 
          color: '#FFF', 
          border: '0'
        }}
      >
        Clique aqui
      </button>  

      <h3>Estilizando inline dinamicamente ex: 03</h3>
      <button 
        onClick={clicouPadding}
        style={{
          backgroundColor: '#FF0', 
          color: '#FFF', 
          border: '0',
          padding: padding
        }}
      >
        Clique aqui
      </button>  
    </div>
  );
}

export default App
