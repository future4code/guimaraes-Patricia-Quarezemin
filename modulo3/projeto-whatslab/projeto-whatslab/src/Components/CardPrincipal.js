import React from 'react';
import styled from 'styled-components';
import ImagemBackground from './Img/whatsFundo.jpeg'

const InputRemetente = styled.input`
    width: 20%;
`
const InputMensagem = styled.input`
  width: 60%;
`
const ButtomEnviar = styled.button`
  width: 15%;
`
const RetanguloMensagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid 5px;
  height: 80vh;
  width: 51vw;
  background-image: url(${ImagemBackground});
  background-size: cover;
  `

const BoxPrincipal = styled.div`
  justify-content: center;
  border-style: solid;
  width: 51vw;
`
const AlinharTudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

class CardPrincipal extends React.Component {
  state = {
    remetenteWhatslab: '',
    mensagemWhatslab: ''
  }

  onChangeRemetente = (event) =>{
    this.setState ({ remetenteWhatslab: event.target.value})
  }

  onChangeMensagem = (event) =>{
    this.setState ({ mensagemWhatslab: event.target.value})
  }

  onClickEnviar = () =>{
    console.log(this.state.remetenteWhatslab)
    console.log(this.state.mensagemWhatslab)

    this.setState ({ remetenteWhatslab: '', mensagemWhatslab: ''})
  }
  render (){
    return (

      <AlinharTudo>
        <BoxPrincipal>
          <RetanguloMensagem>
            {this.state.remetenteWhatslab}
            {this.state.mensagemWhatslab}
          </RetanguloMensagem>
          <InputRemetente type='text' placeholder={'Remetente'} onChange={this.onChangeRemetente} value={this.state.remetenteWhatslab}></InputRemetente>
          <InputMensagem type='text' placeholder={'Mensagem'} onChange={this.onChangeMensagem} value={this.state.mensagemWhatslab}></InputMensagem>
          <ButtomEnviar onClick={this.onClickEnviar}>Enviar</ButtomEnviar>
        </BoxPrincipal>
      </AlinharTudo>
    )
  }
}

export default CardPrincipal;