import React, { Component } from "react";
import json from './countries.json';
import { Link } from 'react-router-dom';


const CountryDetail = (props) => {

  console.log(props)

  const getCountry = (id) => {
    return json.find(country => country.cca3 === id)
  };
  
  const foundCountry = getCountry(props.match.params.cca3);

  // const getBorderCountry = (id) => {
  //   return json.find(country => country.border === id)
  // }


  
  return (
   
      <div className="CountryDetail">

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
                    {/* faire map pour trouver pays borders */}
                    {json.map(countryBorder => (
                      <li>
                        <Link to="/:idCountry">{countryBorder.borders}</Link>
                      </li>      
                    ))}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>


  );
}

export default CountryDetail;




