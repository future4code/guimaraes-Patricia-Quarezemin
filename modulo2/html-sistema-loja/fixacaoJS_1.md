function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
 let salarioFixo = 2000
 let cemPorCarro = qtdeCarrosVendidos * 100
 let porcentoDoTotal = valorTotalVendas * 5%
 let salarioTotal = salarioFixo + cemPorCarro + porcentoDoTotal
 return salarioTotal
 
 }
 