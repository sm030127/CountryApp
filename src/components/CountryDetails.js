import React from 'react'

import '../css/CountryDetails.css';
import CountryDetailItem from './CountryDetailItem'

const CountryDetails = ({country,compare,lastSelectedCountry,onCompare}) => {
    let compareText = compare===true? 'Remove Compare' : 'Compare';
    if(country.name&&!compare){
        console.log('inside no compare');
    return(
        <div className="ui container country-container">
        <div className="ui grid">
        <div className="ui row">
            <div className="country-info eight column wide">
            <CountryDetailItem country ={country}/>
            </div>
        </div>
        </div>
        <button class="ui button primary" onClick={()=>onCompare()}>{compareText}</button>
        </div>
        
    );
    }
    if(country.name&&compare){
        console.log('inside compare');
        return(
        <div className="ui container country-details-container">
        <div className="ui grid">
        <div className="ui row">
            <div className="eight wide column"><CountryDetailItem country ={country}/></div>
            <div className="eight wide column"><CountryDetailItem country ={lastSelectedCountry}/></div>
        </div>
        </div>
        <button class="ui button primary" onClick={()=>onCompare()}>{compareText}</button>
        </div>);
    }
    else{
        return (
            <div className="ui container country-details-container">
            <div className="ui grid">
            <div className="ui row"> 
                <div className="eight column wide">
                    <div className="country-details-header">Please Select a Country to continue</div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default CountryDetails;