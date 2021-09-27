import React, { useContext } from "react"
import Header from "../components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import { CartContainer, Content, OrderContainer } from "./styles";
import { GlobalStateContext } from "../global/GlobalStateContext";

const CartPage = () => {
    const { cart, setCart } = useContext(GlobalStateContext)

    let orderPrice = 0
    for (let item of cart) {
        orderPrice += item.price * item.quantity
    }

    const removeItem = (productToRemove) => {
        const cartCopy = cart.map((productInCart) => {
            if (productInCart.id === productToRemove.id) {
                return {
                    ...productInCart,
                    quantity: productInCart.quantity - 1
                }
            } else {
                return productInCart
            }
        }).filter((productInCart) => {
            if (productInCart.quantity === 0) {
                return false
            }
            return true
        })

        setCart(cartCopy)
    }

    return (
        <CartContainer>
            <Header />
            <Content>
                <h1>Order Summary</h1>
                {cart.map((pizza) => {
                    return (
                        <OrderContainer>
                            <Card sx={{ width: 500, height: 160 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {pizza.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" variant="h5">
                                            ${pizza.price} - Quantity: <b>x{pizza.quantity}</b>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => removeItem(pizza)}>
                                        REMOVE
                                    </Button>
                                </CardActions>
                            </Card>
                        </OrderContainer>)
                })}
                <h2>TOTAL: ${orderPrice}</h2>
            </Content>
        </CartContainer>
    );
}

export default CartPage;
