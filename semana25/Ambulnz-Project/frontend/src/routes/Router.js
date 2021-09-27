import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CartPage from "../pages/CartPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router