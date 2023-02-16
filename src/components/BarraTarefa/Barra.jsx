import React, { useState } from 'react'
import {BarraLateral,InputTarefa,InputOpcoes,Botao} from './styles'

const Barra = () => {
  
  const[nomeTarefa,setNomeTarefa]=useState('')
  const[duracaoTarefa,setDuracaoTarefa]=useState('')
  const[prioridadeTarefa,setPrioridadeTarefa]=useState('')
  const[erro,setErro]=useState(false)
  const[info,setInfo]=useState()

  function createTask(){
    const Tarefa=
      {
        nome:nomeTarefa,
        duracao:duracaoTarefa,
        prioridade:prioridadeTarefa
      }

   if(!nomeTarefa || !duracaoTarefa|| !prioridadeTarefa){
    setErro(true)
   }else{
    setErro(false)
    const url=`http://localhost:3000/tarefas`
    fetch(url,{
        method: "POST",
        body: JSON.stringify(Tarefa),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }).then((resp)=>resp.json()).then(()=>console.log("Tarefa criada")).catch((e=>console.log("error "+e)))
    } 
  }

  function getDataAtual(){
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const infoData=`${horas} horas e ${minutos} minutos`

    return infoData
  }

  getDataAtual()

  

  return (
    <BarraLateral>
      <h1>TodoList</h1>
      <h3 className={erro==false?" ":"ErroTrue"}>{erro==false?" ":"Erro ao criar tarefa"}</h3>
      <div>
        <label>Digite o nome da tarefa</label>
        <InputTarefa placeholder='Ex: Academia' onChange={(event)=>setNomeTarefa(event.target.value)}/>
      </div>
      <div>
        <label>Digite a duração da tarefa</label>
        <InputTarefa placeholder='Ex: 1 hora' onChange={(event)=>setDuracaoTarefa(event.target.value)}/>
      </div>
      <div>
        <label>Escolha a prioridade da tarefa</label>
        <InputOpcoes onChange={(event)=>setPrioridadeTarefa(event.target.value)}>
          <option value="baixa">Baixa</option>
          <option value="média">Média</option>
          <option value="alta">Alta</option>
        </InputOpcoes>
      </div>
      <Botao onClick={()=>createTask()}>Criar</Botao>
    </BarraLateral>
  )

}

export default Barra