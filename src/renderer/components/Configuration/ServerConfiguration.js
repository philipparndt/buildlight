import React from 'react'
import JobConfiguration from './JobConfiguration'

import './ServerConfiguration.css';

export default (props) => {
    return (
        <article class="message">
            <div class="message-header">
                <p>http://jenkins.some.server</p>
            </div>
            <div class="message-body">
                <JobConfiguration/>
                <JobConfiguration/>
                <JobConfiguration/>
            </div>
        </article>
    )
};