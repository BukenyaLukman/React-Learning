import React from 'react';
import './App.css';
import { Component } from 'react';
import ParentComp from './Components/ParentComp';


class  App extends Component{
  render(){
    return(
      <div className="App">
        <ParentComp/>
      </div>
    )
  }
}

export default App;
