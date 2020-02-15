import React from "react";
import { Link } from 'react-router-dom'
import countries from "../countries.json"

const CountryDetail = (props) => {
    // console.log(props)

    // ID correspond à la route
    const getCountry = (cca3) => {
        return countries.find(country => country.cca3 === cca3)
    }

    const foundCountry = getCountry(props.match.params.id)
    // console.log("foundCountry", foundCountry)
    const { name, capital, area, borders } = foundCountry;

    return (
        <div className="CountryDetail">
            <div className="col-7">
                <h1>{name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{area} km
        <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borders.map(border => {
                                        const borderName = getCountry(border).name.common
                                        return (
                                            <li><Link to={`/${border}`}>{borderName}</Link></li>
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