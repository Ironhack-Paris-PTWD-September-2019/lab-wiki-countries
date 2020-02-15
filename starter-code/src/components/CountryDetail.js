//receive the country code (cca3) in the URL.

import React from "react";
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetail = (props) => {


  return (
    <div className="col-7">
      <h1>{props.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{props.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{props.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li key={props.border.cca3}><Link key={props.border.cca3} to={`/${props.border.cca3}`}>{props.border.name.common}</Link></li>  
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
