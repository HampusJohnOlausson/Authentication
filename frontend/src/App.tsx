import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Nav from './components/Nav';
import Login from './components/Login';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    (
        async () => {
            const response = await fetch('http://localhost:8000/api/user', {
            headers: {'Content-Type': 'Application/json'},
            credentials: 'include',
        });

        const content = await response.json();

        setName(content.name);
        }
    )();
});

  return (
    <BrowserRouter>
    
    <div className="App">
      <Nav name={name} setName={setName}/>
      <Switch>
        <Route exact path="/"  component={() => <Home name={name}/>} />
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Login" component={() => <Login setName={setName}/>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
