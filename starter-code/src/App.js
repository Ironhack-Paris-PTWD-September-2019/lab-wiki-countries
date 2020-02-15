import React, { Component } from 'react';
import './App.css';
import { Link, NavLink, Switch, Route } from "react-router-dom";
import countries from "./countries.json";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div id="root">
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <Link to="/" className="navbar-brand">WikiCountries</Link>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                  <div className="list-group">
                  {
                    countries.map(country => {
                      return (
                        <NavLink to={country.cca3} key={country.cca3} className="list-group-item list-group-item-action" activeClassName="active">{country.flag} {country.name.common}</NavLink>
                      )
                    })
                  }
                  </div>
                </div>
                <div className="col-7">
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/:id" component={CountryDetail} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
