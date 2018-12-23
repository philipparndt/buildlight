import React from 'react'
import JobConfiguration from './JobConfiguration'

import './ServerConfiguration.css';

export default (props) => {
    return (
        <article className="message">
            <div className="message-header">
                <p>http://jenkins.some.server</p>
            </div>
            <div className="message-body">
                <JobConfiguration/>
                <JobConfiguration/>
                <JobConfiguration/>
            </div>
        </article>
    )
};