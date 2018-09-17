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

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'clementine', 'dragonfruit', 'bl']}
        />
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    )
  }
}

export default App
