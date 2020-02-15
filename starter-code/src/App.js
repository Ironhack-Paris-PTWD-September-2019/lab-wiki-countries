import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json';
import NavBar from './Navbar';
import CountryDetail from './CountryDetail';
import {NavLink, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor (props) {
    super(props);
    this.state={
      countriesList: countries,
    }
  }

  render() {
    
     
    return (
      <div className="App">
        <NavBar />
        <div className='row'>
          <div className='col-5' >
            <div className='list-group'>
                {this.state.countriesList.map(country => {
                  return (
                    <NavLink
                     to= {`/${country.cca3}`}
                     key={country.cca3}
                     className='list-group-item list-group-item-action' >
                      {country.flag}
                      {country.name.common}
                    </NavLink>
                    
                  )
                }) }
            </div>
          </div>
          <div className='col-7' >
              <Switch >
                <Route 
                  exact path="/:id" 
                  component={CountryDetail}
                />

                
              </Switch>
          
          </div>
        </div>

       

        
      </div>
    );
  }
}

export default App;
