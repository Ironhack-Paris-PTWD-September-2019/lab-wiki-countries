import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';


const CountryDetail = (props) => {
  const foundCountry = countries.find (country => country.cca3===props.match.params.id)
  var borderedCountries = []
  foundCountry.borders.forEach(borderedCountryCca3 => {
    borderedCountries.push(countries.filter(country => country.cca3===borderedCountryCca3))})
  console.log('borderedCountries',borderedCountries)
  
  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
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
                      {borderedCountries.map(borderedCountry => {
                        return(
                          <div key={borderedCountry[0].cca3}>
                            <li><Link to={`/CountryDetail/${borderedCountry[0].cca3}`}>{borderedCountry[0].name.common}</Link></li>
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