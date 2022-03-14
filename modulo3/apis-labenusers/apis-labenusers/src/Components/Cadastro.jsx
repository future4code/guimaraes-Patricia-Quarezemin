import React from 'react';
import axios from 'axios';

class Cadastro extends React.Component {

    state = {
        name:'',
        email:''
    }

    newName = (event) =>{
        this.setState({name: event.target.value})
    }

    newEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    createUser = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body={
            name: this.state.name,
            email: this.state.email
        }
        const headers ={
            headers: {
                Authorization: "patricia-quarezemin-guimaraes"
            }
        }

        axios.post(url, body, headers)
        .then((res)=>{
            alert('Usuário cadastrado com sucesso!')
            this.setState({name: '', email: ''})
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={this.props.IrParaLista}>Trocar de Tela</button>
                <br />
                <input
                placeholder= 'Nome'
                value={this.state.name}
                onChange={this.newName}/>

                <input
                placeholder= 'Email'
                value={this.state.email}
                onChange={this.newEmail} />

                <button onClick={this.createUser}>Criar Usuário</button>
            </div>
        )
    }
}

export default Cadastro;