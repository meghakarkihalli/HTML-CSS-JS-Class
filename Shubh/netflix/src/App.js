import React, { Component } from 'react'
import './App.css';

import Video from "./Video"
// import data from "./data"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      myList: [],
      rec: []
    }
  }
  
  componentDidMount() {
    fetch('./data.json')
      .then((response) => response.json()).then((data) => this.setState({ myList: data.mylist, rec: data.recommendations }))
  }

  addToRec = (index) => {
    const { myList, rec } = this.state
    let tempMyList = myList
    let tempRec = rec
    tempRec.push(tempMyList[index])
    tempMyList.splice(index, 1)
    this.setState({
      myList: tempMyList,
      rec: tempRec,
    })
  }

  removeFromRec = (index) => {
    const { myList, rec } = this.state
    let tempMyList = myList
    let tempRec = rec
    tempMyList.push(tempRec[index])
    tempRec.splice(index, 1)
    this.setState({
      myList: tempMyList,
      rec: tempRec,
    })
  }

  render() {
      const {
          myList =[],
          rec =[]
      } = this.state
    return(
      <div className = "App" >
        <h1>Netflix</h1>
        <h2>My List</h2>
        <div className="display">
          {myList.map((elements, index) => (<Video {...elements} addToRec = {() => this.addToRec(index)} add/>))}
        </div>
        <h2>Recommendations</h2>
        <div className="display">
          {rec.map((elements, index) => (<Video {...elements} removeFromRec = {() => this.removeFromRec(index)} remove />))}
        </div>

      </div>
    )
  }
}

export default App



