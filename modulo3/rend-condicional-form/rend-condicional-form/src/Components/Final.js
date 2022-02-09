import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Final (){
    return(
        <Container>
            <h1>O FORMULÁRIO ACABOU</h1>
            <h3>Muito obrigado por participar! Entraremos em contato!</h3>
        </Container>
    );
}

export default Final;