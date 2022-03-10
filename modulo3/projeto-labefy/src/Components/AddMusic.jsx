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

class AddMusic extends React.Component {

    state = {
        nomeMusica: '',
        artista: '',
        link: ''
    }

    novaMusica = (event) =>{
        this.setState({nomeMusica: event.target.value})
    }

    novoArtista = (event) =>{
        this.setState({artista: event.target.value})
    }

    novoLink = (event) =>{
        this.setState({link: event.target.value})
    }


    addTrackToPlaylist = () =>{
        const url= 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'

        const body ={
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.link
        }

        const headers ={
            headers: {
                Authorization: 'patricia-quarezemin-guimaraes'
            }
        }

        axios.post
        .then((res)=>{
            alert('Música adicionada com sucesso!')
            
        })
        .catch((err)=>{
            console.log(err.response.data.message)
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
                    <h2>Adicionar música</h2>
                    <input 
                    placeholder='Música'
                    value={this.state.nomeMusica}
                    onChange={this.novaMusica}
                    ></input>
                    <br />
                    <input 
                    placeholder='Artista'
                    value={this.state.artista}
                    onChange={this.novoArtista}
                    ></input>
                    <br />
                    <input 
                    placeholder='Link da Música'
                    value={this.state.link}
                    onChange={this.novoLink}
                    ></input>
                    <br />
                    <button>Inserir</button>
                </ContainerPrincipal>
            </div>
        )
    }
}

export default AddMusic;