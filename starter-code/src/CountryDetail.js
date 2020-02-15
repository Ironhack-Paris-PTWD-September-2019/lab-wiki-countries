// components/Home.js

import React from 'react';
import countriesList from './countries.json'
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {

  const getCountry = code => {
    return countriesList.find(country => country.cca3 === code)
  }
  const foundCountry = getCountry(props.match.params.code);

  return (
    <div className="col-7">
    <h1>{foundCountry.name.common}</h1>
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style={{width: 30}}>Capital</td>
          <td>{foundCountry.capital}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{foundCountry.area} km
            <sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              {foundCountry.borders.map((country)=>{
                const getCountry = code => {
                  return countriesList.find(country => country.cca3 === code)
                }
                const foundCountry = getCountry(country);
                return(
                <div>
                  <li><Link to={`/CountryDetail/${foundCountry.cca3}`}>{foundCountry.name.common}</Link></li>
                </div>
                )
              })}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default CountryDetail;