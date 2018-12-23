import React, { Component } from 'react';
import ServerConfiguration from './ServerConfiguration'

import './Configuration.css';

class Configuration extends Component {
    render() {
        if (!this.props.visible) {
            return null;
        }
        else {
            return (
            <div className="ConfigPage">
                    <article class="message">
                        <div class="message-header">
                            <p>Polling rate</p>
                        </div>
                        <div class="message-body">
                            <label>The polling rate in seconds</label>
                            <input type="text" value="300"/>
                        </div>
                    </article>

                    <ServerConfiguration/>
                    <ServerConfiguration/>
                    <ServerConfiguration/>
                    <ServerConfiguration/>
                    <ServerConfiguration/>
                    <ServerConfiguration/>
            </div>
            );
        }
    }
}

export default Configuration;