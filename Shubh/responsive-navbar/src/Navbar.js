import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.png'
import './Navbar.css'

class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav>
            <div className='logoBtn'>
            <Link to='/' exact><img className="logo" src={logo} alt=""></img></Link>
      
              <div className='btn' onClick={this.handleClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
      
            <ul className= {this.state.isOpen && 'showNav'}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/games'>Games</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        )
    }
}

export default Navbar
