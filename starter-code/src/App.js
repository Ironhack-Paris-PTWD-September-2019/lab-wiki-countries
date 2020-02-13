import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import CountryDetail from './components/CountryDetail.js';
import EmptyHome from './components/EmptyHome.js'
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link to="/" className="navbar-brand">WikiCountries</Link>
          </div>
        </nav>
        
        <div className="container">
          <div className="row">
          <div className="col-5" style={{maxHeight:'90vh', overflow:"scroll"}}>
          <div className="list-group">
            {countries.map(country => {
              return(  
                <div className="list-group-item list-group-item-action" key={country.cca3}>
                    <Link to={`/CountryDetail/${country.cca3}`}>
                        {country.flag} 
                        {country.name.common}
                    </Link>
                </div>
              )
            })}
          </div>
          </div>
            <Switch>
              <Route exact path="/" component={EmptyHome}/>
              <Route exact path="/CountryDetail/:id" component={CountryDetail}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
