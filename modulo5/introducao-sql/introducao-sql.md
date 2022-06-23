USE `guimaraes-4211422-patricia-quarezemin`;

#Exercício 1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#a)
# TIPOS PRINCIPAIS
# VACHAR = declarar uma string com no máximo N caracteres, o que vai entre parênteses;
# DATE = representa uma data (YYYY-MM-DD);

# RESTRIÇÕES PRINCIPAIS
# PRIMARY KEY = é a chave primária e única chave da tabela;
# NOT NULL = indica que a coluna não pode ser nula.

#b)
SHOW TABLES; 
# Este comando me retornou o nome da tabela que foi criada

SHOW DATABASES;
#Este comando me retornou uma lista com todos os bancos de dados existentes no servidor

#c)
DESCRIBE Actor;
#Neste comando foi descrito toda a estrutura utilizada na tabela Actor, como os nomes das colunas (id, name, salary, birth_date e gender), os
#tipos (VACHAR, FLOAT, DATE), as restrições (NULL), a chave principal (PRIMARY KEY) e, o caso default.

#Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

#a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

#b) Ao tentar inserir outra atriz com o mesmo id apareceu o error code 1062 = Duplicate entry "002" for key "PRIMARY" 
#entrada duplicada "002" para a chave primária.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Fernanda Montenegro",
2000000,
"1929-10-16",
"female"
);

#c) Foram passadas somente as colunas id, name e salary e com isso retornou o erro de código 1136 = Column count doesn't match value count at row 1
#a contagem de colunas não corresponde à contagem de valores da linha 1, pois haviam sido passadas 3 colunas e, com 5 valores.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Antônio Fagundes",
300000,
"1949-04-18",
"male"
);

#d) Faltou ser passada a coluna name e, ela foi definida como NOT NULL, ou seja, não pode ter valor nulo. Assim, foi gerado o erro de código 1364 = Field
#"name" doesn't have a default value = o campo "name" não tem um valor padrão.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Maria Fernanda Cândido"
"400000",
"1974-05-21",
"female"
);


#e) O valor da coluna birth_date é tipado como VACHAR, logo deveria estar entre parânteses por ser uma string. Assim, apareceu como erro de código 1292 = 
# Incorrect date value "1950" for column "birth_date" at row 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Maria Fernanda Cândido",
50000,
"1974-05-21",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Marcos Palmeira",
400000,
"1963-08-19",
"male"
);

#Exercício 3

SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name FROM Actor WHERE gender = "female";

#a)
SELECT * FROM Actor WHERE gender = "female";

#b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

#c) Retornou 0 row returned, pois a coluna mencionada não possui valor inválido ou nulo.
SELECT gender FROM Actor WHERE gender = "invalid";

#d)
SELECT id, name, salary FROM Actor WHERE salary > 60000;

#e) Error code 1054 = Unknown column "nome" in field list
SELECT id, name FROM Actor WHERE id = "002";

#Desafios

#Exercício 5
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND (salary > 200000);

#a) a query LIKE é bem fácil e intuitiva de se usar; sem contar que podemos usar os operdores OR ou AND
#para fazer as comparações, conforme query acima.

#b)
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND (salary > 350000);

#c)
SELECT * FROM Actor WHERE (name LIKE "%G%" OR "%g%");

#d)
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE"%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND (salary BETWEEN 350000 AND 900000);
