
import React from 'react';
import LogoSpotify from './Components/Images/spotify.png';
import LogoInstagram from './Components/Images/instagram.png';
import LogoFacebook from './Components/Images/facebook.png';
import LogoTwitter from './Components/Images/twitter.png';
import styled from 'styled-components';

const LogoHeader = styled.img`
  width: 5vw;
  margin: 10px;
  padding: 10px;
  display: grid;
`

const LogoFooter = styled.img`
  width: 2vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`
const Headers = styled.header`
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
  background-color: #C4C4C4;
  font-family: "Lucida Console";
 `;

const Footers = styled.header`
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
  background-color: #C4C4C4;
  color: whitesmoke;
`;

function App (){
  return(
    <div>
      <Headers>
        <LogoHeader src={LogoSpotify} alt='logo spotify'></LogoHeader>
        <strong>Labefy</strong>
      </Headers>
      <Footers>
        <LogoFooter src={LogoInstagram} alt='logo instagram'></LogoFooter>
        <LogoFooter src={LogoFacebook} alt='logo instagram'></LogoFooter>
        <LogoFooter src={LogoTwitter} alt='logo instagram'></LogoFooter>
      </Footers>
    </div>
  )
}

export default App;
