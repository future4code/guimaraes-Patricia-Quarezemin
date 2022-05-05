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