import React from 'react';
import styled from 'styled-components';
import OnMatch from '../Images/onMatch.png';
import Match from '../Images/match.png';

const Alinhamento = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
`
const Footers = styled.img`
    height: 8vh;
`
function Footer (){

    return(
        <Alinhamento>
            <Footers src={OnMatch} alt='on Match'></Footers>
            <Footers src={Match} alt='match'></Footers>
        </Alinhamento>
    )
}
export default Footer