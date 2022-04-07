import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import BackgroundImage from '../../Images/space.jpg'
import useProtectedPage from '../../Routes/useProtectedPage'

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
`
const DivFooter = styled.div`
    border-top: 1px solid pink;
    height: 5vh;
`

const AdminHomePage = () => {
    useProtectedPage()

    useEffect(() => {
        const token = localStorage.getItem('token')

        const headers = {
            auth: token
        }

        const body = {
            approve: true
        }

        axios
            .put('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin-guimaraes/trips/NoIFVcOiSgTKTIPVZwXS/candidates/DYmdG4XpVVjKY1SEfVH2/decide', body, headers)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))

        axios
            .del('https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-quarezemin-guimaraes/trips/:id', body)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    })

    const navigate = useNavigate()

    const goToPageHome = () => {
        navigate('/')
    }
    return (
        <MainContainer>
            <DivHeader>
                <h2>LabeX</h2>
                <button onClick={goToPageHome}>Home</button>
            </DivHeader>
            <Main>

            </Main>
            <DivFooter />
        </MainContainer>
    )
}
export default AdminHomePage