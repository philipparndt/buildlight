import React, { Component } from 'react';
import ConfigurationPage from '../components/Configuration/ConfigurationPage';
import Buildjobs from '../components/Buildjobs/Buildjobs';
import Navigation, {Pages} from './Navigation'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'

import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        buildjobs: [
            {id: 0, name: "some build job with warning", detail: "2 tests failed", result: "warning"},
            {id: 1, name: "another build job", result: "ok"},
            {id: 2, name: "a failing job", detail: "some error message", result: "error"},
            {id: 3, name: "a failing job", detail: "some error message", result: "error"},
            {id: 4, name: "a failing job", detail: "some error message", result: "error"},
            {id: 5, name: "a failing job", detail: "some error message", result: "error"},
            {id: 6, name: "a failing job", detail: "some error message", result: "error"},
        ]
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

    createMainPage = () => {
        return <div className="column">
            <Buildjobs jobs={this.state.buildjobs}/>
            <button onClick={this.allJobsGreenHandler}>Mark all jobs as green</button>
        </div>
    }
    
    createSettingsPage = () => {
        return <ConfigurationPage/>
    }

    render() {
        return <BrowserRouter>
            <>
                <Navigation />
                <Route path="/" exact render={() => this.createMainPage()}/>
                <Route path="/settings" exact render={() => this.createSettingsPage()}/>
            </>
        </BrowserRouter>
    }
}

export default App;