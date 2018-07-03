import React, { Component } from 'react';
import Fan from './Components/Fan';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
        temp: 78,
        hotOrNot: false,
        isOn: false
      
    }
  }
  
    
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    
  }
  tick = () => {
    this.setState({
      
       temp: this.state.temp + Math.floor((Math.random() * 4) -1)     
      
    });
  }
  
  spinHandler(){
    
    if(this.state.isOn) {
      clearInterval(this.timer2);
    } else {
      this.timer2 = setInterval(this.tick2, 600)
    }
    this.setState({
      isOn: !this.state.isOn
    })
  }

  tick2 = () => {
    if (this.state.isOn) {
    this.setState({
      temp: this.state.temp -1
    });
  }
  }
  
  render() {
    return (
      <div className="App">
        <Fan temp={this.state.temp} />
        
          <div>on/off</div>
          <img onClick = {() => this.spinHandler()} 
          alt="logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" 
          className = {`App-logo  ${!this.state.isOn ? `pause` : ``}`} 
           />
        
      </div>
    );
  }
}

export default App;


