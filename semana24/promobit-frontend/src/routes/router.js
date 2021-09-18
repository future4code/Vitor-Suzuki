import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import DetailPage from "../pages/DetailPage/DetailPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/detail/:id">
                    <DetailPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 