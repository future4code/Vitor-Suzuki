import './App.css';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components'


const CardUser = styled.div`
    font-size: 50%;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
`

export default class Usuarios extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const header = {
            headers: {
                Authorization: "vitor-suzuki-paiva"
            }
        }
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", header)
            .then((res) => {
                console.log(res)
                this.setState({ usuarios: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const header = {
            headers: {
                Authorization: "vitor-suzuki-paiva"
            }
        }
        axios.delete(url, header)
            .then((res) => {
                window.confirm("Deletar usuário?")
                this.getAllUsers()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {

        const usuariosComponents = this.state.usuarios.map((u) => {
            return <CardUser key={u.id}>
                {u.name}
                <button onClick={() => this.deleteUser(u.id)}>Deletar</button>
            </CardUser>
        })

        return (
            <div className="limiter">
                <div className="container">
                    <div className="container-create">
                        <div className="container-form">
                            <div>
                                <h1>Labenusers</h1>
                                <button onClick={this.props.trocaDePagina}>Troca de Página</button>
                                <h3>Lista de Usuários</h3>
                                {usuariosComponents}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}