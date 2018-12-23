import React, { Component } from 'react';
import ModalCard from '../components/UI/ModalCard';
import Configuration from '../components/Configuration/Configuration';
import Buildjobs from '../components/Buildjobs/Buildjobs';
import './App.css';
import '../../../node_modules/bulma/css/bulma.css';

class App extends Component {
    
    state = {
        buildjobs: [
            {id: 0, name: "some build job with warning", detail: "2 tests failed", result: "warning"},
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
        const modalclassName = "modal" + (this.state.configVisible ? " is-active" : "");
/*
        <Configuration visible={this.state.configVisible} onHide={this.hideConfigHandler}/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
*/
        return <div className="column">
            <ModalCard 
                visible={this.state.configVisible} 
                onCancel={this.hideConfigHandler}
                title="Settings">
                <Configuration visible={this.state.configVisible}/>
            </ModalCard>

            <button onClick={this.showConfigHandler}>Show configuration</button>
            <button onClick={this.allJobsGreenHandler}>All jobs green</button>
            <Buildjobs jobs={this.state.buildjobs}/>
        </div>
    }
}

export default App;