import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import json from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './CountryDetails';

class App extends Component {

  render() {
    return (
      <div className="App">

      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <Link to="/" class="navbar-brand">WikiCountries</Link>
        </div>
      </nav>

      <div class="container" >
        <div class="row">
          <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div class="list-group">
            
              {json.map(country => (
                <Link to={ `/${country.cca3}`}  key={country.cca3} class="list-group-item list-group-item-action" >
                  <div>{country.flag} {country.name.common}</div>
                </Link>
              ))}
            
            </div>
          </div>
          <div class="col-7">
          <Switch >
            <Route path="/:id" component={CountryDetails} />
          </Switch>
          </div>
        </div>  
      </div>

      
      
      </div>
    );
  }
}

export default App;


