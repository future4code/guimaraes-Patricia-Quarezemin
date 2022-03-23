import React from 'react';
import Back from '../Images/back.png';
import PageTitle from '../Images/title.png';
import styled from 'styled-components';

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
`
const BackButton = styled.div`
    height: 2vh;
    margin: 0;
    padding-top: 2%;
    justify-content: flex-start;
`
const Title = styled.div`
    height: 5vh;
    margin: 0;
    padding-top: 2%;
    justify-content: center;
    align-items: center;
`

function Matches (){
    return(
        <Main>
            <BackButton>
            <img src={Back} alt='back button'></img>
            </BackButton>
            <Title>
            <img src={PageTitle} alt='title'></img>
            </Title>
        </Main>
    )
}
export default Matches