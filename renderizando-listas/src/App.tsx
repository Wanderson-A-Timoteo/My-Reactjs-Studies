import './App.css'
import { Pessoa } from './components/Pessoa';
const App = () => {
  let listName = [
    'Wanderson',
    'Ryan',
    'Jeane',
    'Ana Clara',
    'Beatriz',
    'Mari Angela',
    'Kalebe'
  ];

  let listObeject = [
    {name: 'Wanderson', age: 39},
    {name: 'Ryan', age: 10},
    {name: 'Jeane', age: 40},
    {name: 'Ana Clara', age: 14},
    {name: 'Beatriz', age: 9},
    {name: 'Mari Angela', age: 15},
    {name: 'Kalebe', age: 8}
  ];

  return (
    <div className="App">      
      <h2>Renderizando Listas</h2>
      <div className="card">
      <h3>Lista Array</h3>
        <ul>
          {listName.map((item, index) => (
            <li key={index}>{item.toUpperCase()}</li>
          ))}
        </ul>
      </div>      

      <div className="card">
      <h3>Lista de Objetos</h3>
        <ul>
          {listObeject.map((item, index) => (
            <li key={index}>{item.name} - {item.age} anos</li>
          ))}
        </ul>
      </div> 

      <div className="card">
        <h3>Renderizando a Lista de Objetos, passando como parâmetro para o componente Pessoa</h3>
        <ul>
          {listObeject.map((item, index) => (
            <Pessoa key={index} data={item} />
          ))}
        </ul>
      </div> 
    </div>
  );
}

export default App
