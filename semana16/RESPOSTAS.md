### EXERCÍCIO 1: 
* a)
~~~sql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
~~~
 Temos os comandos VARCHAR(255), o qual indica que o conteúdo de tal propriedade é uma string que pode posssuir até 255 caracteres; Primary Key gerará um ID único; NOT NULL diz que aquela propriedade não pode retornar Null; e DATE que representa uma data no format (yyyy-mm-dd).



* b) 
~~~sql
SHOW databases;
SHOW tables;
~~~
SHOW databases retorna todos os bancos de dados, possibilitando trocar entre eles. SHOW tables retorna todas as tabelas da database selecionada.



* c) 
~~~sql
DESCRIBE Actor;
~~~
O comando DESCRIBE retorna 6 colunas, sendo elas: Field, o nome da propriedade; Type, o tipo; Null, dizendo se o valor é nulo ou não; Key, dizendo se é uma Primary Key; Default, que é null caso nenhum outro valor seja atribuído; e Extra.


### EXERCÍCIO 2:

* a) 
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires ",
  1200000,
  "1963-08-23", 
  "female"
);
~~~



* b)
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "blabla",
    123456,
    "1963-08-13",
    "female"
);
~~~
Isso retorna o erro: "Código de erro: 1062. Entrada duplicada '002' para chave 'PRIMARY'." Isso ocorre pois o id não pode ser igual a um já existente.



* c)
~~~sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Esta query não funciona pois o número de colunas passadas como parâmetro não batem com o número de colunass passadas como valores. O correto seria:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~



* d)
~~~sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- Aqui, o erro indicará que a propriedade "name" não possui um valor padrão. Para corrigir:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fulano",
  400000,
  "1949-04-18", 
  "male"
);
~~~



* e)
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- Valor incorreto para data. Para corrigir, basta deixar a propriedade como string:

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
~~~



* f)
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Tony Ramos",
  10000000,
  "1966-12-23", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Cleo Pires",
  50000000,
  "1982-10-02", 
  "female"
);

~~~


### EXERCÍCIO 3:

* a) 
  ~~~sql
    SELECT * FROM Actor
    WHERE gender = "female";
  ~~~

* b)
  ~~~sql
    SELECT salary FROM Actor
    WHERE name = "Tony Ramos";
  ~~~

* c)
  ~~~sql
    SELECT * FROM Actor
    WHERE gender = "invalid";

    -- O resultado retorna vazio, com 0 linhas, já que não há nenhum ator da tabela com o gênero "invalid"
  ~~~

* d)
  ~~~sql
    SELECT id, name, salary FROM Actor
    WHERE salary <= 500000;
  ~~~
  
* e)
  ~~~sql
    SELECT id, nome from Actor WHERE id = "002"

    -- Ocorre o erro pois não existe coluna nomeada como "nome", e sim "name". Para corrigir:

    SELECT id, name from Actor WHERE id = "002"
  ~~~  