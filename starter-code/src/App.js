import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import { Route, Switch, Link } from "react-router-dom";
import countries from "./countries.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link to="/" className="navbar-brand">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {countries.map(country => {
                  return (
                    <div
                      className="list-group-item list-group-item-action"
                      key={country.cca3}
                    >
                      <Link to={`/${country.cca3}`}>
                        {country.flag}
                        {country.name.common}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="col-7">
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
