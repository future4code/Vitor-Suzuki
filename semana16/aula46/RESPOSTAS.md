### EXERCÍCIO 1:

* a) 
  ~~~sql
  ALTER TABLE Actor DROP COLUMN salary;
  --- Este comando é usado para ALTERAR A TABELA Actor, excluindo a coluna 'salary'
  ~~~

* b) 
  ~~~sql
  ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
  --- Este comando é usado para ALTERAR A TABELA Actor, mundando a coluna 'gender' para 'sex'
  ~~~

* c) 
  ~~~sql
  ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
  --- Este comando é usado para ALTERAR A TABELA Actor, fazendo com que a coluna aceite 255 caracteres.
  ~~~

* d) 
  ~~~sql
  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
  ~~~


### EXERCÍCIO 2:

* a) 
  ~~~sql
  UPDATE Actor
  SET name = "José de Abreu"
  WHERE id = "003";

  UPDATE Actor
  SET birth_date = "1960-09-22"
  WHERE id = "003";
  ~~~

* b)
  ~~~sql
  UPDATE Actor
  SET name = "JULIANA PAES"
  WHERE id = "001";

  UPDATE Actor
  SET name = "Juliana Paes"
  WHERE id = "001";
  ~~~

* c) 
  ~~~sql
  UPDATE Actor
  SET 
  name = "CLEO PIRES",
  birth_date = "2020-02-10",
  salary = 600000,
  gender = "female"
  WHERE id = "005";
  ~~~

* d) 
  ~~~sql
  UPDATE Actor
  SET id = '001'
  WHERE id = '11111'

  --- Esses comandos não apresentam erros, porém não conseguem modificar nada, já que o id '11111' não existe.
  ~~~

### EXERCÍCIO 3:

* a)
  ~~~sql
  DELETE FROM Actor WHERE name = "Fernanda Montenegro"
  ~~~

* b)
  ~~~sql
  DELETE FROM Actor
  WHERE
	gender = "male" 
    AND
	salary > 1000000
  ~~~

### EXERCÍCIO 4:

* a)
  ~~~sql
  SELECT MAX(salary) FROM Actor
  ~~~

* b)
  ~~~sql
  SELECT MIN(salary) FROM Actor WHERE gender = "female"
  ~~~~ 

* c)
  ~~~sql
  SELECT COUNT(*) FROM Actor WHERE gender = "female"
  ~~~~ 

* d)
  ~~~sql
  SELECT SUM(salary) FROM Actor
  ~~~~ 

### EXERCÍCIO 5:

* a)
  ~~~sql
  SELECT COUNT(*), gender
  FROM Actor
  GROUP BY gender;
  --- O resultado foi uma tabela quadrada, onde há uma coluna com contagem e outra com o gênero. Na contagem, há o gênero feminino com 3 itens e 2 itens no gênero masculino.
  ~~~

* b)
  ~~~sql
  SELECT id, name FROM Actor
  ORDER BY name DESC;
  ~~~

* c)
  ~~~sql
  SELECT * FROM Actor
  ORDER BY salary;
  ~~~

* d)
  ~~~sql
  SELECT * FROM Actor
  ORDER BY salary DESC
  LIMIT 3;
  ~~~

* e)
  ~~~sql
  SELECT AVG(salary), gender FROM Actor
  GROUP BY gender;
  ~~~


### EXERCÍCIO 6:

* a)
  ~~~sql
  ALTER TABLE Movie ADD playing_limit_date DATE;
  ~~~

* b)
  ~~~sql
  ALTER TABLE Movie CHANGE rating rating FLOAT;  
  ~~~

* c)
  ~~~sql
  UPDATE Movie
  SET
	playing_limit_date = "2010-12-31"
  WHERE id = "001"

  UPDATE Movie
  SET
	playing_limit_date = "2022-12-31"
  WHERE id = "002"
  ~~~

* d)
  ~~~sql
  DELETE FROM Movie WHERE id = "001";

  UPDATE Movie
  SET synopsy = "blablabla"
  WHERE id = "001";

  --- Não apresenta nenhum erro, ocorre normalmente. Porém, nada acontece já que não há mais um filme de id '001'.
  ~~~