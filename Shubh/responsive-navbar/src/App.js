import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Games from './Games';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/games' exact component={Games}></Route>
        <Route path='/contact' exact component={Contact}></Route>
      </Switch>
    </Router>
  )
}

export default App;
