import React from 'react'
import './Checkbox.css';

export default (props) => {
    var opts = {};
    if (props.checked) {
        opts['checked'] = 'checked';
    }

    return (
        <label className="checkbox-container">{props.label}
            <input type="checkbox" {...opts}/>
            <span className="checkbox-checkmark"/>
        </label>
    )
};