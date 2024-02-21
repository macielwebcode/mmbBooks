import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react' 
import { getFavoritos } from '../services/favoritos'
import { deleteFavorito } from '../services/favoritos'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Favoritos() {
  
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }


  async function deletarFavorito(id) {
     await deleteFavorito(id)
     await fetchFavoritos()
     alert(`Livro de id:${id} deletado!`)
 }

  useEffect(() => {
      fetchFavoritos()
  }, [])


  return (
    <AppContainer>
      {favoritos.map( favorito => (
        <Resultado onClick={() => deletarFavorito(favorito.id)}>
          <p>{favorito.nome}</p>
        </Resultado>
      ) )}
      
    </AppContainer>
  );
}

export default Favoritos;
