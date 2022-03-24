import React from 'react';
import styled from 'styled-components';
import Header from '././Components/Header/Header.jsx';
import Main from '././Components/Main/Main.jsx';
import Matches from './Components/Matches/Matches.jsx';
import { useState } from 'react';
import axios from 'axios';

const MainContainer = styled.div`
  background-color: #e7e7e7;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black; 
  height: 82vh;
  width: 30vw;
  background-color: white;
`
const DivHeader = styled.div`
  height: 10%;
`
const DivMain = styled.div`
  height: 75%;
`
const InputButton = styled.button`
  display: flex;
  justify-items: end;
  align-content: flex-end;
`
function App() {

  const [tela, setTela] = useState('matches')

  const mudarTela = () => {
    if (tela === 'matches') {
      setTela('voltar')
    } if (tela === 'voltar') {
      setTela('matches')
    }
  }

  const escolherTela = () => {
    switch (tela) {
      case 'matches':
        return <Main />
      case 'voltar':
        return <Matches />
      default:
        return <p>Opa, essa tela não existe!</p>
    }
  }

  const putClear = () =>{
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/patricia/clear')
    .then((response)=>{
      //devo colocar o useState 'tela' ou 'setTela'? Pois qdo coloco o primeiro caso, no console.log aparece como
      // tela is not a function
      setTela(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <MainContainer>
        <ContainerPrincipal>
          <DivHeader>
            <Header mudarTela={mudarTela} />
          </DivHeader>
          <DivMain>
            {escolherTela()}
          </DivMain>
        </ContainerPrincipal>
      </MainContainer>
      <InputButton onClick={()=> putClear()}placeholder='Limpar swipes e matches'></InputButton>
    </div>
  );
}

export default App;
