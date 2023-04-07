import { useState } from 'react'
import './App.css'
import { BotaoPaiParaFilho } from './components/BotaoPai'
import { BotaoFilhoParaPai } from './components/BotaoFilho';
import { BotaoFilhoExecutaFuncaoApp } from './components/BotaoFilhoExecutaFuncaoPai';
import { BotaoFilhoExecutaFuncaoPorParametro } from './components/BotaoFilhoExecutaFuncaoPorParametro';


const App = () => {

  let textoBotaoPaiParaFilho = 'Botão pai para filho!';
  let textoBotaoFilhoParaPai =  'Botão filho para pai!';

  const botaoEventAction = () => {
    alert("Frase do App: Executado função dentro de pai(App) ao clicar no botão BotaoFilhoExecutaFuncaoApp")
  }

  const botaoPorParametro = (parametro: string) => {
    alert("Frase recebida no pai por parametro: " + parametro)
  }
  
  return (
    <div className="App">
      <div className="card">
        <p>Comunicação entre componentes <br /> pai(App) com filho(BotaoPaiParaFilho) </p>
        <BotaoPaiParaFilho text={textoBotaoPaiParaFilho} />
      </div>

      <div className="card">
        <p>Comunicação entre componentes <br /> filho(BotaoFilhoParaPai) com pai(App) </p>
        <BotaoFilhoParaPai texto={textoBotaoFilhoParaPai} />
      </div>

      <div className="card">
        <p>Comunicação entre componentes <br /> filho(BotaoFilhoExecutaFuncaoApp) com pai(App) executando função dentro do pai</p>
        <BotaoFilhoExecutaFuncaoApp texto={textoBotaoFilhoParaPai} clickFuncao={botaoEventAction} />
      </div>

      <div className="card">
        <p>Comunicação entre componentes <br /> filho(BotaoFilhoExecutaFuncaoPorParametro) com pai(App) executando função dentro do pai</p>
        <BotaoFilhoExecutaFuncaoPorParametro texto={textoBotaoFilhoParaPai} clickFuncaoParametro={botaoPorParametro} />
      </div>
    </div>    
  );
}

export default App
