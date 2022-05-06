import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
`
export const ButtonHome = styled.button`
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    padding: 30px;
    align-items: center;
`

export const CardContainer = styled.div`
    width: 500px;
    height: 350px;
    background-color: #4E4B4B;
    border-radius: 8px;
`
export const CardMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F8E00F;
    font-size: large;
    text-align: center;
    margin: auto;
`