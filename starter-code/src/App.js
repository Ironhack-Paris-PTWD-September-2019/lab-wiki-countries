import React, { Component } from 'react';
import './App.css';

import countries from './countries.json'

import { Link, Switch, Route } from 'react-router-dom'
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>

                <div className="list-group">
                  {/* LISTE */}
                  {countries.map((country, id) => {
                    return (
                      <Link key={id} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
                        {country.name.common}
                      </Link>)
                  })}
                </div>
              </div>
              <Switch>
                <Route exact path="/:id" render={CountryDetail} />
              </Switch>

            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
