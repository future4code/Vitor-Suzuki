import React, { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { GlobalStateContext } from "../global/GlobalStateContext"
import PIZZA from "../assets/PIZZA.jpg"

const CardComponent = () => {
  const { pizzas, cart, setCart, getMenu } = useContext(GlobalStateContext)

  useEffect(() => {
    getMenu()
  }, [])

  const addToCart = (productToAdd) => {
    const index = cart.findIndex((productInCart) => {
      if (productInCart.id === productToAdd.id) {
        return true
      } else {
        return false
      }
    })

    if (index === -1) {

      const productQuantity = {
        ...productToAdd,
        quantity: 1
      }

      const cartCopy = [...cart, productQuantity]
      setCart(cartCopy)
    } else {
      const cartCopy = cart.map((productInCart) => {
        if(productInCart.id === productToAdd.id) {
          return {
            ...productInCart,
            quantity: productInCart.quantity + 1
          }
        } else {
          return productInCart
        }
      })

      setCart(cartCopy)
    }

    alert("Item added to Order Sumary")
  }

  return (
    (pizzas.map((pizza) => {
      return (
        <Card sx={{ width: 300, height: 325 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={PIZZA}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pizza.name} {`$${pizza.price}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <b>INGREDIENTS:</b> <br />{pizza.ingredients}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => addToCart(pizza)}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      )
    }))

  );
}

export default CardComponent