import React from 'react';
import CountryItem from './CountryItem.js';

const CountryList = ({countries,onCountrySelect}) => {
    const renderList = countries.map(country=>{
        return <CountryItem key={country.name} country={country} onCountrySelect={onCountrySelect}/>
    });
    return <div className= "ui relaxed divided list">{renderList}</div>
}

export default CountryList;