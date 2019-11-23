import React from 'react';
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';

import CountryHome from './CountryHome'
import CountryDetails from './CountryDetails';

class App extends React.Component{
    state = {countries:[],selectedCountry:{},compare:false,lastSelectedCountry:{}}
    
    onTermSubmit = async term =>{
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${term}`);
         this.setState({countries:response.data});
    }
    onCountrySelect = country => {
        this.setState({selectedCountry:country});
   }
   onCompare = () => {
    if(Object.keys(!(this.state.lastSelectedCountry).length === 0 && this.state.lastSelectedCountry.constructor === Object)){
        this.state.lastSelectedCountry = {};
    }
    this.setState({compare:!this.state.compare,lastSelectedCountry:this.state.selectedCountry})
   }
    render(){
        return(
            // <BrowserRouter>
            //     <Route path="/" exact
            //     render={(props) => <CountryHome {...props} onFormSubmit={this.onTermSubmit} countries ={this.state.countries} onCountrySelect={this.onCountrySelect}/>}
            //     />
            //     <Route path="/CountryDetails"
            //     render={(props) => <CountryDetails {...props} country={this.state.selectedCountry}/>}
            //     />
            // </BrowserRouter>
            <div>
            <CountryHome onFormSubmit={this.onTermSubmit} countries ={this.state.countries} onCountrySelect={this.onCountrySelect}/>
            <CountryDetails country={this.state.selectedCountry} lastSelectedCountry={this.state.lastSelectedCountry} compare={this.state.compare} onCompare={this.onCompare}/>
            </div>

        );
    }
}
export default App;



