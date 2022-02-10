import { findByLabelText } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
class App extends React.Component {
  state = {
    count: 1
  }

  pulaEtapa = () => {
    switch (this.state.count) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />
    }
  }

  add = () => {
    this.setState({ count: this.state.count + 1})
  }
  render(){
    return (
      <Container>
      {this.pulaEtapa()}
      <br />
      {this.state.count !== 4 && (
        <button onClick={this.add}>Próxima etapa</button>
        )}
      </Container>
    )
  }
}

export default App;
