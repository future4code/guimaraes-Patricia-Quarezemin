import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`
export const ButtonCharacterList = styled.button`
    height: 40px;
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    margin: 50px;
    text-align: center;
    border-radius: 8px;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const CharacterCard = styled.div`
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    margin: 200px;
    border-radius: 8px;
    width: 250px;
    height: 250px;
    text-align: center;
    padding: 20px;
`

