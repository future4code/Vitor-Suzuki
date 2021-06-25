import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useHistory } from "react-router-dom";
import Background from "../img/Background.jpg";
import { goToHomePage, goToLoginPage, goToApplicationFormPage, goToAdminHomePage, goToListTripsPage } from '../routes/coordinator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styled from "styled-components"

const AllContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

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

const HomePage = () => {
  const history = useHistory();
  const [allTrips, setAllTrips] = useState([]);


  const getTrips = () => {
    axios.get(`${BASE_URL}/trips`)
      .then((res) => {

        setAllTrips(res.data.trips)
        console.log(res.data.trips)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getTrips();
  }, [])


  const tripsOptions = () => {
    return allTrips.map((t) => {
      return <CardContent key={t.id} value={t.id}>
        <Typography>{t.name}</Typography>
      </CardContent>
    })
  }


  return (
    <AllContainer>
      <header>
        <h3 onClick={() => goToHomePage(history)}>Home</h3>
        <h3 onClick={() => goToAdminHomePage(history)}>Admin Home</h3>
        <ul className="Links">
          <li onClick={() => goToApplicationFormPage(history)}>Embarque na nossa nave</li>
          <li onClick={() => goToLoginPage(history)}>Login</li>
        </ul>
      </header>
      <ImgContainer>

        <Image src={Background}></Image>

      </ImgContainer>
      <div className="Title">
        <h1>Lista de Viagens</h1>
        <div className="FormContainer">
          <Card className="TripsList">
            {allTrips && tripsOptions()}
          </Card>
        </div>
      </div>
    </AllContainer>
  );
}

export default HomePage;