import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`
export const ButtonCharacterList = styled.button`
    display: flex;
    flex-direction: row;
    height: 40px;
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    padding: 30px;
    text-align: center;
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
    text-align: flex-start;
    display: flex;
    padding: 20px;
`

export const TextCard = styled.div`
    /* display: block; */
`