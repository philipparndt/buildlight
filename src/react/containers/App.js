import React from 'react'
import ReactDOM from 'react-dom'
import Buildjob from '../components/Buildjob/Buildjob'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Buildlight App</h1>
        <Buildjob name="A"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
