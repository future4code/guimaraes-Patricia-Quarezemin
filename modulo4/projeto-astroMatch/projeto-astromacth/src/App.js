import React from 'react';
import styled from 'styled-components';
import Header from '././Components/Header/Header.jsx';
import Main from '././Components/Main/Main.jsx';
import Footer from '././Components/Footer/Footer.jsx';
import Matches from './Components/Matches/Matches.jsx';

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
const DivFooter = styled.div`
  height: 15%;
`
const InputButton = styled.input`
  display: flex;
  justify-items: end;
  align-content: flex-end;
`
function App() {
  return (
    <div>
      <MainContainer>
        <ContainerPrincipal>
          <DivHeader>
            <Header />
          </DivHeader>
          <DivMain>
            <Main />
          </DivMain>
          <DivFooter>
            <Footer />
          </DivFooter>
        </ContainerPrincipal>
      </MainContainer>
      <InputButton placeholder='Limpar swipes e matches'></InputButton>
      <Matches />
    </div>
  );
}

export default App;
