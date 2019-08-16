import React, { useReducer, useEffect } from "react";
import axios from 'axios';

import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts/SmurfContext';
import { reducer } from '../reducers/smurfReducer';
import { initialSmurfs } from '../data';

import "./App.css";

const App = () => {
  
  const getSmurfs = () => {
    return axios.get('http://localhost:3333/smurfs')
      .then(res => (
        res.data
      ))
      .then(res => (
        res
      ))
  }

  const smurfs = getSmurfs();

  const [smurfState, dispatch] = useReducer(reducer, initialSmurfs);
  
    return (
      <>
        {/* {(smurfState === undefined || smurfState.length >= 0) ? (
          <h2>...Loading</h2>
        ) : ( */}
          <SmurfContext.Provider value={{ smurfState, dispatch }}>
            <div className="App">
              <h1>SMURFS! 2.0 W/ Context and useReducer</h1>
              <SmurfList />
            </div>
          </SmurfContext.Provider>
        {/* )} */}
     </>
    );
}

export default App;
