import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { BASE_URL } from '../constants/urls';

const ListTripsPage = () => {
  const history = useHistory();
  
    return (
      <div className="App">
        <h1>List Trips</h1>
      </div>
    );
  }

export default ListTripsPage;