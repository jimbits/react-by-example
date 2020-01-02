import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
 
 
 
class App extends  Component {
    
 
  render() {
      return (
     <Router>
      <div>
        <LoginPage/>  
      </div> 
     </Router>
       

   
    );
  }
}

export default App;
