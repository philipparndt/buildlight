import React, { Component } from 'react';
import Buildjob from '../components/Buildjobs/Buildjob/Buildjob'
import './App.css';

class App extends Component {
    render() {
        return <>
            <Buildjob name = "some build job"/>
            <Buildjob name = "another build job"/>
        </>
    }
}

export default App;