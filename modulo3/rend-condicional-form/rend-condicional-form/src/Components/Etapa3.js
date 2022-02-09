import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Etapa3 () {
    return(
        <Container>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h4>5. Por que você não terminou um curso de graduação?</h4>
            <input type='text' plaholder></input>
            <h4>6. Você fez algum curso complementar?</h4>
            <select>
                <option value='curso1'>Nenhum</option>
                <option value='curso2'>Curso técnico</option>
                <option value='curso3'>Curso de inglês</option>
            </select>
        </Container>
    );
}

export default Etapa3;