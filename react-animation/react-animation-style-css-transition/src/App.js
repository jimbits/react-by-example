import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navigation from './pages/Nav';
 import Pages from './pages/Pages'
import SideNav from './pages/SideNav';
 

class App extends  Component {
    state={
      switch:true,
      
    }

  handleClick=(e)=>{
    this.setState({
      switch: !this.state.switch,

    })
    console.log("handle click")
 
  }
  render() {
      return (
     <Router>
      <div>
      <div className="site-nav">
      <Navigation/>
      </div>
        <div className="page-header">
        <SideNav>
          woop
        </SideNav>
        <Pages onClick={this.handleClick} switch={this.state.switch}/> 
        </div>
      </div> 
     </Router>
       
      
   
    );
  }
}

export default App;
