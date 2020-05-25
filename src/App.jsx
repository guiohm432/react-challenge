import React from 'react';
import Nav from "./component/Nav"
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Home from "./pages/Home"
import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
