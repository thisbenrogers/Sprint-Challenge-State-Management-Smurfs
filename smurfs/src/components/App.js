import React, { useReducer } from "react";
import axios from 'axios';

import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts/SmurfContext';
import { reducer } from './reducers/smurfReducer';

import "./App.css";

const App = () => {
  let initialSmurfs = [];
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      initialSmurfs = [...res.data];
    })

    const [smurfState, dispatch] = useReducer(reducer, initialSmurfs);

    return (
      <SmurfContext.Provider value={{ smurfState, dispatch }}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Context and useReducer</h1>
          <SmurfList />
        </div>
      </SmurfContext.Provider>
    );
}

export default App;
