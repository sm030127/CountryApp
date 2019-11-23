import React from 'react';
import {Link} from 'react-router-dom';
import '../css/CountryItem.css';

const CountryItem = ({country,onCountrySelect}) => {
    return(
    <div className="item country-item" onClick={()=>onCountrySelect(country)}>
        <div className="content">
        {/* <Link to={{
                      pathname: '/CountryDetails',
                      state: {
                      country:country
                    }
                    }}>{country.name}</Link> */}
                    {country.name}
        </div> 
    </div>);
}

export default CountryItem;