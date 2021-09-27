import React from "react"
import Header from "../components/Header";
import CardComponent from "../components/CardComponent"
import { CardsContainer } from "./styles";


const HomePage = () => {

  return (
    <div>
      <Header />
      <CardsContainer>
        <CardComponent />
      </CardsContainer>
    </div>
  );
}

export default HomePage;
