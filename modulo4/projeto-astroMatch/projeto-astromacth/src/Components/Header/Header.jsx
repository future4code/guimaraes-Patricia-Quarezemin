import React from 'react';
import styled from 'styled-components';
import PageTitle from '../Images/title.png';
import DoubleMatch from '../Images/doubleMatch.png';

const P = styled.div`
    color: white;
`
const Headers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
`
const LogoHeader = styled.img`
    height: 5vh;
    margin: 0;
    padding-top: 2%;
`
function Header (props){

    return(
        <Headers>
            <P>p</P>
            <LogoHeader src={PageTitle} alt='logo página inicial'></LogoHeader>
            <LogoHeader onClick={()=>props.mudarTela()}src={DoubleMatch} alt='double match'></LogoHeader>
        </Headers>
    )
}
export default Header