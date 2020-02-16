import React from 'react';
import json from './countries.json';
import { Link } from 'react-router-dom';


let CountryDetails = (props) => {

  let getCountry = (id) => {
    return json.find(country => country.cca3 === id)
  };
  
  let foundCountry = getCountry(props.match.params.id);

  // let countriesBorderName = foundCountry.borders.map(countryBorder => {
  //   console.log(getCountry(countryBorder).name.common)
  // });
    
  
  return (
    <div className="CountryDetails">

      <h1>{foundCountry.name.common}</h1>

      <table class="table">
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
                  { foundCountry.borders.map(countryBorder => (
                    <Link to={ `/${countryBorder}`} key={countryBorder}>
                      <li>{getCountry(countryBorder).name.common}</li>
                    </Link>    
                  ))}
                </ul>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;




