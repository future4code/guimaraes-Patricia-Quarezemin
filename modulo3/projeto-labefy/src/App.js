import React from 'react';
import LogoSpotify from './Components/Images/spotify.png';
import LogoInstagram from './Components/Images/instagram.png';
import LogoFacebook from './Components/Images/facebook.png';
import LogoTwitter from './Components/Images/twitter.png';
import styled from 'styled-components';
import Playlist from './Components/Playlist';
import AddMusic from './Components/AddMusic';

const LogoHeader = styled.img`
  width: 5vw;
  margin: 0;
  padding-top: 1%;
  `
const LogoFooter = styled.img`
  width: 2vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 5px;
`
const Headers = styled.header`
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 2%;
  margin-bottom: 1%;
  background-color: #C4C4C4;
  font-family: "Lucida Console";
  font-size: 30px;
`
const Footers = styled.header`
  padding: 1%;
  margin-top: 1%;
  background-color: #C4C4C4;
  color: whitesmoke;
  display: flex;
  justify-content: center;
`

const TituloCentral = styled.h2`
  font-size: 30px;
  padding-top: 50px;
`
const ButtonsContainer = styled.button`
  width: 5%;
  padding: 1%;
  margin-bottom: 2%;
  border-radius: 20%;
`
const ContainerPrincipal = styled.div`
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
class App extends React.Component {

  state = {
    tela: 'playlist'
  }

  mudarTela = (nomeTela) =>{
      this.setState({tela: nomeTela})
  }

  escolherTela = () => {
    switch (this.state.tela) {
      case 'home':
        return < App mudarTela={this.mudarTela} />
      case 'musica':
        return <AddMusic mudarTela={this.mudarTela} />
      // case 'playlist':
      //   return <Playlist mudarTela={this.mudarTela} />
      default:
        return <Playlist mudarTela={this.mudarTela} />
    }
  };


  render() {

    return (
      <div>
        <Headers>
          <LogoHeader src={LogoSpotify} alt='logo spotify'></LogoHeader>
          <strong>Labefy</strong>
        </Headers>
        <ContainerPrincipal>
          <TituloCentral>Seja Bem Vindo(a)!</TituloCentral>
          <h4>Crie uma nova Playlist:</h4>
          <div>
            <input
              placeholder='Nome da Playlist'
              value={this.name}
              onChange={this.NewName}
            ></input>
            <button onClick={() => this.mudarTela('playlist')}>Salvar</button>
            <br />
          </div>
          <h4>Visualizar as playlist criadas:</h4>
          <ButtonsContainer onClick={() => this.mudarTela('playlist')}>Clique aqui!</ButtonsContainer>
        </ContainerPrincipal>
        <Footers>
          <LogoFooter src={LogoInstagram} alt='logo instagram'></LogoFooter>
          <LogoFooter src={LogoFacebook} alt='logo instagram'></LogoFooter>
          <LogoFooter src={LogoTwitter} alt='logo instagram'></LogoFooter>
        </Footers>
        {/* <AddMusic />
        <Playlist /> */}
      </div>
    )
  }
}

export default App;