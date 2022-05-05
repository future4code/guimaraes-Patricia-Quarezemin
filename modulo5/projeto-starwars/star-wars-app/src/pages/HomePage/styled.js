import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/home.png'

export const MainContainer = styled.div`
background-image: url(${BackgroundImage});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 100vh;
`
export const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 100px;
height: 40px;
`
export const Buttons = styled.button`
background-color: #4E4B4B;
font-size: large;
color: #F8E00F;
`