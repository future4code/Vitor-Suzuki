import React from 'react';
import { useHistory } from "react-router-dom";
import useInput from '../hooks/useInput';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import Background from "../img/Background.jpg";
import { goToHomePage, goToLoginPage, goToApplicationFormPage, goToAdminHomePage } from '../routes/coordinator';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const ImgContainer = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.3;
`

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
        <h3 onClick={() => goToHomePage(history)}>Home</h3>
        <h3 onClick={() => goToAdminHomePage(history)}>Admin Home</h3>
        <ul className="Links">
          <li onClick={() => goToApplicationFormPage(history)}>Embarque na nossa nave</li>
          <li onClick={() => goToLoginPage(history)}>Login</li>
        </ul>
      </header>
      <ImgContainer>

        <Image src={Background}></Image>

      </ImgContainer>
      <div className="Title">
        <h1>Login Page</h1>
        <div className="FormContainer">
          <form onSubmit={login}>
            <TextField id="standard-basic" label="E-mail"
              value={email}
              onChange={setEmail}
              type="email"
              placeholder="E-mail"
              required>
            </TextField>
            <TextField id="standard-basic" label="Senha"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="Senha"
              required>
            </TextField>
            <Button variant="outlined" color="primary" href="#outlined-buttons">Enviar</Button>
          </form>
        </div>
        <p className="NoAccount">Não possui uma conta?</p>
      </div>
    </div>
  );
}

export default LoginPage;