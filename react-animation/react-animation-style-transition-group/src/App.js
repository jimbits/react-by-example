import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
 
 

class App extends  Component {
    state={
      login:false,
      create:true
    }

  handleClick=(a,e)=>{
    this.setState({
      login: !this.state.login,
    })
   
  }
  render() {
      return (
     <Router>
      <div>
        <LoginPage onClick={this.handleClick} login={this.state.login}/> 
      </div> 
     </Router>
       
      
   
    );
  }
}

export default App;
