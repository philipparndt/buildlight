import React, { Component } from 'react';
import ServerConfiguration from './ServerConfiguration'
import AddServer from './AddServer';
import { Container, Box, Button, Field, Label, Control, Input, Help } from 'bloomer'

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
/*
    disableJob(jobName) {
        const jobs = [...this.state.jobs];
        const indexOf = jobs.indexOf(jobName);
        if (indexOf > -1) {
            jobs.splice(indexOf, 1);
        }

        this.setState({jobs: jobs}); 
    }

    enableJob(jobName) {
        const jobs = [...this.state.jobs];
        jobs.push(jobName);

        this.setState({jobs: jobs}); 
    }
*/

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

                    <Container>
                        <Box>
                            <Field>
                                <Label>Polling rate</Label>
                                <Control>
                                    <Input type="text" placeholder='Polling rate in seconds' value='300' />
                                </Control>
                                <Help isColor='info'>Polling rate in seconds</Help>
                            </Field>
                        </Box>
                    </Container>

                    <br/>

                    <Button isColor='primary' onClick={this.openAddServerHandler}>Add server</Button>
                    <br/><br/>

                    {servers}
            </div>
            );
        }
    }
}

export default Configuration;