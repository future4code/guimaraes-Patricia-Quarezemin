import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'
import useProtectedPage from '../../Hooks/useProtectedPage'

const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`
const DivHeader = styled.div`
    border-bottom: 1px solid pink;
    height: 5vh;
    color: pink;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 100px 100px;
`
const Main = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: pink;
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`

const CreateTripPage = () => {
    useProtectedPage()

    const criarViagem = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        const token = localStorage.getItem('token')

        const body = {
            name: '',
            planet: '',
            date: '',
            description: '',
            durationInDays: ''
        }

        const headers = {
            auth: token
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin-guimaraes/trips', body, headers)

            .then(res => console.log(res.data.trip))
            .catch(err => console.log(err.response))
    })

    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    }

    const goToAdminHomePage = () => {
        navigate('/admin/trips/:id')
    }
    return (
        <form onSubmit={criarViagem}>
            <MainContainer>
                <DivHeader>
                    <h2>LabeX</h2>
                    <button onClick={goToAdminHomePage}>Voltar para ADM</button>
                    <button onClick={goToHomePage}>Home</button>
                </DivHeader>
                <Main>
                    <h2>Crie uma viagem:</h2>
                    <label htmlFor={"name"}>
                        Nome
                    </label>
                    <input
                        id={"name"}
                        // value={}
                        placeholder={"Digite o seu nome"}
                        // onChange={}
                        pattern={"^.{5,}"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <label htmlFor={"planet"}>
                        Planeta
                    </label>
                    <p><select required>
                        <option />
                        <option >Mercúrio</option>
                        <option >Vênus</option>
                        <option >Terra</option>
                        <option >Marte</option>
                        <option >Júpiter</option>
                        <option >Saturno</option>
                        <option >Urano</option>
                        <option >Netuno</option>
                        <option >Plutão</option>
                    </select></p>
                    <label htmlFor="date">Data (dias):</label>
                    <p><input
                        type="date"
                        title={"Escolha uma data futura"}
                        min={"01-01-2022"}
                        id="date"
                        name="date"
                        // value={}
                        // onChange={}
                        required
                    /></p>
                    <label htmlFor="descricao">Descrição</label>
                    <p><textarea
                        type="text"
                        id="descricao"
                        name="description"
                        // value={}
                        // onChange={}
                        placeholder="Descrição"
                        required
                        pattern={"^.{30,}"}
                        title={"O texto deve ter no mínimo 30 letras"}
                    /></p>

                    <button>Criar Viagem</button>
                </Main>
                <DivFooter />
            </MainContainer>
        </form>
    )
}
export default CreateTripPage