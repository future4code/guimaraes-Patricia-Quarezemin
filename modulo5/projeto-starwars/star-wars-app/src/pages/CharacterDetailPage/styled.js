import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
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

export const CharacterCard = styled.div`
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    margin: 7px 0 0;
    border-radius: 8px;
    width: 200px;
    height: 300px;
`