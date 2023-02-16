import React, { useState,useEffect } from 'react'
import { CardTarefa } from '../CardTarefa/CardTarefa'
import {Container} from './styles'

export const TarefaContainer = () => {

  const[List,setList]=useState([])

  useEffect(()=>{
    const url="http://localhost:3000/tarefas"
    fetch(url)
    .then(async response=>{
        setList(await response.json())
    })
  })
  return (
    <Container>
      {List.map((item)=><CardTarefa key={item.id} Nome={item.nome} Duracao={item.duracao} Prioridade={item.prioridade} id={item.id}/>)}
    </Container>
  )
}
