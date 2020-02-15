import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import json from "./countries.json"



const CountryDetail = (props) => {
    console.log(props)

    const getCountry = (cca) => {
        console.log("cca", cca)
        return json.find(country => country.cca3 === cca)
      };
      
    const foundCountry = getCountry(props.match.params.cca);

    
        return (
            <>
            
            
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:"30%"}}>Capital</td>
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
                    {foundCountry.borders.map(border => {
                        const borderCountry= json.find(borderCountry => borderCountry.cca3 === border)
                        
                        return (
                        
                        <li><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link></li>
                      )}
                      )}
                       
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          
  </>



        );
    
}


export default CountryDetail;
