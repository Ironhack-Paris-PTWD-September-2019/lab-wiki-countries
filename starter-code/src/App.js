import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountryList from "./components/CountryList";

// import CountryDetails from './components/CountryDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={CountryList}/>
        </Switch>
      </div>
    )
  }
}

export default App;
