import React from 'react';
import { useHistory } from "react-router-dom";
import useInput from '../hooks/useInput';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToHomePage, goToLoginPage, goToApplicationFormPage, goToAdminHomePage } from '../routes/coordinator';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const login = (event) => {
    event.preventDefault()
    const body = { email, password }

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        history.push("/admin/trips/:id")
      })
      .catch((err) => alert(err.response.data.message))
  }



  return (
    <div className="App">
      <header>
        <h3 onClick={() => goToHomePage(history)}>Home Page</h3>
        <h3 onClick={() => goToAdminHomePage(history)}>Admin Home Page</h3>
        <ul className="Links">
          <li onClick={() => goToLoginPage(history)}>Login</li>
          <li>Application Form</li>
        </ul>
      </header>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <input
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="E-mail"
          required>
        </input>
        <input
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="Senha"
          required>
        </input>
        <button>Enviar</button>
      </form>
      <p>Não possui uma conta?</p>
    </div>
  );
}

export default LoginPage;