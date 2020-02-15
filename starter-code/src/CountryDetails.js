import React, { Component } from 'react';
import json from './countries.json';

const CountryDetails = (props) => {
    console.log(props);
    const { params } = props.match;
    const getCountry = (name) => {
        return json.find(country => country.name.common === name)
      };
    const countryDisplayed = getCountry(props.match.params.name);

     return (
        <div className="details">
            <h1>{countryDisplayed.name.common}</h1>
            <div className="row">
                <h2>Capital </h2>
                <p>{countryDisplayed.capital}</p>
            </div>
            <div className="row">
                <h2>Area </h2>
                <p>{countryDisplayed.area}</p>
            </div>
            <div className="row">
                <h2>Borders</h2>
                <ul>
                    {
                        countryDisplayed.borders.map(
                            (border, index) => {
                            return(
                            <li key={index}>
                                {border}
                            </li>
                            )}
                        )
                    }
                </ul>
            </div>
        
            
        </div>
      );
}



export default CountryDetails;