
import React from 'react';
import LogoSpotify from './Components/Images/spotify.png';
import styled from 'styled-components';

const logoHeader = styled.img`
  width: 5%;
  padding-top: 1%;
  margin: 0;
`

const Headers = styled.header`
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 5%;
  margin: 0;
  background-color: #C4C4C4;
  color: whitesmoke;
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
        <logoHeader src={LogoSpotify} alt='logo spotify' />
        <strong>Labefy</strong>
      </Headers>
      <Footers>
        <p></p>
      </Footers>
    </div>
  )
}

export default App;
