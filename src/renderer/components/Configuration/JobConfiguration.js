import React from 'react';
import Checkbox from '../UI/Checkbox';

import './JobConfiguration.css';

var id = 0;

export default (props) => {
    var currentId = id++;

    return (
        <>
            <Checkbox label={props.name} checked={props.selected} onChange={() => console.log('on change')}/>
        </>
    )
};