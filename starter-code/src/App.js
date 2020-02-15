import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <CountryList/>
        <Switch>
          <Route path = '/:name' component={CountryDetails}/>
        </Switch>
      </div>
    );
  }
}
export default App;