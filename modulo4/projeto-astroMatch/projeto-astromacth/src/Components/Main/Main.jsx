import React from 'react';
import styled from 'styled-components';
import Ribamar from '../Images/ribamar.jpg';

const MainContainer = styled.div`
    padding: 20px;
    text-shadow: 0px 0px 5px black;
`
const FotoCapa = styled.img`
    max-height: 50vh;
    max-width: 30vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
`
function Main() {
    return (
        <MainContainer>
            <FotoCapa src={Ribamar} alt='Ribamar'></FotoCapa>
            <h2>José de Ribamar, 7</h2>
            <h4>A procura de uma Lady para me acompanhar, pode ser você!</h4>
        </MainContainer>
    )
}
export default Main