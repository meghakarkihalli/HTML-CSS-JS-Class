import React, { Component } from 'react'
import './App.css';


class App extends Component {

  state = {
    selectbutton: ""
  }

  handleBlue = () => {
    this.setState({
      selectbutton: 'blue'
    })
  }
  handleRed = () => {
    this.setState({
      selectbutton: 'red'
    })
  }


  render() {
    const { selectbutton } = this.state
    let divClass = 'blue'
    if (selectbutton === 'red') {
      divClass = 'red'
    }

    return (
      <div className={divClass}>
        <h1>User</h1>
        <p>Name: Bruce </p>
        <p>Age: 20</p>
        <p>Email: brucemail@brce.com</p>
        <button className='blue-button' onClick={this.handleBlue}>Blue Theme</button>
        <button className='red-button' onClick={this.handleRed}>Red Theme</button>
      </div>
    )
  }
}

export default App


