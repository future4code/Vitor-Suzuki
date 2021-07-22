### EXERCÍCIO 1:

* a)
~~~sql
--- Chave estrangeira é algo que serve para identificar um valor de outra tabela, estabelecendo relações entre tais. Sempre faz referência a uma Primary Key.
~~~

* b)
~~~sql
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY(movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Muito bom",
    9,
    "002"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003",
    "Ruim",
    3,
    "003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"004",
    "Ótimo",
    9,
    "004"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Ok",
    6,
    "001"
);
~~~

* c)
~~~sql
--- ErrorCode 1452 é o erro apresentado.
~~~

* d)
~~~sql
ALTER TABLE Movie 
DROP COLUMN Rating;
~~~

* e)
~~~sql
--- ErrorCode 1451 é o erro apresentado.
~~~


### EXERCÍCIO 2:

* a)
~~~sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

--- Essa tabela irá possuir duas colunas, uma referente ao filme e outra ao ator. Ambos serão referenciados pela FOREIGN KEY.
~~~

* b)
~~~sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"001",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"002",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"003",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"004",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"005",
    "005"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"006",
    "006"
);
~~~


* c)
~~~sql
--- O erro apresentado: Error Code 1452.
~~~

* d)
~~~sql
--- O erro apresentado: Error Code 1451.
~~~


### EXERCÍCIO 3:

* a)
~~~sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

--- A query acima seleciona tudo da tabela Movie e a relaciona com a tabela Rating, retornando valores comuns para ambos. O operador ON é utilizado para os dados não serem mesclados de forma desorganizada, criando condições para que a união ocorra.
~~~

* b)
~~~sql
SELECT name, id, rating FROM Movie
JOIN Rating 
ON Movie.rating = Rating.id
~~~