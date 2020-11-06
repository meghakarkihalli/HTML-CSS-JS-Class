import React, {component} from 'react';
import './App.css';
import DropdownNav from './Components/DropdownNav'


class App extends React.Component {
  openNav=()=> {
    
  }
  
  render() {
    return (
      <div className="App">
      <DropdownNav></DropdownNav>
      </div>
    );
  }
 
}

export default App;
