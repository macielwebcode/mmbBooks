import React from 'react'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import OpcoesIcones from '../OpcoesIcones'
import './estilo.css'
import styled from 'styled-components'

const HeaderContainer = styled.header`

  background-color: #FFF;
  display: flex;
  justify-content: center;
  
`

export default function Header() {
  return (

    <HeaderContainer>

      <Logo />
      <OpcoesHeader />
      <OpcoesIcones />
      
    </HeaderContainer>

  )
}
