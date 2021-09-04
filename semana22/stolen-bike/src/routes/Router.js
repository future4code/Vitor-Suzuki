import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import TheftDetails from "../pages/TheftDetailsPage/TheftDetails";

const Router = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/details/:id">
                        <TheftDetails />
                    </Route>
                </Switch>
        </BrowserRouter>
    )
}

export default Router