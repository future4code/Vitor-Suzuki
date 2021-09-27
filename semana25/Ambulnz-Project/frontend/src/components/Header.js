import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Title  } from './styles';
import { useHistory } from 'react-router';
import { goToCartPage, goToHomePage } from '../routes/coordinator';

const Header = () => {
    const history = useHistory()

    const onClickCart = () => {
        goToCartPage(history)
    }

    const onClickHome = () => {
        goToHomePage(history)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'rgba(55,55,55, 0.95)' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Title>
                        <h1 onClick={onClickHome}>Ambulnz Pizzas</h1>
                        <Button color="inherit" onClick={onClickCart}>
                            <ShoppingCartIcon className="cart_icon"/>
                        </Button>
                    </Title>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header