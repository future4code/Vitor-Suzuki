// import HomePage from './Pages/HomePage';
// import ListTripsPage from './Pages/ListTripsPage';
// import ApplicationFormPage from './Pages/ApplicationFormPage';
// import LoginPage from './Pages/LoginPage';
// import TripDetailsPage from './Pages/TripDetailsPage';
// import CreateTripPage from './Pages/CreateTripPage';
import Router from './routes/Router'
import React from "react";
import {useHistory} from 'react-router-dom';
import {goToHomePage, goToLoginPage, goToApplicationFormPage} from './routes/coordinator'
import './App.css';



const App = () => {
  const history = useHistory();

  return (
    <div>
      <Router />

    </div>
  );
}

export default App;
