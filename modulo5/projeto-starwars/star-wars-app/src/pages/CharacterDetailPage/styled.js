import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
    margin: 7px 0 0;
    border-radius: 8px;
    width: 500px;
    height: 350px;
    text-align: center;
    display: flex;
`

export const TextCard = styled.div`
    display: block;
`