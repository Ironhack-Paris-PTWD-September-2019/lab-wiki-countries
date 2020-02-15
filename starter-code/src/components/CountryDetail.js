import React from "react";
import countries from "../countries.json";
import { Link } from "react-router-dom";

const CountryDetail = (props) => {

    const getCountryDetails = (id) => {
        return countries.find(country => country.cca3 === id)
    }

    const foundCountry = getCountryDetails(props.match.params.id);

    const borderCountries = [];

    if(foundCountry.borders.length !== 0) {
        foundCountry.borders.forEach(country => {
            borderCountries.push(getCountryDetails(country))
        });
    }

    return (
        <React.Fragment>
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
                        {  borderCountries.map(country => <li key={`BC${country.cca3}`}><Link to={country.cca3}>{country.flag} {country.name.common}</Link></li>) }
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default CountryDetail;