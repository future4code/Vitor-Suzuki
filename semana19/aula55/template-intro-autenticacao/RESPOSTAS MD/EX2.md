### a)
* O código mostrado é responsável pela criação de um usuário. Para isso, é estabelecida uma conexão com a database via knex e, em seguida, uma função é criada com o propósito de
criar realmente o usuário. A função 'createUser' estabelece a conexão com a tabela 'UserTableName' e insere 'id', 'email' e 'password' na mesma, concluindo a criação.

### b)
~~~sql
  CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
  ~~~

### c)

* RESPOSTA NO ARQUIVO '../src/data/insertUser.ts'