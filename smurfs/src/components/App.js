import React, { useState, useReducer, useEffect } from "react";
import axios from 'axios';

import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts/SmurfContext';
import { reducer } from '../reducers/smurfReducer';
import { initialSmurfs } from '../data';

import "./App.css";

const App = () => {
  const [loader, setLoader] = useState([]);

  const getSmurfs = () => {
    return axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log("res in axios: ", res.data)
        setLoader(res.data)})
  }

  useEffect(() => {
    getSmurfs();
  }, []);

  console.log("loader: ", loader);

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
