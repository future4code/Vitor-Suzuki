import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar, LogoContainer, Img } from './styled';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from '../routes/coordinator';
import { useHistory } from 'react-router-dom';
import LogoImg from '../assets/img/logo.svg';


const Header = () => {
    const history = useHistory()
    return (
        <AppBar position="static">
            <StyledToolBar>
                <LogoContainer>
                    <Img src={LogoImg} onClick={() => goToFeed(history)} />
                    <Button className="ButtonLogo" onClick={() => goToFeed(history)} color="inherit">labeddit</Button>
                </LogoContainer>
                <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
            </StyledToolBar>
        </AppBar>
    );
}

export default Header