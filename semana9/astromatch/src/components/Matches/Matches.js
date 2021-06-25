import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


// ------- ESTILIZAÇÃO -------- // 

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 10px;

`

const CardWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 10px;
`

// ------- FUNCIONALIDADES -------- // 

const Matches = (props) => {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vitor-suzuki/matches")
      .then((res) => { setMatches(res.data.matches) })
      .catch((err) => { console.log(err) })
  }

  const renderMatches = () => {

    return matches.map((match) => {
      return (<div>
        <h5>{match.name}</h5>
      </div>)
    })
  }

  return (
    <CardContainer>
      <Card>
        <CardWrap>
          <Button varitan="outlined" onClick={() => props.changePage()}>Astromatch</Button>
          {renderMatches()}
        </CardWrap>
      </Card>
    </CardContainer>
  );
}

export default Matches;
