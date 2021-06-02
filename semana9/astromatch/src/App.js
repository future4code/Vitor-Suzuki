import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import axios from "axios";

const App = () => {

  const [page, setPage] = useState("home")

  const changePage = () => {
    if (page === "home") {
      setPage("matches")
    } else if (page === "matches") {
      setPage("home")
    }
  }

  const renderPage = () => {
    if (page === "matches") {
      return <Matches changePage={changePage}/>
    } else if (page === "home") {
      return <Home changePage={changePage}/>
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
