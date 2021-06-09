import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/urls'
import useProtectedPage from '../hooks/useProtectedPage';

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({})

  useProtectedPage()

  const getTripDetail = (id) => {
    const header = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    axios
      .get(`${BASE_URL}/trip/${id}`, header)
      .then((res) => { setTrip(res.data.trip) })
      .catch((err) => { alert(err.response.data.message) })
  }

  useEffect(() => {
    getTripDetail();
  }, [])

  return (
    <div className="App">
      <h1>Trip Details</h1>
      {trip.name}
    </div>
  );
}

export default TripDetailsPage;