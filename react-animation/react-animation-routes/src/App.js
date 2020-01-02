import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './pages/Nav';
import {Home, Emma, Shop, Docs, Login } from './pages/Pages'
import {CSSTransition, TransitionGroup} from "react-transition-group"

class App extends  Component {
  render() {

    console.log( )
    return (
     <Router>
      <div>
      <div className="site-nav">
      <Navigation/>
      </div>
        <div className="page-header">

        <Route render={({location})=>(
            <TransitionGroup>
            <CSSTransition key={location.key}  timeout={450} classNames="fade">
            <Switch location={location}>
              <Route exact path="/" component={()=><Home/>}/>
              <Route exact path="/shop" component={()=><Shop/>}/>
             <Route exact path="/docs" component={()=><Docs/>}/>
              <Route exact path="/cats" component={()=><Emma/>}/>
              <Route exact path="/login" component={()=><Login/>}/>  
            </Switch>
            </CSSTransition>
            </TransitionGroup>
        )}/>
       
         
        
    


        {/* <TransitionGroup>
            <CSSTransition   timeout={300} classNames="fade">
            <Switch>
              <Route exact path="/" component={()=><Home/>}/>
              <Route exact path="/shop" component={()=><Shop/>}/>
              <Route exact path="/docs" component={()=><Docs/>}/>
              <Route exact path="/cats" component={()=><Emma/>}/>
              <Route exact path="/login" component={()=><Login/>}/>
            </Switch>
            </CSSTransition>
            </TransitionGroup> */}
        </div>
      </div> 
     </Router>
       
      
   
    );
  }
}

export default App;
