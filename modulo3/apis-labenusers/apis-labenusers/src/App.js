import React from 'react';
import axios from 'axios';
import trocarTela from './Components/trocarTela';

const createUser = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
  headers: {
    Authorization: 'patricia-quarezemin-guimaraes'
  }
}

const getAllUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

class App extends React.Component {

  state = {
    users: [],
    name: '',
    email: ''
  }

  componentDidMount (){
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(getAllUsers, headers)
      .then((res) => {
        this.setState({users: res.data})
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response)
      });
  }

  postCreateUser = () => {

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    axios
      .post(createUser, body, headers)
      .then((res) => {
        alert(`O usuário ${this.state.nameInput} foi criado com sucesso!`)
        this.setState({nameInput: res.data})
        this.setState({nameInput:''})
        this.postCreateUser();
      })
      .catch((error) => {
        console.log(error.response);
        alert(`O usuário ${this.state.nameInput} não foi inserido.`)
      });
    }

  
  newUserChange = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  newEmailUserChange = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  render() {

    const userComponents = this.state.users.map((user) => {
      return <p key={user.id}>{user.name}</p>
    })
    return (
      <div>
        <button onClick={trocarTela}>Trocar de Tela</button>
        <br/>
        <input
          value={this.state.nameInput}
          placeholder="Nome"
          onChange={this.newUserChange}
          >
        </input>
        <input
          value={this.state.emailInput}
          placeholder="E-mail"
          onChange={this.newEmailUserChange}
          >
        </input>
        <button onClick={this.postCreateUser}>Criar Usuário</button>
        {userComponents}
      </div>
    )
  }
}

export default App;
