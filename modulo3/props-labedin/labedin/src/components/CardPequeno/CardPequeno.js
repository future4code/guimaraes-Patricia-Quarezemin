import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const Container = styled.div `
    width: 40vw;
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`
const ImagemContainer = styled.img`
     width: 40px;
    margin-right: 10px;
`

function CardPequeno(props) {
    return (
        <Container>
            <img src={ props.imagem } />
            <div>
                <p>{ props.descricao }</p>
            </div>
        </Container>
    )
}

export default CardPequeno;