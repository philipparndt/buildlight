import React, { Component } from 'react';
import ServerConfiguration from './ServerConfiguration'
import AddServer from './AddServer';

import './Configuration.css';

class Configuration extends Component {
    state = {
        addServer: false
    }

    cancelAddServerHandler = () => {
        this.setState({addServer: false});
    }

    openAddServerHandler = () => {
        this.setState({addServer: true});
    }

    render() {
        if (!this.props.visible) {
            return null;
        }
        else {
            return (
            <div className="ConfigPage">
                    <AddServer visible={this.state.addServer} onCancel={this.cancelAddServerHandler}/>

                    <article className="message">
                        <div className="message-header">
                            <p>Polling rate</p>
                        </div>
                        <div className="message-body">
                            <label>The polling rate in seconds</label>
                            <input type="text" value="300"/>
                        </div>
                    </article>

                    <button className="button is-success" onClick={this.openAddServerHandler}>Add server</button>
                    <br/><br/>

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