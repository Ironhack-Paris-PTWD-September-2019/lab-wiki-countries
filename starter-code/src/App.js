import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries
            Bootstrap c'est trop 2019. Vous apprécierez l'esthétique de ce site dans le turfu.</a>
          </div>
          </nav>
          <div className="container">
          <div className="row">
          <div className="col-5">
            <div className="list-group">
            <Menu />  
            </div>
          </div>
          <Switch> {/* 👈 rend 1 seule des 2 routes */}
          <Route exact path='/'/>
          <Route exact path="/country/:cca3" component={CountryDetail} />
        </Switch>
          
        </div>
      </div>
    </div>
      </div>
      </header>
      </div>
    );
  }
}

export default App;
