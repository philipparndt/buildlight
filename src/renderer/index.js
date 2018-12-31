import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import {BrowserRouter} from 'react-router-dom'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'bulma/css/bulma.min.css';
import './Index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
