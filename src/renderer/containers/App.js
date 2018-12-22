import React, { Component } from 'react';
import Configuration from '../components/Configuration/Configuration'
import Buildjobs from '../components/Buildjobs/Buildjobs'
import './App.css';
import { stat } from 'fs';

class App extends Component {
    
    state = {
        buildjobs: [
            {id: 0, name: "some build job", detail: "2 tests failed", result: "warning"},
            {id: 1, name: "another build job", result: "ok"},
            {id: 2, name: "a failing job", detail: "some error message", result: "error"},
        ],
        configVisible: false
    }
    
    allJobsGreenHandler = () => {
        const buildjobs =  [...this.state.buildjobs]
        .map(job => {
            return {...job};
        })
        .map(job => {
            job.result = "ok";
            return job;
        });
        this.setState({buildjobs});
    }

    hideConfigHandler = () => {
        this.setState({configVisible: false});
    };

    showConfigHandler = () => {
        this.setState({configVisible: true});
    };

    render() {
        return <>
            <Configuration visible={this.state.configVisible} onHide={this.hideConfigHandler}/>
            <button onClick={this.showConfigHandler}>Show configuration</button>
            <button onClick={this.allJobsGreenHandler}>All jobs green</button>
            <Buildjobs jobs={this.state.buildjobs}/>
        </>
    }
}

export default App;