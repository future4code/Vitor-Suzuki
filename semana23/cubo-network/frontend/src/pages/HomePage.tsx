import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import { Container, Title, TableContainer, Chart } from "./styles"
import axios from "axios"
import { User } from "../interfaces/User"
import useForm from "../hooks/useForm"
import { Doughnut } from 'react-chartjs-2';

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [totalParticipation, setTotalParticipation] = useState<number>(0)
    const { form, handleInputChange, clear } = useForm({ name: "", last_name: "", participation: "" })
    const [backgroundColor, setBackgroundColor] = useState<string[]>([])
    const [borderColor, setBorderColor] = useState<string[]>([])

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        signup()
        event.preventDefault()

    }

    const signup = () => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, form)
            .then(() => {
                getAllUsers()
                clear()
            })
            .catch(() => alert("Error signing up!"))
    }

    const result = (participation: number) => {
        return Math.round(participation / totalParticipation * 100)
    }

    const getAllUsers = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
            .then((res)  => {
                createColor(res.data.users.length)
                setTotalParticipation(res.data.totalParticipation)
                setUsers(res.data.users)

            })
            .catch(() => alert("An error getting all users occurred"))
    }

    const createColor = (loop: number) => {
        const newBackgroundColor = []
        const newBorderColor = []

        for (let index = 0; index < loop; index++) {
            const red = Math.floor(Math.random() * 255)
            const green = Math.floor(Math.random() * 255)
            const blue = Math.floor(Math.random() * 255)
            newBackgroundColor.push(`rgba(${red}, ${green}, 255, 0.5)`)
            newBorderColor.push(`rgba(${red}, ${green}, 255, 0.8)`)
        }

        setBackgroundColor(newBackgroundColor)
        setBorderColor(newBorderColor)
    }


    const data = {
        labels: users.map(({ name }) => name),
        datasets: [
            {
                label: '# of Votes',
                data: users.map(({ participation }) => participation),
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {
        getAllUsers()
    }, [])

    const options={
        plugins: {
            legend: {
                position: 'right',
            },
        },
        animation: {
            duration: 0
        }
    }
    return (
        <Container>
            <Header {...{ form, onChange: handleInputChange, onSubmitForm }} />
            <Title><h1>DATA</h1></Title>
            <TableContainer>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Participation</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.last_name}</td>
                            <td>{result(user.participation)}%</td>
                        </tr>)}

                </tbody>
            </TableContainer>
            <Chart>
                <Doughnut {...{data, options}}/>
            </Chart>

        </Container>
    )
}

export default HomePage