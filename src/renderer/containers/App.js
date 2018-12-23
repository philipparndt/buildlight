import React, { Component } from 'react';
import ConfigurationPage from '../components/Configuration/ConfigurationPage';
import Buildjobs from '../components/Buildjobs/Buildjobs';
import Navigation, {Pages, registerPage} from './Navigation'

import './App.css';
import '../../../node_modules/bulma/css/bulma.css';

class App extends Component {

    constructor(props) {
        super(props)
        
        registerPage(Pages["Main"], this.createMainPage)
        registerPage(Pages["Settings"], this.createSettingsPage)
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
        ],
        currentPage: Pages['Main']
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

    setPageHandler = (page) => {
        this.setState({currentPage: page});
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
        return <Navigation 
            currentPage={this.state.currentPage} 
            pageChangedHandler={this.setPageHandler}/>
    }
}

export default App;