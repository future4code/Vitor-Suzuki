import express, { Request, Response} from 'express'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors());

type User = {
    id: number,
    name: string,
    cpf: string,
    birth: string,
    age: number,
    balance: number,
    statement: Statement[]
  }

type Statement = {
    value: number,
    date: string,
    description: string
}
  
let users: User[] = [
    {
        id: 123,
        name: "Wagner Melonio",
        cpf: "123.321.111-03",
        birth: "12/05/1995",
        age: 26,
        balance: 500,
        statement: [
            {
                value: 15000,
                date: "05/05/2021",
                description: "Extrato do mês de Junho"
            }
        ]
    },

    {
        id: 124,
        name: "Vitor Suzuki",
        cpf: "321.123.555-99",
        birth: "15/06/1996",
        age: 25,
        balance: 5000,
        statement: [
            {
                value: 17000,
                date: "01/09/2021",
                description: "Extrato do mês de Agosto"
            }
        ]
    },
    {
        id: 125,
        name: "André Silvera",
        cpf: "111.222.333.-44",
        birth: "15/02/1993",
        age: 28,
        balance: 15000,
        statement: [
            {
                value: 13000,
                date: "05/09/2021",
                description: "Extrato do mês de Setembro"
            }
        ]
    },
    {
        id: 126,
        name: "Melissa de Freitas",
        cpf: "999.888.777-12",
        birth: "21/12/1998",
        age: 22,
        balance: 10000000,
        statement: [
            {
                value: 600,
                date: "01/01/2021",
                description: "Extrato do mês de Dezembro"
            }
        ]
    },
    {
        id: 127,
        name: "Marry Suzuki",
        cpf: "123.124.125-00",
        birth: "01/01/1990",
        age: 31,
        balance: 500,
        statement: [
            {
                value: 350,
                date: "05/10/2021",
                description: "Extrato do mês de Fevereiro"
            }
        ]
    },
]

const calculateAge = (birth: any) => {
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age
}

app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, cpf, birth } = req.body;
        
        if (!name || !cpf || !birth) {
            throw new Error("Missing data in body to create user")
          }

        if (typeof name !== "string") {
            throw new Error("Invalid name")
        }

        if (typeof cpf !== "string") {
            throw new Error("Invalid email")
        }

        if (typeof birth !== "string") {
            throw new Error("Invalid birth")
        }

        users.forEach(user => {
            if (user.cpf === cpf) {
              throw new Error("CPF already exists")
            }
          })

        const newUser: User = {
            id: users.length + 1, name, cpf, birth, age: calculateAge(birth), balance: 0, statement: []
        }

        users.push(newUser)
        res.status(200).send({message: "Usuário criado com sucesso", user: newUser})

    } catch(err) {
        res.status(400).send(err.message)
    }
})

app.get('/users/:id', (req: Request, res: Response) => {
    try {
        
    } catch {

    }
})

app.listen(3003, () => {
    console.log('Server is running at port 3003')
  })
  