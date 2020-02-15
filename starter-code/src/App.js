import React, { Component } from 'react';
import './App.css';
import countriesList from './countries.json'
import CountryDetail from './CountryDetail'
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    countries : countriesList
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
        {this.state.countries.map((country)=> {
          return(
            <div className="col-5" style={{maxHeight: 90}}>
            <div className="list-group">
              <Link to={`/CountryDetail/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag}  {country.name.common}</Link>
            </div>
          </div>
          )
        })}
         <Switch>
           <Route exact path='/CountryDetail/:code' component={CountryDetail}/>
         </Switch>
      </div>
    );
  }
}
export default App;
