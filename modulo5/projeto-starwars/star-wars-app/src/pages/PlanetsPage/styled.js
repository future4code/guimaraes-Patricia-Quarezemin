import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    
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
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    height: 40px;
    right: auto;
    justify-content: right;
`
export const PlanetCard = styled.button`
    background-color: #4E4B4B;
    font-size: large;
    color: #F8E00F;
    margin: 7px 0 0;
    border-radius: 8px;
    height: 200px;
    width: 200px;
`
export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    margin: 5rem;
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
    place-items: center;
` 

