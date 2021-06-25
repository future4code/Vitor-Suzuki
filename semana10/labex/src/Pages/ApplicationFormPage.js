import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage, goToApplicationFormPage, goToLoginPage, goToAdminHomePage } from '../routes/coordinator';
import { BASE_URL } from '../constants/urls';
import useInput from '../hooks/useInput';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { countries } from '../data/countries';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Background from "../img/Background.jpg";
import styled from 'styled-components';


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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    minWidth: 200,

  },
}));

const AplicationFormPage = () => {

  const history = useHistory();
  const [name, setName] = useInput("");
  const [age, setAge] = useInput(null);
  const [applicationText, setApplicationText] = useInput("");
  const [profession, setProfession] = useInput("");
  const [country, setCountry] = useInput("");
  const [tripId, setTripId] = useInput("");
  const [allTrips, setAllTrips] = useState([]);
  const classes = useStyles();

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

  const applyToTrip = (event) => {
    event.preventDefault();
    const body = { name, age, applicationText, profession, country }

    axios
      .post(`${BASE_URL}/trips/${tripId}/apply`, body)
      .then(() => { alert("Cadastro criado com sucesso! Parabéns!") })
      .catch((err) => { console.log(err) })
  }

  const tripsOptions = () => {
    return allTrips.map((t) => {
      return <option key={t.id} value={t.id}>{t.name}</option>
    })
  }


  const countriesOptions = () => {
    return countries.map((c) => {
      return <option key={c.sigla} value={c.nome_pais}>{c.nome_pais}</option>
    })
  }



  return (
    <div className="App">
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
        <h1>Formulário para Cadastro</h1>
        <div className="FormContainer">
          <form onSubmit={applyToTrip} className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Escolha uma viagem abaixo</InputLabel>
            <Select className={classes.selectEmpty}
              onChange={setTripId}>
              <option value="" disabled>Escolha uma viagem</option>
              {allTrips && tripsOptions()}
            </Select>
            <TextField id="standard-search" label="Nome" type="search"
              placeholder="Nome"
              type="text"
              value={name}
              onChange={setName}
              required
            />
            <TextField
              id="filled-number"
              label="Idade"
              type="number"
              placeholder="Idade"
              type="number"
              value={age}
              onChange={setAge}
              required
            />
            <TextField
              id="standard-search" label="Descrição" type="search"
              defaultValue="Default Value"
              helperText="Por que sou um bom candidato(a)?"
              type="text"
              value={applicationText}
              onChange={setApplicationText}
              required
            />
            <TextField
              id="standard-search"
              type="search"
              label="Profissão"
              defaultValue="Default Value"
              placeholder="Profissão"
              type="text"
              value={profession}
              onChange={setProfession}
              required
            />
            <InputLabel htmlFor="age-native-simple">Selecione o País abaixo</InputLabel>
            <Select onChange={setCountry}
              className={classes.selectEmpty}
              required>
              <option value="">Selecione o País</option>
              {countries && countriesOptions()}
            </Select>


            <Button variant="contained" color="primary">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AplicationFormPage;