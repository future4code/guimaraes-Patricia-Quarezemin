import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CriarPlaylistContainer = styled.div`
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
`
const TituloCentral = styled.h2`
  font-size: 30px;
  padding-top: 50px;
`


class CriarPlaylist extends React.Component {

    state = {
        name: ''
    }

    newName = (event) => {
        this.setState({ name: event.target.value })
    }

    createPlaylist = () => {
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
            .then((res) => {
                alert(`A playlist ${this.state.name} foi criada com sucesso!`)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }


    render() {
        return (
            <CriarPlaylistContainer>
                <TituloCentral>Seja Bem Vindo(a)!</TituloCentral>
                <h4>Crie uma nova Playlist:</h4>
                <div>
                    <input
                        placeholder='Nome da Playlist'
                        value={this.name}
                        onChange={this.NewName}
                    ></input>
                    <button>Salvar</button>
                    <br />
                </div>
                <h4>Visualizar as playlist criadas:</h4>
               
            </CriarPlaylistContainer>
        )
    }
}

export default CriarPlaylist;