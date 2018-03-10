import React, { Component } from 'react';
import AddCity from './../../Container/AddCity';
import CityList from './../../Container/CityList';
import WeatherList from './../../Container/WeatherList';
import './styles.css';

export default class Main extends Component {
  render() {
    return ( 
      <div className="container">
        <aside>
          <AddCity />
          <CityList />
        </aside>
        <section>
          <WeatherList />
        </section>
      </div>
    );
  }
}