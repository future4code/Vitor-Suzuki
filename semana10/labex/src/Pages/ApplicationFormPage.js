import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage, goToCreateTripPage, goToListTripsPage, goToAdminHomePage } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
import useInput from '../hooks/useInput';
import useProtectedPage from '../hooks/useProtectedPage';
import axios from 'axios';

const AplicationFormPage = () => {

  useProtectedPage();

  const history = useHistory();
  const [name, setName] = useInput("");
  const [age, setAge] = useInput(0);
  const [applicationText, setApplicationText] = useInput("");
  const [profession, setProfession] = useInput("");
  const [country, setCountry] = useInput("");
  const [tripId, setTripId] = useInput("");
  const [allTrips, setAllTrips] = useState([]);

  const getTrips = () => {
    axios.get(`${BASE_URL}/trips`)
    .then((res) => {    
      
      setAllTrips(res.data.trips)
      console.log(res.data.trips)
    })
    .catch((err) => {console.log(err)})
  }
// setAllTrips(res.data.trips)

  const applyToTrip = (event) => {
    event.preventDefault();
    const body = { name, age, applicationText, profession, country }

    axios
      .post(`${BASE_URL}/trips/${tripId}/apply`, body)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }

  const tripsOptions = allTrips.trips && allTrips.trips.map((t) => {
    return <option key={t.id} value={t.id}>{t.name}</option>
})



  return (
    <div className="App">
      <button onClick={() => getTrips()}>Teste</button>
      <header>
        <h3 onClick={() => goToHomePage(history)}>Home Page</h3>
        <h3 onClick={() => goToAdminHomePage(history)}>Admin Home Page</h3>
        <ul className="Links">
          <li onClick={() => goToCreateTripPage(history)}>Create Trip</li>
          <li onClick={() => goToListTripsPage(history)}>Trips List</li>
        </ul>
      </header>
      <h1>Application Form</h1>
      <form onSubmit={applyToTrip}>
        <select onChange={setTripId}>
          <option value="" disabled>Escolha uma viagem</option>
          {tripsOptions}
        </select>
        <input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={setName}
          required
        />
        <input
          placeholder="Idade"
          type="number"
          value={age}
          onChange={setAge}
          required
        />
        <input
          placeholder="Por que sou um bom candidato(a)?"
          type="text"
          value={applicationText}
          onChange={setApplicationText}
          required
        />
        <input
          placeholder="Profissão"
          type="text"
          value={profession}
          onChange={setProfession}
          required
        />
        <input
          placeholder="País"
          type="text"
          value={country}
          onChange={setCountry}
          required
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default AplicationFormPage;