import React from 'react'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const ContainerLogo = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImage = styled.img`
  margin-right: 10px;

`

export default function Logo() {
  return (
    <ContainerLogo>
        <LogoImage 
          src={logo} 
          alt='logo projeto livraria' 
        />
        
        <p><strong>Mmb Books</strong></p>
        
    </ContainerLogo>
  )
}
