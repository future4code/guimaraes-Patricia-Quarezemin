import React from 'react';
import CriarPlaylist from './Components/CriarPlaylist';
import PlaylistMusic from './Components/PlaylistMusic';
import Headers from './Components/Headers';
import Footer from './Components/Footer';

class App extends React.Component {

  state = {
    tela: 'playlist'
  }

  mudarTela = () => {
    if (this.state.tela === 'playlist') {
      this.setState({ tela: 'musica' })
    } if (this.state.tela === 'musica') {
      this.setState({ tela: 'playlist' })
    }
  }

  escolherTela = () => {
    switch (this.state.tela) {
      case 'musica':
        return <PlaylistMusic />
      case 'playlist':
        return <CriarPlaylist />
      default:
        return <p>Opa, essa tela não existe</p>
    }
  };


  render() {

    return (
      <div>
        <Headers mudarTela={this.mudarTela} />
        {this.escolherTela()}
        <Footer />
      </div>
    )
  }
}

export default App;