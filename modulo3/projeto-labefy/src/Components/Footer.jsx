import React from 'react';
import styled from 'styled-components';
import LogoInstagram from './Images/instagram.png';
import LogoFacebook from './Images/facebook.png';
import LogoTwitter from './Images/twitter.png';


const LogoFooter = styled.img`
  width: 3vw;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 5px;
`
const FooterContainer = styled.header`
  padding: 1%;
  margin-top: 1%;
  background-color: #C4C4C4;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  height: 5vh;
`
class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <LogoFooter src={LogoInstagram} alt='logo instagram'></LogoFooter>
                <LogoFooter src={LogoFacebook} alt='logo instagram'></LogoFooter>
                <LogoFooter src={LogoTwitter} alt='logo instagram'></LogoFooter>
            </FooterContainer>
        )
    }
}
export default Footer;