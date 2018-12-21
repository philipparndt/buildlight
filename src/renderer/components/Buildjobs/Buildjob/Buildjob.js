import React from 'react'
import './Buildjob.css';

export default (props) => {
    return (
        <div className={`build ${props.result}`}>
            <p className="build-title">{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
};