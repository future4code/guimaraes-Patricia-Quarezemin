import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
function Etapa1 () {
    return(
        <Container>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h4>1. Qual o seu nome?</h4>
            <input type='text' placeholder></input>
            <h4>2. Qual sua idade?</h4>
            <input type='text' placeholder></input>
            <h4>3. Qual seu email?</h4>
            <input type='text' placeholder></input>
            <h4>4. Qual sua escolaridade?</h4>
            <select>
                <option value='opcao1'>Ensino Médio Incompleto</option>
                <option valeu='opcao2'>Ensino Médio Completo</option>
                <option value='opcao3'>Ensino Superior Incompleto</option>
                <option value='opcao4'>Ensino Superior Completo</option>
            </select>
        </Container>
    );

} 
   
export default Etapa1;