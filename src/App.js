import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Form from './components/Form';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/start' component={Form} exact/> 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
