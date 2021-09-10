import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"

const Router: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router