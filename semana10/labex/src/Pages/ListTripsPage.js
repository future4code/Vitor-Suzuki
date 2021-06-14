import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage, goToCreateTripPage, goToListTripsPage, goToAdminHomePage } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
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

const ListTripsPage = () => {
  const history = useHistory();

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
      <h1>List Trips</h1>
    </div>
  );
}

export default ListTripsPage;