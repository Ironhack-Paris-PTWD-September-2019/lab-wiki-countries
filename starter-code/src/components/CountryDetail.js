import React from 'react';

import Countries from '../countries.json';
import { Link } from 'react-router-dom';

const countryDetail = (props) => {  
  console.log(props.match.params.id);

  const countryDetails = Countries.find(el => el.cca3 === props.match.params.id)

  return (
    <div className="CountryDetail">
          <h1>{countryDetails.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{countryDetails.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryDetails.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {/* {country.borders.map((border, i) => <li key={i}><Link to={`/${border}`}>{border}</Link></li>)} */}
                    {/* {countryDetails.map((eachCountry, index) => {
                      return (
                        <li><Link to={`/${eachCountry.cca3}`} className="list-group-item list-group-item-action">{eachCountry.borders}</Link></li>
                      )
                    })} */}
                    <li><Link to={countryDetails.borders.cca3}>{countryDetails.borders}</Link></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
  );
}

export default countryDetail; 