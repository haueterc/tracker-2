import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Private from './components/Private/Private';
import './App.css';

class App extends Component {
  render() {
    return (
      // HashRouter pays attention to what's in the url
      <HashRouter> 
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/private' component={Private}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
