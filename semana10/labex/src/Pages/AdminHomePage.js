import React from 'react';
import { useHistory } from "react-router-dom";
import useProtectedPage from '../hooks/useProtectedPage';
import { goToHomePage, goToCreateTripPage, goToListTripsPage } from '../routes/coordinator'

const AplicationFormPage = () => {
  const history = useHistory();

  useProtectedPage();

  return (
    <div className="App">
      <header>
        <h3 onClick={() => goToHomePage(history)}>Home Page</h3>
        <ul className="Links">
          <li onClick={() => goToCreateTripPage(history)}>Create Trip</li>
          <li onClick={() => goToListTripsPage(history)}>Trips List</li>
        </ul>
      </header>
      <h1>Admin HomePage</h1>
    </div>
  );
}

export default AplicationFormPage;