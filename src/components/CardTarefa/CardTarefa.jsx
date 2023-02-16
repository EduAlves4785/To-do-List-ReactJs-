import React from 'react'
import {Card} from './styles'

export const CardTarefa = ({Nome,Duracao,Prioridade,id}) => {
  const url=`http://localhost:3000/tarefas/${id}`

  async function deleteTask(){
    fetch(url, { method: 'DELETE' })
    console.log("deletando tarefa "+id)
  }
  
  return (
    <Card>
        <h1>{Nome}</h1>
        <h3>Duracao: {Duracao} horas</h3>
        <h4>Prioridade {Prioridade}</h4>
        <label>Concluída</label>
        <input type="checkbox" />
        <button onClick={()=>deleteTask()}>Apagar</button>
    </Card>
  )
}
