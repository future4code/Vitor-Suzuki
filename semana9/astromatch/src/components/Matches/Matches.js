import React, { useState, useEffect } from "react";
import axios from "axios"

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
                <h3>{match.name}</h3> <h5>{match.age}</h5>
              </div>)
    })
  }

  return (
    <div>
      <button onClick={() => props.changePage()}>Astromatch</button>
      {renderMatches()}
    </div>
  );
}

export default Matches;
