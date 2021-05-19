import './App.css';
import axios from 'axios';
import React from 'react';

export default class Usuarios extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount(){
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
            this.setState({usuarios: res.data.result.list})
        })
        .catch(() => {})
    }

    render() {

        const usuariosComponents = this.state.usuarios.map((u) => {
            return <li>{u.name}</li>
        })

        return (
            <div className="App">
                <h1>Labenusers</h1>
                <button onClick={this.props.trocaDePagina}>Troca de Página</button>
                <h1>Lista de Usuários</h1>
                {usuariosComponents}
            </div>
        );
    }
}