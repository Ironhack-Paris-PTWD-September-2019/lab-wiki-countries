import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
var myCountries = countries;

const CountryDetail = (props) => {
  console.log(props);
  const getCountry = (id) => {
    return myCountries.find(country => country.cca3 === id)
  };
  const foundCountry = getCountry(props.match.params.cca3);
  console.log("salut");
  console.log(foundCountry);
  const borders = foundCountry.borders;
  const showborders = borders.map((eachCountry) => getCountry(eachCountry));
  console.log(showborders);
  return(
    <div>
<div className="col-7">
  <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td class="unpeumoinsmoche">Capital</td>
                  <td class="unpeumoinsmoche">{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td class="unpeumoinsmoche">Area</td>
                  <td class="unpeumoinsmoche">{foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td class="unpeumoinsmoche">Borders</td>
                  <td>
                    <ul>
                    {showborders.map((eachCountry, index) => {
        return (
          <div key={eachCountry.name.common}>
            <li><Link class="list-group-item list-group-item-action active" to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>
            <hr />
          </div>
        )
      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</div>


  )
}

export default CountryDetail;