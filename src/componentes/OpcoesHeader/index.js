import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom' 

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  list-style: none;
`

const Opcoes = styled.ul`
  display: flex;

`

export default function OpcoesHeader() {
    const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
  return (
    <Opcoes>
      {textoOpcoes.map( (textoitem) => (
        <Link to={`/${textoitem.toLowerCase()}`}><Opcao key={textoitem}><p>{textoitem}</p></Opcao></Link>
          
      ))}
    </Opcoes>
  )
}
