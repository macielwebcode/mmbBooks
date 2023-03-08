import React from 'react'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
  margin-right: 40px;
  cursor: pointer;
  width: 25px;
  list-style: none;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

export default function OpcoesIcones() {
const icones = [perfil, sacola]
  return (
    <Icones>
        {icones.map( (iconeitem) => (
            <Icone key={iconeitem}>
            <img src={iconeitem} alt="icone do cabeçalho" />
            </Icone>
        ))}
    </Icones>
  )
}
