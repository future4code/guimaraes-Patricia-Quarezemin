import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Usuario = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
`
const DeleteUser = styled.button`
    color: red;
    cursor: pointer;
`

class Lista extends React.Component {

    state ={
        lista: []
    }

    componentDidMount (){
        this.getAllUsers()
    }

    getAllUsers = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        const headers ={
            headers: {
                Authorization: "patricia-quarezemin-guimaraes"
            }
        }   
        axios.get(url, headers)
        .then((res)=>{
            this.setState({lista: res.data})
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    deleteUser = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const headers ={
            headers: {
                Authorization: "patricia-quarezemin-guimaraes"
            }
        }

        axios.delete(url, headers)
        .then(()=>{
            alert('Usuário deletado')
            this.getAllUsers()
        })
        .catch((err)=>{
            alert(err.responde.data.message)
        })
    }

    render() {
        const listaUsuarios = this.state.lista.map((user)=>{
            return(
                <Usuario key={user.id}>
                    <p>{user.name}</p>
                    <DeleteUser onClick={()=> this.deleteUser(user.id)}>X</DeleteUser>
                </Usuario>
            )
        })

        return(
            <div>
                <button onClick={this.props.IrParaCadastro}>Trocar de Tela</button>
                {listaUsuarios}
            </div>
        )

    }
}

export default Lista;