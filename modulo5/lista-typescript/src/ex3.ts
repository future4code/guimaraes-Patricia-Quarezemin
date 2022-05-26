//Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 1 - Nome do filme; 2 - Ano de lançamento;
//3 - Gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros:

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

//Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 4 - Pontuação em site de resenha (ex. Metacritic, RotenTomatoes).
//Considerando todas estas informações, crie uma função que receba todas essas informações como parâmetros (3 essesciais + 1 opcional) e retorne todas informações organbizadas em um type.