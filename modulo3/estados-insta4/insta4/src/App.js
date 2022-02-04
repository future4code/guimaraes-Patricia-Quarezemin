import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

// const MainContanier = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center
//   `
class App extends React.Component {
  state={
    usuario:[
      {
        nomeUsuario:'paulinha',
        fotoUsuario:<img src='https://picsum.photos/50/50'></img>,
        fotoPost:<img src='https://picsum.photos/200/150'></img>
      },
      {
        nomeUsuario:'fernanda',
        fotoUsuario:<img src='https://picsum.photos/50/55'></img>,
        fotoPost:<img src='https://picsum.photos/200/153'></img>
      },
      {
        nomeUsuario:'camila',
        fotoUsuario:<img src='https://picsum.photos/50/60'></img>,
        fotoPost:<img src='https://picsum.photos/200/156'></img>
      }
    ]
  }
render() {
  const listaDeComponentes = this.state.usuario.map((usuario) =>{
    return(
      <p>
        {usuario.nomeUsuario} - {usuario.fotoUsuario} - {usuario.fotoPost}
      </p>
    )
  })

  return(
    <div>
      {listaDeComponentes}
    </div>
  )
}
}
export default App;
