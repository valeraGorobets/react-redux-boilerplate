import React, { Component } from 'react';
import City from './../../Components/City';
import './styles.css';

export default class CityList extends Component {
  constructor(){
    super();
    this.state = {
      availableCities: ['Minsk', 'London', 'Moscow']
    }
  }
  
  render() {
    return ( 
      <div>
        {this.state.availableCities.map((city) => {
          return <City city={city} key={city}/>
        })}
      </div>
    );
  }
}