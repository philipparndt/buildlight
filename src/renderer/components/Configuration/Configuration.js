import React, { Component } from 'react';

import './Configuration.css';

class Configuration extends Component {
    render() {
        if (!this.props.visible) {
            return null;
        }
        else {
            return <div class="ConfigPage">
                <div style={{margin:"10px"}}>
                    Config<br/><br/><br/>
                    <button onClick={this.props.onHide}>OK</button>
                </div>
            </div>;
        }
    }
}

export default Configuration;