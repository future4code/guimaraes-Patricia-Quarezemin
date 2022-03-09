
import React from 'react';
import LogoSpotify from './Components/Images/spotify.png';
import LogoInstagram from './Components/Images/instagram.png';
import LogoFacebook from './Components/Images/facebook.png';
import LogoTwitter from './Components/Images/twitter.png';
import styled from 'styled-components';

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
  margin: 0;
  background-color: #C4C4C4;
  font-family: "Lucida Console";
  font-size: 30px;
 `;

const Footers = styled.header`
  font-size: 30px;
  padding-bottom: 1%;
  margin: 0;
  background-color: #C4C4C4;
  color: whitesmoke;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 99.1%;
`;

const TituloCentral = styled.h2`
  font-size: 30px;
  display: flex;
  justify-content: center;
  `
const ContainerPrincipal = styled.div`
  background-color: #C4C4C4;
  display: grid;
  justify-content: center;
  `
function App (){
  return(
    <div>
      <Headers>
        <LogoHeader src={LogoSpotify} alt='logo spotify'></LogoHeader>
        <strong>Labefy</strong>
      </Headers>
      <ContainerPrincipal>
        <TituloCentral>Seja Bem Vindo(a)!</TituloCentral>
        <h4>Crie uma nova Playlist:</h4>
        <input placeholder= 'Nome da Playlist'></input>
        <button>Salvar</button>
      </ContainerPrincipal>
      <Footers>
        <LogoFooter src={LogoInstagram} alt='logo instagram'></LogoFooter>
        <LogoFooter src={LogoFacebook} alt='logo instagram'></LogoFooter>
        <LogoFooter src={LogoTwitter} alt='logo instagram'></LogoFooter>
      </Footers>
    </div>
  )
}

export default App;
