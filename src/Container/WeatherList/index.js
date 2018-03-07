import React, { Component } from 'react';
import Weather from './../../Components/Weather';
import requestWeather from './../../Services/YahooWeatherService';
import './styles.css';

export default class CityList extends Component {
  constructor(){
    super();
    this.state = {
      availableCities: ['Minsk', 'London', 'Moscow', 'New York']
    }
  }
    
  render() {
    return (
      <div>
        {this.state.availableCities.map((city, index) => {
          return <Weather data={requestWeather(city)} key = {index}/> 
        })
        }
      </div>
    );
  }
}