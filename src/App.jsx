import { useState } from 'react'
import './App.css'
import Barra from './components/BarraTarefa/Barra'
import { TarefaContainer } from './components/TarefaContainer/TarefaContainer'

function App() {

  return (
    <div className="App">
      <div className='Container'>
        <Barra/>
        <TarefaContainer/>
      </div>
    </div>
  )
}

export default App
