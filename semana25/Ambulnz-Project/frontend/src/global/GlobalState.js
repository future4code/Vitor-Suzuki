import { GlobalStateContext } from "./GlobalStateContext"
import React, { useState } from "react"
import axios from "axios"

export const GlobalState = (props) => {
    const [pizzas, setPizzas] = useState([])
    const [cart, setCart] = useState([])

    const getMenu = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/pizzas`)
            .then(res => setPizzas(res.data))
            .catch(err => console.log(err))
    }

    return <GlobalStateContext.Provider
        value={
            {
                pizzas, setPizzas,
                cart, setCart,
                getMenu

            }
        }
    >
        {props.children}
    </GlobalStateContext.Provider>
}