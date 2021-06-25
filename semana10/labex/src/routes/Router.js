import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import HomePage from '../Pages/HomePage';
import ListTripsPage from '../Pages/ListTripsPage';
import ApplicationFormPage from '../Pages/ApplicationFormPage';
import LoginPage from '../Pages/LoginPage';
import TripDetailsPage from '../Pages/TripDetailsPage';
import CreateTripPage from '../Pages/CreateTripPage';
import AdminHomePage from '../Pages/AdminHomePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/trips/list" component={ListTripsPage} />
                <Route exact path="/trips/application" component={ApplicationFormPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/trips/list" component={AdminHomePage} />
                <Route exact path="/admin/trips/create" component={CreateTripPage} />
                <Route exact path="/admin/trips/:id" component={TripDetailsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;