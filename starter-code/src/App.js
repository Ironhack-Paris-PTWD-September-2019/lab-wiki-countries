import React, { Component } from 'react';
import './App.css';
import countriesList from './countries.json'

class App extends Component {

  state = {
    countries : countriesList
  }
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
        {this.state.countries.map((country)=> {
          return(
            <div class="col-5" style={{maxHeight: 90}}>
            <div class="list-group">
          <a class="list-group-item list-group-item-action" href="/ABW">{country.flag}  {country.name.common}</a>
            </div>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
