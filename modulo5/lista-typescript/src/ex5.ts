//Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma 
//lista com apenas os emails dos usuários “admin”. 

const funcionarios: funcionario [] = [
	{name: "Rogério", email: "roger@email.com", role: false},
	{name: "Ademir", email: "ademir@email.com", role: true},
	{name: "Aline", email: "aline@email.com", role: false},
	{name: "Jéssica", email: "jessica@email.com", role: false},  
	{name: "Adilson", email: "adilson@email.com", role: false},  
	{name: "Carina", email: "carina@email.com", role: true}  
]
   
type funcionario = {
    name: string,
    email: string,
    role: boolean
}

function departamentoPessoal(): funcionario [] {
   return funcionarios.filter(
	   (funcionarios) => {
		   if(funcionarios.role === true){
			   return funcionarios
		   }
	   }
   )
}

console.log(departamentoPessoal())