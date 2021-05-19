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
                alert("Tente novamente!");
            })
    }

    render() {
        return (
            <div className="limiter">
                <div className="container">
                    <div className="container-create">
                        <div className="container-form">
                            <div>
                                <h1>Labenusers</h1>
                                <button onClick={this.props.trocaDePagina}>Troca de Página</button>
                            </div>
                            <div>
                                <h2>Criar usuário</h2>
                                <input className="input"
                                    type="text"
                                    placeholder="Nome Completo"
                                    value={this.state.inputName}
                                    onChange={this.handleName}></input>
                                <input className="input"
                                    type="email"
                                    placeholder="E-mail"
                                    value={this.state.inputEmail}
                                    onChange={this.handleEmail}
                                ></input>
                                <hr></hr>
                                <div className="wrap-btn">
                                    <div className="container-bgbtn">
                                        <div className="container-btn">
                                            <button className="button" onClick={this.createUser}>Criar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}