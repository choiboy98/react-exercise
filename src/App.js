import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  isNumeric = () => {
    var x = document.getElementById('initializeCounter').value
    if (!isNaN(parseFloat(x)) && isFinite(x)) {
      this.setState({ counter: x })
    } else {
      alert('Wrong input value')
      document.getElementById('initializeCounter').value = ''
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'clementine', 'dragonfruit', 'bl']}
        />
        <input
          type="text"
          id="initializeCounter"
          placeholder="change your initial count"
        />
        <button onClick={this.isNumeric}>Initialize Count</button>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    )
  }
}

export default App
