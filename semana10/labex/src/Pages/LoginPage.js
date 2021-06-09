import React from 'react';
import { useHistory } from "react-router-dom";
import useInput from '../hooks/useInput';
import axios from 'axios';
import {BASE_URL} from '../constants/urls'

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const Login = () => {
    const body = {email, password}

    axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      history.push("/admin/trips/:id")
      console.log(res)})
    .catch((err) => alert(err.response.data.message))
  }
  
  

    return (
      <div className="App">
        <h1>Login Page</h1>
        <input value={email} onChange={setEmail} placeholder="E-mail"></input>
        <input value ={password} onChange={setPassword}type="password" placeholder="Senha"></input>
        <button onClick={Login}>Enviar</button>
        <p>Não possui uma conta?</p>
      </div>
    );
  }
  
  export default LoginPage;