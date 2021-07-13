import './App.css';
import React, { useState } from 'react';
import Router from './routes/Router';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const token = localStorage.getItem("token")
  const [loginButton, setLoginButton] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton} />
        <Router loginButton={loginButton} setLoginButton={setLoginButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
