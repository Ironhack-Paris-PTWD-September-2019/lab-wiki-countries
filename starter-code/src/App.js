import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import json from './countries.json';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './CountryDetail';

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
              <div class="list-group-item list-group-item-action">
                <Link to={ `/${country.cca3}`}  key={country.cca3}>
                  {/* <div>{country.flag}</div> */}
                  <h2>{country.name.common}</h2></Link>
              </div>
            ))}

            
            </div>
          </div>
          <div class="col-7">
          <Switch >
            <Route path="/:cca3" component={CountryDetail} />
          </Switch>
          </div>
        </div>  
      </div>

      
      
      </div>
    );
  }
}

export default App;


