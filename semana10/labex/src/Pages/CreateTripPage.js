import axios from 'axios';
import React from 'react';
import useInput from '../hooks/useInput';
import { useHistory } from "react-router-dom";
import { BASE_URL } from '../constants/urls';
import useProtectedPage from '../hooks/useProtectedPage';
import { goToHomePage, goToCreateTripPage, goToListTripsPage, goToAdminHomePage } from '../routes/coordinator';
import BackgroundAdm from "../img/BackgroundAdm.jpg";
import styled from 'styled-components'


const ImgContainer = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.3;
`

const CreateTripPage = () => {
  const history = useHistory();
  const [name, setName] = useInput("");
  const [planet, setPlanet] = useInput("");
  const [date, setDate] = useInput("");
  const [description, setDescription] = useInput("");
  const [durationInDays, setDurationInDays] = useInput(0);

  useProtectedPage();

  const createTrip = (event) => {
    event.preventDefault()
    const header = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    const body = { name, planet, date, description, durationInDays: Number(durationInDays) }

    axios
      .post(`${BASE_URL}/trips`, body, header)
      .then(() => { alert("Viagem criada com sucesso!"); history.push("/admin/trips/list") })
      .catch(() => { alert("Tente novamente") })
  }

  return (
    <div className="App">
      <header>
        <h3 onClick={() => goToHomePage(history)}>Home</h3>
        <h3 onClick={() => goToAdminHomePage(history)}>Admin Home</h3>
        <ul className="Links">
          <li onClick={() => goToCreateTripPage(history)}>Criar Viagem</li>
          <li onClick={() => goToListTripsPage(history)}>Lista de Viagens</li>

        </ul>
      </header>
      <ImgContainer>

        <Image src={BackgroundAdm}></Image>

      </ImgContainer>
      <h1>Create Trip</h1>
      <form onSubmit={createTrip}>
        <input
          value={name}
          onChange={setName}
          type="text"
          placeholder="Nome"
          required
        />
        <select onChange={setPlanet}>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </select>
        <input
          value={date}
          onChange={setDate}
          type="date"
          placeholder="Nome"
          required
        />
        <input
          value={description}
          onChange={setDescription}
          type="text"
          placeholder="Descrição"
          required
        />
        <input
          value={durationInDays}
          onChange={setDurationInDays}
          type="number"
          placeholder="Duração em dias"
          required
        />
        <button>Criar</button>
      </form>
    </div>
  );
}

export default CreateTripPage;