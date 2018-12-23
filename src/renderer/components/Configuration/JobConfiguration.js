import React from 'react';
import Checkbox from '../UI/Checkbox';

import './JobConfiguration.css';

var id = 0;

export default (props) => {
    var currentId = id++;

    return (
        <Checkbox label={"some job config" + currentId} checked={currentId % 3==0}/>
    )
};