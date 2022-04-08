import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'

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
    align-items: center;
    flex-direction: column;
    color: white;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`
const ApplicationFormPage = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [applicationText, setApplicationText] = useState('')
    const [profession, setProfession] = useState('')
    const [country, setCountry] = useState('')

    const onChangeName = (ev) => {
        setName(ev.target.value);
    }

    const onChangeAge = (ev) => {
        setAge(ev.target.value)
    }
    
    const onChangeApplicationText = (ev) => {
        setApplicationText(ev.target.value)
    }
    
    const onChangeprofession = (ev) => {
        setProfession(ev.target.value)
    }

    const enviarFormulario = (e) => {
        e.preventDefault()

        const body = {
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin-guimaraes/trips/:id/apply', body)
            .then(res => console.log(res.data.trips))
            .catch(err => console.log(err.response))
    }

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <form onSubmit={enviarFormulario}>
            <MainContainer>
                <DivHeader>
                    <h2>LabeX</h2>
                    <button onClick={goToHomePage}>Home</button>
                </DivHeader>
                <Main>
                    <h2><strong>Candidate-se a uma viagem espacial:</strong></h2>
                    <label htmlFor={"name"}>
                        Nome
                    </label>
                    <input
                        id={"name"}
                        value={name}
                        placeholder={"Digite o seu nome"}
                        onChange={onChangeName}
                        required
                    />
                     <label htmlFor={"age"}>
                        Idade
                    </label>
                    <input
                        id={"age"}
                        value={age}
                        placeholder={"Digite a sua idade"}
                        onChange={onChangeAge}
                        required
                    />
                     <label htmlFor={"applicationText"}>
                        Por que você deve ser o escolhido?
                    </label>
                    <input
                        id={"applicationText"}
                        value={applicationText}
                        placeholder={"Digite o motivo"}
                        onChange={onChangeApplicationText}
                        required
                    />
                     <label htmlFor={"profession"}>
                        Profissão
                    </label>
                    <input
                        id={"profession"}
                        value={profession}
                        placeholder={"Digite a sua profissão"}
                        onChange={onChangeprofession}
                        required
                    />
                    <button type='submit'>ENVIAR!</button>
                </Main>
                <DivFooter />
            </MainContainer>
        </form>
    )
}
export default ApplicationFormPage