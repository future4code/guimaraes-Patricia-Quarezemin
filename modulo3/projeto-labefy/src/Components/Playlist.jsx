import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LogoSpotify from './Images/spotify.png';

const LogoHeader = styled.img`
  width: 5vw;
  margin: 0;
  padding-top: 1%;
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
const ContainerPrincipal = styled.div`
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

class Playlist extends React.Component {

    state = {
        name: ''
    }

newName = (event) =>{
    this.setState({name: event.target.value})
}

    createPlaylist = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const body = {
            name: this.state.name
        }

        const headers = {
            headers: {
                Authorization: 'patricia-quarezemin-guimaraes'
            }
        }

    axios.post
    .then((res)=>{
        alert(`A playlist ${this.state.name} foi criada com sucesso!`)
    })
    .catch((error)=>{
        console.log(error.response.data.message)
    })
    }
    
    
    render() {
        return (
            <div>
                <Headers>
                    <LogoHeader src={LogoSpotify} alt='logo spotify'></LogoHeader>
                    <strong>Labefy</strong>
                </Headers>
                <ContainerPrincipal>
                    <h2>Minhas Playlists:</h2>
                    <li>{this.state.name}</li>
                    <br />
                    <button>Voltar</button>
                </ContainerPrincipal>
            </div>
        )
    }
}

export default Playlist;