import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PlaylistMusicContainer = styled.div`
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

class PlaylistMusic extends React.Component {

    state = {
        nomeMusica: '',
        artista: '',
        link: ''
    }

    novaMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }

    novoArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    novoLink = (event) => {
        this.setState({ link: event.target.value })
    }


    addTrackToPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'

        const body = {
            name: this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.link
        }

        const headers = {
            headers: {
                Authorization: 'patricia-quarezemin-guimaraes'
            }
        }

        axios.post
            .then((res) => {
                alert('Música adicionada com sucesso!')

            })
            .catch((err) => {
                console.log(err.response.data.message)
            })
    }
    render() {
        return (

            <PlaylistMusicContainer>
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
            </PlaylistMusicContainer>

        )
    }
}

export default PlaylistMusic;