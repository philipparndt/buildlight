import React, { Component } from 'react'
import JobConfiguration from './JobConfiguration'

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

            return <JobConfiguration key={job} name={job} selected={selected}/>
        })

        return (
            <article className="message">
                <div className="message-header">
                    <p>{this.props.url}</p>
                </div>
                <div className="message-body">
                    {jobs}
                </div>
            </article>
        )
    }
}

export default ServerConfiguration;