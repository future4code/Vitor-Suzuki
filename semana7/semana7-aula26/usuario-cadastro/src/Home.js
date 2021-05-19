import './App.css';
import axios from 'axios';
import React from 'react';

export default class Home extends React.Component {

    state = {
        inputName: "",
        inputEmail: ""
    }

    handleName = (event) => {
        this.setState({ inputName: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    createUser = () => {
        const header = {
            headers: {
                Authorization: "vitor-suzuki-paiva"
            }
        }
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };

        axios
            .post(url, body, header)
            .then((res) => {
                console.log(res)
                alert("Usuário criado com sucesso!")
                this.setState({ inputName: "", inputEmail: "" })
            })
            .catch((err) => {
                console.log(err)
                alert("Tente novamente");
            })
    }

    render() {
        return (
            <div className="App">
                <h1>Labenusers</h1>
                <button onClick={this.props.trocaDePagina}>Troca de Página</button>
                <h1>Criar usuário</h1>
                <input
                    type="text"
                    placeholder="Nome"
                    value={this.state.inputName}
                    onChange={this.handleName}></input>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={this.state.inputEmail}
                    onChange={this.handleEmail}
                ></input>
                <button onClick={this.createUser}>Criar</button>
            </div>
        );
    }
}