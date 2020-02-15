import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'


const myCountries = countries;

const Menu = () => {
  return (
    <nav className="nav-style">
      <ul>
      {myCountries.map((eachCountry, index) => {
        return (
          <div key={eachCountry.name.common}>
            <li><Link class="list-group-item list-group-item-action active" to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>
            <hr />
          </div>
        )
      })}
      </ul>
    </nav>
  )
}

export default Menu;
        

              