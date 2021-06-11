import React from 'react';
import { useHistory } from "react-router-dom";
import Background from "../img/Background.jpg"
import { goToHomePage, goToLoginPage, goToApplicationFormPage, goToAdminHomePage } from '../routes/coordinator';

import styled from "styled-components"


const ImgContainer = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const HomePage = () => {
  const history = useHistory();

  return (

    <ImgContainer>
      <header>
        <h3 onClick={() => goToHomePage(history)}>Home Page</h3>
        <h3 onClick={() => goToAdminHomePage(history)}>Admin Home Page</h3>
        <ul className="Links">
          <li onClick={() => goToLoginPage(history)}>Login</li>         
          <li onClick={() => goToApplicationFormPage(history)}>Application Form</li>
        </ul>
      </header>
      <Image src={Background}></Image>
    </ImgContainer>
  );
}

export default HomePage;