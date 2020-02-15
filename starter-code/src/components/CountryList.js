import React, { Component } from 'react';
import countries from '../countries.json';

class CountryList extends Component {
    render() {
      return (
        <div className="CountryList">
          {countries.map((eachCountry, index) => {
            return (
                <div>
                    <div>{eachCountry.flag} {eachCountry.name.common}</div>
                </div>
            )
          })}
        </div>
      )
    }
  }
  
  export default CountryList;