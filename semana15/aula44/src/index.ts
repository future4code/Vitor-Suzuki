import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]


enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}


const app = express()
app.use(express.json())
app.use(cors())


// -- EXERCÍCIO 1  a) Utiliza-se o método GET b) A entidade é indicada por '/users'  -- //
app.get('/users', (req: Request, res: Response) => {
    const result = users.map((user: User) => {
      return { id: user.id, name: user.name, email: user.email, type: user.type, age: user.age}
    });
    res.status(200).send(result)
}) 

// -- EXERCÍCIO 2  --  a) Os parâmetros foram passados via query params, pois nõa é obrigatório.//
app.get("/users", (req: Request, res: Response) => {
  try {
    let type = req.query.type as string
    let search = req.query.search as string

    if (type) {
      type = type.toUpperCase()

      if (type in USER_ROLES) {
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }
    }

    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      if (result.length === 0) {
        return res.status(204).send("No user was found")
      }
      
      return res.status(200).send(result)
    }

    res.status(200).send(users)
  } catch (err) {
    res.status(400).send("Error")
  }
})


// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
