import React, { Component } from 'react';
import Buildjob from '../components/Buildjobs/Buildjob/Buildjob'
import './App.css';

class App extends Component {
    render() {
        return <>
            <Buildjob name = "some build job" description="2 tests failed" result="warning"/>
            <Buildjob name = "another build job" result="ok"/>
            <Buildjob name = "a failing job" result="error"/>
        </>
    }
}

export default App;