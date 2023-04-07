import './App.css'
import { useState } from 'react';

const App = () => {

  const [show, setShow] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const MostrarMsnClick = () => {
    setShow(true);
  }

  const MostrarMsnClickToggle = () => {
    setShowToggle(!showToggle);
  }

  return (
    <div className="App">      
      <h1>Renderizando conteúdo condicional</h1>
      <p>Muito usado para fazer um loading enquanto a página estiver carregando, também quando clica num botão mostrar uma msn e quando passar o mouse mostrar uma msn.</p>
      <div className="card">
        <p>Mostrar paragrafo apenas quando o state for verdadeiro</p>
        <button onClick={MostrarMsnClick}>Mostrar</button>
        {show && 
          <div>
            <p>
              <strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sunt tempore, fugiat tenetur eveniet consequuntur, necessitatibus iure nisi cupiditate, natus aliquid officiis! Nobis nam ipsum ducimus nesciunt esse repellendus facere.
              </strong>
            </p>
          </div>
        }
      </div>    

      <div className="card">
        <p>Mostrar msn quando clicar no botão e esconde msn quando clicado novamente. Com a condicionar de mensagem no botão se conteúdo oculto aparece Mostrar Msn caso contrário Ocultar Msn</p>
        <button onClick={MostrarMsnClickToggle}> {showToggle ? 'Ocultar' : 'Mostrar'} </button>

        {showToggle && 
          <div>
            <p>
              <strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sunt tempore, fugiat tenetur eveniet consequuntur, necessitatibus iure nisi cupiditate, natus aliquid officiis! Nobis nam ipsum ducimus nesciunt esse repellendus facere.
              </strong>
            </p>
          </div>
        }

      </div>   
    </div>
  );
}

export default App
