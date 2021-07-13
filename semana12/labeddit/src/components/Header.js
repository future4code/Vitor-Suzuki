import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar, LogoContainer, Img } from './styled';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from '../routes/coordinator';
import { useHistory } from 'react-router-dom';
import LogoImg from '../assets/img/logo.svg';


const Header = ({loginButton, setLoginButton}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()


    const logout = () => {
        localStorage.removeItem("token")
    }
    const loginButtonAction = () => {
        if (token) {
            logout()
            setLoginButton("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolBar>
                <LogoContainer>
                    <Img src={LogoImg} onClick={() => goToFeed(history)} />
                    <Button className="ButtonLogo" onClick={() => goToFeed(history)} color="inherit">labeddit</Button>
                </LogoContainer>
                <Button onClick={() => loginButtonAction()} color="inherit">{loginButton}</Button>
            </StyledToolBar>
        </AppBar>
    );
}

export default Header