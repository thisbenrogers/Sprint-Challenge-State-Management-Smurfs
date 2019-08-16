import React from 'react';

import Smurf from './Smurf';
import AddSmurf from './AddSmurfForm';

const SmurfList = () => {
    return (
        <>
            <h3>Smurf List</h3>
            <Smurf />
            <AddSmurf />
        </>
    )
}

export default SmurfList;