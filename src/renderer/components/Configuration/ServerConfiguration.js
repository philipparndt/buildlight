import React, { Component } from 'react'
import Checkbox from '../UI/Checkbox';

import { Container, Box } from 'bloomer'

import './ServerConfiguration.css';

class ServerConfiguration extends Component {

    state = {
        jobs: [],
        loaded: false
    }

    componentDidMount = () => {
        if (this.state.loaded) {
            return;
        }

        console.log("componentDidMount");
        
        setTimeout(() => {
            this.setState({
                loaded: true,
                jobs: ['joba', 'jobb', 'jobc']
            })
            console.log("loaded");
        }, 2000);
    }

    render() {

        const jobs = this.state.jobs.map(job => {
            const selected = this.props.jobs.includes(job);

            return <Checkbox label={job} checked={selected} onChange={() => console.log(`toggle ${job}`)}/>;
        })

        return (
            <>
            <Container>
                <Box isColor='primary'>
                    <strong>{this.props.url}</strong>
                    {jobs}
                </Box>
            </Container>
            <br/>
            </>
        )
    }
}

export default ServerConfiguration;