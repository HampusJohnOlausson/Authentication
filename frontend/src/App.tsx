import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Login" component={Login}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
