import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`
export const ButtonHome = styled.button`
    height: 40px;
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    margin: 50px;
    text-align: center;
    border-radius: 8px;
`

export const CardContainer = styled.div`
    width: 300px;
    height: 250px;
    background-color: #4E4B4B;
    border-radius: 8px;
    padding: 20px;
    margin: 200px;
   
`
export const CardMainContainer = styled.div`
    display: flex;
    justify-content: center;
    color: #F8E00F;
    font-size: large;
    text-align: center;
    margin: auto;
`