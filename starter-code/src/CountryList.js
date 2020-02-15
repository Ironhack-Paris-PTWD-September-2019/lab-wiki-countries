import React from 'react'; 
import json from './countries.json';
import {Link} from 'react-router-dom';

const CountryList = () => {
    
        return(
            <div>
                {json.map(country=>{
                    return(
                        <Link className="list" to ={`/${country.name.common}`} key={country.name.common}><h3>{country.flag}{country.name.common}</h3></Link>
                    )
                })}
            </div>
        )

}

export default CountryList; 