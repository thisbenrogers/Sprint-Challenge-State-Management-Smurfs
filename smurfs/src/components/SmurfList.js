import React, { useContext } from 'react';

import Smurf from './Smurf';
import AddSmurf from './AddSmurfForm';

import { SmurfContext } from '../contexts/SmurfContext';

const SmurfList = () => {
    const { smurfState, dispatch } = useContext(SmurfContext);
    
    return (
        <>
            {smurfState.map((smurf, index) => {
                return <Smurf key={index} props={smurf} dispatch={dispatch} />
            })}
            <AddSmurf />
        </>
    )
}

export default SmurfList;