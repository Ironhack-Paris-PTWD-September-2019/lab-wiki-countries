import React, { Component } from 'react';
import './App.css';

import Countries from './countries.json';
import CountryDetail from './components/CountryDetail.js';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5" style={{ height: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {Countries.map((eachCountry, index) => {
                  return (
                    <Link key={eachCountry.cca3} to={`/${eachCountry.cca3}`} className="list-group-item list-group-item-action">{eachCountry.flag}{eachCountry.name.common}</Link>
                  )
                })}
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/:id" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
