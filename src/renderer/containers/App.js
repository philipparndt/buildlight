import React, { Component } from 'react';
import Buildjobs from '../components/Buildjobs/Buildjobs'
import './App.css';

class App extends Component {
    
    state = {
        buildjobs: [
            {id: 0, name: "some build job", detail: "2 tests failed", result: "warning"},
            {id: 1, name: "another build job", result: "ok"},
            {id: 2, name: "a failing job", detail: "some error message", result: "error"},
        ]
    }
    
    render() {
        return <><Buildjobs jobs={this.state.buildjobs}/></>
    }
}

export default App;