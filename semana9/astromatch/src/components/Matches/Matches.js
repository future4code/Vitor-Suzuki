import React, { useState, useEffect } from "react";
import axios from "axios"

const Matches = (props) => {
  return (
    <div>
        <button onClick={() => props.changePage()}>Astromatch</button> 
    </div>
  );
}

export default Matches;
