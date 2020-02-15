import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';



class CountryDetail extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const { params } = this.props.match;
        function getCountry(id) {
            function byCca3(oneCountry) {
            return oneCountry.cca3 === id;
            }
            return countries.find(byCca3);
        }

        const foundCountry = getCountry(params.id);

      return (
        <div className="CountryDetail">
            {/* <h2>{foundCountry.name.common}</h2> */}
            <table>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>  
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>  
                        <td>{foundCountry.area}</td>

                    </tr>
                    <tr>
                        <td>Borders</td>

                        <td>
                            <ul>
                                {foundCountry.borders.map(border => {
                                    return (
                                        <li>
                                            <Link to={`/${getCountry(border).cca3}`}>
                                                {getCountry(border).name.common}
                                            </Link>
                                        </li>
                                    )
                                }) }
                                
                            </ul>
                        </td>
  
                    </tr>
                </tbody>
            </table>
            

        </div>
      );
    }
  }
  
  export default CountryDetail;

