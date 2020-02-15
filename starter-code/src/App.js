import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import json from "./countries.json"
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail';


class App extends Component {
  state = {
    countries:json
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to='/' className="navbar-brand" >WikiCountries</Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
              {this.state.countries.map(country => (
                <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
              ))}
            </div>
          </div>
          <div className="col-7">

                    <Switch>
                      <Route exact path="/:cca" component={CountryDetail} />
                    </Switch>  
          </div>
        </div>
       </div>  

       
      </div>
    );
  }
}

export default App;
