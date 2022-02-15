import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Estudar',
          completa: true
        },
        {
          id: Date.now(), 
          texto: 'Passear com o cachorro',
          completa: false 
        }
      ],
      inputValue: '',
      filtro: ''
    }

  pegarTarefas() {
    const idString = localStorage.getItem('id');
    const id = JSON.parse(idString)

    if(id){
      this.setState({
        id: id
      })
    }
    const textoString = localStorage.getItem('texto');
    const texto = JSON.parse(textoString)

    if(texto){
      this.setState({
        texto: texto
      })
    }
    const completaString = localStorage.getItem('completa');
    const completa = JSON.parse(completaString)

    if(completa){
      this.setState({
        completa: completa
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // executado após a atualização do componente
    if(prevState.id !== this.state.id) {
      localStorage.setItem('id', JSON.stringify(id))
    }
    if(prevState.texto !== this.state.texto){
      localStorage.setItem('texto', JSON.stringify(texto))
    }
    if(prevState.completa !== this.state.completa){
      localStorage.setItem('completa', JSON.stringify(completa))
    }
    
  };

  componentDidMount() { // ele vai ser chamado qdo o componente for criado! Chamado na primeira atualização, pq qdo é criado
    this.pegarTarefas();
  };

  //DidMount: executado após a montagem do componente

  onChangeInput = (event) => {
    this.setState ({inputValue: event.target.value})
  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaDeTarefas = [... this.state.tarefas, novaTarefa]

    this.setState ({tarefas: novaListaDeTarefas})

  }

  selectTarefa = (id) => {

    const novaListaDeTarefas = this.state.tarefas.map((task) =>{
      if(id === task.id){
        const novaTarefa = {
          ... task,
          completa: !task.completa
        }
        return(novaTarefa)
      } else{
        return task
      }
    })

    this.setState ({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState ({filtro: event.target.value})
  }

  render() { // esse método é chamado sempre!
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
