import React from 'react'
import styled from 'styled-components'

const InputRemetente = styled.input`
    width: 20%;
    /* position: absolute;
    bottom: 0;
    margin: left;
    justify-content: space-evenly; */
`
const InputMensagem = styled.input`
  width: 60%;
  /* position: absolute;
  bottom: 0;
  margin:center;
  justify-content: space-evenly; */
`
const ButtomEnviar = styled.button`
  width: 15%;
  /* align-items: center;
  position: absolute;
  bottom: 0;
  margin: right;
  justify-content: space-evenly; */
`

const RetanguloMensagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid 5px;
  height: 80vh;
  width: 50vw;
  background-color: #ECE5DD;  
`

const BoxPrincipal = styled.div`
  /* display: flex; */
  /* grid-template-rows: 100wh; */
  justify-content: center;
  border-style: solid;
  width: 51vw;
  /* grid-gap: 0px 0px; */
  
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
          <InputRemetente placeholder={'Remetente'} onChange={this.onChangeRemetente} value={this.state.remetenteWhatslab}></InputRemetente>
          <InputMensagem placeholder={'Mensagem'} onChange={this.onChangeMensagem} value={this.state.mensagemWhatslab}></InputMensagem>
          <ButtomEnviar onClick={this.onClickEnviar}>Enviar</ButtomEnviar>
        </BoxPrincipal>
      </AlinharTudo>
    )
  }
}

export default CardPrincipal;