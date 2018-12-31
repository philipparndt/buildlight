import React from 'react'
import './Checkbox.css';
import { Field, Label, Control } from 'bloomer'

var id = 0;

export default (props) => {
    var opts = {};
    if (props.checked) {
        opts['checked'] = 'checked';
    }

    const uid = "checkbox" + (id++);

    return (
        <Field>
            <Control>
                <div className="field">
                    <input className="is-checkradio" id={uid} type="checkbox" name={uid} {...opts} onChange={props.onChange}/>
                    <label htmlFor={uid}>{props.label}</label>
                </div>
            </Control>
        </Field>
    )
};