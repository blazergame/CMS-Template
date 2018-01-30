import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import UpdateForm from './Containers/UpdateForm.js';
import InitialForm from './Containers/InitialForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={InitialForm} />
          <Route exact path='/update' component={UpdateForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
