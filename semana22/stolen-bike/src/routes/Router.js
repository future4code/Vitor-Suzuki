import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import TheftDetails from "../pages/TheftDetailsPage/TheftDetails";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/details/:id">
                    <TheftDetails/>
                </Route>

                <Route exact path="/empty">
                    <EmptyPage/>
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router