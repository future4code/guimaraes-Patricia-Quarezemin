import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'
import { useState } from 'react'
import axios from 'axios'

const MainContainer = styled.div`
background-image: url(${BackgroundImage});
height: 100vh;
width: 100vw;
`
const DivHeader = styled.div`
border-bottom: 1px solid pink;
height: 5vh;
color: pink;
padding: 10px;
display: flex;
justify-content: space-between;
`
const Main = styled.div`
height: 90vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
`
const DivFooter = styled.div`
border-top: 1px solid pink;
height: 5vh;
`

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const emailUser = (event) => {
        setEmail(event.targe.value)
    }

    const passwordUser = (event) => {
        setSenha(event.target.value)
    }

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const login = () => {
        // console.log(email, senha)

        const body = {
            email: email,
            senha: senha
        }

        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin-guimaraes/login', body)
        .then((res)=>{
            console.log('Deu certo!', res.data.token)
            localStorage.setItem('token', res.data.token)
            navigate('/admin/trips/:id')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
                <button onClick={goToHomePage}>Home</button>
            </DivHeader>
            <Main>
                <h2>LOGIN</h2>
                <input placeholder='E-mail' value={email} onChange={emailUser}></input>
                <input placeholder='Senha' value={senha} onChange={passwordUser}></input>
                <br></br>
                <button onClick={login}>Entrar!</button>
            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default LoginPage