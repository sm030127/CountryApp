import React from 'react';

import Searchbar from './Searchbar';
import CountryList from './CountryList';
import '../css/CountryHome.css';


const CountryHome = ({onFormSubmit,countries,onCountrySelect}) => {
    return(
        <div className="ui container country-container">
            <div className="app-haeder">Country App</div>
            <Searchbar onFormSubmit = {onFormSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eight wide column">
                    <div className="ten wide column"><CountryList countries = {countries} onCountrySelect={onCountrySelect}/></div>
                    </div>
                </div>
            </div>  
        </div>
    );
} 

export default CountryHome;
