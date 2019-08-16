import React from "react";
import axios from 'axios';

import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts/SmurfContext';

import "./App.css";

const App = () => {
  let smurfs = [];
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      smurfs = [...res.data];
      console.log("smurfs in axios: ", smurfs);
    })


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Context and useReducer</h1>
        <SmurfList />
      </div>
    );
}

export default App;
