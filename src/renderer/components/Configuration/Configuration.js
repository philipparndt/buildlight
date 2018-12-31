import React, { Component } from 'react';
import ServerConfiguration from './ServerConfiguration'
import AddServer from './AddServer';
import { Button } from 'react-bulma-components';

import './Configuration.css';

class Configuration extends Component {
    state = {
        addServer: false,
        servers: [
            {
                url: 'http://jenkins.example.com',
                jobs: [
                    'joba', 'jobb'
                ]
            },
            {
                url: 'http://jenkins.some.server',
                jobs: []
            }
        ]
    }

    cancelAddServerHandler = () => {
        this.setState({addServer: false});
    }

    openAddServerHandler = () => {
        this.setState({addServer: true});
    }

    convertServerConfigToJSX(serverConfig) {
        return <ServerConfiguration key={serverConfig.url} url={serverConfig.url} jobs={serverConfig.jobs}/>
    }

    render() {
        if (!this.props.visible) {
            return null;
        }
        else {
            const servers = this.state.servers.map(this.convertServerConfigToJSX);

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

                    <Button color="primary" onClick={this.openAddServerHandler}>Add server</Button>
                    <br/><br/>

                    {servers}
            </div>
            );
        }
    }
}

export default Configuration;