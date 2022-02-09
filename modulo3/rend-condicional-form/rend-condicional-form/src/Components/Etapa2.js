import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
function Etapa2 () {
    return(
        <Container>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
            <h4>5. Qual curso?</h4>
            <input type='text' placeholder></input>
            <h4>6. Qual a unidade de ensino?</h4>
            <input type='text' placeholder></input>
        </Container>
    );
}

export default Etapa2;