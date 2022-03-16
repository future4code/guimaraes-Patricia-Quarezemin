import React from 'react';
import styled from 'styled-components';
import LogoSpotify from './Images/spotify.png';

const LogoHeader = styled.img`
  width: 5vw;
  margin: 0;
  padding-top: 1%;
`
const HeadersContainer = styled.div`
  color: black;
  font-size: 30px;
  padding-bottom: 1%;
  padding-left: 2%;
  margin-bottom: 1%;
  background-color: #C4C4C4;
  font-family: "Lucida Console";
  font-size: 30px;
  display: flex;
`
const ButtonsContainer = styled.button`
  width: 5%;
  padding: 1%;
  margin-bottom: 2%;
  border-radius: 20%;
`

class Headers extends React.Component {
    render() {
        return (
            <HeadersContainer>
                <LogoHeader src={LogoSpotify} alt='logo spotify'></LogoHeader>
                <strong>Labefy</strong>
                <ButtonsContainer onClick={this.props.mudarTela}>Clique aqui!</ButtonsContainer>
            </HeadersContainer>
        )
    }
}
export default Headers;