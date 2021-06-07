import React from "react"
import Background from "../img/Background.jpg"

import styled from "styled-components"


const ImgContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const HomePage = () => {
    return (
      <ImgContainer>
        <Image src={Background}></Image>
      </ImgContainer>
    );
  }
  
  export default HomePage;