import React from "react";
import { Link } from "react-router-dom";
import countries from "../countries.json";

const CountryDetails = props => {
  console.log(props);

  //
  // Fonction utilitaire retrouvant un projet en particulier (.find)
  //

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
            <td>
              {props.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {props.borders.length
                  ? props.borders.map(borderCountry => {
                      let border = countries.find(
                        country => country.cca3 === borderCountry
                      );

                      return (
                        <li key={border.cca3}>
                          <Link key={border.cca3} to={`/${border.cca3}`}>
                            {border.name.common}
                          </Link>
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
