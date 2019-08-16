import React, { useContext } from 'react';

import { SmurfContext } from '../contexts/SmurfContext';

const Smurf = (props) => {
    const { smurfState, dispatch } = useContext(SmurfContext);
    const { name, age, height, id } = props.props;

    return (
        <>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h4>{height}</h4>
            <button onClick={() => dispatch({ type: "DELETE_SMURF", payload: id })}>X</button>
        </>
    )
}

export default Smurf;