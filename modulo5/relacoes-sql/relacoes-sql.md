USE `guimaraes-4211422-patricia-quarezemin`;

#Exercício 1

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

#a) Explique o que é uma chave estrangeira = Chave estrangeira é aquela que o seu valor está em outra tabela; algo externo.

#b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes.
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"001",
"Muito bom!",
"7",
"004"
);

#c) Tente criar uma avaliação para um filme que não existe (ou seja um id inválido). Anote e explique o resultado da query.


