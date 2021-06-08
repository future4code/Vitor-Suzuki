import React from 'react';
import { useHistory } from "react-router-dom";
import Background from "../img/Background.jpg"

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
        <Image src={Background}></Image>
      </ImgContainer>
    );
  }
  
  export default HomePage;