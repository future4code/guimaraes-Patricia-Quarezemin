import React from 'react';
import Cadastro from './Components/Cadastro';
import Lista from './Components/Lista';

class App extends React.Component {

  state = {
   tela: 'cadastro'
  }

  trocaTela = () => {
    switch(this.state.tela){
      case 'cadastro':
        return<Cadastro IrParaLista={this.IrParaLista}/>
      case 'lista':
        return<Lista IrParaCadastro={this.IrParaCadastro}/>
      default:
        return <p>ERRO!</p>
    }
  }

  IrParaLista = () => {
    this.setState({tela: 'lista'})
  }

  IrParaCadastro = () => {
    this.setState({tela: 'cadastro'})
  }

  render() {

   
    return (
      <div>
        {this.trocaTela()}
      </div>
    )
  }
}

export default App;
