import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import { Container, Title, TableContainer } from "./styles"
import axios from "axios"
import { User } from "../interfaces/User"
import useForm from "../hooks/useForm"

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [totalParticipation, setTotalParticipation] = useState<number>(0)
    const { form, handleInputChange, clear } = useForm({ name: "", last_name: "", participation: "" })

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
            .then((res) => {
                setUsers(res.data.users)
                setTotalParticipation(res.data.totalParticipation)
            })
            .catch(() => alert("An error getting all users occurred"))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

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
        </Container>
    )
}

export default HomePage