import React from 'react';

const CountryDetailItem = ({country}) => {
    let imgurl = `https://www.countryflags.io/${country.alpha2Code}/flat/64.png`;
    return(
        <div>
        <div className="country-details-header">Country Details</div>
        <div className="country name">
            <span className="label">Country Name:</span>
            <span className="vlaue">{country.name}</span>
        </div>
        <div className="country capital">
            <span className="label">Capital:</span>
            <span className="vlaue">{country.capital}</span>
        </div>
        <div className="country population">
            <span className="label">Population:</span>
            <span className="vlaue">{country.population}</span>
        </div>
        <div className="country region">
            <span className="label">Region:</span>
            <span className="vlaue">{country.region}</span>
        </div>
        <div className="country area">
            <span className="label">Area:</span>
            <span className="vlaue">{country.area} sq km</span>
        </div>
        <div className="country time-zone">
            <span className="label">Time Zone:</span>
            <span className="vlaue">{country.timezones}</span>
        </div>
        <div className="country flag"><img src={imgurl}/></div>
        </div>
    );
}

export default CountryDetailItem;