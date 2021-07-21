### EXERCÍCIO 1:

* a)
~~~sql
--- .raw devolve como resposta um array contendo um array de objetos contendo o resultado da query e outras informações. Para acessar a informação que desejamos, pegamos a primeira posição do array de resposta da query.
~~~

* b)
~~~typescript
const searchActor = async (name: string) => {
    const result = await connection.raw(`
        SELECT * 
        FROM Actor
        WHERE name = "${name}"
    `)

    return result
}
~~~

* c)
~~~typescript
const actorsCount = (gender: string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count 
        FROM Actor
        WHERE gender = "${gender}" 
    `);

    const count = result[0][0].count;
    return count;
}
~~~

### EXERCÍCIO 2:

* a)
~~~typescript
const updateActorSalary = (id: string, salary: number) => {
    await connection("Actor")
    .update({salary: salary})
    .where({"id", id});
}
~~~

* b)
~~~typescript
const deleteActor = (id: string) => {
    await connection("Actor")
    .delete()
    .where({"id", id});
}  
~~~

* c)
~~~typescript
const avgSalary = (gender: string, salary: number) => {
    const result = await connection("Actor")
    .avg("average salary")
    .where({gender});

    return result[0].average;

}  
~~~

### EXERCÍCIO 3:

* a)
~~~typescript
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
~~~

* b) 
~~~typescript
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender);
        res.status(200).send(count)
    } catch (error){
        res.status(400).send(error.message)
    }
})
~~~


### EXERCÍCIO 4:

* a)
~~~typescript
add.post("/actor", async (req: Request, res: Response) => {
    try {
        await getSalary(
            req.body.salary,
            req.body.id,
        );
        
        res.status(200).send("Sucesso!")
    } catch (error) {
        res.status(400).(error.message)
    }
})
~~~

* b)
~~~typescript
add.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(
            req.params.id
        );
        res.status(200).send("Deletado com sucesso!")
    } catch (error) {
        res.status(400).send(error.message)
    }
})
~~~