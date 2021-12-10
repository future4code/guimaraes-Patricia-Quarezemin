// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b) {
    return a - b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = []
  for (let i of array) {
    if (i % 2 === 0) {
      numerosPares.push(i)
    }
  }
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novaArray = []
  for (let num of array) {
    if (num % 2 === 0) {
      novaArray.push(Math.pow(num, 2))
    }
  }
  return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.reduce(function (a, b) {
    return Math.max(a, b)
  })
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let primeirosNumerosPares = []
  for (let i = 0; primeirosNumerosPares.length < n; i++) {
    if (i % 2 === 0) {
      primeirosNumerosPares.push(i)
    }
  }
  return primeirosNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = pessoas.filter((pessoas) => {
    return (pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5)
  })
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
    return !(pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5)
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  nome.sort(function (a, b) {
    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
  })
  return nome.sort()
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}