import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';



const Router = ({setLoginButton}) => {
    return (
            <Switch>
                <Route exact path="/login">
                    <LoginPage setLoginButton={setLoginButton} />
                </Route>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/post/:id">
                    <PostPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage setLoginButton={setLoginButton} />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router