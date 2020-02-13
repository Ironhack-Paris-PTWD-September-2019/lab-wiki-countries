import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Navbar from "./components/Navbar";
import countries from "./countries.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {countries.map(country => {
                  return (
                    <Link
                      key={country.cca3}
                      className="list-group-item list-group-item-action"
                      to={`/${country.cca3}`}
                    >
                      {country.flag + " " + country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/:id"
                render={props => {
                  const id = props.match.params.id;
                  const country = countries.find(
                    country => country.cca3 === id
                  );
                  console.log(country);
                  return <CountryDetail {...country} />;
                }}
              />
              ;
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
